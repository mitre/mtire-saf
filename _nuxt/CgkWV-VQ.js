import{m as r,d as i,g as a,i as d,bv as w,o as f,c as p,a as s,k as m,u as h}from"./C-vTbds6.js";/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("ArrowUpCircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]),_={class:"max-w-3xl"},v={class:"text-fill transition hover:brightness-110"},k=i({__name:"scrollToTop",setup(x){const t=a(null),n=()=>{var e,c;const o=t;window&&(window.scrollY>0?(e=o.value)==null||e.classList.remove("hidden"):(c=o.value)==null||c.classList.add("hidden"))},l=()=>{window&&window.scrollTo({top:0,behavior:"smooth"})};return d(()=>{window&&window.addEventListener("scroll",n)}),w(()=>{window&&window.removeEventListener("scroll",n)}),(o,e)=>(f(),p("div",_,[s("div",{ref_key:"scrollTopButton",ref:t,class:"fixed bottom-0 right-0 hidden w-fit justify-end pb-3 pr-2 transition"},[s("div",v,[s("button",{class:"flex items-center",onClick:l},[m(h(u),{class:"h-10 w-8 text-blue-500 md:h-10 md:w-10"})])])],512)]))}});export{k as _};
