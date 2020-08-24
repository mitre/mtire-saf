(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64deb7d5"],{"36d6":function(e){e.exports=JSON.parse('{"items":[{"name":"Overview","desc":"See here for a one-page overview of how to use the MITRE | SAF to help developers, assessors, and operations teams automate security in their current processes.","values":[{"name":"How To Use The MITRE | SAF","desc":"","download_link":"How to Use the MITRE SAF.pdf"}]},{"name":"Mature DevSecOps Best Practices","desc":"DevSecOps is a software development framework that stresses automation and rapid user feedback to deliver quality, secure software quickly. A DevSecOps pipeline is a collection of tools and practices that can automate as much of development as possible, from testing to change management to deployment.","values":[{"name":"DevSecOps Best Practices Guide","desc":"","download_link":"DRAFT-DevSecOps_Best_Practices_Guide_01262020.pdf"}]},{"name":"InSpec","desc":"InSpec is a free and open-source Chef framework for testing and auditing applications and infrastructure. InSpec is designed to integrate very easily into existing DevOps pipelines. MITRE has partnered with the open-source community to create a growing number of baseline testing profiles to make it easy for developers to jump right in.","values":[{"name":"InSpec Documentation","desc":"InSpec\'s main webpage containing all written documentation and walkthroughs of the tool","link":"https://www.inspec.io/docs/"},{"name":"InSpec Profile Resources Reference","desc":"List of the existing systems InSpec available for the user to search through (known as InSpec \\"resources\\")","link":"https://www.inspec.io/docs/reference/resources/"},{"name":"Introduction to InSpec Video Courses","desc":"Video tutorials demonstrating and explaining how InSpec operates","link":"https://www.youtube.com/playlist?list=PLSZbtIlMt5rcbXOpMRucKzRMXR7HX7awy"},{"name":"InSpec Profile Developers Course","desc":"Reviews the basics on how to write and run tests","link":"https://mitre-inspec-developer.netlify.com/"},{"name":"InSpec Advanced Developer Course","desc":"In depth explaination of some of the higher functionalities provided by InSpec","link":"https://mitre-inspec-advanced-developer.netlify.com/"},{"name":"InSpec Tools and Utilization","desc":"Guide to installation of InSpec Tools","link":"https://mitre.github.io/inspec_tools/"}]},{"name":"How is InSpec deployed?","desc":"It is intended and recommended that InSpec be installed on a \\"runner\\" host (such as a DevOps orchestration server, an administrative management system, or a developer\'s workstation/laptop) and run against the target remotely. However, InSpec may be deployed in various ways depending on the needs of the user:","image":"inspec-runner.png"}],"videos":[{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"},{"name":"Inspec: Human Readable, Automated Compliance","link":"https://www.youtube.com/embed/IaUjpJ5SUAA"}]}')},"3d56":function(e,t,n){},"504b":function(e){e.exports=JSON.parse('{"training":[{"pastTraining":{"introTraining":[{"name":"Introductory InSpec Profile Developer Training","date":"March 7-8th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"March 13-14th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"August 28-29th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"November 13-14 2019","description":"","link":""}],"advTraining":[{"name":"Advanced InSpec Profile Developer Training","date":"September 5-6th 2019","description":"","link":""}]},"upcomingTraining":{"introTraining":[{"name":"Upcoming Training Sessions will appear here as they are announced!","date":"TBD","description":"","link":""}]},"courses":[{"name":"Inspec Profile Developer Course","link":"https://mitre-inspec-developer.netlify.com/","desc":"This course teaches the basics of writing and running InSpec test profiles. Note that basic knowledge of Ruby and CLI familiarity is required.","bullets":["Learn about the InSpec framework and its capabilities","Write your own test profiles to learn InSpec profile architecture and best practices","Report, view, and analyze InSpec test results"]},{"name":"Inspec Advanced Developer Course","link":"https://mitre-inspec-advanced-developer.netlify.app/","desc":"This course provides a deep dive into InSpec\'s advanced capabilities.","bullets":["Learn to use profile inheritance techniques to run multiple profiles against a target","Develop your own InSpec resource objects to cover application stack components","Expand your test-writing skills to handle more use cases"]}]}]}')},"508a":function(e,t,n){var a={"./inspec-runner.png":"9c84"};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id="508a"},"8e92":function(e,t,n){"use strict";var a=n("3d56"),s=n.n(a);s.a},"9c84":function(e,t,n){e.exports=n.p+"img/inspec-runner.4b9c1ac4.png"},e575:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[n("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[n("Header",[n("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Getting Started")])])],1)],1),n("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[n("gsInfo")],1)],1)],1)},s=[],i=n("262f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pa-2"},e._l(e.resources.items,(function(t){return a("div",{key:t.name},[a("p",{staticClass:"mb-2 wrap-list-text"},[a("b",[e._v(e._s(t.name))])]),a("p",{staticClass:"ma-2",attrs:{flat:""}},[e._v(e._s(t.desc))]),e._l(t.values,(function(t){return a("p",{key:t.name,staticClass:"ma-2 ",attrs:{flat:"",dense:""}},[a("span",[t.link?a("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))]):e._e(),t.download_link?a("a",{attrs:{href:t.download_link,target:"_blank",download:""}},[e._v("\n          "+e._s(t.name)+"\n        ")]):e._e()])])})),t.image?a("v-img",{attrs:{src:n("508a")("./"+t.image)}}):e._e()],2)})),0)},r=[],c=n("d67c"),l=n("504b"),p=n("36d6"),d={data:function(){return{communityData:c,trainingData:l,resources:p}}},u=d,m=(n("8e92"),n("2877")),f=n("6544"),h=n.n(f),v=n("adda"),w=Object(m["a"])(u,o,r,!1,null,"6b61d9fb",null),g=w.exports;h()(w,{VImg:v["a"]});var b={components:{Header:i["a"],gsInfo:g},created:function(){var e=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?e.setAttribute("content","#212121"):e.setAttribute("content","#0277bd")}},I=b,S=n("62ad"),y=n("a523"),k=n("0fd9"),_=Object(m["a"])(I,a,s,!1,null,null,null);t["default"]=_.exports;h()(_,{VCol:S["a"],VContainer:y["a"],VRow:k["a"]})}}]);