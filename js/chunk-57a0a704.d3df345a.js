(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57a0a704"],{"36d6":function(e){e.exports=JSON.parse('{"items":[{"name":"Overview","tag":"overview","desc":"See here for a one-page overview of how to use the MITRE SAF to help developers, assessors, and operations teams automate security in their current processes.","values":[{"name":"How To Use The MITRE SAF","desc":"","download_link":"How to Use the MITRE SAF.pdf"}]},{"name":"SAF Tooling at a Glance","tag":"tools","desc":"The SAF is a framework, not one tool. So, to figure out what tools you need in your environment, take a look at this diagram. The SAF helps piece all of this together. For more information getting tools into your environment look more at InSpec, SAF CLI, and Heimdall.","image":{"file":"SAF_Tools_Security_Validation.png","alt":"The SAF consists of five pillars: \'Plan\', \'Harden\', \'Validate\', \'Normalize\', and \'Visualize\'.  Under \'Plan\', you can use Vulcan to develop implementation specific guidance from more general guides (like STIGs from SRGs) or choose to use pre-existing guidance like DISA STIGs, CIS Benchmarks, or Vendor Security Checklists.  Under \'Harden\', you can use infrastructure-as-code or configuration management software like Ansible, Progress Chef, Puppet, or Terraform - many scripts are already created and available for use.  Under \'Validate\', you can use the SAF CLI to generate InSpec profiles stubs that can then be refined manually.  Once you have created those profiles or found the many profiles already created and available for use, you can use InSpec to generate Heimdall Data Format (HDF) output via the JSON reporter.  You can also use various other 3rd party tools to get scan results.  Under \'Normalize\', you can take the results of those 3rd party scans and convert them into HDF via the SAF CLI.  Under \'Visualize\', you can view HDF within Heimdall.  You can also use the SAF CLI to generate and view other information such as how the results compare against previously generated thresholds.  Additionally, you can view scan results in other applications after conversion and upload by the SAF CLI or Emasser."}},{"name":"Mature DevSecOps Best Practices","tag":"dso","desc":"DevSecOps is a software development framework that stresses automation and rapid user feedback to deliver quality, secure software quickly. A DevSecOps pipeline is a collection of tools and practices that can automate as much of development as possible, from testing to change management to deployment.","values":[{"name":"DevSecOps Best Practices Guide","desc":"","download_link":"DevSecOps_Best_Practices_Guide_01262020.pdf"}]},{"name":"InSpec","tag":"inspec","desc":"InSpec is a free and open-source Chef framework for testing and auditing applications and infrastructure. InSpec is designed to integrate very easily into existing DevOps pipelines. MITRE has partnered with the open-source community to create a growing number of baseline testing profiles to make it easy for developers to jump right in.","values":[{"name":"InSpec Documentation","desc":"InSpec\'s main webpage containing all written documentation and walkthroughs of the tool","link":"https://www.inspec.io/docs/"},{"name":"InSpec Profile Resources Reference","desc":"List of the existing systems InSpec available for the user to search through (known as InSpec \\"resources\\")","link":"https://www.inspec.io/docs/reference/resources/"},{"name":"Introduction to InSpec Video Courses","desc":"Video tutorials demonstrating and explaining how InSpec operates","link":"https://www.youtube.com/playlist?list=PLSZbtIlMt5rcbXOpMRucKzRMXR7HX7awy"},{"name":"InSpec Profile Developers Course","desc":"Reviews the basics on how to write and run tests","link":"https://mitre-inspec-developer.netlify.com/"},{"name":"InSpec Advanced Developer Course","desc":"In depth explaination of some of the higher functionalities provided by InSpec","link":"https://mitre-inspec-advanced-developer.netlify.com/"},{"name":"SAF CLI","desc":"Guide to installation of SAF CLI","link":"https://saf-cli.mitre.org/"}]},{"name":"How is InSpec deployed?","tag":"deploy","desc":"It is intended and recommended that InSpec be installed on a \\"runner\\" host (such as a DevOps orchestration server, an administrative management system, or a developer\'s workstation/laptop) and run against the target remotely. However, InSpec may be deployed in various ways depending on the needs of the user:","image":"inspec-runner.png"}],"videos":[{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"}]}')},"504b":function(e){e.exports=JSON.parse('{"training":{"courses":[{"name":"SAF User Class (New!)","course_link":"https://mitre.github.io/saf-training/","desc":"This class provides understanding and hands-on practical use of MITRE\'s Security Automation Framework with a focus on automating security validation and visualization.","bullets":["Identify and locate security guidance for a software component","Understand the capabilities available in the main pillars of the MITRE Security Automation Framework - Plan, Harden, Validate, Normalize, Visualize","Visualize InSpec results and third party security tool data","Define and run an InSpec profile to validate a component against a security guide","Automatically export checklist results from a security assessment"]},{"name":"Beginner Security Automation Developer Class","course_link":"https://mitre.github.io/saf-training/","desc":"This course teaches the basics of writing and running InSpec test profiles. Note that basic knowledge of Ruby and CLI familiarity is required.","video_link":"https://www.youtube.com/watch?v=KOQbSI6wWUk&list=PLkTApXQou_8LsM26IAZjQsdaDNvsnTWjB&index=1","bullets":["Learn about the InSpec framework and its capabilities","Write your own test profiles to learn InSpec profile architecture and best practices","Report, view, and analyze InSpec test results"]},{"name":"Advanced Security Automation Developer Class","course_link":"https://mitre.github.io/saf-training/","desc":"This course provides a deep dive into InSpec\'s advanced capabilities.","video_link":"https://www.youtube.com/watch?v=hkd0fbk9efo&list=PLkTApXQou_8LsM26IAZjQsdaDNvsnTWjB&index=3","bullets":["Learn to use profile inheritance techniques to run multiple profiles against a target","Develop your own InSpec resource objects to cover application stack components","Expand your test-writing skills to handle more use cases","Automate security testing via integration in a CI/CD pipeline"]},{"name":"COMING SOON! Security Guidance Developer Class","desc":"This course looks at MITRE SAF\'s resources in the planning stage of the security validation process.","bullets":["Learn to choose, tailor, and create security guidance appropriate for your mission","Develop security guidance using the MITRE Vulcan application","Use Heimdall to review, edit, or export guidance information for security assessment"]}]}}')},b707:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",lg:"10"}},[a("Header",[a("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Our Training")]),a("div",{staticClass:"mt-2",attrs:{slot:"subtitle"},slot:"subtitle"},[e._v(" The MITRE SAF team regularly offers training courses. Dates and sign-up links for future courses are posted on this page when training dates are finalized. See below for course details, materials, and recordings. ")])])],1)],1),a("v-row",{staticClass:"ma-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[a("pastTraining")],1)],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("RSVPBlock",{staticClass:"mt-2"}),e._l(e.trainingData.courses,(function(t,n){return a("v-row",{key:n,staticClass:"ma-0",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"px-0"},[a("p",{staticClass:"header my-2"},[e._v(e._s(t.name))]),a("p",{staticClass:"my-2"},[e._v(e._s(t.desc))]),a("ul",{staticClass:"my-2"},e._l(t.bullets,(function(t,n){return a("li",{key:n,staticClass:"ms-2"},[e._v(" "+e._s(t)+" ")])})),0),t.course_link?a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",href:t.course_link,target:"_blank"}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-file-document")]),e._v("Course Materials")],1):e._e(),t.video_link?a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",href:t.video_link,target:"_blank"}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-play")]),e._v("Course Recording")],1):e._e()],1)],1)}))],2)},o=[],r=a("d67c"),l=a("504b"),c=a("36d6"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"mb-2"},[e._v("Coming Soon! – SAF training Fall 2022!")]),a("p",[e._v(" We’re happy to announce plans to provide training to SAF Users and Developers. These are free, on-line virtual, hands-on, instructor-led 1-2 day classes. ")]),a("p",[e._v(" Sponsored by MDA, the "),a("a",{attrs:{href:e.communityData.trainingSiteBasic,target:"_blank"}},[e._v("Beginner Security Automation Developer Class")]),e._v(" will again be offered in late Fall (10am-5pm ET both days) (12 CPE). Check back in for more details to come! ")]),a("p",[e._v(" Sponsored by MDA, the "),a("a",{attrs:{href:e.communityData.trainingSiteAdvanced,target:"_blank"}},[e._v("follow-on Advanced Security Automation Developer Class")]),e._v(" will again be offered in late Fall (10am-5pm ET both days) (12 CPE). Check back in for more details to come! ")]),e._m(0)])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For information on prerequisites and resources for learning Ruby, look at the saf-training material available "),a("a",{attrs:{href:"https://mitre.github.io/saf-training/",target:"_blank"}},[e._v("here")]),e._v(" or "),a("a",{attrs:{href:"https://mitre-saf-training.netlify.app/",target:"_blank"}},[e._v("here.")])])}],p={data:function(){return{communityData:r}}},m=p,h=a("2877"),f=Object(h["a"])(m,u,d,!1,null,null,null),v=f.exports,g={name:"App",data:function(){return{communityData:r,trainingData:l.training,resources:c,dialog:!1,dialogData:{name:"",date:"",link:""}}},computed:{color_mode:function(){return this.$vuetify.theme.dark?"darkModeContainer":"lightModeContainer"}},components:{RSVPBlock:v},methods:{passItemData:function(e){this.dialogData=e}}},y=g,w=a("6544"),b=a.n(w),S=a("8336"),k=a("62ad"),I=a("a523"),_=a("132d"),A=a("0fd9"),C=Object(h["a"])(y,i,o,!1,null,null,null),D=C.exports;b()(C,{VBtn:S["a"],VCol:k["a"],VContainer:I["a"],VIcon:_["a"],VRow:A["a"]});var T=a("262f"),F={data:function(){return{communityData:r}},components:{Header:T["a"],pastTraining:D},created:function(){var e=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?e.setAttribute("content","#212121"):e.setAttribute("content","#0277bd")}},R=F,V=Object(h["a"])(R,n,s,!1,null,null,null);t["default"]=V.exports;b()(V,{VCol:k["a"],VContainer:I["a"],VRow:A["a"]})}}]);