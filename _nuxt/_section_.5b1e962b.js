import{H as M,T as w,M as H}from"./components.cdb0ef34.js";import{_ as I}from"./Component.vue.22db6c71.js";import{g as n,h as C,i as L,j as N,y as S,c as A,k as r,w as T,p as B,o as E,b as R}from"./entry.54e69cac.js";import{u as F,e as G}from"./gql.c45e0d70.js";import{s as g}from"./useSlugify.31da7e80.js";import"./scrollToTop.vue.945dec59.js";import"./LoadingSpinner.c509a183.js";const J={__name:"[section]",setup(O){const m=n({}),f=n(""),p=n([]),v=n(""),u=n(""),i=n([]),b=n(0),_=n(""),h=n(!1),c=C(),k=async()=>{m.value=await F("getDocumentation",()=>G({href:c.params.section})).then(({data:t})=>{if(!t.value||!t.value.currentDoc.data[0])return B("/docs");const o=t.value.currentDoc.data[t.value.currentDoc.data.findIndex(e=>e.attributes.subsections.find(y=>y.href===c.params.section))].attributes,a=o.subsections.findIndex(e=>e.href===c.params.section);_.value=o.subsections[a].title,v.value=o.section_title,i.value=t.value.allLinks.data.flatMap(e=>e.attributes.subsections),u.value=c.hash.replace(/^#+/,""),b.value=i.value.findIndex(e=>e.title===o.subsections[a].title);const{content:l}=o.subsections[a],s=[],D=new DOMParser().parseFromString(l,"text/html");let d=-1;for(const e of D.body.childNodes)e.localName==="h1"&&(s.push({title:e.outerText,subtitles:[]}),d+=1,e.id=g(e.outerText)),e.localName==="h2"&&d!=-1&&(s[d].subtitles.push(e.outerText),e.id=g(e.outerText));return f.value=D.documentElement.outerHTML,p.value=s,t.value.allLinks.data.map(e=>({section_title:e.attributes.section_title,subsections:e.attributes.subsections}))})};return L(async()=>{await N(async()=>{await k(),h.value=!0})}),S(async t=>{u.value=t.hash.replace(/^#+/,"")}),(t,o)=>{const a=w,l=H,s=M,x=I;return E(),A("div",null,[r(s,null,{default:T(()=>[r(a,null,{default:T(()=>[R("Documentation")]),_:1}),r(l,{name:"description",content:"Collection of MITRE SAF© documentation"})]),_:1}),r(x,{"all-links":i.value,"current-heading":u.value,"current-index":b.value,"current-section-title":v.value,"current-subsection":_.value,"doc-data":m.value,"is-loaded":h.value,"table-of-contents":p.value,"rendered-content":f.value},null,8,["all-links","current-heading","current-index","current-section-title","current-subsection","doc-data","is-loaded","table-of-contents","rendered-content"])])}}};export{J as default};
