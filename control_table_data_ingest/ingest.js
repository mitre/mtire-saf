const fs = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const inspec = require('inspecjs');
const parse = require('csv-parse/lib/sync');

const getAllControlsCanonized = () => {
  const frontier = inspec.nist.FULL_NIST_HIERARCHY;
  let allControls = [];
  while (frontier.length) {
    const { control, children } = frontier.pop();
    frontier.push(...children);
    allControls.push(control);
  }

  allControls = allControls.filter(x => x.sub_specifiers.length > 1);
  allControls = allControls.sort((a, b) => a.localCompare(b));
  console.log('all controls', allControls);

  const allControlsCanonized = [];
  for (const control of allControls) {
    const canonized = control.canonize({max_specifiers: 3, allow_letters: false, add_spaces: false});
    if (!allControlsCanonized.includes(canonized)) {
      allControlsCanonized.push(canonized);
    }
  }
  console.log('all controls canonized', allControlsCanonized);

  return allControlsCanonized;
}

const vmwareGitUrl = 'https://github.com/vmware/dod-compliance-and-automation.git';

const getGitHash = async (profile) => {
  console.log('git hash', profile.shortName);
  if (profile.link.startsWith('https://github.com/vmware')) {
    const { stdout, stderr } = await exec(`git ls-remote --symref ${vmwareGitUrl} HEAD | awk 'FNR == 2 {print $1}'`);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
    return stdout.trim();
  } else if (profile.longName.includes('Google')) {
    console.log('skipping google cause their repos aren\'t set up for inspec json nor do they generate validate profiles');
    return '0';
  } else if (profile.shortName === 'AWS S3' || profile.shortName === 'AWS RDS CIS') {
    console.log('skipping these two aws repos due to inspec issues');
    return '0';
  } else {
    const { stdout, stderr } = await exec(`git ls-remote --symref ${profile.link} HEAD | awk 'FNR == 2 {print $1}'`);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
    return stdout.trim();
  }
}

const downloadGitRepo = async (profile) => {
  if (profile.link.startsWith('https://github.com/vmware')) {
    try {
      const { stdout, stderr } = await exec(`[ ! -d "./vmware" ] && git clone --depth=1 ${vmwareGitUrl} "./vmware"`);
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
    } catch (error) {
      console.log('git error that we\'re just gonna ignore cause it\'s probably the "is this directory already here" conditional failing which is the point cause git clone fails on attempted overwrite', error);
    }
  } else {
    const { stdout, stderr } = await exec(`git clone --depth=1 ${profile.link} "${profile.shortName}"`);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  }
}

const generateProfileJson = async (profile) => {
  const maxBuffer = 1024 * 1024 * 100; // set max buffer to 100x default size - hopefully ~100MB is sufficient space
  let inspecStdout, inspecStderr;

  if (profile.link.startsWith('https://github.com/vmware')) {
    ({ stdout: inspecStdout, stderr: inspecStderr } = await exec(`inspec json --chef-license=accept-silent "./vmware/${profile.link.substr(profile.link.indexOf('vsphere')).concat(profile.link.includes('vcsa') ? '/wrapper' : '')}"`, { maxBuffer: maxBuffer }));
  } else {
    ({ stdout: inspecStdout, stderr: inspecStderr } = await exec(`inspec json --chef-license=accept-silent "./${profile.shortName}"`, { maxBuffer: maxBuffer }));
  }
  // console.log('stdout:', inspecStdout); // a very large amount of text
  console.log('stderr:', inspecStderr);

  return inspecStdout;
}

const getProfileControls = (allControls, profileText) => {
  const hdf = inspec.parse.convertFile(profileText);

  const profiles = hdf["1_0_ExecJson"] ? hdf["1_0_ExecJson"].profiles : [hdf["1_0_ProfileJson"]];

  const controls = [];
  for (const profile of profiles) {
    for (const control of profile.controls) {
      controls.push(inspec.hdfWrapControl(control));
    }
  }

  const nistTagHits = new Set();
  for (const control of controls) {
    for (const tag of control.parsed_nist_tags) {
      const canonized = tag.canonize({max_specifiers: 3, allow_letters: false, add_spaces: false});
      nistTagHits.add(canonized);
      if (!allControls.includes(canonized)) {
        throw 'Missed: ' + canonized + ' in ' + tag;
      }
    }
  }

  return [...nistTagHits];
}

