import{g as f,at as P,ap as C,S as p,J as S,au as v,u as F,av as B,aw as T,ax as h,ay as s}from"./entry.8e43a73a.js";const k=()=>null;function mt(...e){const o=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(o);let[t,n,a={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??k,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const r=v(),m=()=>r.isHydrating?r.payload.data[t]:r.static.data[t],y=()=>m()!==void 0;(!r._asyncData[t]||!a.immediate)&&(r._asyncData[t]={data:f(m()??a.default()),pending:f(!y()),error:P(r.payload._errors,t),status:f("idle")});const i={...r._asyncData[t]};i.refresh=i.execute=(c={})=>{if(r._asyncDataPromises[t]){if(c.dedupe===!1)return r._asyncDataPromises[t];r._asyncDataPromises[t].cancelled=!0}if((c._initial||r.isHydrating&&c._initial!==!1)&&y())return m();i.pending.value=!0,i.status.value="pending";const g=new Promise((d,l)=>{try{d(n(r))}catch(_){l(_)}}).then(d=>{if(g.cancelled)return r._asyncDataPromises[t];let l=d;a.transform&&(l=a.transform(d)),a.pick&&(l=H(l,a.pick)),i.data.value=l,i.error.value=null,i.status.value="success"}).catch(d=>{if(g.cancelled)return r._asyncDataPromises[t];i.error.value=d,i.data.value=F(a.default()),i.status.value="error"}).finally(()=>{g.cancelled||(i.pending.value=!1,r.payload.data[t]=i.data.value,i.error.value&&(r.payload._errors[t]=B(i.error.value)),delete r._asyncDataPromises[t])});return r._asyncDataPromises[t]=g,r._asyncDataPromises[t]};const q=()=>i.refresh({_initial:!0}),b=a.server!==!1&&r.payload.serverRendered;{const c=T();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const d=c._nuxtOnBeforeMountCbs;c&&(C(()=>{d.forEach(l=>{l()}),d.splice(0,d.length)}),p(()=>d.splice(0,d.length)))}b&&r.isHydrating&&y()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):c&&(r.payload.serverRendered&&r.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(q):a.immediate&&q(),a.watch&&S(a.watch,()=>i.refresh());const g=r.hook("app:data:refresh",d=>{if(!d||d.includes(t))return i.refresh()});c&&p(g)}const D=Promise.resolve(r._asyncDataPromises[t]).then(()=>i);return Object.assign(D,i),D}function H(e,o){const t={};for(const n of o)t[n]=e[n];return t}const x=()=>{const e=v();if(!e._gqlState)throw new Error("GQL State is not available.");return e==null?void 0:e._gqlState};function u(){const e=x(),o=A();return(...t)=>{var y;const n=(typeof(t==null?void 0:t[0])!="string"&&"operation"in(t==null?void 0:t[0])?t[0].operation:t[0])??void 0,a=(typeof(t==null?void 0:t[0])!="string"&&"variables"in(t==null?void 0:t[0])?t[0].variables:t[1])??void 0,r=Object.keys(G).find(i=>G[i].includes(n))??"default",{instance:m}=(y=e.value)==null?void 0:y[r];if(!m)throw new Error("Invalid GraphQL Operation");return ct[r](m,async(i,q,b)=>{var D,c,g,d;try{return await i()}catch(l){throw o.value={client:r,operationType:b,operationName:q,statusCode:(D=l==null?void 0:l.response)==null?void 0:D.status,gqlErrors:((c=l==null?void 0:l.response)==null?void 0:c.errors)||((g=l==null?void 0:l.response)==null?void 0:g.message)&&[{message:(d=l==null?void 0:l.response)==null?void 0:d.message}]||[]},e.value.onError&&e.value.onError(o.value),o.value}})[n](a)}}const A=()=>h("_gqlErrors",()=>null),V=s`
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
    `,R=s`
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
    `,J=s`
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
    `,w=s`
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
    `,K=s`
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
    `,lt=(e,o,t)=>e();function dt(e,o=lt){return{blogPosts(t,n){return o(a=>e.request(V,t,{...n,...a}),"blogPosts","query")},getAllDocumentation(t,n){return o(a=>e.request(I,t,{...n,...a}),"getAllDocumentation","query")},FAQs(t,n){return o(a=>e.request(N,t,{...n,...a}),"FAQs","query")},getApplicationPage(t,n){return o(a=>e.request($,t,{...n,...a}),"getApplicationPage","query")},getBlogAuthor(t,n){return o(a=>e.request(L,t,{...n,...a}),"getBlogAuthor","query")},getBlogDataFromAuthor(t,n){return o(a=>e.request(Q,t,{...n,...a}),"getBlogDataFromAuthor","query")},getBlogDataFromID(t,n){return o(a=>e.request(E,t,{...n,...a}),"getBlogDataFromID","query")},getCapabilities(t,n){return o(a=>e.request(M,t,{...n,...a}),"getCapabilities","query")},getConvertFromHDFs(t,n){return o(a=>e.request(O,t,{...n,...a}),"getConvertFromHDFs","query")},getConvertToHDFs(t,n){return o(a=>e.request(U,t,{...n,...a}),"getConvertToHDFs","query")},getDocumentation(t,n){return o(a=>e.request(j,t,{...n,...a}),"getDocumentation","query")},getFaqByQuestionNumber(t,n){return o(a=>e.request(R,t,{...n,...a}),"getFaqByQuestionNumber","query")},getFrameworkPage(t,n){return o(a=>e.request(J,t,{...n,...a}),"getFrameworkPage","query")},getGettingStartedPage(t,n){return o(a=>e.request(z,t,{...n,...a}),"getGettingStartedPage","query")},getGuidanceData(t,n){return o(a=>e.request(w,t,{...n,...a}),"getGuidanceData","query")},getGuidanceDataFromID(t,n){return o(a=>e.request(K,t,{...n,...a}),"getGuidanceDataFromID","query")},getHardenData(t,n){return o(a=>e.request(X,t,{...n,...a}),"getHardenData","query")},getIndexDocumentation(t,n){return o(a=>e.request(Y,t,{...n,...a}),"getIndexDocumentation","query")},getJsonContentByPage(t,n){return o(a=>e.request(Z,t,{...n,...a}),"getJsonContentByPage","query")},getLibraryPageByName(t,n){return o(a=>e.request(W,t,{...n,...a}),"getLibraryPageByName","query")},getScheduleData(t,n){return o(a=>e.request(tt,t,{...n,...a}),"getScheduleData","query")},getSponsors(t,n){return o(a=>e.request(et,t,{...n,...a}),"getSponsors","query")},getTenets(t,n){return o(a=>e.request(at,t,{...n,...a}),"getTenets","query")},getTextContentByPage(t,n){return o(a=>e.request(nt,t,{...n,...a}),"getTextContentByPage","query")},getToolset(t,n){return o(a=>e.request(ot,t,{...n,...a}),"getToolset","query")},getTrainingData(t,n){return o(a=>e.request(rt,t,{...n,...a}),"getTrainingData","query")},getUserStories(t,n){return o(a=>e.request(st,t,{...n,...a}),"getUserStories","query")},getValidateData(t,n){return o(a=>e.request(it,t,{...n,...a}),"getValidateData","query")},getVendors(t,n){return o(a=>e.request(ut,t,{...n,...a}),"getVendors","query")}}}const ct={default:dt},G={default:["blogPosts","getAllDocumentation","FAQs","getApplicationPage","getBlogAuthor","getBlogDataFromAuthor","getBlogDataFromID","getCapabilities","getConvertFromHDFs","getConvertToHDFs","getDocumentation","getFaqByQuestionNumber","getFrameworkPage","getGettingStartedPage","getGuidanceData","getGuidanceDataFromID","getHardenData","getIndexDocumentation","getJsonContentByPage","getLibraryPageByName","getScheduleData","getSponsors","getTenets","getTextContentByPage","getToolset","getTrainingData","getUserStories","getValidateData","getVendors"]},yt=(...e)=>u()("FAQs",...e),Dt=(...e)=>u()("blogPosts",...e),qt=(...e)=>u()("getAllDocumentation",...e),bt=(...e)=>u()("getApplicationPage",...e),ft=(...e)=>u()("getBlogAuthor",...e),pt=(...e)=>u()("getBlogDataFromAuthor",...e),Gt=(...e)=>u()("getBlogDataFromID",...e),vt=(...e)=>u()("getCapabilities",...e),_t=(...e)=>u()("getDocumentation",...e),Pt=(...e)=>u()("getFaqByQuestionNumber",...e),Ct=(...e)=>u()("getFrameworkPage",...e),St=(...e)=>u()("getGettingStartedPage",...e),Ft=(...e)=>u()("getGuidanceDataFromID",...e),Bt=(...e)=>u()("getHardenData",...e),Tt=(...e)=>u()("getIndexDocumentation",...e),ht=(...e)=>u()("getLibraryPageByName",...e),kt=(...e)=>u()("getScheduleData",...e),Ht=(...e)=>u()("getSponsors",...e),xt=(...e)=>u()("getTenets",...e),At=(...e)=>u()("getToolset",...e),Vt=(...e)=>u()("getTrainingData",...e),It=(...e)=>u()("getUserStories",...e),Nt=(...e)=>u()("getValidateData",...e),$t=(...e)=>u()("getVendors",...e);export{bt as G,pt as a,ft as b,Gt as c,Dt as d,_t as e,Tt as f,qt as g,Pt as h,yt as i,Ct as j,St as k,At as l,vt as m,Ht as n,$t as o,It as p,xt as q,ht as r,Ft as s,Bt as t,mt as u,Nt as v,Vt as w,kt as x};
