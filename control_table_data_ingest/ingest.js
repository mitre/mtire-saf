const fs = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async () => {
  try {
    const { baselines } = JSON.parse(await fs.readFile('./src/assets/data/baselines.json', 'utf8'));
    console.log(baselines);

    const profiles = {};

    for (const profile of baselines) {
      if (profile.link.startsWith('https://github.com/vmware')) {
        try {
          const { stdout: gitStdout, stderr: gitStderr } = await exec(`[ ! -d "./vmware" ] && git clone --depth=1 https://github.com/vmware/dod-compliance-and-automation.git "./vmware"`);
          console.log('stdout:', gitStdout);
          console.log('stderr:', gitStderr);
        } catch (error) {
          console.log('git error that we\'re just gonna ignore cause it\'s probably the "is this directory already here" conditional failing which is the point cause git clone fails on attempted overwrite', error);
        }
      } else {
        const { stdout: gitStdout, stderr: gitStderr } = await exec(`git clone --depth=1 ${profile.link} "${profile.shortName}"`);
        console.log('stdout:', gitStdout);
        console.log('stderr:', gitStderr);
      }

      try {
        const { stdout: inspecStdout, stderr: inspecStderr } = await exec(`inspec json --chef-license=accept-silent "./${profile.link.startsWith('https://github.com/vmware') ? "vmware/".concat(profile.link.substr(profile.link.indexOf('vsphere'))).concat(profile.link.includes('vcsa') ? '/wrapper' : '') : profile.shortName}"`, { maxBuffer: 1024 * 1024 * 100 }); // set max buffer to 100x default size - hopefully ~100MB is sufficient space
        // console.log('stdout:', inspecStdout); // a very large amount of text
        console.log('stderr:', inspecStderr);

        profiles[profile.shortName] = JSON.parse(inspecStdout);
      } catch (error) {
        console.log('inspec error that we\'re just gonna ignore', error);
      }
    }
  } catch (error) {
    console.log('error', error);
  }

  await fs.writeFile('./testing', 'yeeting my way to victory', 'utf8');
})();
