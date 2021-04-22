(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ae111c1"],{"72ca":function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-row",{attrs:{justify:"center"}},e._l(e.categoryOrder,(function(a){return s("v-col",{key:a,staticClass:"ma-0 pa-1 d-flex",style:{"max-width":e.maxWidth+"rem","flex-basis":"auto"},attrs:{outlined:""}},[s("v-card",{staticClass:"ma-0 pa-1",class:e.$vuetify.theme.dark?"grey darken-4":"grey lighten-3",staticStyle:{"flex-grow":"1"},attrs:{outlined:""}},[s("h2",{staticClass:"font-weight-bold justify-center text-center google-font ma-1"},[e._v("\n        "+e._s(a)+"\n      ")]),e._l(e.getByCategory(e.profiles,a),(function(a,r){return s("v-card",{key:a.category+a.longName+r,staticClass:"google-font break-word ma-1",class:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-4",attrs:{href:a.link,target:"_blank",label:"",outlined:""}},[s("v-list",{staticClass:"pa-0"},[s("v-list-item",{staticClass:"ma-0 pa-0"},[s("v-list-item-avatar",{staticClass:"mx-2"},[s("v-img",{staticStyle:{"max-width":"28px","max-height":"28px"},attrs:{src:t("57ae")("./"+a.svg+".svg")}})],1),s("v-list-item-content",[s("v-list-item-title",{staticClass:"pr-4",staticStyle:{"font-size":"0.9rem"}},[e._v(e._s(a.shortName))])],1)],1)],1)],1)}))],2)],1)})),1)},r=[],i={props:{profiles:Array,categoryOrder:Array,maxWidth:Number},methods:{getByCategory:function(e,a){var t=e.filter((function(e){return e.category.some((function(e){return e===a}))}));return t.sort((function(e,a){return e["shortName"]>a["shortName"]?1:e["shortName"]<a["shortName"]?-1:0}))}}},o=i,c=t("2877"),n=t("6544"),l=t.n(n),b=t("b0af"),g=t("62ad"),m=t("adda"),d=t("8860"),h=t("da13"),u=t("8270"),p=t("5d23"),f=t("0fd9"),S=Object(c["a"])(o,s,r,!1,null,"53511f79",null);a["a"]=S.exports;l()(S,{VCard:b["a"],VCol:g["a"],VImg:m["a"],VList:d["a"],VListItem:h["a"],VListItemAvatar:u["a"],VListItemContent:p["a"],VListItemTitle:p["b"],VRow:f["a"]})},af6a:function(e){e.exports=JSON.parse('{"baselines":[{"shortName":"Red Hat 6 STIG","longName":"Red Hat 6 STIG","link":"https://github.com/mitre/redhat-enterprise-linux-6-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"],"gitHash":"34971b4b8452f1358479c23a8346afc309998c08"},{"shortName":"Red Hat 7 STIG","longName":"Red Hat 7 STIG","link":"https://github.com/mitre/redhat-enterprise-linux-7-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"],"gitHash":"78a14863582c1db9e212c8f41535e07cda099c92"},{"shortName":"Red Hat CVE Scan","longName":"Red Hat CVE Vulnerability Scan","link":"https://github.com/CMSgov/redhat-enterprise-linux-cve-vulnerability-scan-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"],"gitHash":"e1c998f71ce5542114ea12031ca304f103bf8b90"},{"shortName":"Windows 2012 STIG","longName":"Microsoft Windows 2012r2 Member Server STIG","link":"https://github.com/mitre/microsoft-windows-2012r2-memberserver-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"],"gitHash":"82bdf2c9877a8f918f7dcca7d420fb2f91d2b3e9"},{"shortName":"Windows 2016 STIG","longName":"Microsoft Windows Server 2016 STIG","link":"https://github.com/mitre/microsoft-windows-server-2016-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"],"gitHash":"9dcad84f1d5687b760740841651b154ead222087"},{"shortName":"Windows 2019 STIG","longName":"Microsoft Windows Server 2019 STIG","link":"https://github.com/mitre/microsoft-windows-server-2019-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"],"gitHash":"1ab4f61f03d530b0cbe2034545a2e20093af860a"},{"shortName":"Docker CE CIS","longName":"Docker CE CIS","link":"https://github.com/mitre/docker-ce-cis-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"],"gitHash":"f601bd2c9411ac7f6152ad331b49ecd775db9d42"},{"shortName":"Ubuntu 16.04 STIG","longName":"Canonical Ubuntu 16.04 STIG","link":"https://github.com/mitre/canonical-ubuntu-16.04-lts-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"],"gitHash":"d0875b2fbb4bfff61b8107e89a93c5549188fa29"},{"shortName":"Windows 10 STIG","longName":"Microsoft Windows 10 STIG v1r19","link":"https://github.com/mitre/microsoft-windows-10-stig-baseline","svg":"inspec-blue-back-border","category":["Operating Systems"],"gitHash":"3b12950bd94b394396075899012ea8521164a683"},{"shortName":"RSA Archer 6 SCG","longName":"RSA Archer 6 Security Configuration Guide","link":"https://github.com/mitre/rsa-archer-6-security-configuration-guide-baseline","svg":"inspec-blue-back-border","category":["Application Logic"],"gitHash":"f74be5ae96571f3fd148c161662f02f848f1f84f"},{"shortName":"Red Hat Jboss EAP 6.3 STIG","longName":"Red Hat Jboss Enterprise Application Server 6.3 STIG","link":"https://github.com/mitre/redhat-jboss-enterprise-application-platform-6.3-stig-baseline","svg":"inspec-blue-back-border","category":["Application Logic"],"gitHash":"2fe45350452216a0f1646d1116835543edab6314"},{"shortName":"JRE 7 STIG","longName":"Oracle Java Runtime Environment 7 Unix STIG","link":"https://github.com/mitre/oracle-java-runtime-environment-7-unix-stig-baseline","svg":"inspec-blue-back-border","category":["Application Logic"],"gitHash":"a4d7c4d629b2369002c4e26b01af8873e0f3f571"},{"shortName":"JRE 8 STIG","longName":"Oracle Java Runtime Environment 8 Unix STIG","link":"https://github.com/mitre/oracle-java-runtime-environment-8-unix-stig-baseline","svg":"inspec-blue-back-border","category":["Application Logic"],"gitHash":"59dfb34c776811019cde6e7dff4e3f792574ba9a"},{"shortName":"IIS 8.5 Server STIG","longName":"Microsoft IIS 8.5 Server STIG","link":"https://github.com/mitre/microsoft-iis-8.5-server-stig-baseline","svg":"inspec-blue-back-border","category":["Web Servers"],"gitHash":"ab18203dd389e409c214b15384c8572fd760138c"},{"shortName":"IIS 8.5 Site STIG","longName":"Microsoft IIS 8.5 Site STIG","link":"https://github.com/mitre/microsoft-iis-8.5-site-stig-baseline","svg":"inspec-blue-back-border","category":["Web Servers"],"gitHash":"916347f0c279de5a5a1b3e84314180cf60195328"},{"shortName":"NGINX Baseline","longName":"NGINX Baseline","link":"https://github.com/mitre/nginx-baseline","svg":"inspec-blue-back-border","category":["Web Servers"]},{"shortName":"Oracle MySQL 5.7 CIS","longName":"Oracle MySQL Enterprise Edition 5.7 CIS","link":"https://github.com/mitre/oracle-mysql-ee-5.7-cis-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"4c8dc87af83fe089f4551d67313466f74d60aa45"},{"shortName":"AWS RDS MySQL 5.7 CIS","longName":"AWS RDS MySQL Enterprise Edition 5.7 CIS","link":"https://github.com/mitre/aws-rds-oracle-mysql-ee-5.7-cis-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"0ce145928ae23e1755b0534632c5c6f6cad13f3d"},{"shortName":"PostgreSQL 9.x STIG","longName":"Crunchy Data PostgreSQL 9.x STIG","link":"https://github.com/mitre/pgstigcheck-inspec","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"97357a8077b08603e8f2da2b1c9cc3a45af13ea0"},{"shortName":"AWS RDS PostgreSQL 9.x STIG","longName":"AWS RDS Crunchy Data PostgreSQL 9.x STIG","link":"https://github.com/mitre/aws-rds-crunchy-data-postgresql-9-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"1d6f4fd9ce5141313002f4a907fe71e66074f8a2"},{"shortName":"MSQL 2014 Database STIG","longName":"Microsoft SQL Server 2014 Database STIG","link":"https://github.com/mitre/microsoft-sql-server-2014-database-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"197506e37e36b3d3e42d829f5a6d96dd5a3a1b68"},{"shortName":"MSQL 2014 Instance STIG","longName":"Microsoft SQL Server 2014 Database STIG","link":"https://github.com/mitre/microsoft-sql-server-2014-instance-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"da80b9bd8fb979bd4ff717471bcfb431ebd2a485"},{"shortName":"AWS MSQL 2014 STIG","longName":"AWS RDS Microsoft SQL 2014 Server STIG Instance","link":"https://github.com/mitre/aws-rds-microsoft-sql-server-2014-instance-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"8f43257b9b8a31274cb541eb44802aa24a83beae"},{"shortName":"AWS RDS Oracle Database 12c STIG","longName":"AWS RDS Oracle Database 12c STIG","link":"https://github.com/mitre/aws-rds-oracle-database-12c-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"1bf88e715b3b6522a9948f30f527d0a273bc74cf"},{"shortName":"Oracle Database 12c STIG","longName":"Oracle Database 12c STIG","link":"https://github.com/mitre/oracle-database-12c-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"b3025c8484e99fb9efa815530fd7c1202eef03f0"},{"shortName":"MongoDB STIG","longName":"MongoDB STIG","link":"https://github.com/mitre/mongodb-enterprise-advanced-3-stig-baseline","svg":"inspec-blue-back-border","category":["Databases"],"gitHash":"56366a55ca841c5fe869060cfc21c0185d328495"},{"shortName":"AWS CIS","longName":"AWS CIS Foundations","link":"https://github.com/mitre/aws-foundations-cis-baseline","svg":"inspec-blue-back-border","category":["Cloud Service Providers"],"gitHash":"4ef3e71ee0e5d243dc3bfa0766a3fe8940348aa0"},{"shortName":"AWS S3","longName":"AWS S3","link":"https://github.com/mitre/aws-s3-baseline","svg":"inspec-blue-back-border","category":["Cloud Service Providers"],"gitHash":"5a4ee7ae419bf9706f2b5583dc717b51c0903449"},{"shortName":"AWS RDS CIS","longName":"AWS RDS Infrastructure CIS","link":"https://github.com/mitre/aws-rds-infrastructure-cis-baseline","svg":"inspec-blue-back-border","category":["Cloud Service Providers"],"gitHash":"9ea0a5644f6962bda8df73a50ebca0dc8bfca371"},{"shortName":"DRAFT: GCP PCI-DSS 3.2.1","longName":"DRAFT: Google Cloud Platform PCI-DSS 3.2.1","link":"https://github.com/GoogleCloudPlatform/inspec-gcp-pci-profile","svg":"inspec-blue-back-border","category":["Cloud Service Providers"],"gitHash":"0"},{"shortName":"DRAFT: GCP CIS Benchmark","longName":"DRAFT: Google Cloud Platform CIS Benchmark","link":"https://github.com/GoogleCloudPlatform/inspec-gcp-cis-benchmark","svg":"inspec-blue-back-border","category":["Cloud Service Providers"],"gitHash":"0"},{"shortName":"DRAFT: GKE CIS Benchmark","longName":"DRAFT: Google Kubernetes Engine CIS Benchmark","link":"https://github.com/GoogleCloudPlatform/inspec-gke-cis-benchmark","svg":"inspec-blue-back-border","category":["Cloud Service Providers"],"gitHash":"0"},{"shortName":"DRAFT: VMWare ESXI 6.7 STIG","longName":"DRAFT: VMWare ESXI 6.7 STIG","link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vsphere/inspec/vmware-esxi-6.7-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"],"gitHash":"327ee513388dc1d5e26a7b1db27d46d256407218"},{"shortName":"DRAFT: VMWare vSphere VM 6.7 STIG","longName":"DRAFT: VMware vSphere Virtual Machines version 6.7 STIG","link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vsphere/inspec/vmware-vm-6.7-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"],"gitHash":"327ee513388dc1d5e26a7b1db27d46d256407218"},{"shortName":"VMWare vSphere VM 6.5 STIG","longName":"VMware vSphere Virtual Machines version 6.5 STIG","link":"https://github.com/kclinden/vmware-vsphere-65-virtual-machine-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"],"gitHash":"f61ed9eb72f02b7bce1a0cfd6d725a0542fc88c4"},{"shortName":"VMWare ESXI 6.5 STIG","longName":"VMWare ESXI 6.5 STIG","link":"https://github.com/kclinden/vmware-esxi-6.5-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"],"gitHash":"2967554bf747766e5251720ba1329866129ec9c0"},{"shortName":"DRAFT: VMWare VCSA 6.7 STIG","longName":"DRAFT: VMware vCenter Service Appliance version 6.7","link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vcsa/inspec/vmware-vcsa-6.7-stig-baseline","svg":"inspec-blue-back-border","category":["Virtual Platforms"],"gitHash":"327ee513388dc1d5e26a7b1db27d46d256407218"},{"shortName":"DRAFT: Tomcat 8 CIS","longName":"DRAFT: Apache Tomcat 8 CIS","link":"https://github.com/mitre/apache-tomcat-8-cis-baseline","svg":"inspec-blue-back-border","category":["Web Servers"],"gitHash":"857ef3fb913a18eafef89fccb29868135783c065"},{"shortName":"DRAFT: Tomcat 7 CIS","longName":"DRAFT: Apache Tomcat 7 CIS","link":"https://github.com/mitre/apache-tomcat-7-cis-baseline","svg":"inspec-blue-back-border","category":["Web Servers"],"gitHash":"b4af1143ace12739bb52f1aa2a4b832ebcde5e40"},{"shortName":"Kubernetes CIS","longName":"Kubernetes CIS","link":"https://github.com/mitre/kubernetes-cis-baseline","svg":"inspec-blue-back-border","category":["Application Logic"],"gitHash":"f820e6c9f3f165ffd3150fb2cd0d7d065a404023"},{"shortName":"Apache Server STIG","longName":"Apache Server 2.2 STIG","link":"https://github.com/mitre/apache-server-2.2-stig-baseline","svg":"inspec-blue-back-border","category":["Web Servers"],"gitHash":"8e40e22de5cfdad3a6fb409e008009dfeadbcc8d"},{"shortName":"Apache Site STIG","longName":"Apache Site 2.2 STIG","link":"https://github.com/mitre/apache-site-2.2-stig-baseline","svg":"inspec-blue-back-border","category":["Web Servers"],"gitHash":"62da29b74b831de8b984a439df8aa88bc1edfa51"}],"extras":{"csv":[{"shortName":"Heimdall_tools","longName":"CWE tool data mapped by Heimdall_tools","link":"https://github.com/mitre/heimdall_tools","path":"Heimdall_tools/lib/data/cwe-nist-mapping.csv","column":"NIST-ID","gitHash":"60d6ecaaf3e686cdeb13643da33aa2fcad145359"}]}}')},d4f4:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[t("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[t("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",lg:"10"}},[t("Header",[t("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Validate")]),t("div",{staticClass:"ma-0",attrs:{slot:"subtitle"},slot:"subtitle"},[t("p",{staticClass:"ma-0"},[e._v("\n            These open-source community-based InSpec profiles validate the security of\n            common system components. MITRE is helping to provide stewardship over\n            these profiles, hosted here and at other community vendor sites. If you\n            are interested in new profiles, please contact us at\n            "),t("a",{attrs:{href:e.mail_link}},[e._v(e._s(e.db.communityEmail))]),e._v("\n            . If you are interested in developing and contributing your own\n            profiles, please see our\n            "),t("router-link",{attrs:{to:"training"}},[e._v("training material")]),e._v(".\n          ")],1),t("p",{staticClass:"ma-0"},[e._v("\n            All assessment tests under MITRE SAF are associated with NIST SP 800-53 Security Controls. Explore these associations in this\n            "),t("router-link",{attrs:{to:"control-table"}},[e._v("Control Assessment Range table")]),e._v("!\n          ")],1)])])],1)],1),t("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"12",lg:"10"}},[t("profileTemplateCompact",{attrs:{profiles:e.baselines.baselines,categoryOrder:e.categoryOrder,maxWidth:25}})],1)],1)],1)},r=[],i=t("72ca"),o=t("262f"),c=t("af6a"),n=t("d67c"),l={components:{profileTemplateCompact:i["a"],Header:o["a"]},data:function(){return{baselines:c,db:n,categoryOrder:["Cloud Service Providers","Virtual Platforms","Operating Systems","Databases","Application Logic","Web Servers"]}},computed:{mail_link:function(){return"mailto:"+n.communityEmail}}},b=l,g=t("2877"),m=t("6544"),d=t.n(m),h=t("62ad"),u=t("a523"),p=t("0fd9"),f=Object(g["a"])(b,s,r,!1,null,null,null);a["default"]=f.exports;d()(f,{VCol:h["a"],VContainer:u["a"],VRow:p["a"]})}}]);