(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-994557aa"],{"167f":function(a,t,e){"use strict";var s=e("580a"),i=e.n(s);i.a},"580a":function(a,t,e){},"651b":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("v-content",{class:1==a.$vuetify.theme.dark?"blank":"grey lighten-5"},[s("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:a.snackbarSuccess,callback:function(t){a.snackbarSuccess=t},expression:"snackbarSuccess"}},[a._v("\n    Speaker Edited Successfully\n    "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:function(t){a.snackbarSuccess=!1}}},[a._v("Close")])],1),s("v-container",{staticClass:"text-center",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-toolbar",{staticClass:"elevation-1"},[s("router-link",{staticClass:"ma-0 google-font mb-0",staticStyle:{"border-radius":"5px","text-transform":"capitalize","text-decoration":"none"},attrs:{to:"/admin/dashboard/speaker/",color:1==a.$vuetify.theme.dark?"white":"black"}},[s("v-icon",{attrs:{left:""}},[a._v("mdi-arrow-left-thick")]),s("span",{class:1==a.$vuetify.theme.dark?"white--text":"black--text"},[a._v("Speakers")])],1),s("v-spacer"),!a.isLoading&&a.isSpeakerFound?s("editSpeaker",{staticClass:"mr-5",attrs:{speakerData:a.speaker},on:{showEditSuccess:a.editSuccessFunction}}):a._e(),!a.isLoading&&a.isSpeakerFound?s("removeSpeakers",{staticClass:"mr-5",attrs:{speakerData:{id:a.$route.params.id,name:a.speaker.name}}}):a._e()],1)],1)],1),a.isLoading?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):!a.isLoading&&a.isSpeakerFound?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"pa-1 elevation-1 py-5",class:1==a.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"3"}},[s("v-avatar",{attrs:{size:"120"}},[s("img",{attrs:{src:a.speaker.image.length>0?a.speaker.image:e("72ab"),alt:a.speaker.name}})]),s("p",{staticClass:"mt-3 mb-0 google-font mb-0 text--black",staticStyle:{"font-size":"120%"}},[a._v(a._s(a.speaker.name))]),s("p",{staticClass:"mt-1 mb-0 google-font mt-0 greyText",staticStyle:{"font-size":"100%"}},[a._v(a._s(a.speaker.designation))]),s("v-chip",{staticClass:"mt-2",attrs:{href:a.speaker.company.url,target:"_blank",small:""}},[a._v(a._s(a.speaker.company.name))]),s("br"),s("br"),a.speaker.visible?s("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[a._v("Visible")]):s("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[a._v("Not Visible")])],1),s("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==a.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"9"}},[s("p",{staticClass:"mb-0"},[s("b",[a._v("Bio")])]),s("p",{staticClass:"mt-1 mb-0 google-font greyText mt-0"},[a._v(a._s(a.speaker.bio))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[a._v("Email")])]),s("p",{staticClass:"mt-0 mb-0 google-font greyText mt-0"},[a._v(a._s(a.speaker.email))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[a._v("Mobile")])]),s("p",{staticClass:"mt-0 mb-0 google-font greyText mt-0"},[a._v(a._s(a.speaker.mbnumber))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[a._v("Location")])]),s("p",{staticClass:"mt-0 mb-0 google-font greyText mt-0"},[a._v(a._s(a.speaker.city)+", "+a._s(a.speaker.country))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[a._v("User ID")])]),s("p",{staticClass:"mt-0 mb-0 google-font greyText mt-0"},[a._v(a._s(a.speaker.id))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[a._v("Social Links")])]),s("p",{staticClass:"mt-1 mb-0 mt-0"},[s("v-chip-group",{attrs:{column:""}},a._l(a.speaker.socialLinks,(function(t,e){return s("v-chip",{key:e,staticClass:"google-font",attrs:{href:t,target:"_blank"}},[a._v(a._s(e.charAt(0).toUpperCase()+e.slice(1)))])})),1)],1)])],1)],1)],1)],1):s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"elevation-1 pa-3 white"},[s("v-col",[s("h1",[a._v("User Not Found")])])],1)],1)],1)],1)],1)],1)},i=[],l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{"max-width":"300"},scopedSlots:a._u([{key:"activator",fn:function(t){return[e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",a._g({attrs:{icon:"",dark:"",color:"red"},on:{click:function(t){t.stopPropagation(),a.dialog=!0}}},t.on),[e("v-icon",[a._v("mdi-delete")])],1),e("span",[a._v("Remove "+a._s(a.speakerData.name))])],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[a._v("Are you sure?")]),e("v-card-text",[a._v("Would you like to remove "+a._s(a.speakerData.name)+"?")]),e("v-card-actions",[e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("No")]),e("v-btn",{attrs:{color:"red darken-1",text:"",loading:a.isLoading},on:{click:function(t){return a.deleteItem(a.speakerData.id)}}},[a._v("Remove")])],1)],1)],1)},o=[],n=e("dc59"),c={props:{speakerData:{}},data:function(){return{dialog:!1,isLoading:!1}},methods:{deleteItem:function(a){var t=this;this.isLoading=!0,n["a"].firestore.collection("speakers").doc(a).delete().then((function(){t.isLoading=!1,t.dialog=!1,t.$router.push({path:"/admin/dashboard/speaker",query:{msg:"removesuccess"}})}))}}},r=c,d=e("2877"),p=e("6544"),u=e.n(p),m=e("8336"),v=e("b0af"),k=e("99d9"),b=e("169a"),g=e("132d"),f=e("3a2f9"),h=Object(d["a"])(r,l,o,!1,null,null,null),D=h.exports;u()(h,{VBtn:m["a"],VCard:v["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VDialog:b["a"],VIcon:g["a"],VTooltip:f["a"]});var y=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{scrollable:"",width:"1200"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(t){var s=t.on;return[e("v-btn",a._g({attrs:{icon:"",color:"primary",dark:""},on:{click:function(t){t.stopPropagation(),a.dialog=!0}}},s),[e("v-icon",[a._v("mdi-lead-pencil")])],1)]}}])},[e("span",[a._v("Edit "+a._s(a.speakerData.name)+" Details")])]),a.dialog?e("v-card",[e("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[a._v("Edit "+a._s(a.speakerData.name.split(" ")[0])+"'s Details")]),e("v-card-text",{},[e("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[e("v-form",{attrs:{"lazy-validation":""}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[a._v("Speaker Status")])]),e("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[e("v-select",{attrs:{items:a.visiblity,label:"Visiblity Status",outlined:""},model:{value:a.updatedData.visible,callback:function(t){a.$set(a.updatedData,"visible",t)},expression:"updatedData.visible"}})],1),e("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[e("v-text-field",{attrs:{disabled:"",label:"ID",type:"text",outlined:""},model:{value:a.updatedData.id,callback:function(t){a.$set(a.updatedData,"id",t)},expression:"updatedData.id"}})],1)],1),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[a._v("Speaker info")])]),e("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"8",xl:"3"}},[e("v-text-field",{attrs:{label:"Full Name",type:"text",outlined:""},model:{value:a.updatedData.name,callback:function(t){a.$set(a.updatedData,"name",t)},expression:"updatedData.name"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"4",xl:"3"}},[e("v-text-field",{attrs:{label:"Desigination",type:"text",outlined:""},model:{value:a.updatedData.designation,callback:function(t){a.$set(a.updatedData,"designation",t)},expression:"updatedData.designation"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[e("v-text-field",{attrs:{label:"Profile Image URL",type:"text",outlined:""},model:{value:a.updatedData.image,callback:function(t){a.$set(a.updatedData,"image",t)},expression:"updatedData.image"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[e("v-dialog",{attrs:{"max-width":"290"},scopedSlots:a._u([{key:"activator",fn:function(t){var s=t.on;return[e("v-btn",a._g({staticClass:"mt-n6",attrs:{color:"primary",loading:a.imageUploading,dark:""}},s),[a._v("Upload Image")])]}}],null,!1,3016959100),model:{value:a.dialogImageUload,callback:function(t){a.dialogImageUload=t},expression:"dialogImageUload"}},[e("v-card",[e("v-card-title",[a._v("Upload Speaker Image")]),e("v-card-text",[e("v-img",{staticClass:"mb-6",attrs:{src:a.imagePre}}),e("v-file-input",{attrs:{accept:"image/*",label:"Select Image","prepend-icon":"",outlined:""},on:{change:a.onFileChange},model:{value:a.imageUpload,callback:function(t){a.imageUpload=t},expression:"imageUpload"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){a.dialogImageUload=!1}}},[a._v("Discard")]),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:a.uploadImage}},[a._v("Upload Image")])],1)],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[e("v-img",{staticClass:"mt-n7",attrs:{src:a.updatedData.image}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"10"}},[e("v-textarea",{attrs:{outlined:"",label:"Bio"},model:{value:a.updatedData.bio,callback:function(t){a.$set(a.updatedData,"bio",t)},expression:"updatedData.bio"}})],1)],1),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[a._v("Personal Info")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Contact Number",type:"tel",outlined:""},model:{value:a.updatedData.mbnumber,callback:function(t){a.$set(a.updatedData,"mbnumber",t)},expression:"updatedData.mbnumber"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Email",type:"email",outlined:""},model:{value:a.updatedData.email,callback:function(t){a.$set(a.updatedData,"email",t)},expression:"updatedData.email"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Company Name",type:"text",outlined:""},model:{value:a.updatedData.company.name,callback:function(t){a.$set(a.updatedData.company,"name",t)},expression:"updatedData.company.name"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Company URL",type:"url",outlined:""},model:{value:a.updatedData.company.url,callback:function(t){a.$set(a.updatedData.company,"url",t)},expression:"updatedData.company.url"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"City",type:"text",outlined:""},model:{value:a.updatedData.city,callback:function(t){a.$set(a.updatedData,"city",t)},expression:"updatedData.city"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Country",type:"text",outlined:""},model:{value:a.updatedData.country,callback:function(t){a.$set(a.updatedData,"country",t)},expression:"updatedData.country"}})],1)],1),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[a._v("Social Links")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Facebook",type:"url",outlined:""},model:{value:a.updatedData.socialLinks.facebook,callback:function(t){a.$set(a.updatedData.socialLinks,"facebook",t)},expression:"updatedData.socialLinks.facebook"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Twitter",type:"url",outlined:""},model:{value:a.updatedData.socialLinks.twitter,callback:function(t){a.$set(a.updatedData.socialLinks,"twitter",t)},expression:"updatedData.socialLinks.twitter"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Github",type:"url",outlined:""},model:{value:a.updatedData.socialLinks.github,callback:function(t){a.$set(a.updatedData.socialLinks,"github",t)},expression:"updatedData.socialLinks.github"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"LinkdeIN",type:"url",outlined:""},model:{value:a.updatedData.socialLinks.linkedin,callback:function(t){a.$set(a.updatedData.socialLinks,"linkedin",t)},expression:"updatedData.socialLinks.linkedin"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Medium",type:"url",outlined:""},model:{value:a.updatedData.socialLinks.medium,callback:function(t){a.$set(a.updatedData.socialLinks,"medium",t)},expression:"updatedData.socialLinks.medium"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Website",type:"url",outlined:""},model:{value:a.updatedData.socialLinks.web,callback:function(t){a.$set(a.updatedData.socialLinks,"web",t)},expression:"updatedData.socialLinks.web"}})],1)],1)],1)],1)],1)],1)],1),e("v-divider"),e("v-card-actions",[e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("Close")]),e("v-btn",{attrs:{color:"primary",loading:a.isUpdating},on:{click:a.updateData}},[a._v("Update Details")])],1)],1):a._e()],1)},x=[],C={props:{speakerData:{}},data:function(){return{dialog:!1,visiblity:[!0,!1],imageUploading:!1,imagePre:"",dialogImageUload:!1,imageUpload:[],isUpdating:!1,updatedData:{visible:this.speakerData.visible,name:this.speakerData.name,designation:this.speakerData.designation,mbnumber:this.speakerData.mbnumber,email:this.speakerData.email,image:this.speakerData.image,bio:this.speakerData.bio,id:this.speakerData.id,city:this.speakerData.city,country:this.speakerData.country,company:{name:this.speakerData.company.name,url:this.speakerData.company.url},socialLinks:{facebook:this.speakerData.socialLinks.facebook,github:this.speakerData.socialLinks.github,linkedin:this.speakerData.socialLinks.linkedin,medium:this.speakerData.socialLinks.medium,twitter:this.speakerData.socialLinks.twitter,web:this.speakerData.socialLinks.web}}}},methods:{onFileChange:function(){var a=this,t=new FileReader;t.readAsDataURL(this.imageUpload),t.onload=function(){a.imagePre=t.result}},uploadImage:function(){var a=this;this.imageUploading=!0;var t="".concat(this.updatedData.id,".").concat(this.imageUpload.name.split(".")[1]),e=n["a"].storage.ref("speakers/"+t);e.put(this.imageUpload).then((function(){e.getDownloadURL().then((function(t){a.updatedData.image=t,a.imageUploading=!1}))})),this.dialogImageUload=!1},updateData:function(){var a=this;this.isUpdating=!0,n["a"].firestore.collection("speakers").doc(this.updatedData.id).update({visible:this.updatedData.visible,id:this.speakerData.id,name:this.updatedData.name,designation:this.updatedData.designation,mbnumber:this.updatedData.mbnumber,email:this.updatedData.email,image:this.updatedData.image,bio:this.updatedData.bio,city:this.updatedData.city,country:this.updatedData.country,company:{name:this.updatedData.company.name,url:this.updatedData.company.url},socialLinks:{facebook:this.updatedData.socialLinks.facebook,github:this.updatedData.socialLinks.github,linkedin:this.updatedData.socialLinks.linkedin,medium:this.updatedData.socialLinks.medium,twitter:this.updatedData.socialLinks.twitter,web:this.updatedData.socialLinks.web}}).then((function(){a.isUpdating=!1,a.dialog=!1,a.$emit("showEditSuccess",!0)})).catch((function(){a.isUpdating=!1}))}}},_=C,w=e("62ad"),L=e("a523"),S=e("ce7e"),V=e("23a7"),U=e("4bd4"),$=e("adda"),I=e("0fd9"),T=e("b974"),F=e("2fa4"),z=e("8654"),E=e("a844"),R=Object(d["a"])(_,y,x,!1,null,null,null),j=R.exports;u()(R,{VBtn:m["a"],VCard:v["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VCol:w["a"],VContainer:L["a"],VDialog:b["a"],VDivider:S["a"],VFileInput:V["a"],VForm:U["a"],VIcon:g["a"],VImg:$["a"],VRow:I["a"],VSelect:T["a"],VSpacer:F["a"],VTextField:z["a"],VTextarea:E["a"],VTooltip:f["a"]});var P={name:"viewSpeakers",components:{removeSpeakers:D,editSpeaker:j},data:function(){return{speaker:{},isLoading:!0,isSpeakerFound:!0,snackbarSuccess:!1}},mounted:function(){n["a"].auth.currentUser||this.$router.replace("/admin")},methods:{editSuccessFunction:function(){this.snackbarSuccess=!0,this.loadData()},loadData:function(){var a=this;this.isLoading=!0,n["a"].firestore.collection("speakers").doc(this.$route.params.id).get().then((function(t){t.exists?(a.speaker=t.data(),a.isLoading=!1):(a.isSpeakerFound=!1,a.isLoading=!1)}))}},created:function(){this.loadData()}},N=P,A=(e("167f"),e("8212")),B=e("cc20"),O=(e("8f5a"),e("7efd")),G=e("a9ad"),J=e("58df"),M=Object(J["a"])(O["a"],G["a"]).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...O["a"].options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(a){a&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...O["a"].options.methods.genData.call(this)})}}}),W=e("a75b"),q=e("490a"),H=e("2db4"),K=e("71d9"),Q=Object(d["a"])(N,s,i,!1,null,null,null);t["default"]=Q.exports;u()(Q,{VAvatar:A["a"],VBtn:m["a"],VChip:B["a"],VChipGroup:M,VCol:w["a"],VContainer:L["a"],VContent:W["a"],VIcon:g["a"],VProgressCircular:q["a"],VRow:I["a"],VSnackbar:H["a"],VSpacer:F["a"],VToolbar:K["a"]})},"8f5a":function(a,t,e){}}]);