import{H as M,T as w,M as H}from"./CamKSDFG.js";import{_ as I}from"./BxOl0NSJ.js";import{g as n,h as C,i as L,j as N,y as S,c as A,k as r,w as T,s as B,o as E,b as R}from"./C-vTbds6.js";import{u as F}from"./CA6-J8VV.js";import{s as g}from"./D-30s9gB.js";import"./CgkWV-VQ.js";import"./CGqU9Bw2.js";const z={__name:"[section]",setup(G){const m=n({}),f=n(""),p=n([]),v=n(""),u=n(""),i=n([]),b=n(0),_=n(""),h=n(!1),c=C(),k=async()=>{m.value=await F("getDocumentation",()=>GqlGetDocumentation({href:c.params.section})).then(({data:t})=>{if(!t.value||!t.value.currentDoc.data[0])return B("/docs");const o=t.value.currentDoc.data[t.value.currentDoc.data.findIndex(e=>e.attributes.subsections.find(y=>y.href===c.params.section))].attributes,s=o.subsections.findIndex(e=>e.href===c.params.section);_.value=o.subsections[s].title,v.value=o.section_title,i.value=t.value.allLinks.data.flatMap(e=>e.attributes.subsections),u.value=c.hash.replace(/^#+/,""),b.value=i.value.findIndex(e=>e.title===o.subsections[s].title);const{content:l}=o.subsections[s],a=[],D=new DOMParser().parseFromString(l,"text/html");let d=-1;for(const e of D.body.childNodes)e.localName==="h1"&&(a.push({title:e.outerText,subtitles:[]}),d+=1,e.id=g(e.outerText)),e.localName==="h2"&&d!=-1&&(a[d].subtitles.push(e.outerText),e.id=g(e.outerText));return f.value=D.documentElement.outerHTML,p.value=a,t.value.allLinks.data.map(e=>({section_title:e.attributes.section_title,subsections:e.attributes.subsections}))})};return L(async()=>{await N(async()=>{await k(),h.value=!0})}),S(async t=>{u.value=t.hash.replace(/^#+/,"")}),(t,o)=>{const s=w,l=H,a=M,x=I;return E(),A("div",null,[r(a,null,{default:T(()=>[r(s,null,{default:T(()=>o[0]||(o[0]=[R("Documentation")])),_:1}),r(l,{name:"description",content:"Collection of MITRE SAF© documentation"})]),_:1}),r(x,{"all-links":i.value,"current-heading":u.value,"current-index":b.value,"current-section-title":v.value,"current-subsection":_.value,"doc-data":m.value,"is-loaded":h.value,"table-of-contents":p.value,"rendered-content":f.value},null,8,["all-links","current-heading","current-index","current-section-title","current-subsection","doc-data","is-loaded","table-of-contents","rendered-content"])])}}};export{z as default};
