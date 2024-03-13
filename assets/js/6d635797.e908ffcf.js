"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[3076],{2848:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var r=i(4848),l=i(8453);const s={},t="Vue",d={id:"others/interview/interview-react-vue",title:"Vue",description:"1. VDom\u7684\u4f18\u52bf\uff1f",source:"@site/docs/others/interview/interview-react-vue.md",sourceDirName:"others/interview",slug:"/others/interview/interview-react-vue",permalink:"/docs/others/interview/interview-react-vue",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"\u5c0f\u7a0b\u5e8f",permalink:"/docs/others/interview/interview-mini-app"},next:{title:"\u9762\u8bd5\u7bc7",permalink:"/docs/others/interview/interview-summary"}},c={},h=[{value:"1. VDom\u7684\u4f18\u52bf\uff1f",id:"1-vdom\u7684\u4f18\u52bf",level:2},{value:"2. Vue \u7684\u6a21\u677f\u5982\u4f55\u88ab\u6e32\u67d3\u6210 HTML? \u4ee5\u53ca\u6e32\u67d3\u8fc7\u7a0b?",id:"2-vue-\u7684\u6a21\u677f\u5982\u4f55\u88ab\u6e32\u67d3\u6210-html-\u4ee5\u53ca\u6e32\u67d3\u8fc7\u7a0b",level:2},{value:"Vue \u7684\u6574\u4e2a\u5b9e\u73b0\u6d41\u7a0b",id:"vue-\u7684\u6574\u4e2a\u5b9e\u73b0\u6d41\u7a0b",level:3},{value:"3. Vue\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u539f\u7406",id:"3-vue\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u539f\u7406",level:2},{value:"4. \u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u53ea\u80fd\u6302\u4e00\u4e2aroot\u6807\u7b7e\uff1f",id:"4-\u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u53ea\u80fd\u6302\u4e00\u4e2aroot\u6807\u7b7e",level:2},{value:"5. Vue Slot\u539f\u7406",id:"5-vue-slot\u539f\u7406",level:2},{value:"6. Vuex\u539f\u7406",id:"6-vuex\u539f\u7406",level:2},{value:"7. Vue-Router\u539f\u7406",id:"7-vue-router\u539f\u7406",level:2},{value:"8. SSR",id:"8-ssr",level:2},{value:"1. React\u4e0eVue\u5f02\u540c",id:"1-react\u4e0evue\u5f02\u540c",level:3},{value:"2. \u751f\u547d\u5468\u671f",id:"2-\u751f\u547d\u5468\u671f",level:3},{value:"3. immutable.js",id:"3-immutablejs",level:3},{value:"4. Hooks",id:"4-hooks",level:3},{value:"4. \u4e3a\u4ec0\u4e48\u8981fiber\uff08V16\u5f15\u5165\uff09",id:"4-\u4e3a\u4ec0\u4e48\u8981fiberv16\u5f15\u5165",level:3}];function o(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vue",children:"Vue"}),"\n",(0,r.jsx)(n.h2,{id:"1-vdom\u7684\u4f18\u52bf",children:"1. VDom\u7684\u4f18\u52bf\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u6838\u5fc3\u8fd8\u662f\u5229\u7528\u5229\u7528\u865a\u62dfdom\uff0c\u6700\u5c0f\u5316dom\u66f4\u65b0\uff0c\u56e0\u4e3a\u9891\u7e41dom\u66f4\u65b0\u7684\u4ee3\u4ef7\u662f\u5de8\u5927\u7684\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u4e3a",(0,r.jsx)(n.code,{children:"dom\u662f\u5728\u6e32\u67d3\u5f15\u64ce\u4e2d\uff0c\u800cjs\u662f\u5728js V8\u5f15\u64ce\u4e2d\uff0c\u4e24\u8005\u901a\u4fe1\u4ee3\u4ef7\u6bd4\u8f83\u9ad8"}),"\u3002\n",(0,r.jsx)(n.code,{children:"js\u5f15\u64ce\u53ea\u8d1f\u8d23 JavaScript \u4ee3\u7801\u7684\u89e3\u91ca\u4e0e\u6267\u884c"}),"\uff0c\u53ea\u662f\u628ajs\u4ee3\u7801\u8f6c\u6362\u4e3a\u5b57\u8282\u7801\uff0c\u7136\u540e\u6267\u884c\uff08js\u5f15\u64ce\u6709\u51e0\u4e2a\u597d\u52a9\u624b\uff1a\u7f16\u8bd1\u5668\u548c\u4f5c\u7528\u57df\u3002",(0,r.jsx)(n.a,{href:"https://lq782655835.github.io/blogs/read-books/book-you-dont-know-javascript.html#%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86",children:"\u7f16\u8bd1\u539f\u7406"}),"\uff09\u3002\n\u6362\u53e5\u8bdd\u8bf4\uff0cJS\u5f15\u64ce\u672c\u8eab\u6ca1\u6709\u65f6\u95f4\u7684\u6982\u5ff5\uff0c\u53ea\u662f\u4e00\u4e2a\u6309\u9700\u6267\u884cjs\u4efb\u610f\u4ee3\u7801\u7247\u6bb5\u7684\u73af\u5883\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"2-vue-\u7684\u6a21\u677f\u5982\u4f55\u88ab\u6e32\u67d3\u6210-html-\u4ee5\u53ca\u6e32\u67d3\u8fc7\u7a0b",children:"2. Vue \u7684\u6a21\u677f\u5982\u4f55\u88ab\u6e32\u67d3\u6210 HTML? \u4ee5\u53ca\u6e32\u67d3\u8fc7\u7a0b?"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"\u6a21\u677f -> render\u51fd\u6570\uff08\u7f16\u8bd1\uff09 -> \u8fd4\u56devnode(\u865a\u62dfdom\u5173\u952e) -> vnode patch\u65b9\u6cd5\u8fdb\u884cdiff -> Dom\u66f4\u65b0"})}),"\n",(0,r.jsx)(n.h3,{id:"vue-\u7684\u6574\u4e2a\u5b9e\u73b0\u6d41\u7a0b",children:"Vue \u7684\u6574\u4e2a\u5b9e\u73b0\u6d41\u7a0b"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5148\u628a\u6a21\u677f\u89e3\u6790\u6210 render \u51fd\u6570\uff0c\u628a\u6a21\u677f\u4e2d\u7684\u5c5e\u6027\u53bb\u53d8\u6210 js \u4e2d\u7684\u53d8\u91cf\uff0cvif,vshow,vfor \u7b49\u6307\u4ee4\u53d8\u6210 js \u4e2d\u7684\u903b\u8f91"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c render \u51fd\u6570\uff0c\u5728\u521d\u6b21\u6e32\u67d3\u6267\u884c render \u51fd\u6570\u7684\u8fc7\u7a0b\u4e2d \u7ed1\u5b9a\u5c5e\u6027\u76d1\u542c\uff0c\u6536\u96c6\u4f9d\u8d56\uff0c\u6700\u7ec8\u5f97\u5230 vNode\uff0c\u5229\u7528 vNode \u7684 Patch \u65b9\u6cd5\uff0c\u628a vNode \u6e32\u67d3\u6210\u771f\u5b9e\u7684 DOM"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u5c5e\u6027\u66f4\u65b0\u540e\uff0c\u91cd\u65b0\u6267\u884c render \u51fd\u6570\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u65f6\u5019\u5c31\u4e0d\u9700\u8981\u7ed1\u5b9a\u5c5e\u6027\u548c\u6536\u96c6\u4f9d\u8d56\u4e86\uff0c\u6700\u7ec8\u751f\u6210\u65b0\u7684 vNode"}),"\n",(0,r.jsx)(n.li,{children:"\u628a\u65b0\u7684 vNode \u548c \u65e7\u7684 vNode \u53bb\u505a\u5bf9\u6bd4\uff0c\u627e\u51fa\u771f\u6b63\u9700\u8981\u66f4\u65b0\u7684 DOM\uff0c\u6e32\u67d3\u5728\u6d4f\u89c8\u5668\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-vue\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u539f\u7406",children:"3. Vue\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u539f\u7406"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://lq782655835.github.io/blogs/vue/vue-code-0.frame.html#%E6%A0%B8%E5%BF%83%E5%86%85%E5%AE%B9",children:"Vue\u6838\u5fc3XMind"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9996\u5148\u662fvm=new Vue(options)\u521d\u59cb\u5316\uff0cVue \u521d\u59cb\u5316\u4e3b\u8981\u5c31\u5e72\u4e86\u51e0\u4ef6\u4e8b\u60c5\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8bd1template\u4e3arender\u51fd\u6570"}),"\n",(0,r.jsx)(n.li,{children:"\u5408\u5e76\u914d\u7f6e"}),"\n",(0,r.jsx)(n.li,{children:"data\u6df1\u5ea6\u76d1\u542c\uff08get/set\uff09\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u6709\u4e00\u4e2aDep\u5bf9\u8c61\u8fdb\u884cWatcher\u7ba1\u7406\uff08\u6bd4\u5982\u901a\u5e38\u67091\u4e2a\u6e32\u67d3Watcher\uff0c\u591a\u4e2aComputed Watcher\n\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u6302\u8f7d\u4e00\u4e9b\u65b9\u6cd5\u5230Vue.prototype\u4e0a"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["vm.$mount(el) \u89e6\u53d1\u6536\u96c6 && vdom diff\u6e32\u67d3\u771f\u5b9eDOM","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u89e6\u53d1\u6536\u96c6","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"new Watcher()\uff0c\u65b0\u5efa\u4e00\u4e2a\u6e32\u67d3Watcher\uff08watcher\u53ef\u4ee5\u770b\u4f5c\u56de\u8c03\u51fd\u6570\uff0c\u5f53data\u5c5e\u6027\u6539\u53d8\u65f6\uff0c\u5bf9\u5e94\u7684\u552f\u4e00Dep\u4e2d\u7684Watcher\u6279\u91cf\u66f4\u65b0\uff09\uff0c\u5c06\u8be5\u6e32\u67d3Watcher\u7ed1\u5b9a\u5230\u4f9d\u8d56\u7684\u5b57\u6bb5\u4e2d\uff08template\u6a21\u677f\u4e2d\u53ef\u4ee5\u77e5\u9053\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u4f55\u77e5\u9053\u6e32\u67d3Watcher\u4f9d\u8d56\u7684\u5b57\u6bb5\uff1f\u7b54\u6848\uff1avm.render()\u3002render()\u65b9\u6cd5\u4e2d\u4f1a\u53bb\u8bbf\u95ee\u5b57\u6bb5\uff08get\u62e6\u622a\u65b9\u6cd5\u89e6\u53d1\uff0c\u5bf9Dep\u6536\u96c6Watcher\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["vdom diff","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"vnode = vm.render() \u62ff\u5230vnode"}),"\n",(0,r.jsx)(n.li,{children:"vm.update(vnode) diff\u7b97\u6cd5\u6bd4\u5bf9\uff0c\u66f4\u65b0dom"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u793a\u610f\u56fe\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-gold-cdn.xitu.io/2018/8/30/16586a0d1261a7b3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""})}),"\n",(0,r.jsx)(n.h2,{id:"4-\u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u53ea\u80fd\u6302\u4e00\u4e2aroot\u6807\u7b7e",children:"4. \u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u53ea\u80fd\u6302\u4e00\u4e2aroot\u6807\u7b7e\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\u53d6\u51b3\u4e8ediff\u7b97\u6cd5\u7684\u7f16\u5199\u65b9\u5f0f"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"diff\u7b97\u6cd5\uff08\u8d1f\u8d23\u5c06\u5f53\u524d\u7684VDOM\u4e0e\u65e7\u7684VDOM\u8fdb\u884c\u6bd4\u8f83\uff0c\u5e76\u5c06\u5dee\u5f02\u4fee\u8865\u5230\u771f\u5b9eDOM\u4e2d\uff09\u4f9d\u8d56\u4e8e\u4ee5\u4e0b\u4e8b\u5b9e\uff1a\u5b50\u7ec4\u4ef6\u7684\u6bcf\u4e2aVNode\u5728\u771f\u5b9edom\u4e2d\u90fd\u5177\u6709\u5355\u4e2a\u5339\u914d\u7684html\u5143\u7d20\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6bd4\u5982\uff1arender: h('div', attr, children)\u4f1a\u751f\u6210VNode\uff08\u6811\u72b6\u6570\u636e\u7ed3\u6784\uff09\uff0c\u7136\u540e\u624d\u6bd4\u8f83\u597ddiff\u3002\n\u5982\u679c\u7ec4\u4ef6\u4f5c\u4e3a\u6700\u5916\u5c42\u7684warpper\uff0c\u6700\u7ec8\u4f1a\u89e3\u6790\u6210\u66f4\u7ec6\u529b\u5ea6\u7684\u5b50\u7ec4\u4ef6\uff0c\u77e5\u9053\u6ca1\u6709\u7ec4\u4ef6\u5305\u88c5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/vuejs/vue/issues/7088#issuecomment-357899727",children:"https://github.com/vuejs/vue/issues/7088#issuecomment-357899727"})]}),"\n",(0,r.jsx)(n.h2,{id:"5-vue-slot\u539f\u7406",children:"5. Vue Slot\u539f\u7406"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"slot\u672c\u8d28\u662f\u628aapp\u7236\u7ec4\u4ef6\u751f\u6210\u7684vnode/function\uff0c\u5ef6\u8fdf\u5230layout\u5b50\u7ec4\u4ef6\u6e32\u67d3\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"6-vuex\u539f\u7406",children:"6. Vuex\u539f\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u53ea\u5173\u6ce8\u6838\u5fc3Store\uff0c\u4e0d\u8003\u8651namespace\u4ee5\u53camapGetter\u7b49\u8f85\u52a9\u65b9\u6cd5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u5b9e\u6838\u5fc3\u539f\u7406\u4ee3\u7801\u975e\u5e38\u7b80\u5355\uff0c\u5c31\u662f",(0,r.jsx)(n.code,{children:"\u5229\u7528\u5168\u5c40\u7684new Vue({ data: { state }})\u6765\u5b9e\u73b0\u3002\u5373\u628a\u7ec4\u4ef6\u7684\u5171\u4eab\u72b6\u6001\u62bd\u53d6\u51fa\u6765\uff0c\u653e\u5728\u4e00\u4e2a\u5168\u5c40\u5355\u4f8b\u6a21\u5f0f\u4e0b\u7ba1\u7406\u3002"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/lq782655835/build-your-own-vuex",children:"\u52a8\u624b\u5b9e\u73b0\u4e00\u4e2aVuex"})}),"\n",(0,r.jsx)(n.h2,{id:"7-vue-router\u539f\u7406",children:"7. Vue-Router\u539f\u7406"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"hash\uff1aonhashchanged"}),"\n",(0,r.jsx)(n.li,{children:"history\uff1ahistory.pushState"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"8-ssr",children:"8. SSR"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u670d\u52a1\u7aef\u6e32\u67d3\n\u670d\u52a1\u7aef\u5728\u8fd4\u56de html \u4e4b\u524d\uff0c\u5728\u7279\u5b9a\u7684\u533a\u57df\uff0c\u7b26\u53f7\u91cc\u7528\u6570\u636e\u586b\u5145\uff0c\u518d\u7ed9\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u53ea\u8d1f\u8d23\u89e3\u6790 HTML \u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u6e32\u67d3html \u4ec5\u4ec5\u4f5c\u4e3a\u9759\u6001\u6587\u4ef6\uff0c\u5ba2\u6237\u7aef\u7aef\u5728\u8bf7\u6c42\u65f6\uff0c\u670d\u52a1\u7aef\u4e0d\u505a\u4efb\u4f55\u5904\u7406\uff0c\u76f4\u63a5\u4ee5\u539f\u6587\u4ef6\u7684\u5f62\u5f0f\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u5ba2\u6237\u7aef\uff0c\u7136\u540e\u6839\u636e html \u4e0a\u7684 JavaScript\uff0c\u751f\u6210 DOM \u63d2\u5165 html\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-gold-cdn.xitu.io/2018/3/4/161ef7bf329e8812?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u57fa\u672c\u5b9e\u73b0\u539f\u7406\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"app.js \u4f5c\u4e3a\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u7684\u516c\u7528\u5165\u53e3\uff0c\u5bfc\u51fa Vue \u6839\u5b9e\u4f8b\uff0c\u4f9b\u5ba2\u6237\u7aef entry \u4e0e\u670d\u52a1\u7aef entry \u4f7f\u7528\u3002\u5ba2\u6237\u7aef entry \u4e3b\u8981\u4f5c\u7528\u6302\u8f7d\u5230 DOM \u4e0a\uff0c\u670d\u52a1\u7aef entry \u9664\u4e86\u521b\u5efa\u548c\u8fd4\u56de\u5b9e\u4f8b\uff0c\u8fd8\u8fdb\u884c\u8def\u7531\u5339\u914d\u4e0e\u6570\u636e\u9884\u83b7\u53d6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"webpack \u4e3a\u5ba2\u670d\u7aef\u6253\u5305\u4e00\u4e2a Client Bundle \uff0c\u4e3a\u670d\u52a1\u7aef\u6253\u5305\u4e00\u4e2a Server Bundle \u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u670d\u52a1\u5668\u63a5\u6536\u8bf7\u6c42\u65f6\uff0c\u4f1a\u6839\u636e url\uff0c\u52a0\u8f7d\u76f8\u5e94\u7ec4\u4ef6\uff0c\u83b7\u53d6\u548c\u89e3\u6790\u5f02\u6b65\u6570\u636e\uff0c\u521b\u5efa\u4e00\u4e2a\u8bfb\u53d6 Server Bundle \u7684 BundleRenderer\uff0c\u7136\u540e\u751f\u6210 html \u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Vue SSR \u7684\u5b9e\u73b0\uff0c\u4e3b\u8981\u5c31\u662f\u628a Vue \u7684\u7ec4\u4ef6\u8f93\u51fa\u6210\u4e00\u4e2a\u5b8c\u6574 HTML\u3002\u7eaf\u5ba2\u6237\u7aef\u8f93\u51fa\u8fc7\u7a0b\u6709\u4e00\u4e2a complier \u8fc7\u7a0b\uff0c\u4e3b\u8981\u4f5c\u7528\u662f\u5c06 template \u8f6c\u5316\u6210 render \u5b57\u7b26\u4e32 \u3002\nVue SSR \u9700\u8981\u505a\u7684\u4e8b\u591a\u70b9\uff08\u8f93\u51fa\u5b8c\u6574 HTML\uff09\uff0c\u9664\u4e86 complier -> vnode\uff0c\u8fd8\u9700\u5982\u6570\u636e\u83b7\u53d6\u586b\u5145\u81f3 HTML\u3001\u5ba2\u6237\u7aef\u6df7\u5408\uff08hydration\uff09\u3001\u7f13\u5b58\u7b49\u7b49\u3002"}),"\n",(0,r.jsx)(n.h1,{id:"react",children:"React"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://lq782655835.github.io/blogs/react/react-code-3.setState.html#setstate%E5%BC%82%E6%AD%A5%E5%AE%9E%E7%8E%B0",children:"React setState\u662f\u5f02\u6b65\u5417"})}),"\n",(0,r.jsx)(n.h3,{id:"1-react\u4e0evue\u5f02\u540c",children:"1. React\u4e0eVue\u5f02\u540c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6310131/78337738-0bc94100-75c4-11ea-9c1c-f484a44b48b1.png",alt:"image"})}),"\n",(0,r.jsx)(n.h3,{id:"2-\u751f\u547d\u5468\u671f",children:"2. \u751f\u547d\u5468\u671f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6310131/57915545-9ed18d80-78c3-11e9-8aa5-6d1fb2cd6f63.png",alt:"image"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u521b\u5efa\u65f6\u3002\u5c06\u6211\u4eec\u7684\u7ec4\u4ef6\u63d2\u5165\u5230DOM\u4e2d","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"constructor"}),"\n",(0,r.jsx)(n.li,{children:"render"}),"\n",(0,r.jsx)(n.li,{children:"componentDidMount"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u66f4\u65b0\u65f6","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"shouldComponentUpdate"}),"\n",(0,r.jsx)(n.li,{children:"render"}),"\n",(0,r.jsx)(n.li,{children:"componentDidUpdate"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5378\u8f7d\u65f6","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"componentWillunMount"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5e9f\u5f03\u7684\u4e09\u4e2a\u751f\u547d\u5468\u671f","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.del,{children:"componentWillMount"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.del,{children:"componentWillReceiveProps"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.del,{children:"componentWillUpdate"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u4e24\u4e2a\u65b0\u7684\u751f\u547d\u5468\u671f\u51fd\u6570","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"static getDerivedStateFromProps\u3002\u5f53\u6211\u4eec\u63a5\u6536\u5230\u65b0\u7684\u5c5e\u6027\u60f3\u53bb\u4fee\u6539\u6211\u4eecstate\uff0c\u53ef\u4ee5\u4f7f\u7528getDerivedStateFromProps"}),"\n",(0,r.jsx)(n.li,{children:"getSnapshotBeforeUpdate"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-immutablejs",children:"3. immutable.js"}),"\n",(0,r.jsxs)(n.p,{children:["Immutable Data \u5c31\u662f\u4e00\u65e6\u521b\u5efa\uff0c\u5c31\u4e0d\u80fd\u518d\u88ab\u66f4\u6539\u7684\u6570\u636e\u3002\u5bf9 Immutable \u5bf9\u8c61\u7684\u4efb\u4f55\u4fee\u6539\u6216\u6dfb\u52a0\u5220\u9664\u64cd\u4f5c\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Immutable \u5bf9\u8c61\u3002Immutable \u5b9e\u73b0\u7684\u539f\u7406\u662f ",(0,r.jsx)(n.code,{children:"Persistent Data Structure\uff08\u6301\u4e45\u5316\u6570\u636e\u7ed3\u6784\uff09"}),"\uff0c\u4e5f\u5c31\u662f\u4f7f\u7528\u65e7\u6570\u636e\u521b\u5efa\u65b0\u6570\u636e\u65f6\uff0c\u8981\u4fdd\u8bc1\u65e7\u6570\u636e\u540c\u65f6\u53ef\u7528\u4e14\u4e0d\u53d8\u3002\u540c\u65f6\u4e3a\u4e86\u907f\u514d deepCopy \u628a\u6240\u6709\u8282\u70b9\u90fd\u590d\u5236\u4e00\u904d\u5e26\u6765\u7684\u6027\u80fd\u635f\u8017\uff0cImmutable \u4f7f\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"Structural Sharing\uff08\u7ed3\u6784\u5171\u4eab\uff09"}),"\uff0c\u5373\u5982\u679c\u5bf9\u8c61\u6811\u4e2d\u4e00\u4e2a\u8282\u70b9\u53d1\u751f\u53d8\u5316\uff0c\u53ea\u4fee\u6539\u8fd9\u4e2a\u8282\u70b9\u548c\u53d7\u5b83\u5f71\u54cd\u7684\u7236\u8282\u70b9\uff0c\u5176\u5b83\u8282\u70b9\u5219\u8fdb\u884c\u5171\u4eab\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Immutable.js\u672c\u8d28\u4e0a\u662f\u4e00\u4e2aJavaScript\u7684\u6301\u4e45\u5316\u6570\u636e\u7ed3\u6784\u7684\u5e93"}),"\n",(0,r.jsx)(n.h3,{id:"4-hooks",children:"4. Hooks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"hooks\u662f\u4ec0\u4e48"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"React Hooks\u662fReact\u7279\u6b8a\u7684\u4e00\u7c7b\u51fd\u6570\u3002\u8981\u89e3\u51b3\u7684\u95ee\u9898\u662f\u72b6\u6001\u5171\u4eab\uff0c\u662f\u7ee7 render-props \u548c higher-order components \u4e4b\u540e\u7684\u7b2c\u4e09\u79cd\u72b6\u6001\u5171\u4eab\u65b9\u6848\uff0c\u4e0d\u4f1a\u4ea7\u751f JSX \u5d4c\u5957\u5730\u72f1\u95ee\u9898\u3002\u8fd9\u4e2a\u72b6\u6001\u6307\u7684\u662f\u72b6\u6001\u903b\u8f91\uff0c\u6240\u4ee5\u79f0\u4e3a\u72b6\u6001\u903b\u8f91\u590d\u7528\u4f1a\u66f4\u6070\u5f53\uff0c\u56e0\u4e3a\u53ea\u5171\u4eab\u6570\u636e\u5904\u7406\u903b\u8f91\uff0c\u4e0d\u4f1a\u5171\u4eab\u6570\u636e\u672c\u8eab\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["React Hooks \u5e26\u6765\u7684\u597d\u5904\u4e0d\u4ec5\u662f \u201c\u66f4 FP\uff0c\u66f4\u65b0\u7c92\u5ea6\u66f4\u7ec6\uff0c\u4ee3\u7801\u66f4\u6e05\u6670\u201d\uff0c\u8fd8\u6709\u5982\u4e0b\u4e09\u4e2a\u7279\u6027\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u591a\u4e2a\u72b6\u6001\u4e0d\u4f1a\u4ea7\u751f\u5d4c\u5957\uff0c\u5199\u6cd5\u8fd8\u662f\u5e73\u94fa\u7684\uff08renderProps \u53ef\u4ee5\u901a\u8fc7 compose \u89e3\u51b3\uff0c\u53ef\u4e0d\u4f46\u4f7f\u7528\u7565\u4e3a\u7e41\u7410\uff0c\u800c\u4e14\u56e0\u4e3a\u5f3a\u5236\u5c01\u88c5\u4e00\u4e2a\u65b0\u5bf9\u8c61\u800c\u589e\u52a0\u4e86\u5b9e\u4f53\u6570\u91cf\uff09\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Hooks \u53ef\u4ee5\u5f15\u7528\u5176\u4ed6 Hooks\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u66f4\u5bb9\u6613\u5c06\u7ec4\u4ef6\u7684 UI \u4e0e\u72b6\u6001\u5206\u79bb\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4ec0\u4e48\u8981hooks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u590d\u7528\u6709\u72b6\u6001\u7684\u7ec4\u4ef6\u592a\u96be\u3002\u4e4b\u524d\u4f7f\u7528\u6e32\u67d3\u5c5e\u6027\uff08Render Props\uff09\u548c\u9ad8\u9636\u7ec4\u4ef6\uff08Higher-Order Components\uff09\u590d\u7528\uff0c\u4f46\u5c42\u7ea7\u592a\u591a"}),"\n",(0,r.jsx)(n.li,{children:"\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u91cc\u7684\u903b\u8f91\u592a\u4e71\u3002"}),"\n",(0,r.jsx)(n.li,{children:"class this\u6307\u5411\u95ee\u9898"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-\u4e3a\u4ec0\u4e48\u8981fiberv16\u5f15\u5165",children:"4. \u4e3a\u4ec0\u4e48\u8981fiber\uff08V16\u5f15\u5165\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u6027\u80fd\u3002react\u5728\u8fdb\u884c\u7ec4\u4ef6\u6e32\u67d3\u65f6\uff0c\u4ecesetState\u5f00\u59cb\u5230\u6e32\u67d3\u5b8c\u6210\u6574\u4e2a\u8fc7\u7a0b\u662f\u540c\u6b65\u7684\uff08\u201c\u4e00\u6c14\u5475\u6210\u201d\uff09\u3002\u5982\u679c\u9700\u8981\u6e32\u67d3\u7684\u7ec4\u4ef6\u6bd4\u8f83\u5e9e\u5927\uff0cjs\u6267\u884c\u4f1a\u5360\u636e\u4e3b\u7ebf\u7a0b\u65f6\u95f4\u8f83\u957f\uff0c\u4f1a\u5bfc\u81f4\u9875\u9762\u54cd\u5e94\u5ea6\u53d8\u5dee\uff0c\u4f7f\u5f97react\u5728\u52a8\u753b\u3001\u624b\u52bf\u7b49\u5e94\u7528\u4e2d\u6548\u679c\u6bd4\u8f83\u5dee\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["React 15 \u53ca\u4e4b\u524d\u7248\u672c\uff0c",(0,r.jsx)(n.code,{children:"\u534f\u8c03\u7b97\u6cd5\uff08Stack Reconciler\uff09\u4f1a\u4e00\u6b21\u540c\u6b65\u5904\u7406\u6574\u4e2a\u7ec4\u4ef6\u6811\u3002\u5b83\u4f1a\u9012\u5f52\u904d\u5386\u6bcf\u4e2a\u7ec4\u4ef6\uff08\u865a\u62dfDOM\u6811\uff09\uff0c\u53bb\u6bd4\u8f83\u65b0\u65e7\u4e24\u9897\u6811\uff0c\u5f97\u5230\u9700\u8981\u66f4\u65b0\u7684\u90e8\u5206"}),"\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u57fa\u4e8e\u9012\u5f52\u8c03\u7528\uff0c\u4e00\u65e6\u5f00\u59cb\uff0c\u5f88\u96be\u53bb\u6253\u65ad\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u65e6\u5de5\u4f5c\u91cf\u5927\uff0c\u5c31\u4f1a\u5835\u585e\u6574\u4e2a\u4e3b\u7ebf\u7a0b\uff08The main thread is the same as the UI thread.\uff09\u3002\n\u800c\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u7684\u66f4\u65b0\u5de5\u4f5c\u53ef\u80fd\u5e76\u4e0d\u9700\u8981\u4e00\u6b21\u6027\u5168\u90e8\u5b8c\u6210\uff0c\u6bd4\u5982 offscreen \u7684 UI \u66f4\u65b0\u5e76\u4e0d\u7d27\u6025\uff0c\u6bd4\u5982 \u52a8\u753b \u9700\u8981\u4f18\u5148\u5b8c\u6210\u2014\u2014\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u4f18\u5148\u7ea7\u8c03\u6574\u5de5\u4f5c\uff0c\u628adiff\u8fc7\u7a0b\u6309\u65f6\u95f4\u5206\u7247\uff01"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var r=i(6540);const l={},s=r.createContext(l);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);