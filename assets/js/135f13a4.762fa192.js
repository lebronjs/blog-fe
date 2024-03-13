"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[2713],{6392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(4848),s=t(8453);const o={},a="\u63a8\u8350-200\u9519\u8bef\u7edf\u4e00\u5904\u7406",c={id:"others/team-standard/recommend-code200",title:"\u63a8\u8350-200\u9519\u8bef\u7edf\u4e00\u5904\u7406",description:"\u5bf9\u4e8e\u63a5\u53e3\u5c42\u6765\u8bf4\uff0c\u540e\u7aef\u7ecf\u5e38\u5b9a\u4e49\u7684\u7ed3\u6784\u5982\u4e0b\uff1a",source:"@site/docs/others/team-standard/recommend-code200.md",sourceDirName:"others/team-standard",slug:"/others/team-standard/recommend-code200",permalink:"/blog-fe/docs/others/team-standard/recommend-code200",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"AI JavaScript \u98ce\u683c\u6307\u5357",permalink:"/blog-fe/docs/others/team-standard/clean-code-javascript"},next:{title:"\u63a8\u8350-\u4f18\u96c5\u5f15\u7528\u5b57\u4f53",permalink:"/blog-fe/docs/others/team-standard/recommend-css-font"}},d={},i=[{value:"bad",id:"bad",level:3},{value:"good",id:"good",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u63a8\u8350-200\u9519\u8bef\u7edf\u4e00\u5904\u7406",children:"\u63a8\u8350-200\u9519\u8bef\u7edf\u4e00\u5904\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u63a5\u53e3\u5c42\u6765\u8bf4\uff0c\u540e\u7aef\u7ecf\u5e38\u5b9a\u4e49\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n    code: [Number], // \u72b6\u6001\u7801\n    desc: [String], // \u8be6\u7ec6\u63cf\u8ff0\n    detail: [Array, Object] // \u524d\u7aef\u9700\u8981\u7684\u6570\u636e\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"bad",children:"bad"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"batchAddVariable({ globalParamList: validList })\n    .then(res => {\n        if (res === SERVER_ERROR_CODE.SUCCESS) { // !!!Bad: how many interface, how many judge 200\n            this.close(true)\n            this.$toast.show(res.detail.colletion) // !!!Bad: always get detail data\n        } else { // !!!Bad: too much nest\uff0creading difficulty\n            this.$toast.show(res.desc)\n            if (res === SERVER_ERROR_CODE.REPEAT) {\n                ...\n            }\n        }\n    })\n"})}),"\n",(0,r.jsx)(n.h3,{id:"good",children:"good"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"batchAddVariable({ globalParamList: validList })\n    .then(data => {\n        this.close(true)\n        this.$toast.show(data.colletion)\n    })\n    .catch(res => {\n        if (res === SERVER_ERROR_CODE.REPEAT) {\n            ...\n        }\n    })\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsx)(n.p,{children:"http\u5c42axios\u62ff\u5230\u6570\u636e\u540e\u8fdb\u884c\u7edf\u4e00\u5904\u7406"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import Vue from 'vue'\nimport axios from 'axios'\n\nconst service = axios.create({\n    baseURL: rootURL, // api\u7684base_url\n    timeout: 15000, // \u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\n})\n\n// request\u62e6\u622a\u5668\nservice.interceptors.request.use(\n    config => {\n        if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {\n            config.headers['Content-Type'] = 'application/json'\n            if (config.type === 'form') {\n                config.headers['Content-Type'] = 'multipart/form-data'\n            } else {\n                // \u5e8f\u5217\u5316\n                config.data = JSON.stringify(config.data)\n            }\n        }\n\n        return config\n    },\n    error => {\n        Promise.reject(error)\n    }\n)\n\n// respone\u62e6\u622a\u5668\nservice.interceptors.response.use(\n    response => {\n        const res = response.data\n        if (res.code === SERVER_ERROR_CODE.SUCCESS) { // \u7edf\u4e00\u5904\u7406\n            return res.detail // \u76f4\u63a5\u8fd4\u56de\u6570\u636e\n        } else {\n            Vue.prototype.$toast.show(res.desc) // \u9519\u8bef\u7edf\u4e00\u62a5\u51fa\n            return Promise.reject(res)\n        }\n    },\n    error => {\n        return Promise.reject(error)\n    }\n)\n\nexport default service\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5230\u6b64\u57fa\u672c\u5c31\u53ef\u4ee5\u5f88\u4f18\u96c5\u7684\u5199\u903b\u8f91\u4ee3\u7801\u4e86\u3002\u4e0d\u8fc7\u8fd8\u6709\u4e2a\u70b9\u53ef\u4ee5\u7ee7\u7eed\u4f18\u5316\u3002\u901a\u5e38\u60c5\u51b5\uff0c\u540e\u53f0\u8fd4\u56de\u975e200\u9519\u8bef\uff0c\u53ea\u9700\u8981$toast\u63d0\u793a\u7ed3\u679c\u5c31\u884c\uff0ccatch\u4ee3\u7801\u90e8\u5206\u53ef\u4ee5\u7701\u7565\u3002\u7c7b\u4f3c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"batchAddVariable({ globalParamList: validList })\n    .then(data =>  this.close(true))\n    // .catch(() => {}) // \u4e1a\u52a1\u901a\u5e38\u8fd9\u91cc\u4e0d\u9700\u8981\u5199\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u591a\u4e48\u7b80\u6d01\u7684\u4ee3\u7801\uff0c\u4f46Promise\u6267\u884creject\u4ee3\u7801\uff0c\u6d4f\u89c8\u5668\u4f1a\u62a5",(0,r.jsx)(n.code,{children:"Uncaught (in promise)"}),"\u9519\u8bef\u3002\u8fd9\u662f\u56e0\u4e3a\u4e2d\u65ad\u4e86Promise\u64cd\u4f5c\u4f46\u53c8\u6ca1\u6709\u5bf9\u5176\u8fdb\u884c\u5904\u7406\uff0c\u6545\u7531\u6b64\u9519\u8bef\u3002\u53ea\u9700\u8981\u4f7f\u7528",(0,r.jsx)(n.code,{children:"unhandledrejection"}),"\u5168\u5c40\u5904\u7406\u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Promise Catch\u4e0d\u62a5\u9519\nwindow.addEventListener('unhandledrejection', event => event.preventDefault())\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);