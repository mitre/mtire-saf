import{_ as l}from"./LibraryPage.vue.205a4850.js";import{u as c,t as u}from"./gql.c45e0d70.js";import{g as t,i as y,j as m,v as b,u as e,o as p}from"./entry.54e69cac.js";import"./components.cdb0ef34.js";const x={__name:"stig-xccdf-xml-library",setup(_){const r=t(!1),n=t(""),i=t(""),s=async()=>{await c("getLibraryPageByName",()=>u({name:"STIG XCCDF XML Library"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,i.value=a.value.libraryPages.data[0].attributes.library})};return y(async()=>{await m(async()=>{await s(),r.value=!0})}),(a,g)=>{const o=l;return p(),b(o,{"is-loaded":e(r),"page-title":e(i),"library-content":e(n)},null,8,["is-loaded","page-title","library-content"])}}};export{x as default};
