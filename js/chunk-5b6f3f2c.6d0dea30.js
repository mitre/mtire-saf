(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b6f3f2c"],{"4c19":function(e,t,n){"use strict";var a=n("4da8"),s=n.n(a);s.a},"4da8":function(e,t,n){},"77ec":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[n("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",lg:"10"}},[n("Header",[n("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Normalize")])])],1)],1),n("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",lg:"10"}},[n("normalizeInfo")],1)],1)],1)},s=[],i=n("262f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","pa-0":""}},e._l(e.normalize_data,(function(t,a){return n("div",{key:a},[n("p",{staticClass:"header"},[e._v(e._s(t.header))]),n("p",{staticClass:"ma-2"},[n("span",{domProps:{innerHTML:e._s(t.desc)}})]),t.bullets?n("ul",{staticClass:"ma-2"},e._l(t.bullets,(function(t,a){return n("li",{key:a},[t.link?n("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.main))]):n("div",[e._v(e._s(t.main))]),t.sub?n("ul",e._l(t.sub,(function(t,a){return n("li",{key:a},[e._v(e._s(t))])})),0):e._e()])})),0):e._e(),t.examples?n("div",e._l(t.examples,(function(t){return n("div",{key:t,staticClass:"ma-4"},[n("p",{staticClass:"subheader ma-0"},[e._v(e._s(t.title))]),n("p",[e._v(e._s(t.desc))]),n("prism",{attrs:{language:t.syntax}},[e._v(e._s(t.code))])],1)})),0):e._e(),t.footer?n("p",{staticClass:"ma-2"},[n("span",{domProps:{innerHTML:e._s(t.footer)}})]):e._e()])})),0)},o=[],l=n("a3bb"),u=n("8d51"),c=n.n(u),d={data:function(){return{normalize_data:l.normalize}},components:{Prism:c.a}},g=d,m=(n("4c19"),n("2877")),p=n("6544"),h=n.n(p),f=n("a523"),b=Object(m["a"])(g,r,o,!1,null,"31343b4a",null),y=b.exports;h()(b,{VContainer:f["a"]});var v={components:{Header:i["a"],normalizeInfo:y}},w=v,x=n("62ad"),k=n("0fd9"),_=Object(m["a"])(w,a,s,!1,null,null,null);t["default"]=_.exports;h()(_,{VCol:x["a"],VContainer:f["a"],VRow:k["a"]})},"8d51":function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var s=n("2b0e"),i=a(n("c197")),r=s.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(e,t){var n=t.slots,a=t.attrs,r=n&&n["default"]&&n["default"]()||[],o=e.code||r&&r.length?r[0].children:"",l=e.inline,u=e.language,c=i.languages[u],d="language-".concat(u);return function(){return l?s.h("code",{class:[d],innerHTML:i.highlight(o,c)}):s.h("pre",Object.assign({},a,{class:[a["class"],d]}),[s.h("code",Object.assign({},a,{class:[a["class"],d],innerHTML:i.highlight(o,c)}))])}}});e.exports=r},a3bb:function(e){e.exports=JSON.parse('{"normalize":[{"header":"Heimdall Data Format","desc":"One major barrier to security automation is having multiple security tools that do not use a common format for representing security data. MITRE SAF uses the Heimdall Data Format (HDF) as a common format to represent normalized security data. HDF files record vital security data about a completed validation test, such as the test code, description, attributes, and outcome. This allows for the aggregation and analysis of test results from a wide range of validation tools at once."},{"header":"HDF Core Elements","desc":"HDF uses a common alignment point of the core elements of testing results data so that we can transform multiple formats. The goal is to preserve metadata from unique testing formats as tags when translated into HDF. HDF requires the following core data elements to standardize the testing results data from various formats.","bullets":[{"main":"Test Title – High level overview of the test(s) goal"},{"main":"Test Description  – Details on the intent and possible impact"},{"main":"Test Audit, aka ‘check text’ – the validation actions we are asking of the end user"},{"main":"Test Remediation, aka ‘fix text’ – the remediation actions we are asking of the end user"},{"main":"NIST SP 800-53 Control Alignment(s) – the NIST SP 800-53 security control this test(s) relates to"},{"main":"Test Severity - The static default of the control categorization impact"},{"main":"Test Impact - The context-specific severity during testing"},{"main":"Other data tags specific to the source benchmark – other data elements that enhance the context of the test(s)","sub":["CIS - tags such as the level, version and scoring status of the CIS benchmark","DISA STIG - tags such as the DISA Common Correlation Index Identifier (CCI)"]},{"main":"Test Elements – the individual tests that make up the actions in the ‘Check Text’"}],"footer":"Properly created InSpec profiles naturally produce results in this format. To create HDF files using non-InSpec tool output, we provide Heimdall Tools."},{"header":"Heimdall Tools","desc":"MITRE created the <a href=\'https://heimdall-tools.mitre.org/\' target=\'_blank\'>Heimdall Tools</a> command line toolset to allow the conversion of output from widely used automated security testing tools into HDF. At present, Heimdall Tools can convert output from:","bullets":[{"main":"Sonarqube","link":"https://www.sonarqube.org/"},{"main":"Fortify","link":"https://www.microfocus.com/en-us/products/static-code-analysis-sast/overview"},{"main":"OWASP ZAP","link":"https://www.zaproxy.org/"},{"main":"Burp Suite","link":"https://portswigger.net/burp"},{"main":"Nessus","link":"https://www.tenable.com/products/nessus"},{"main":"Snyk","link":"https://snyk.io/"},{"main":"Nikto","link":"https://cirt.net/Nikto2"},{"main":"JFrog Xray","link":"https://jfrog.com/xray/"},{"main":"DbProtect","link":"https://www.trustwave.com/en-us/services/technology/dbprotect/"},{"main":"AWS Config","link":"https://aws.amazon.com/config/"}]},{"header":"InSpec Control Template Examples That Support Proper Generation of HDF Output","desc":"As we have developed HDF, we have found these common elements help structure well-written and complete security automation baselines. Below are some examples of InSpec control structures that align to the MITRE HDF format.","examples":[{"code":"control \'V-75443\' do\\n  title \\"The Ubuntu operating system must limit the number of concurrent\\nsessions to ten for all accounts and/or account types.\\"\\n  desc  \\"Ubuntu operating system management includes the ability to control the\\nnumber of users and user sessions that utilize an Ubuntu operating system.\\nLimiting the number of allowed users and sessions per user is helpful in\\nreducing the risks related to DoS attacks.\\n\\n    This requirement addresses concurrent sessions for information system\\naccounts and does not address concurrent sessions by single users via multiple\\nsystem accounts. The maximum number of concurrent sessions should be defined\\nbased upon mission needs and the operational environment for each system.\\n  \\"\\n  impact 0.3\\n  tag \\"gtitle\\": \'SRG-OS-000027-GPOS-00008\'\\n  tag \\"gid\\": \'V-75443\'\\n  tag \\"rid\\": \'SV-90123r2_rule\'\\n  tag \\"stig_id\\": \'UBTU-16-010070\'\\n  tag \\"fix_id\\": \'F-82071r1_fix\'\\n  tag \\"cci\\": [\'CCI-000054\']\\n  tag \\"nist\\": %w[AC-10 Rev_4]\\n  tag \\"false_negatives\\": nil\\n  tag \\"false_positives\\": nil\\n  tag \\"documentable\\": false\\n  tag \\"mitigations\\": nil\\n  tag \\"severity_override_guidance\\": false\\n  tag \\"potential_impacts\\": nil\\n  tag \\"third_party_tools\\": nil\\n  tag \\"mitigation_controls\\": nil\\n  tag \\"responsibility\\": nil\\n  tag \\"ia_controls\\": nil\\n  desc \'check\', \\"Verify that the Ubuntu operating system limits the number of\\nconcurrent sessions to \\\\\\"10\\\\\\" for all accounts and/or account types by running\\nthe following command:\\n\\n# grep maxlogins /etc/security/limits.conf\\n\\nThe result must contain the following line:\\n\\n* hard maxlogins 10\\n\\nIf the \\\\\\"maxlogins\\\\\\" item is missing or the value is not set to \\\\\\"10\\\\\\" or less,\\nor is commented out,  this is a finding.\\"\\n  desc \'fix\', \\"Configure the Ubuntu operating system to limit the number of\\nconcurrent sessions to ten for all accounts and/or account types.\\n\\nAdd the following line to the top of the /etc/security/limits.conf:\\n\\n* hard maxlogins 10\\"\\n\\n  describe limits_conf do\\n    its(\'*\') { should include [\'hard\', \'maxlogins\', input(\'maxlogins\').to_s] }\\n  end\\nend\\n","syntax":"markup","title":"STIG/SRG Template"},{"code":"# encoding: UTF-8\\n \\ncontrol \\"C-1.1.1.1\\" do\\n  title \\"Ensure mounting of cramfs filesystems is disabled\\"\\n  desc  \\"The `cramfs` filesystem type is a compressed read-only Linux\\n  filesystem embedded in small footprint systems. A `cramfs` image can be \\n  used without having to first decompress the image.\\"\\n \\n  desc  \\"rationale\\", \\"Removing support for unneeded filesystem types reduces\\n  the local attack surface of the server. If this filesystem type is not needed,\\n  disable it.\\"\\n  \\n  impact 0.7\\n  tag severity: \'high\'\\n  tag nist: [\\"CM-6\\"]\\n  tag cis_scored: true\\n  tag cis_version: 1.2.0\\n  tag cis_level: 3\\n  tag cis_controls: [\\"5.1\\"]\\n  tag cis_cdc_version: 7\\n  tag cis_rid: \\"1.1.1.1\\"\\n \\n  desc  \\"check\\", \\"Run the following commands and verify the output is as \\n  indicated:\\n \\n   # modprobe -n -v cramfs | grep -v mtd\\n   install /bin/true\\n   # lsmod | grep cramfs\\"\\n \\n  desc \\"fix\\", \\"Edit or create a file in the `/etc/modprobe.d/` directory ending in \\n  .conf\\n  Example: `vi /etc/modprobe.d/cramfs.conf`\\n  and add the following line:\\n  install cramfs /bin/true\\n  Run the following command to unload the `cramfs` module:\\n  # rmmod cramfs\\"\\n  \\n  describe kernel_module(\'cramfs\') do\\n   it { should_not be_loaded }\\n   it { should be_disabled }\\n   it { should be_blacklisted }\\n  end\\n \\nend\\n","syntax":"markup","title":"CIS Template"},{"code":{"platform":{"name":"ubuntu","release":"16.04"},"profiles":[{"name":"Canonical Ubuntu 16.04 LTS Security Technical Implementation Guide","version":"0.2.0","sha256":"b5d892ca3aeef2a34bbb1621ca1aa3837c056b41dc04f1ba39a522ee1b9ac31d","title":"Canonical Ubuntu 16.04 LTS Security Technical Implementation Guide","maintainer":"The Authors","summary":"This Security Technical Implementation Guide is published as a tool to improve the security of Department of Defense (DoD) information systems. The requirements are derived from the National Institute of Standards and Technology (NIST) 800-53 and related documents. Comments or proposed revisions to this document should be sent via email to the following address: disa.stig_spt@mail.mil.","license":"Apache-2.0","copyright":"The Authors","copyright_email":"you@example.com","supports":[{"platform-name":"ubuntu","release":"16.04"}],"attributes":[],"groups":[{"id":"controls/V-75443.rb","controls":["V-75443"]}],"controls":[{"id":"V-75443","title":"The Ubuntu operating system must limit the number of concurrent\\nsessions to ten for all accounts and/or account types.","desc":"Ubuntu operating system management includes the ability to control the\\nnumber of users and user sessions that utilize an Ubuntu operating system.\\nLimiting the number of allowed users and sessions per user is helpful in\\nreducing the risks related to DoS attacks.\\n\\n    This requirement addresses concurrent sessions for information system\\naccounts and does not address concurrent sessions by single users via multiple\\nsystem accounts. The maximum number of concurrent sessions should be defined\\nbased upon mission needs and the operational environment for each system.","descriptions":[{"label":"default","data":"Ubuntu operating system management includes the ability to control the\\nnumber of users and user sessions that utilize an Ubuntu operating system.\\nLimiting the number of allowed users and sessions per user is helpful in\\nreducing the risks related to DoS attacks.\\n\\n    This requirement addresses concurrent sessions for information system\\naccounts and does not address concurrent sessions by single users via multiple\\nsystem accounts. The maximum number of concurrent sessions should be defined\\nbased upon mission needs and the operational environment for each system."},{"label":"check","data":"Verify that the Ubuntu operating system limits the number of\\nconcurrent sessions to \\"10\\" for all accounts and/or account types by running\\nthe following command:\\n\\n# grep maxlogins /etc/security/limits.conf\\n\\nThe result must contain the following line:\\n\\n* hard maxlogins 10\\n\\nIf the \\"maxlogins\\" item is missing or the value is not set to \\"10\\" or less,\\nor is commented out,  this is a finding."},{"label":"fix","data":"Configure the Ubuntu operating system to limit the number of\\nconcurrent sessions to ten for all accounts and/or account types.\\n\\nAdd the following line to the top of the /etc/security/limits.conf:\\n\\n* hard maxlogins 10"}],"impact":0.3,"refs":[],"tags":{"gtitle":"SRG-OS-000027-GPOS-00008","gid":"V-75443","rid":"SV-90123r2_rule","stig_id":"UBTU-16-010070","fix_id":"F-82071r1_fix","cci":["CCI-000054"],"nist":["AC-10","Rev_4"],"false_negatives":null,"false_positives":null,"documentable":false,"mitigations":null,"severity_override_guidance":false,"potential_impacts":null,"third_party_tools":null,"mitigation_controls":null,"responsibility":null,"ia_controls":null},"code":"control \'V-75443\' do\\n  title \\"The Ubuntu operating system must limit the number of concurrent\\nsessions to ten for all accounts and/or account types.\\"\\n  desc  \\"Ubuntu operating system management includes the ability to control the\\nnumber of users and user sessions that utilize an Ubuntu operating system.\\nLimiting the number of allowed users and sessions per user is helpful in\\nreducing the risks related to DoS attacks.\\n\\n    This requirement addresses concurrent sessions for information system\\naccounts and does not address concurrent sessions by single users via multiple\\nsystem accounts. The maximum number of concurrent sessions should be defined\\nbased upon mission needs and the operational environment for each system.\\n  \\"\\n  impact 0.3\\n  tag \\"gtitle\\": \'SRG-OS-000027-GPOS-00008\'\\n  tag \\"gid\\": \'V-75443\'\\n  tag \\"rid\\": \'SV-90123r2_rule\'\\n  tag \\"stig_id\\": \'UBTU-16-010070\'\\n  tag \\"fix_id\\": \'F-82071r1_fix\'\\n  tag \\"cci\\": [\'CCI-000054\']\\n  tag \\"nist\\": %w[AC-10 Rev_4]\\n  tag \\"false_negatives\\": nil\\n  tag \\"false_positives\\": nil\\n  tag \\"documentable\\": false\\n  tag \\"mitigations\\": nil\\n  tag \\"severity_override_guidance\\": false\\n  tag \\"potential_impacts\\": nil\\n  tag \\"third_party_tools\\": nil\\n  tag \\"mitigation_controls\\": nil\\n  tag \\"responsibility\\": nil\\n  tag \\"ia_controls\\": nil\\n  desc \'check\', \\"Verify that the Ubuntu operating system limits the number of\\nconcurrent sessions to \\\\\\"10\\\\\\" for all accounts and/or account types by running\\nthe following command:\\n\\n# grep maxlogins /etc/security/limits.conf\\n\\nThe result must contain the following line:\\n\\n* hard maxlogins 10\\n\\nIf the \\\\\\"maxlogins\\\\\\" item is missing or the value is not set to \\\\\\"10\\\\\\" or less,\\nor is commented out,  this is a finding.\\"\\n  desc \'fix\', \\"Configure the Ubuntu operating system to limit the number of\\nconcurrent sessions to ten for all accounts and/or account types.\\n\\nAdd the following line to the top of the /etc/security/limits.conf:\\n\\n* hard maxlogins 10\\"\\n\\n  describe limits_conf do\\n    its(\'*\') { should include [\'hard\', \'maxlogins\', input(\'maxlogins\').to_s] }\\n  end\\nend\\n","source_location":{"line":3,"ref":"canonical-ubuntu-16.04-lts-stig-baseline-master/controls/V-75443.rb"},"waiver_data":{},"results":[{"status":"failed","code_desc":"limits.conf * is expected to include [\\"hard\\", \\"maxlogins\\", \\"10\\"]","run_time":0.000519,"start_time":"2020-05-14T17:47:39-04:00","message":"expected [[\\"hard\\", \\"core\\", \\"0\\"]] to include [\\"hard\\", \\"maxlogins\\", \\"10\\"]"}]}],"status":"loaded"}],"statistics":{"duration":23.865506},"version":"4.18.100"},"syntax":"javascript","title":"Example Simple HDF JSON","desc":"This HDF file can be generated by running the example STIG template InSpec test given above - note how the code of that test is captured in the \\"code\\" field in the HDF file. The format includes information on the platform a validation test ran on (\\"platform\\"), the test itself (\\"tags\\", \\"code\\"), and the test\'s results (\\"results\\")."}]}]}')},c197:function(e,t,n){(function(t){var n="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++n}),e["__id"]},clone:function e(t,n){var s,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var r in s={},n[i]=s,t)t.hasOwnProperty(r)&&(s[r]=e(t[r],n));return s;case"Array":return i=a.util.objId(t),n[i]?n[i]:(s=[],n[i]=s,t.forEach((function(t,a){s[a]=e(t,n)})),s);default:return t}},getLanguage:function(e){while(e&&!t.test(e.className))e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){var a="no-"+t;while(e){var s=e.classList;if(s.contains(t))return!0;if(s.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){s=s||a.languages;var i=s[e],r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(r[l]=n[l]);n.hasOwnProperty(o)||(r[o]=i[o])}var u=s[e];return s[e]=r,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=r)})),r},DFS:function e(t,n,s,i){i=i||{};var r=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],s||o);var l=t[o],u=a.util.type(l);"Object"!==u||i[r(l)]?"Array"!==u||i[r(l)]||(i[r(l)]=!0,e(l,n,o,i)):(i[r(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var s={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),a.hooks.run("before-all-elements-highlight",s);for(var i,r=0;i=s.elements[r++];)a.highlightElement(i,!0===t,s.callback)},highlightElement:function(n,s,i){var r=a.util.getLanguage(n),o=a.languages[r];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+r;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+r);var u=n.textContent,c={element:n,language:r,grammar:o,code:u};function d(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(i&&i.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var g=new Worker(a.filename);g.onmessage=function(e){d(e.data)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else d(a.highlight(c.code,c.grammar,c.language));else d(a.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),s.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var s=new o;return l(s,s.head,e),r(e,s,t,s.head,0),c(s)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,i=0;s=n[i++];)s(t)}},Token:s};function s(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var s=e.exec(n);if(s&&a&&s[1]){var i=s[1].length;s.index+=i,s[0]=s[0].slice(i)}return s}function r(e,t,n,o,c,d){for(var g in n)if(n.hasOwnProperty(g)&&n[g]){var m=n[g];m=Array.isArray(m)?m:[m];for(var p=0;p<m.length;++p){if(d&&d.cause==g+","+p)return;var h=m[p],f=h.inside,b=!!h.lookbehind,y=!!h.greedy,v=h.alias;if(y&&!h.pattern.global){var w=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,w+"g")}for(var x=h.pattern||h,k=o.next,_=c;k!==t.tail;_+=k.value.length,k=k.next){if(d&&_>=d.reach)break;var F=k.value;if(t.length>e.length)return;if(!(F instanceof s)){var A,S=1;if(y){if(A=i(x,_,e,b),!A)break;var T=A.index,C=A.index+A[0].length,I=_;I+=k.value.length;while(T>=I)k=k.next,I+=k.value.length;if(I-=k.value.length,_=I,k.value instanceof s)continue;for(var $=k;$!==t.tail&&(I<C||"string"===typeof $.value);$=$.next)S++,I+=$.value.length;S--,F=e.slice(_,I),A.index-=_}else if(A=i(x,0,F,b),!A)continue;T=A.index;var E=A[0],D=F.slice(0,T),H=F.slice(T+E.length),j=_+F.length;d&&j>d.reach&&(d.reach=j);var O=k.prev;D&&(O=l(t,O,D),_+=D.length),u(t,O,S);var P=new s(g,f?a.tokenize(E,f):E,v,E);k=l(t,O,P),H&&l(t,k,H),S>1&&r(e,t,n,k.prev,_,{cause:g+","+p,reach:j})}}}}}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var a=t.next,s={value:n,prev:t,next:a};return t.next=s,a.prev=s,e.length++,s}function u(e,t,n){for(var a=t.next,s=0;s<n&&a!==e.tail;s++)a=a.next;t.next=a,a.prev=t,e.length-=s}function c(e){var t=[],n=e.head.next;while(n!==e.tail)t.push(n.value),n=n.next;return t}if(e.Prism=a,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var s="";return t.forEach((function(t){s+=e(t,n)})),s}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},r=t.alias;r&&(Array.isArray(r)?Array.prototype.push.apply(i.classes,r):i.classes.push(r)),a.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),s=n.language,i=n.code,r=n.immediateClose;e.postMessage(a.highlight(i,a.languages[s],s)),r&&e.close()}),!1),a):a;var d=a.util.currentScript();function g(){a.manual||a.highlightAll()}if(d&&(a.filename=d.src,d.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var m=document.readyState;"loading"===m||"interactive"===m&&d&&d.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return a}(n);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */e.exports&&(e.exports=a),"undefined"!==typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup["tag"].inside["attr-value"].inside["entity"]=a.languages.markup["entity"],a.languages.markup["doctype"].inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",i)}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,function(){if("undefined"!==typeof self&&self.Prism&&self.document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=window.Prism,t="Loading…",n=function(e,t){return"✖ Error "+e+" while fetching file: "+t},a="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",r="loading",o="loaded",l="failed",u="pre[data-src]:not(["+i+'="'+o+'"]):not(['+i+'="'+r+'"])',c=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+u})),e.hooks.add("before-sanity-check",(function(c){var d=c.element;if(d.matches(u)){c.code="",d.setAttribute(i,r);var m=d.appendChild(document.createElement("CODE"));m.textContent=t;var p=d.getAttribute("data-src"),h=c.language;if("none"===h){var f=(/\.(\w+)$/.exec(p)||[,"none"])[1];h=s[f]||f}g(m,h),g(d,h);var b=e.plugins.autoloader;b&&b.loadLanguages(h);var y=new XMLHttpRequest;y.open("GET",p,!0),y.onreadystatechange=function(){4==y.readyState&&(y.status<400&&y.responseText?(d.setAttribute(i,o),m.textContent=y.responseText,e.highlightElement(m)):(d.setAttribute(i,l),y.status>=400?m.textContent=n(y.status,y.statusText):m.textContent=a))},y.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var n,a=(t||document).querySelectorAll(u),s=0;n=a[s++];)e.highlightElement(n)}};var d=!1;e.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function g(e,t){var n=e.className;n=n.replace(c," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()}).call(this,n("c8ba"))}}]);