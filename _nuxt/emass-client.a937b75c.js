import{_ as l}from"./LibraryPage.vue.59485cdc.js";import{g as e,i as c,j as u,m,u as t,o as y}from"./entry.f9854684.js";import{u as p,t as _}from"./gql.c1d24068.js";import"./components.8756109a.js";const P={__name:"emass-client",setup(b){const r=e(!1),n=e(""),s=e(""),i=async()=>{await p("getLibraryPageByName",()=>_({name:"eMASS Client"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return c(async()=>{await u(async()=>{await i(),r.value=!0})}),(a,g)=>{const o=l;return y(),m(o,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{P as default};