const controlsType = 'NIST SP 800-53 Control';

(async () => {
  try {
    const allControls = getAllControlsCanonized();

    let { baselines, extras } = JSON.parse(await fs.readFile('./src/assets/data/baselines.json', 'utf8'));
    console.log(baselines);

    const allProfileControls = {};
    for (const profile of baselines) {
      let profileText = '';

      const hash = await getGitHash(profile);
      if (profile.gitHash && profile.gitHash === hash) {
        profileText = await fs.readFile(`./control_table_data_ingest/profiles${profile.link.substr(profile.link.lastIndexOf('/'))}.json`, 'utf8');
      } else {
        await downloadGitRepo(profile);

        try {
          profileText = await generateProfileJson(profile);
        } catch (error) {
          console.log('inspec error that we\'re just gonna ignore', error);
        }

        await fs.writeFile(`./control_table_data_ingest/profiles${profile.link.substr(profile.link.lastIndexOf('/'))}.json`, profileText, 'utf8');
        profile.gitHash = hash;
      }

      try {
        allProfileControls[profile.shortName] = getProfileControls(allControls, profileText);
        console.log('controls that the profile has', profile.shortName, allProfileControls[profile.shortName]);
      } catch (error) {
        console.log('inspecjs error that we\'re not gonna ignore', error);
        throw error;
      }
    }

    const allExtraControls = {};
    for (const extra of extras.csv) {
      let csv = '';

      const hash = await getGitHash(extra);
      if (extra.gitHash && extra.gitHash === hash) {
        csv = await fs.readFile(`./control_table_data_ingest/profiles${extra.link.substr(extra.link.lastIndexOf('/'))}.json`, 'utf8');
      } else {
        await downloadGitRepo(extra);

        csv = await fs.readFile(`./${extra.path}`, 'utf8');

        await fs.copyFile(`./${extra.path}`, `./control_table_data_ingest/profiles${extra.link.substr(extra.link.lastIndexOf('/'))}.json`);
        extra.gitHash = hash;
      }

      const asJson = parse(csv, { columns: true, skip_empty_lines: true });

      allExtraControls[extra.longName] = asJson.reduce((acc, row) => acc.includes(row[extra.column]) ? acc : acc.concat(row[extra.column]), []);
      console.log('controls that the extra thing has', extra.longName, allExtraControls[extra.longName]);
    }

    await fs.writeFile('./src/assets/data/baselines.json', JSON.stringify({baselines, extras}), 'utf8');
    console.log('overwrite baselines with new hashes');

    const controlMapping = [];
    for (const control of allControls) {
      const mappingProfile = {};
      for (const [profileName, profileControls] of Object.entries(allProfileControls)) {
        mappingProfile[profileName + ' InSpec Profile'] = profileControls.includes(control);
      }

      const mappingExtra = {};
      for (const [extraName, extraControls] of Object.entries(allExtraControls)) {
        mappingExtra[extraName] = extraControls.includes(control);
      }

      const all = Object.keys(mappingProfile).reduce((acc, key) => acc || mappingProfile[key], false) || Object.keys(mappingExtra).reduce((acc, key) => acc || mappingExtra[key], false);

      controlMapping.push({ [controlsType]: control, "ALL": all, ...mappingExtra, ...mappingProfile });
    }
    console.log('control mapping', controlMapping);

    await fs.writeFile('./src/assets/data/mitre-saf-control-mapping.json', JSON.stringify(controlMapping), 'utf8');
    console.log('hopefully we\'re in a success state now');
  } catch (error) {
    console.log('error', error);
  }
})();
