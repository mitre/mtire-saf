(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cc513da"],{"1d123":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[s("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.isSnackbar,callback:function(e){t.isSnackbar=e},expression:"isSnackbar"}},[t._v("\n    "+t._s(t.snackBarText)+"\n    "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.isSnackbar=!1}}},[t._v("Close")])],1),s("v-container",{staticClass:"text-center",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-toolbar",{staticClass:"elevation-1"},[s("v-toolbar-title",[t._v("Speaker Details:")]),s("div",{staticClass:"flex-grow-1"}),s("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-search-web",label:"Search","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),s("AddSpeaker",{staticClass:"ml-2",on:{showSuccess:t.success}})],1)],1)],1),s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[t.speakerLoader?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"text-center",attrs:{col:"12",md:"2"}},[s("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):s("v-row",[s("v-container",{attrs:{fluid:""}},[s("v-data-iterator",{attrs:{items:t.speakerData,search:t.search},scopedSlots:t._u([{key:"default",fn:function(e){return[s("v-row",{attrs:{align:"center"}},t._l(e.items,(function(e,a){return s("v-col",{key:a,staticClass:"pa-1",attrs:{col:"12",cols:"6",md:"2",sm:"3"}},[s("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-center py-3 elevation-1",class:1==t.$vuetify.theme.dark?"grey darken-3":"white",staticStyle:{cursor:"pointer",height:"200px"},on:{click:function(i){return t.gotoSpeaker(e.id)}}},[s("v-avatar",{attrs:{size:"100"}},[s("img",{attrs:{src:e.image.length>0?e.image:i("72ab"),alt:""}})]),s("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(e.name))]),s("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"70%"}},[t._v(t._s(e.designation))]),s("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"80%"}},[t._v(t._s(e.company.name))])],1)])})),1)]}}])})],1)],1)],1)],1)],1)],1)],1)},a=[],n=i("dc59"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("v-dialog",{attrs:{scrollable:"",width:"1200"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({attrs:{color:"indigo",dark:""}},s),[t._v("Add Speaker")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline deep-purple accent-4 white--text"},[t._v("Add new Speaker")]),i("v-divider"),i("v-card-text",[i("v-container",{attrs:{fluid:""}},[i("v-form",{attrs:{"lazy-validation":""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker Status")])]),i("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[i("v-select",{attrs:{items:t.visiblity,label:"Visiblity Status",outlined:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1),i("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[i("v-text-field",{attrs:{label:"ID",type:"text",outlined:""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}})],1)],1),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker info")])]),i("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"8",xl:"3"}},[i("v-text-field",{attrs:{label:"Full Name",type:"text",outlined:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"4",xl:"3"}},[i("v-text-field",{attrs:{label:"Desigination",type:"text",outlined:""},model:{value:t.desigination,callback:function(e){t.desigination=e},expression:"desigination"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{label:"Profile Image URL",type:"text",outlined:""},model:{value:t.imageURL,callback:function(e){t.imageURL=e},expression:"imageURL"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[i("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({staticClass:"mt-n6",attrs:{color:"primary",loading:t.imageUploading,dark:""}},s),[t._v("Upload Image")])]}}]),model:{value:t.dialogImageUload,callback:function(e){t.dialogImageUload=e},expression:"dialogImageUload"}},[i("v-card",[i("v-card-title",[t._v("Upload Speaker Image")]),i("v-card-text",[i("v-img",{staticClass:"mb-6",attrs:{src:t.imagePre}}),i("v-file-input",{attrs:{accept:"image/*",label:"Select Image","prepend-icon":"",outlined:""},on:{change:t.onFileChange},model:{value:t.imageUpload,callback:function(e){t.imageUpload=e},expression:"imageUpload"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogImageUload=!1}}},[t._v("Discard")]),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.uploadImage}},[t._v("Upload Image")])],1)],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[i("v-img",{staticClass:"mt-n7",attrs:{src:t.imageURL}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"10"}},[i("v-textarea",{attrs:{outlined:"",label:"Bio"},model:{value:t.bio,callback:function(e){t.bio=e},expression:"bio"}})],1)],1),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Personal Info")])]),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Contact Number",type:"tel",outlined:""},model:{value:t.mbnumber,callback:function(e){t.mbnumber=e},expression:"mbnumber"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Email",type:"email",outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Company Name",type:"text",outlined:""},model:{value:t.companyName,callback:function(e){t.companyName=e},expression:"companyName"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Company URL",type:"url",outlined:""},model:{value:t.companyURL,callback:function(e){t.companyURL=e},expression:"companyURL"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"City",type:"text",outlined:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Country",type:"text",outlined:""},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)],1),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Social Links")])]),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Facebook",type:"url",outlined:""},model:{value:t.facebook,callback:function(e){t.facebook=e},expression:"facebook"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Twitter",type:"url",outlined:""},model:{value:t.twitter,callback:function(e){t.twitter=e},expression:"twitter"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Github",type:"url",outlined:""},model:{value:t.github,callback:function(e){t.github=e},expression:"github"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"LinkdeIN",type:"url",outlined:""},model:{value:t.linkedin,callback:function(e){t.linkedin=e},expression:"linkedin"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Medium",type:"url",outlined:""},model:{value:t.medium,callback:function(e){t.medium=e},expression:"medium"}})],1),i("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"Website",type:"url",outlined:""},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}})],1)],1)],1)],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),i("v-btn",{attrs:{color:"primary",dark:"",loading:t.addSpeakerLoading},on:{click:t.saveData}},[t._v("Add new Speaker")])],1)],1)],1)],1)},r=[],l={name:"addSpeaker",data:function(){return{dialog:!1,dialogImageUload:!1,visiblity:[!0,!1],uploadbtnText:"Upload Image",visible:Boolean,userId:"",name:"",desigination:"",imageURL:"",imagePre:"",imageUploading:!1,bio:"",imageUpload:[],mbnumber:"",email:"",companyName:"",companyURL:"",country:"",city:"",facebook:"",github:"",linkedin:"",twitter:"",medium:"",website:"",addSpeakerLoading:!1}},methods:{onFileChange:function(){var t=this,e=new FileReader;e.readAsDataURL(this.imageUpload),e.onload=function(){t.imagePre=e.result}},uploadImage:function(){var t=this;this.imageUploading=!0;var e="".concat(this.userId,".").concat(this.imageUpload.name.split(".")[1]),i=n["a"].storage.ref("speakers/"+e);i.put(this.imageUpload).then((function(){i.getDownloadURL().then((function(e){t.imageURL=e,t.imageUploading=!1,t.uploadImage="Uploaded"}))})),this.dialogImageUload=!1},saveData:function(){var t=this;this.addSpeakerLoading=!0;var e={visible:this.visible,id:this.userId,name:this.name,designation:this.desigination,mbnumber:this.mbnumber,email:this.email,image:this.imageURL,bio:this.bio,city:this.city,country:this.country,company:{name:this.companyName,url:this.companyURL},socialLinks:{facebook:this.facebook,github:this.github,linkedin:this.linkedin,medium:this.medium,twitter:this.twitter,web:this.website}};n["a"].firestore.collection("speakers").doc(e.id).set(e).then((function(){t.dialog=!1,t.addSpeakerLoading=!1,t.$emit("showSuccess",!0)})).catch((function(){}))}}},c=l,p=i("2877"),d=i("6544"),u=i.n(d),h=i("8336"),m=i("b0af"),g=i("99d9"),v=i("62ad"),b=i("a523"),f=i("169a"),y=i("ce7e"),x=i("23a7"),S=i("4bd4"),O=i("adda"),P=i("0fd9"),k=i("b974"),I=i("2fa4"),$=i("8654"),C=i("a844"),j=Object(p["a"])(c,o,r,!1,null,null,null),w=j.exports;u()(j,{VBtn:h["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:v["a"],VContainer:b["a"],VDialog:f["a"],VDivider:y["a"],VFileInput:x["a"],VForm:S["a"],VImg:O["a"],VRow:P["a"],VSelect:k["a"],VSpacer:I["a"],VTextField:$["a"],VTextarea:C["a"]});var D={name:"speakers",components:{AddSpeaker:w},data:function(){return{search:"",speakerData:[],loading:!0,speakerLoader:!0,isSnackbar:!1,snackBarText:""}},created:function(){this.$route.query.msg&&(this.isSnackbar=!0,this.snackBarText="Speaker Removed Successfully")},mounted:function(){n["a"].auth.currentUser?this.showData():this.$router.replace("login")},methods:{gotoSpeaker:function(t){this.$router.replace("/admin/dashboard/speaker/"+t)},success:function(){this.isSnackbar=!0,this.snackBarText="Speaker Added Successfully",this.showData()},showData:function(){var t=this;this.speakerLoader=!0,this.speakerData=[],n["a"].firestore.collection("speakers").get().then((function(e){e.forEach((function(e){t.id=e.id,t.speakerData.push(e.data())})),t.speakerLoader=!1,t.loading=!1})).catch((function(){}))}}},L=D,B=i("8212"),F=i("a75b"),U=i("c377"),_=i("490a"),A=i("2db4"),E=i("71d9"),T=i("2a7f"),V=i("269a"),R=i.n(V),N=i("5607"),z=Object(p["a"])(L,s,a,!1,null,null,null);e["default"]=z.exports;u()(z,{VAvatar:B["a"],VBtn:h["a"],VCol:v["a"],VContainer:b["a"],VContent:F["a"],VDataIterator:U["a"],VProgressCircular:_["a"],VRow:P["a"],VSnackbar:A["a"],VTextField:$["a"],VToolbar:E["a"],VToolbarTitle:T["a"]}),R()(z,{Ripple:N["a"]})},"495d":function(t,e,i){},"4a1a":function(t,e,i){"use strict";var s=i("80d2"),a=i("2b0e");e["a"]=a["a"].extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},sortBy:{type:[String,Array],default:()=>[]},sortDesc:{type:[Boolean,Array],default:()=>[]},customSort:{type:Function,default:s["D"]},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:()=>[]},groupDesc:{type:[Boolean,Array],default:()=>[]},customGroup:{type:Function,default:s["u"]},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:s["C"]},serverItemsLength:{type:Number,default:-1}},data(){let t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:Object(s["F"])(this.sortBy),sortDesc:Object(s["F"])(this.sortDesc),groupBy:Object(s["F"])(this.groupBy),groupDesc:Object(s["F"])(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};this.options&&(t=Object.assign(t,this.options));const{sortBy:e,sortDesc:i,groupBy:a,groupDesc:n}=t,o=e.length-i.length,r=a.length-n.length;return o>0&&t.sortDesc.push(...Object(s["l"])(o,!1)),r>0&&t.groupDesc.push(...Object(s["l"])(r,!1)),{internalOptions:t}},computed:{itemsLength(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped(){return!!this.internalOptions.groupBy.length},pagination(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems(){let t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems(){let t=this.filteredItems.slice();return!this.disableSort&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps(){return{sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length}},computedOptions(){return{...this.options}}},watch:{computedOptions:{handler(t,e){Object(s["i"])(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler(t,e){Object(s["i"])(t,e)||this.$emit("update:options",t)},deep:!0,immediate:!0},page(t){this.updateOptions({page:t})},"internalOptions.page"(t){this.$emit("update:page",t)},itemsPerPage(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage"(t){this.$emit("update:items-per-page",t)},sortBy(t){this.updateOptions({sortBy:Object(s["F"])(t)})},"internalOptions.sortBy"(t,e){!Object(s["i"])(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc(t){this.updateOptions({sortDesc:Object(s["F"])(t)})},"internalOptions.sortDesc"(t,e){!Object(s["i"])(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy(t){this.updateOptions({groupBy:Object(s["F"])(t)})},"internalOptions.groupBy"(t,e){!Object(s["i"])(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc(t){this.updateOptions({groupDesc:Object(s["F"])(t)})},"internalOptions.groupDesc"(t,e){!Object(s["i"])(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort"(t){this.$emit("update:multi-sort",t)},mustSort(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort"(t){this.$emit("update:must-sort",t)},pageCount:{handler(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler(t){this.$emit("current-items",t)},immediate:!0},pagination:{handler(t,e){Object(s["i"])(t,e)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle(t,e,i,a,n,o){let r=e.slice(),l=i.slice();const c=r.findIndex(e=>e===t);return c<0?(o||(r=[],l=[]),r.push(t),l.push(!1)):c>=0&&!l[c]?l[c]=!0:n?l[c]=!1:(r.splice(c,1),l.splice(c,1)),Object(s["i"])(r,e)&&Object(s["i"])(l,i)||(a=1),{by:r,desc:l,page:a}},group(t){const{by:e,desc:i,page:s}=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1);this.updateOptions({groupBy:e,groupDesc:i,page:s})},sort(t){if(Array.isArray(t))return this.sortArray(t);const{by:e,desc:i,page:s}=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort);this.updateOptions({sortBy:e,sortDesc:i,page:s})},sortArray(t){const e=t.map(t=>{const e=this.internalOptions.sortBy.findIndex(e=>e===t);return e>-1&&this.internalOptions.sortDesc[e]});this.updateOptions({sortBy:t,sortDesc:e})},updateOptions(t){this.internalOptions={...this.internalOptions,...t,page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page}},sortItems(t){let e=this.internalOptions.sortBy,i=this.internalOptions.sortDesc;return this.internalOptions.groupBy.length&&(e=[...this.internalOptions.groupBy,...e],i=[...this.internalOptions.groupDesc,...i]),this.customSort(t,e,i,this.locale)},groupItems(t){return this.customGroup(t,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems(t){return-1===this.serverItemsLength&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,Math.ceil(t.length/this.internalOptions.itemsPerPage))||1),t.slice(this.pageStart,this.pageStop)}},render(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}})},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]},c377:function(t,e,i){"use strict";var s=i("4a1a"),a=i("f41f"),n=i("e4cd"),o=i("7560"),r=i("58df"),l=i("80d2"),c=i("d9bd");e["a"]=Object(r["a"])(n["a"],o["a"]).extend({name:"v-data-iterator",props:{...s["a"].options.props,itemKey:{type:String,default:"id"},value:{type:Array,default:()=>[]},singleSelect:Boolean,expanded:{type:Array,default:()=>[]},mobileBreakpoint:{...n["a"].options.props.mobileBreakpoint,default:600},singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}},data:()=>({selection:{},expansion:{},internalCurrentItems:[]}),computed:{everyItem(){return!!this.selectableItems.length&&this.selectableItems.every(t=>this.isSelected(t))},someItems(){return this.selectableItems.some(t=>this.isSelected(t))},sanitizedFooterProps(){return Object(l["d"])(this.footerProps)},selectableItems(){return this.internalCurrentItems.filter(t=>this.isSelectable(t))}},watch:{value:{handler(t){this.selection=t.reduce((t,e)=>(t[Object(l["o"])(e,this.itemKey)]=e,t),{})},immediate:!0},selection(t,e){Object(l["i"])(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler(t){this.expansion=t.reduce((t,e)=>(t[Object(l["o"])(e,this.itemKey)]=!0,t),{})},immediate:!0},expansion(t,e){if(Object(l["i"])(t,e))return;const i=Object.keys(t).filter(e=>t[e]),s=i.length?this.items.filter(t=>i.includes(String(Object(l["o"])(t,this.itemKey)))):[];this.$emit("update:expanded",s)}},created(){const t=[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(c["a"])(t,e,this)});const e=["expand","content-class","content-props","content-tag"];e.forEach(t=>{this.$attrs.hasOwnProperty(t)&&Object(c["e"])(t)})},methods:{toggleSelectAll(t){const e=Object.assign({},this.selection);for(let i=0;i<this.selectableItems.length;i++){const s=this.selectableItems[i];if(!this.isSelectable(s))continue;const a=Object(l["o"])(s,this.itemKey);t?e[a]=s:delete e[a]}this.selection=e,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:t})},isSelectable(t){return!1!==Object(l["o"])(t,this.selectableKey)},isSelected(t){return!!this.selection[Object(l["o"])(t,this.itemKey)]||!1},select(t,e=!0,i=!0){if(!this.isSelectable(t))return;const s=this.singleSelect?{}:Object.assign({},this.selection),a=Object(l["o"])(t,this.itemKey);if(e?s[a]=t:delete s[a],this.singleSelect&&i){const t=Object.keys(this.selection),e=t.length&&Object(l["o"])(this.selection[t[0]],this.itemKey);e&&e!==a&&this.$emit("item-selected",{item:this.selection[e],value:!1})}this.selection=s,i&&this.$emit("item-selected",{item:t,value:e})},isExpanded(t){return this.expansion[Object(l["o"])(t,this.itemKey)]||!1},expand(t,e=!0){const i=this.singleExpand?{}:Object.assign({},this.expansion),s=Object(l["o"])(t,this.itemKey);e?i[s]=!0:delete i[s],this.expansion=i,this.$emit("item-expanded",{item:t,value:e})},createItemProps(t,e){return{item:t,index:e,select:e=>this.select(t,e),isSelected:this.isSelected(t),expand:e=>this.expand(t,e),isExpanded:this.isExpanded(t),isMobile:this.isMobile}},genEmptyWrapper(t){return this.$createElement("div",t)},genEmpty(t,e){if(0===t&&this.loading){const t=this.$slots.loading||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(t)}if(0===t){const t=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(t)}if(0===e){const t=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(t)}return null},genItems(t){const e=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return e?[e]:this.$scopedSlots.default?this.$scopedSlots.default({...t,isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,isMobile:this.isMobile,expand:this.expand}):this.$scopedSlots.item?t.items.map((t,e)=>this.$scopedSlots.item(this.createItemProps(t,e))):[]},genFooter(t){if(this.hideDefaultFooter)return null;const e={props:{...this.sanitizedFooterProps,options:t.options,pagination:t.pagination},on:{"update:options":e=>t.updateOptions(e)}},i=Object(l["p"])("footer.",this.$scopedSlots);return this.$createElement(a["a"],{scopedSlots:i,...e})},genDefaultScopedSlot(t){const e={...t,someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll};return this.$createElement("div",{staticClass:"v-data-iterator"},[Object(l["r"])(this,"header",e,!0),this.genItems(t),this.genFooter(t),Object(l["r"])(this,"footer",e,!0)])}},render(){return this.$createElement(s["a"],{props:this.$props,on:{"update:options":(t,e)=>!Object(l["i"])(t,e)&&this.$emit("update:options",t),"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!Object(l["i"])(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}})},f41f:function(t,e,i){"use strict";i("495d");var s=i("b974"),a=i("9d26"),n=i("afdd"),o=i("2b0e");e["a"]=o["a"].extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:()=>[5,10,15,-1]},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions(){return this.itemsPerPageOptions.map(t=>"object"===typeof t?t:this.genDataItemsPerPageOption(t))}},methods:{updateOptions(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage(){this.updateOptions({page:1})},onPreviousPage(){this.updateOptions({page:this.options.page-1})},onNextPage(){this.updateOptions({page:this.options.page+1})},onLastPage(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage(t){this.updateOptions({itemsPerPage:t,page:1})},genDataItemsPerPageOption(t){return{text:-1===t?this.$vuetify.lang.t(this.itemsPerPageAllText):String(t),value:t}},genItemsPerPageSelect(){let t=this.options.itemsPerPage;const e=this.computedDataItemsPerPageOptions;return e.length<=1?null:(e.find(e=>e.value===t)||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(s["a"],{attrs:{"aria-label":this.$vuetify.lang.t(this.itemsPerPageText)},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo(){let t=["–"];const e=this.pagination.itemsLength;let i=this.pagination.pageStart,s=this.pagination.pageStop;return this.pagination.itemsLength&&this.pagination.itemsPerPage?(i=this.pagination.pageStart+1,s=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop,t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:i,pageStop:s,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,i,s,e)]):this.$scopedSlots["page-text"]&&(t=[this.$scopedSlots["page-text"]({pageStart:i,pageStop:s,itemsLength:e})]),this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon(t,e,i,s){return this.$createElement(n["a"],{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":i}},[this.$createElement(a["a"],s)])},genIcons(){const t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render(){return this.$createElement("div",{staticClass:"v-data-footer"},[this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}})}}]);