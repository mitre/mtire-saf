import{g as f,bL as P,be as C,S as p,J as S,ci as v,u as F,cj as B,aS as T,ck as h,cl as s}from"./entry.ab6b7adc.js";const k=()=>null;function mt(...t){const o=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(o);let[e,n,a={}]=t;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??k,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const r=v(),m=()=>r.isHydrating?r.payload.data[e]:r.static.data[e],y=()=>m()!==void 0;(!r._asyncData[e]||!a.immediate)&&(r._asyncData[e]={data:f(m()??a.default()),pending:f(!y()),error:P(r.payload._errors,e),status:f("idle")});const i={...r._asyncData[e]};i.refresh=i.execute=(c={})=>{if(r._asyncDataPromises[e]){if(c.dedupe===!1)return r._asyncDataPromises[e];r._asyncDataPromises[e].cancelled=!0}if((c._initial||r.isHydrating&&c._initial!==!1)&&y())return m();i.pending.value=!0,i.status.value="pending";const g=new Promise((d,l)=>{try{d(n(r))}catch(_){l(_)}}).then(d=>{if(g.cancelled)return r._asyncDataPromises[e];let l=d;a.transform&&(l=a.transform(d)),a.pick&&(l=H(l,a.pick)),i.data.value=l,i.error.value=null,i.status.value="success"}).catch(d=>{if(g.cancelled)return r._asyncDataPromises[e];i.error.value=d,i.data.value=F(a.default()),i.status.value="error"}).finally(()=>{g.cancelled||(i.pending.value=!1,r.payload.data[e]=i.data.value,i.error.value&&(r.payload._errors[e]=B(i.error.value)),delete r._asyncDataPromises[e])});return r._asyncDataPromises[e]=g,r._asyncDataPromises[e]};const D=()=>i.refresh({_initial:!0}),b=a.server!==!1&&r.payload.serverRendered;{const c=T();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const d=c._nuxtOnBeforeMountCbs;c&&(C(()=>{d.forEach(l=>{l()}),d.splice(0,d.length)}),p(()=>d.splice(0,d.length)))}b&&r.isHydrating&&y()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):c&&(r.payload.serverRendered&&r.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(D):a.immediate&&D(),a.watch&&S(a.watch,()=>i.refresh());const g=r.hook("app:data:refresh",d=>{if(!d||d.includes(e))return i.refresh()});c&&p(g)}const q=Promise.resolve(r._asyncDataPromises[e]).then(()=>i);return Object.assign(q,i),q}function H(t,o){const e={};for(const n of o)e[n]=t[n];return e}const x=()=>{const t=v();if(!t._gqlState)throw new Error("GQL State is not available.");return t==null?void 0:t._gqlState};function u(){const t=x(),o=A();return(...e)=>{var y;const n=(typeof(e==null?void 0:e[0])!="string"&&"operation"in(e==null?void 0:e[0])?e[0].operation:e[0])??void 0,a=(typeof(e==null?void 0:e[0])!="string"&&"variables"in(e==null?void 0:e[0])?e[0].variables:e[1])??void 0,r=Object.keys(G).find(i=>G[i].includes(n))??"default",{instance:m}=(y=t.value)==null?void 0:y[r];if(!m)throw new Error("Invalid GraphQL Operation");return ct[r](m,async(i,D,b)=>{var q,c,g,d;try{return await i()}catch(l){throw o.value={client:r,operationType:b,operationName:D,statusCode:(q=l==null?void 0:l.response)==null?void 0:q.status,gqlErrors:((c=l==null?void 0:l.response)==null?void 0:c.errors)||((g=l==null?void 0:l.response)==null?void 0:g.message)&&[{message:(d=l==null?void 0:l.response)==null?void 0:d.message}]||[]},t.value.onError&&t.value.onError(o.value),o.value}})[n](a)}}const A=()=>h("_gqlErrors",()=>null),V=s`
    query blogPosts {
  blogPosts {
    data {
      id
      attributes {
        title
        category
        description
        content
        date
        users_permissions_user {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `,I=s`
    query getAllDocumentation {
  documentations {
    data {
      id
      attributes {
        section_title
        subsections {
          title
          content
          href
        }
      }
    }
  }
}
    `,N=s`
    query FAQs {
  faqs(sort: "question_number:asc") {
    data {
      id
      attributes {
        question_number
        question
        answer
      }
    }
  }
}
    `,$=s`
    query getApplicationPage($page: String!) {
  appPages(filters: {tool: {name: {eqi: $page}}}) {
    data {
      attributes {
        tool {
          data {
            attributes {
              name
              icon {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
        grabber
        description
        features {
          title
          description
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}
    `,L=s`
    query getBlogAuthor($author: String!) {
  usersPermissionsUsers(filters: {name: {eq: $author}}) {
    data {
      attributes {
        name
        jobTitle
        description
        photo {
          data {
            attributes {
              name
              url
            }
          }
        }
        partner {
          data {
            attributes {
              name
            }
          }
        }
        SocialMedia {
          __typename
          ... on ComponentSocialMediaFacebook {
            ProfileLink
          }
          ... on ComponentSocialMediaTwitter {
            ProfileLink
          }
          ... on ComponentSocialMediaInstagram {
            ProfileLink
          }
          ... on ComponentSocialMediaGitHub {
            ProfileLink
          }
          ... on ComponentSocialMediaLinkedIn {
            ProfileLink
          }
          ... on ComponentSocialMediaDisplayEmail {
            DisplayEmail
          }
          ... on ComponentSocialMediaOther {
            ProfileLink
          }
        }
      }
    }
  }
}
    `,Q=s`
    query getBlogDataFromAuthor($author: String!) {
  blogPosts(filters: {users_permissions_user: {name: {eq: $author}}}) {
    data {
      id
      attributes {
        title
        category
        description
        content
        date
        users_permissions_user {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `,E=s`
    query getBlogDataFromID($id: ID!) {
  blogPost(id: $id) {
    data {
      attributes {
        title
        category
        description
        content
        date
        users_permissions_user {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `,M=s`
    query getCapabilities {
  capabilities {
    data {
      id
      attributes {
        name
        description
        order_id
        link
        icon {
          data {
            attributes {
              name
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `,O=s`
    query getConvertFromHDFs {
  convertFromHdfs {
    data {
      attributes {
        name
        logo {
          data {
            attributes {
              name
              url
            }
          }
        }
        href
      }
    }
  }
}
    `,U=s`
    query getConvertToHDFs {
  convertToHdfs {
    data {
      attributes {
        name
        logo {
          data {
            attributes {
              name
              url
            }
          }
        }
        href
      }
    }
  }
}
    `,j=s`
    query getDocumentation {
  currentDoc: documentations {
    data {
      id
      attributes {
        section_title
        subsections {
          id
          title
          href
          content
        }
      }
    }
  }
  allLinks: documentations(sort: "order_id:asc") {
    data {
      attributes {
        section_title
        subsections {
          title
          href
        }
      }
    }
  }
}
    `,J=s`
    query getFaqByQuestionNumber($number: Int!) {
  faqs(filters: {question_number: {eq: $number}}) {
    data {
      id
      attributes {
        question
        answer
        updatedAt
        question_number
        author {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `,R=s`
    query getFrameworkPage($page: String!) {
  frameworkPages(filters: {capability: {name: {eqi: $page}}}) {
    data {
      attributes {
        capability {
          data {
            attributes {
              name
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        grabber
        description
      }
    }
  }
}
    `,z=s`
    query getGettingStartedPage {
  gettingStartedPage {
    data {
      attributes {
        content
      }
    }
  }
}
    `,K=s`
    query getGuidanceData {
  guidances(pagination: {limit: 100}) {
    data {
      id
      attributes {
        name
        type
        category
        source
        date
        version {
          __typename
          ... on ComponentVersionHistoryCis {
            version
          }
          ... on ComponentVersionHistoryStig {
            version
          }
          ... on ComponentVersionHistoryVendor {
            version
          }
          ... on ComponentVersionHistoryStigReady {
            version
          }
        }
        hardening {
          data {
            id
            attributes {
              name
              name_long
              source
              platform {
                data {
                  attributes {
                    name
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
              partner {
                data {
                  attributes {
                    name
                    name_long
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        validation {
          data {
            id
            attributes {
              name
              name_long
              source
              platform {
                data {
                  attributes {
                    name
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
              partner {
                data {
                  attributes {
                    name
                    name_long
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `,w=s`
    query getGuidanceDataFromID($id: ID!) {
  guidance(id: $id) {
    data {
      id
      attributes {
        name
        type
        category
        source
        date
        version {
          __typename
          ... on ComponentVersionHistoryCis {
            version
          }
          ... on ComponentVersionHistoryStig {
            version
          }
          ... on ComponentVersionHistoryVendor {
            version
          }
          ... on ComponentVersionHistoryStigReady {
            version
          }
        }
        hardening {
          data {
            id
            attributes {
              name
              name_long
              source
              code_last_updated
              platform {
                data {
                  attributes {
                    name
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
              partner {
                data {
                  attributes {
                    name
                    name_long
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        validation {
          data {
            id
            attributes {
              name
              name_long
              source
              code_last_updated
              platform {
                data {
                  attributes {
                    name
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
              partner {
                data {
                  attributes {
                    name
                    name_long
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `,X=s`
    query getHardenData {
  guidances(filters: {hardening: {name: {ne: null}}}, pagination: {limit: 100}) {
    data {
      id
      attributes {
        name
        type
        category
        source
        date
        version {
          __typename
          ... on ComponentVersionHistoryCis {
            version
          }
          ... on ComponentVersionHistoryStig {
            version
          }
          ... on ComponentVersionHistoryVendor {
            version
          }
          ... on ComponentVersionHistoryStigReady {
            version
          }
        }
        hardening {
          data {
            id
            attributes {
              name
              name_long
              source
              platform {
                data {
                  attributes {
                    name
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
              partner {
                data {
                  attributes {
                    name
                    name_long
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `,Y=s`
    query getIndexDocumentation {
  currentDoc: documentations(filters: {order_id: {eq: 0}}) {
    data {
      id
      attributes {
        section_title
        subsections {
          id
          title
          href
          content
        }
      }
    }
  }
  allLinks: documentations(sort: "order_id:asc") {
    data {
      attributes {
        section_title
        subsections {
          title
          href
        }
      }
    }
  }
}
    `,Z=s`
    query getJsonContentByPage($pageName: String!) {
  jsonContents(filters: {page: {eq: $pageName}}) {
    data {
      attributes {
        name
        json
        page
      }
    }
  }
}
    `,W=s`
    query getLibraryPageByName($name: String!) {
  libraryPages(filters: {library: {eqi: $name}}) {
    data {
      attributes {
        library
        content
      }
    }
  }
}
    `,tt=s`
    query getScheduleData {
  courseSchedules {
    data {
      attributes {
        title
        date
        link
        index
      }
    }
  }
}
    `,et=s`
    query getSponsors {
  partners(filters: {community: {eq: "sponsor"}}, pagination: {limit: 100}) {
    data {
      id
      attributes {
        name
        name_long
        link
        community
        icon {
          data {
            attributes {
              name
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `,at=s`
    query getTenets {
  tenets {
    data {
      id
      attributes {
        name
        description
        order_id
      }
    }
  }
}
    `,nt=s`
    query getTextContentByPage($pageName: String!) {
  textContents(filters: {page: {eq: $pageName}}) {
    data {
      attributes {
        name
        text
        page
      }
    }
  }
}
    `,ot=s`
    query getToolset {
  tools {
    data {
      id
      attributes {
        name
        description
        order_id
        link
        icon {
          data {
            attributes {
              name
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `,rt=s`
    query getTrainingData {
  trainingCourses {
    data {
      id
      attributes {
        name
        description
        index
      }
    }
  }
}
    `,st=s`
    query getUserStories {
  userStories {
    data {
      id
      attributes {
        question
        answer
        order_id
      }
    }
  }
}
    `,it=s`
    query getValidateData {
  guidances(filters: {validation: {name: {ne: null}}}, pagination: {limit: 100}) {
    data {
      id
      attributes {
        name
        type
        category
        source
        date
        version {
          __typename
          ... on ComponentVersionHistoryCis {
            version
          }
          ... on ComponentVersionHistoryStig {
            version
          }
          ... on ComponentVersionHistoryVendor {
            version
          }
          ... on ComponentVersionHistoryStigReady {
            version
          }
        }
        validation {
          data {
            id
            attributes {
              name
              name_long
              source
              platform {
                data {
                  attributes {
                    name
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
              partner {
                data {
                  attributes {
                    name
                    name_long
                    link
                    icon {
                      data {
                        attributes {
                          name
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `,ut=s`
    query getVendors {
  partners(filters: {community: {eq: "vendor"}}, pagination: {limit: 100}) {
    data {
      id
      attributes {
        name
        name_long
        link
        community
        icon {
          data {
            attributes {
              name
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `,lt=(t,o,e)=>t();function dt(t,o=lt){return{blogPosts(e,n){return o(a=>t.request(V,e,{...n,...a}),"blogPosts","query")},getAllDocumentation(e,n){return o(a=>t.request(I,e,{...n,...a}),"getAllDocumentation","query")},FAQs(e,n){return o(a=>t.request(N,e,{...n,...a}),"FAQs","query")},getApplicationPage(e,n){return o(a=>t.request($,e,{...n,...a}),"getApplicationPage","query")},getBlogAuthor(e,n){return o(a=>t.request(L,e,{...n,...a}),"getBlogAuthor","query")},getBlogDataFromAuthor(e,n){return o(a=>t.request(Q,e,{...n,...a}),"getBlogDataFromAuthor","query")},getBlogDataFromID(e,n){return o(a=>t.request(E,e,{...n,...a}),"getBlogDataFromID","query")},getCapabilities(e,n){return o(a=>t.request(M,e,{...n,...a}),"getCapabilities","query")},getConvertFromHDFs(e,n){return o(a=>t.request(O,e,{...n,...a}),"getConvertFromHDFs","query")},getConvertToHDFs(e,n){return o(a=>t.request(U,e,{...n,...a}),"getConvertToHDFs","query")},getDocumentation(e,n){return o(a=>t.request(j,e,{...n,...a}),"getDocumentation","query")},getFaqByQuestionNumber(e,n){return o(a=>t.request(J,e,{...n,...a}),"getFaqByQuestionNumber","query")},getFrameworkPage(e,n){return o(a=>t.request(R,e,{...n,...a}),"getFrameworkPage","query")},getGettingStartedPage(e,n){return o(a=>t.request(z,e,{...n,...a}),"getGettingStartedPage","query")},getGuidanceData(e,n){return o(a=>t.request(K,e,{...n,...a}),"getGuidanceData","query")},getGuidanceDataFromID(e,n){return o(a=>t.request(w,e,{...n,...a}),"getGuidanceDataFromID","query")},getHardenData(e,n){return o(a=>t.request(X,e,{...n,...a}),"getHardenData","query")},getIndexDocumentation(e,n){return o(a=>t.request(Y,e,{...n,...a}),"getIndexDocumentation","query")},getJsonContentByPage(e,n){return o(a=>t.request(Z,e,{...n,...a}),"getJsonContentByPage","query")},getLibraryPageByName(e,n){return o(a=>t.request(W,e,{...n,...a}),"getLibraryPageByName","query")},getScheduleData(e,n){return o(a=>t.request(tt,e,{...n,...a}),"getScheduleData","query")},getSponsors(e,n){return o(a=>t.request(et,e,{...n,...a}),"getSponsors","query")},getTenets(e,n){return o(a=>t.request(at,e,{...n,...a}),"getTenets","query")},getTextContentByPage(e,n){return o(a=>t.request(nt,e,{...n,...a}),"getTextContentByPage","query")},getToolset(e,n){return o(a=>t.request(ot,e,{...n,...a}),"getToolset","query")},getTrainingData(e,n){return o(a=>t.request(rt,e,{...n,...a}),"getTrainingData","query")},getUserStories(e,n){return o(a=>t.request(st,e,{...n,...a}),"getUserStories","query")},getValidateData(e,n){return o(a=>t.request(it,e,{...n,...a}),"getValidateData","query")},getVendors(e,n){return o(a=>t.request(ut,e,{...n,...a}),"getVendors","query")}}}const ct={default:dt},G={default:["blogPosts","getAllDocumentation","FAQs","getApplicationPage","getBlogAuthor","getBlogDataFromAuthor","getBlogDataFromID","getCapabilities","getConvertFromHDFs","getConvertToHDFs","getDocumentation","getFaqByQuestionNumber","getFrameworkPage","getGettingStartedPage","getGuidanceData","getGuidanceDataFromID","getHardenData","getIndexDocumentation","getJsonContentByPage","getLibraryPageByName","getScheduleData","getSponsors","getTenets","getTextContentByPage","getToolset","getTrainingData","getUserStories","getValidateData","getVendors"]},yt=(...t)=>u()("FAQs",...t),qt=(...t)=>u()("blogPosts",...t),Dt=(...t)=>u()("getAllDocumentation",...t),bt=(...t)=>u()("getApplicationPage",...t),ft=(...t)=>u()("getBlogAuthor",...t),pt=(...t)=>u()("getBlogDataFromAuthor",...t),Gt=(...t)=>u()("getBlogDataFromID",...t),vt=(...t)=>u()("getCapabilities",...t),_t=(...t)=>u()("getDocumentation",...t),Pt=(...t)=>u()("getFaqByQuestionNumber",...t),Ct=(...t)=>u()("getFrameworkPage",...t),St=(...t)=>u()("getGettingStartedPage",...t),Ft=(...t)=>u()("getGuidanceDataFromID",...t),Bt=(...t)=>u()("getHardenData",...t),Tt=(...t)=>u()("getIndexDocumentation",...t),ht=(...t)=>u()("getJsonContentByPage",...t),kt=(...t)=>u()("getLibraryPageByName",...t),Ht=(...t)=>u()("getScheduleData",...t),xt=(...t)=>u()("getSponsors",...t),At=(...t)=>u()("getTenets",...t),Vt=(...t)=>u()("getToolset",...t),It=(...t)=>u()("getTrainingData",...t),Nt=(...t)=>u()("getUserStories",...t),$t=(...t)=>u()("getValidateData",...t),Lt=(...t)=>u()("getVendors",...t);export{bt as G,pt as a,ft as b,Gt as c,qt as d,_t as e,Tt as f,Dt as g,Pt as h,yt as i,Ct as j,ht as k,St as l,Vt as m,vt as n,xt as o,Lt as p,Nt as q,At as r,kt as s,Ft as t,mt as u,Bt as v,$t as w,It as x,Ht as y};
