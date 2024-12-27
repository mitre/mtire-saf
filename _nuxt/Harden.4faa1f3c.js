import{H as h,T as _,M as f}from"./components.cdb0ef34.js";import{af as v,c as i,k as s,w as o,a as c,aI as x,o as r,b as y,_ as D,l as k}from"./entry.54e69cac.js";import{_ as H}from"./Table.vue.a17534ee.js";import{_ as T}from"./LoadingSpinner.c509a183.js";import{u as w,w as L}from"./gql.c45e0d70.js";import"./scrollToTop.vue.945dec59.js";import"./GitHubLogo.34a633a0.js";import"./useSlugify.31da7e80.js";const S={data(){return{categorizedData:{"Cloud Service Providers":[],"Virtual Platforms":[],"Operating Systems":[],Databases:[],Network:[],"Application Logic":[],"Web Servers":[]},guidanceData:[],hardeningData:[],isLoaded:!1}},mounted(){this.$nextTick(async()=>{await this.getGuidance(),this.getHardeningData(),this.isLoaded=!0})},methods:{async getGuidance(){this.guidanceData=await w("getHardenData",()=>L()).then(({data:a})=>a.value.guidances.data.map(e=>({name:e.attributes.name,id:e.id,type:e.attributes.type,category:e.attributes.category,source:e.attributes.source,date:e.attributes.date,version:e.attributes.version.length!==0?e.attributes.version[0].version:0,hardening:e.attributes.hardening.data.map(t=>({id:t.id,name:t.attributes.name,name_long:t.attributes.name_long,source:t.attributes.source,platform:{name:t.attributes.platform.data.attributes.name,link:t.attributes.platform.data.attributes.link,icon:{name:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.name:null,url:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.url:null,alt:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.alternativeText:null}},partner:{name:t.attributes.partner.data.attributes.name,name_long:t.attributes.partner.data.attributes.name_long,link:t.attributes.partner.data.attributes.link,icon:{name:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.name:null,url:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.url:null,alt:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.alternativeText:null}}}))})))},getHardeningData(){for(let a=0;a<this.guidanceData.length;a+=1)this.guidanceData[a].hardening.forEach(e=>{const t=e;t.category=this.guidanceData[a].category,t.version=this.guidanceData[a].version,t.benchmarkID=this.guidanceData[a].id,this.hardeningData.push(t)});for(let a=0;a<this.hardeningData.length;a+=1)this.categorizedData[this.hardeningData[a].category.replaceAll("_"," ")].push(this.hardeningData[a])}}},$={class:"relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"},A={key:0},E=x('<div class="sm:flex sm:items-center"><div class="sm:flex-auto"><h1 class="text-5xl font-bold text-header">Harden</h1><p class="mt-2 text-xl"> These open source community-based hardening baselines help to securely configure common system components. MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at <a href="mailto:saf@groups.mitre.org" class="underline">saf@groups.mitre.org</a>. </p><h2 class="mt-2 text-2xl font-bold text-header">Usage</h2><p class="mt-2 text-xl">The Hardening Library contents are hardening scripts that can be used in conjunction with orchestration tools such as Ansible or Chef recipes to harden system components against baselines. Specific usage instructions for each piece of hardening content can be found in their repository README files.</p></div></div>',1),M={key:1,class:"grid h-screen place-items-center"};function N(a,e,t,V,n,G){const l=_,u=f,d=h,m=D,p=H,b=T,g=k;return r(),i("div",null,[s(d,null,{default:o(()=>[s(l,null,{default:o(()=>[y("Harden Library")]),_:1}),s(u,{name:"description",content:"Harden library content"})]),_:1}),c("div",null,[s(m),c("div",$,[n.isLoaded?(r(),i("div",A,[E,s(p,{entries:n.categorizedData},null,8,["entries"])])):(r(),i("div",M,[s(b)]))]),s(g)])])}const q=v(S,[["render",N]]);export{q as default};
