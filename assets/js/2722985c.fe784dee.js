"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[9129],{1873:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var i=s(4848),r=s(8453);const l={},c="JavaScript\u4e0e\u6d4f\u89c8\u5668 - \u7ebf\u7a0b\u4e0e\u5f15\u64ce",t={id:"others/js/http-base-2.browser",title:"JavaScript\u4e0e\u6d4f\u89c8\u5668 - \u7ebf\u7a0b\u4e0e\u5f15\u64ce",description:"\u6574\u4e2a\u6d4f\u89c8\u5668\u662f\u591a\u8fdb\u7a0b\u7684\uff0c\u5e73\u65f6\u6211\u4eec\u7ecf\u5e38\u63a5\u89e6\u7684\u662fJS\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u90fd\u662f\u5c5e\u4e8e\u5355\u4e2a\u8fdb\u7a0b\uff08\u5355\u4e2atab\u9875\uff09\u7684\u4e00\u4e2a\u7ebf\u7a0b\u3002\u8fd9\u91cc\u6211\u4eec\u63a2\u7a76\u4e0b\u73b0\u4ee3\u6d4f\u89c8\u5668\u7684\u591a\u8fdb\u7a0b\u8bbe\u8ba1\uff1f\u5355\u4e2a\u8fdb\u7a0b\u4e0b\u7684\u591a\u7ebf\u7a0b\u8bbe\u8ba1\u4ee5\u53cajs\u5f15\u64ce\u4e3a\u4f55\u662f\u5355\u7ebf\u7a0b\uff1f\u540c\u65f6\u4e86\u89e3\u4e0bjs\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u80fd\u529b\u8303\u56f4\u548c\u5173\u7cfb\uff1f",source:"@site/docs/others/js/http-base-2.browser.md",sourceDirName:"others/js",slug:"/others/js/http-base-2.browser",permalink:"/docs/others/js/http-base-2.browser",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"\u8f93\u5165URL\u80cc\u540e\u7684\u6280\u672f\u6b65\u9aa4",permalink:"/docs/others/js/http-base-1.url"},next:{title:"HTTP\u8de8\u57df\u89e3\u51b3\u65b9\u6848",permalink:"/docs/others/js/http-cross-domain"}},d={},h=[{value:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b",id:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b",level:2},{value:"\u6d4f\u89c8\u5668\u591a\u8fdb\u7a0b",id:"\u6d4f\u89c8\u5668\u591a\u8fdb\u7a0b",level:2},{value:"\u5355\u8fdb\u7a0b\uff08\u5355\u4e2a\u9875\u9762tab\uff09\u7684\u591a\u7ebf\u7a0b",id:"\u5355\u8fdb\u7a0b\u5355\u4e2a\u9875\u9762tab\u7684\u591a\u7ebf\u7a0b",level:2},{value:"1. JS\u5f15\u64ce\u7ebf\u7a0b",id:"1-js\u5f15\u64ce\u7ebf\u7a0b",level:3},{value:"2. \u6e32\u67d3\u7ebf\u7a0b",id:"2-\u6e32\u67d3\u7ebf\u7a0b",level:3},{value:"3. \u5176\u4ed6\u7ebf\u7a0b",id:"3-\u5176\u4ed6\u7ebf\u7a0b",level:3},{value:"4. JS\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u5173\u7cfb",id:"4-js\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u5173\u7cfb",level:3},{value:"V8\u5f15\u64ce",id:"v8\u5f15\u64ce",level:2},{value:"\u6027\u80fd\u6bd4\u8f83",id:"\u6027\u80fd\u6bd4\u8f83",level:4}];function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"javascript\u4e0e\u6d4f\u89c8\u5668---\u7ebf\u7a0b\u4e0e\u5f15\u64ce",children:"JavaScript\u4e0e\u6d4f\u89c8\u5668 - \u7ebf\u7a0b\u4e0e\u5f15\u64ce"}),"\n",(0,i.jsx)(n.p,{children:"\u6574\u4e2a\u6d4f\u89c8\u5668\u662f\u591a\u8fdb\u7a0b\u7684\uff0c\u5e73\u65f6\u6211\u4eec\u7ecf\u5e38\u63a5\u89e6\u7684\u662fJS\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u90fd\u662f\u5c5e\u4e8e\u5355\u4e2a\u8fdb\u7a0b\uff08\u5355\u4e2atab\u9875\uff09\u7684\u4e00\u4e2a\u7ebf\u7a0b\u3002\u8fd9\u91cc\u6211\u4eec\u63a2\u7a76\u4e0b\u73b0\u4ee3\u6d4f\u89c8\u5668\u7684\u591a\u8fdb\u7a0b\u8bbe\u8ba1\uff1f\u5355\u4e2a\u8fdb\u7a0b\u4e0b\u7684\u591a\u7ebf\u7a0b\u8bbe\u8ba1\u4ee5\u53cajs\u5f15\u64ce\u4e3a\u4f55\u662f\u5355\u7ebf\u7a0b\uff1f\u540c\u65f6\u4e86\u89e3\u4e0bjs\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u80fd\u529b\u8303\u56f4\u548c\u5173\u7cfb\uff1f"}),"\n",(0,i.jsx)(n.h2,{id:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b",children:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u8fdb\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u5b66\u672f\u4e0a\u8bf4\uff0c\u8fdb\u7a0b\u662f\u4e00\u4e2a\u5177\u6709\u4e00\u5b9a\u72ec\u7acb\u529f\u80fd\u7684\u7a0b\u5e8f\u5728\u4e00\u4e2a\u6570\u636e\u96c6\u4e0a\u7684\u4e00\u6b21\u52a8\u6001\u6267\u884c\u7684\u8fc7\u7a0b\uff0c\u662f\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u884c\u8d44\u6e90\u5206\u914d\u548c\u8c03\u5ea6\u7684\u4e00\u4e2a\u72ec\u7acb\u5355\u4f4d\uff0c\u662f\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u7684\u8f7d\u4f53\u3002\u6211\u4eec\u8fd9\u91cc\u5c06\u8fdb\u7a0b\u6bd4\u55bb\u4e3a\u5de5\u5382\u7684\u8f66\u95f4\uff0c\u5b83\u4ee3\u8868CPU\u6240\u80fd\u5904\u7406\u7684\u5355\u4e2a\u4efb\u52a1\u3002\u4efb\u4e00\u65f6\u523b\uff0cCPU\u603b\u662f\u8fd0\u884c\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u5176\u4ed6\u8fdb\u7a0b\u5904\u4e8e\u975e\u8fd0\u884c\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7ebf\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u65e9\u671f\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u5e76\u6ca1\u6709\u7ebf\u7a0b\u7684\u6982\u5ff5\uff0c\u8fdb\u7a0b\u662f\u80fd\u62e5\u6709\u8d44\u6e90\u548c\u72ec\u7acb\u8fd0\u884c\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u4e5f\u662f\u7a0b\u5e8f\u6267\u884c\u7684\u6700\u5c0f\u5355\u4f4d\u3002\u4efb\u52a1\u8c03\u5ea6\u91c7\u7528\u7684\u662f\u65f6\u95f4\u7247\u8f6e\u8f6c\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6\u65b9\u5f0f\uff0c\u800c\u8fdb\u7a0b\u662f\u4efb\u52a1\u8c03\u5ea6\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u6bcf\u4e2a\u8fdb\u7a0b\u6709\u5404\u81ea\u72ec\u7acb\u7684\u4e00\u5757\u5185\u5b58\uff0c\u4f7f\u5f97\u5404\u4e2a\u8fdb\u7a0b\u4e4b\u95f4\u5185\u5b58\u5730\u5740\u76f8\u4e92\u9694\u79bb\u3002\u540e\u6765\uff0c\u968f\u7740\u8ba1\u7b97\u673a\u7684\u53d1\u5c55\uff0c\u5bf9CPU\u7684\u8981\u6c42\u8d8a\u6765\u8d8a\u9ad8\uff0c\u8fdb\u7a0b\u4e4b\u95f4\u7684\u5207\u6362\u5f00\u9500\u8f83\u5927\uff0c\u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u8d8a\u6765\u8d8a\u590d\u6742\u7684\u7a0b\u5e8f\u7684\u8981\u6c42\u4e86\u3002\u4e8e\u662f\u5c31\u53d1\u660e\u4e86\u7ebf\u7a0b\uff0c\u7ebf\u7a0b\u662f\u7a0b\u5e8f\u6267\u884c\u4e2d\u4e00\u4e2a\u5355\u4e00\u7684\u987a\u5e8f\u63a7\u5236\u6d41\u7a0b\uff0c\u662f\u7a0b\u5e8f\u6267\u884c\u6d41\u7684\u6700\u5c0f\u5355\u5143\u3002\u8fd9\u91cc\u628a\u7ebf\u7a0b\u6bd4\u55bb\u4e00\u4e2a\u8f66\u95f4\u7684\u5de5\u4eba\uff0c\u5373\u4e00\u4e2a\u8f66\u95f4\u53ef\u4ee5\u5141\u8bb8\u7531\u591a\u4e2a\u5de5\u4eba\u534f\u540c\u5b8c\u6210\u4e00\u4e2a\u4efb\u52a1\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fdb\u7a0b\u548c\u7ebf\u7a0b\u7684\u533a\u522b\u548c\u5173\u7cfb"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e00\u4e2a\u8fdb\u7a0b\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u7ebf\u7a0b\u7ec4\u6210\uff0c\u591a\u4e2a\u7ebf\u7a0b\u53ef\u534f\u540c\u5de5\u4f5c\uff08\u5171\u4eab\u5185\u5b58\u7a7a\u95f4\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u8fdb\u7a0b\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u4f46\u540c\u4e00\u8fdb\u7a0b\u4e0b\u7684\u5404\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u5171\u4eab\u7a0b\u5e8f\u7684\u5185\u5b58\u7a7a\u95f4(\u5305\u62ec\u4ee3\u7801\u6bb5\u3001\u6570\u636e\u96c6\u3001\u5806\u7b49)\u53ca\u4e00\u4e9b\u8fdb\u7a0b\u7ea7\u7684\u8d44\u6e90(\u5982\u6253\u5f00\u6587\u4ef6\u548c\u4fe1\u53f7)\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u8c03\u5ea6\u548c\u5207\u6362\uff1a\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362\u6bd4\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362\u8981\u5feb\u5f97\u591a\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6d4f\u89c8\u5668\u591a\u8fdb\u7a0b",children:"\u6d4f\u89c8\u5668\u591a\u8fdb\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6d4f\u89c8\u5668\u521a\u88ab\u8bbe\u8ba1\u51fa\u6765\u7684\u65f6\u5019\uff0c\u90a3\u65f6\u7684\u7f51\u9875\u975e\u5e38\u7684\u7b80\u5355\uff0c\u6bcf\u4e2a\u7f51\u9875\u7684\u8d44\u6e90\u5360\u6709\u7387\u662f\u975e\u5e38\u4f4e\u7684\uff0c\u56e0\u6b64\u4e00\u4e2a\u8fdb\u7a0b\u5904\u7406\u591a\u4e2a\u7f51\u9875\u65f6\u53ef\u884c\u7684\u3002\u7136\u540e\u5728\u4eca\u5929\uff0c\u5927\u91cf\u7f51\u9875\u53d8\u5f97\u65e5\u76ca\u590d\u6742\u3002\u628a\u6240\u6709\u7f51\u9875\u90fd\u653e\u8fdb\u4e00\u4e2a\u8fdb\u7a0b\u7684\u6d4f\u89c8\u5668\u9762\u4e34\u5728\u5065\u58ee\u6027\uff0c\u54cd\u5e94\u901f\u5ea6\uff0c\u5b89\u5168\u6027\u65b9\u9762\u7684\u6311\u6218\u3002\u56e0\u4e3a\u5982\u679c\u6d4f\u89c8\u5668\u4e2d\u7684\u4e00\u4e2atab\u7f51\u9875\u5d29\u6e83\u7684\u8bdd\uff0c\u5c06\u4f1a\u5bfc\u81f4\u5176\u4ed6\u88ab\u6253\u5f00\u7684\u7f51\u9875\u5e94\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\u76f8\u5bf9\u4e8e\u7ebf\u7a0b\uff0c\u8fdb\u7a0b\u4e4b\u95f4\u662f\u4e0d\u5171\u4eab\u8d44\u6e90\u548c\u5730\u5740\u7a7a\u95f4\u7684,\u6240\u4ee5\u4e0d\u4f1a\u5b58\u5728\u592a\u591a\u7684\u5b89\u5168\u95ee\u9898\uff0c\u800c\u7531\u4e8e\u591a\u4e2a\u7ebf\u7a0b\u5171\u4eab\u7740\u76f8\u540c\u7684\u5730\u5740\u7a7a\u95f4\u548c\u8d44\u6e90,\u6240\u4ee5\u4f1a\u5b58\u5728\u7ebf\u7a0b\u4e4b\u95f4\u6709\u53ef\u80fd\u4f1a\u6076\u610f\u4fee\u6539\u6216\u8005\u83b7\u53d6\u975e\u6388\u6743\u6570\u636e\u7b49\u590d\u6742\u7684\u5b89\u5168\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6d4f\u89c8\u5668\u76842\u4e2a\u8fdb\u7a0b\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Browser\u8fdb\u7a0b\uff08\u53ea\u67091\u4e2a\uff09"}),"\u3002\u6d4f\u89c8\u5668\u7684\u4e3b\u8fdb\u7a0b\uff08\u8d1f\u8d23\u534f\u8c03\u3001\u4e3b\u63a7\uff09\uff0c\u53ea\u6709\u4e00\u4e2a\u3002\u4f5c\u7528\u6709","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8d1f\u8d23\u6d4f\u89c8\u5668\u754c\u9762\u663e\u793a\uff08\u58f3\u7684\u663e\u793a\uff09\uff0c\u6bd4\u5982\u7f51\u9875\u4e4b\u5916\u7684\u524d\u8fdb\uff0c\u540e\u9000\u754c\u9762\u3001\u4e0b\u8f7d\u7ba1\u7406\u7b49"}),"\n",(0,i.jsx)(n.li,{children:"\u8d1f\u8d23\u5404\u4e2a\u9875\u9762\u7684\u7ba1\u7406\uff0c\u521b\u5efa\u548c\u9500\u6bc1\u5176\u4ed6\u8fdb\u7a0b"}),"\n",(0,i.jsx)(n.li,{children:"\u5c06Renderer\u8fdb\u7a0b\u5f97\u5230\u7684\u5185\u5b58\u4e2d\u7684Bitmap\uff0c\u7ed8\u5236\u5230\u7528\u6237\u754c\u9762\u4e0a"}),"\n",(0,i.jsx)(n.li,{children:"\u7f51\u7edc\u8d44\u6e90\u7684\u7ba1\u7406\uff0c\u4e0b\u8f7d\u7b49"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Renderer\u8fdb\u7a0b\uff08\u591a\u4e2a\uff0c\u6bcf\u4e2aTab\u662f\u4e00\u4e2a\u8fdb\u7a0b\uff09"}),"\u3002Render\u8fdb\u7a0b\u4e3b\u8981\u4f5c\u7528\u4e3a\u9875\u9762\u6e32\u67d3\uff0c\u811a\u672c\u6267\u884c\uff0c\u4e8b\u4ef6\u5904\u7406\u7b49\uff08\u76f8\u5f53\u4e8e\u6bcf\u4e2atab\u90fd\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u5305\u542bjs\u6267\u884c\u3001\u6e32\u67d3\u7b49\uff09\u3002\u8be5\u8fdb\u7a0b\u6709\u591a\u4e2a\u7ebf\u7a0b\uff0c\u8457\u540d\u7684\u6709JS\u7ebf\u7a0b\u4ee5\u53ca\u6e32\u67d3\u7ebf\u7a0b"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5355\u8fdb\u7a0b\u5355\u4e2a\u9875\u9762tab\u7684\u591a\u7ebf\u7a0b",children:"\u5355\u8fdb\u7a0b\uff08\u5355\u4e2a\u9875\u9762tab\uff09\u7684\u591a\u7ebf\u7a0b"}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u4e3b\u8981\u7684\u6709",(0,i.jsx)(n.code,{children:"JS\u5f15\u64ce\u7ebf\u7a0b\u3001\u6e32\u67d3\u7ebf\u7a0b"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"1-js\u5f15\u64ce\u7ebf\u7a0b",children:"1. JS\u5f15\u64ce\u7ebf\u7a0b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e5f\u79f0\u4e3aJS\u5185\u6838\uff0c\u8d1f\u8d23\u5904\u7406Javascript\u811a\u672c\u7a0b\u5e8f\u3002\uff08\u4f8b\u5982V8\u5f15\u64ce\uff09"}),"\n",(0,i.jsx)(n.li,{children:"JS\u5f15\u64ce\u7ebf\u7a0b\u8d1f\u8d23\u89e3\u6790Javascript\u811a\u672c\uff0c\u8fd0\u884c\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.li,{children:"JS\u5f15\u64ce\u4e00\u76f4\u7b49\u5f85\u7740\u4efb\u52a1\u961f\u5217\u4e2d\u4efb\u52a1\u7684\u5230\u6765\uff0c\u7136\u540e\u52a0\u4ee5\u5904\u7406\uff0c\u4e00\u4e2aTab\u9875\uff08renderer\u8fdb\u7a0b\uff09\u4e2d\u65e0\u8bba\u4ec0\u4e48\u65f6\u5019\u90fd\u53ea\u6709\u4e00\u4e2aJS\u7ebf\u7a0b\u5728\u8fd0\u884cJS\u7a0b\u5e8f"}),"\n",(0,i.jsx)(n.li,{children:"\u540c\u6837\u6ce8\u610f\uff0cGUI\u6e32\u67d3\u7ebf\u7a0b\u4e0eJS\u5f15\u64ce\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\uff0c\u6240\u4ee5\u5982\u679cJS\u6267\u884c\u7684\u65f6\u95f4\u8fc7\u957f\uff0c\u8fd9\u6837\u5c31\u4f1a\u9020\u6210\u9875\u9762\u7684\u6e32\u67d3\u4e0d\u8fde\u8d2f\uff0c\u5bfc\u81f4\u9875\u9762\u6e32\u67d3\u52a0\u8f7d\u963b\u585e\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"(1) \u4e3a\u4ec0\u4e48JavaScript\u662f\u5355\u7ebf\u7a0b\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u5728\u660e\u786e\u4e00\u4e2a\u6982\u5ff5\uff0cJS\u5f15\u64ce\u7ebf\u7a0b\u751f\u5b58\u5728Render\u8fdb\u7a0b\uff08\u6d4f\u89c8\u5668\u6e32\u67d3\u8fdb\u7a0b\uff09\u3002\u5176\u5b9e\u4ece\u524d\u9762\u7684\u8fdb\u7a0b\uff0c\u7ebf\u7a0b\u4e4b\u95f4\u7684\u4ecb\u7ecd\u5df2\u7ecf\u660e\u767d\uff0c\u7ebf\u7a0b\u4e4b\u95f4\u8d44\u6e90\u5171\u4eab\uff0c\u76f8\u4e92\u5f71\u54cd\u3002\u5047\u8bbejavascript\u7684\u8fd0\u884c\u5b58\u5728\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u5f7c\u6b64\u64cd\u4f5c\u4e86\u540c\u4e00\u4e2a\u8d44\u6e90\uff0c\u8fd9\u6837\u4f1a\u9020\u6210\u540c\u6b65\u95ee\u9898\uff0c\u4fee\u6539\u5230\u5e95\u4ee5\u8c01\u4e3a\u6807\u51c6\u3002\n\u6240\u4ee5\uff0cJavaScript\u5c31\u662f\u5355\u7ebf\u7a0b\uff0c\u8fd9\u5df2\u7ecf\u6210\u4e86\u8fd9\u95e8\u8bed\u8a00\u7684\u6838\u5fc3\u7279\u5f81\uff0c\u5c06\u6765\u4e5f\u4e0d\u4f1a\u6539\u53d8\u3002"}),"\n",(0,i.jsx)(n.p,{children:"(2) WebWorker\u4f1a\u9020\u6210js\u591a\u7ebf\u7a0b\u5417\uff1f"}),"\n",(0,i.jsxs)(n.p,{children:["Worker\u63a5\u53e3\u4f1a\u751f\u6210",(0,i.jsx)(n.code,{children:"\u771f\u6b63\u7684\u64cd\u4f5c\u7cfb\u7edf\u7ea7\u522b\u7684\u7ebf\u7a0b"}),"\u3002\u6240\u4ee5\u8fd9\u91cc\u7684webworker\u4e0d\u662f\u4e00\u4e2a\u65b0\u7684js\u5f15\u64ce\u7ebf\u7a0b\u3002\u800c\u662f\u64cd\u4f5c\u7cfb\u7edf\u7ea7\u522b\u7684\u7ebf\u7a0b\u3002\u7ebf\u7a0b\u7684\u6267\u884c\u4e0d\u4f1a\u5f71\u54cd\u5230\u539f\u6709\u7684js\u5f15\u64ce\u7684\u6267\u884c\uff0c\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5230\u6d4f\u89c8\u5668\u6e32\u67d3Render\u8fdb\u7a0b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5WebWorker\u6709\u4ee5\u4e0b\u9650\u5236\uff1a\n1\u3001\u4e0d\u80fd\u8bbf\u95eeDOM\u548cBOM\u5bf9\u8c61\u7684\uff0cLocation\u548cnavigator\u7684\u53ea\u8bfb\u8bbf\u95ee\uff0c\u5e76\u4e14navigator\u5c01\u88c5\u6210\u4e86WorkerNavigator\u5bf9\u8c61\uff0c\u66f4\u6539\u90e8\u5206\u5c5e\u6027\u3002\u65e0\u6cd5\u8bfb\u53d6\u672c\u5730\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,i.jsx)(n.p,{children:"2\u3001\u5b50\u7ebf\u7a0b\u548c\u7236\u7ea7\u7ebf\u7a0b\u7684\u901a\u8baf\u662f\u901a\u8fc7\u503c\u62f7\u8d1d\uff0c\u5b50\u7ebf\u7a0b\u5bf9\u901a\u4fe1\u5185\u5bb9\u7684\u4fee\u6539\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u4e3b\u7ebf\u7a0b\u3002\u5728\u901a\u8baf\u8fc7\u7a0b\u4e2d\u503c\u8fc7\u5927\u4e5f\u4f1a\u5f71\u54cd\u5230\u6027\u80fd\uff08\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u7528transferable objects\uff09"}),"\n",(0,i.jsx)(n.p,{children:"3\u3001\u5e76\u975e\u771f\u7684\u591a\u7ebf\u7a0b\uff0c\u591a\u7ebf\u7a0b\u662f\u56e0\u4e3a\u6d4f\u89c8\u5668\u7684\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"4\u3001\u517c\u5bb9\u6027\u4e0d\u9ad8"}),"\n",(0,i.jsx)(n.p,{children:"5 \u56e0\u4e3a\u7ebf\u7a0b\u662f\u901a\u8fc7importScripts\u5f15\u5165\u5916\u90e8\u7684js\uff0c\u5e76\u4e14\u76f4\u63a5\u6267\u884c\uff0c\u5176\u5b9e\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u5f88\u5bb9\u6613\u88ab\u5916\u90e8\u6ce8\u5165\u4e00\u4e9b\u6076\u610f\u4ee3\u7801"}),"\n",(0,i.jsx)(n.p,{children:"6\u3001\u6761\u6570\u9650\u5236\uff0c\u5927\u591a\u6d4f\u89c8\u5668\u80fd\u521b\u5efawebworker\u7ebf\u7a0b\u7684\u6761\u6570\u662f\u6709\u9650\u5236\u7684\uff0c\u867d\u7136\u53ef\u4ee5\u624b\u52a8\u53bb\u62d3\u5c55\uff0c\u4f46\u662f\u5982\u679c\u4e0d\u8bbe\u7f6e\u7684\u8bdd\uff0c\u57fa\u672c\u4e0a\u90fd\u572820\u6761\u4ee5\u5185\uff0c\u6bcf\u6761\u7ebf\u7a0b\u5927\u69825M\u5de6\u53f3\uff0c\u9700\u8981\u624b\u52a8\u5173\u6389\u4e00\u4e9b\u4e0d\u7528\u7684\u7ebf\u7a0b\u624d\u80fd\u591f\u521b\u5efa\u65b0\u7684\u7ebf\u7a0b\uff08\u76f8\u5173\u89e3\u51b3\u65b9\u6848\uff09"}),"\n",(0,i.jsx)(n.p,{children:"7\u3001js\u5b58\u5728\u771f\u7684\u7ebf\u7a0b\u7684\u4e1c\u897f\uff0c\u6bd4\u5982SharedArrayBuffer"}),"\n",(0,i.jsx)(n.p,{children:"(3) js\u4ee3\u7801\u7684\u6267\u884c\uff08Event Loop\uff09\u4e0e\u5176\u4ed6\u7ebf\u7a0b\u4e4b\u95f4\u7684\u5408\u4f5c"}),"\n",(0,i.jsxs)(n.p,{children:["JavaScript \u5f15\u64ce\u5e76\u4e0d\u662f\u72ec\u7acb\u8fd0\u884c\u7684\uff0c\u5b83\u8fd0\u884c\u5728\u5bbf\u4e3b\u73af\u5883\u4e2d\uff0c\u5bf9\u591a\u6570\u5f00\u53d1\u8005\u6765\u8bf4\u901a\u5e38\u5c31\u662fWeb \u6d4f\u89c8\u5668\u3002\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\u6765\u5904\u7406\u7a0b\u5e8f\u4e2d\u591a\u4e2a\u5757\uff08\u8fd9\u91cc\u7684\u5757\u53ef\u4ee5\u7406\u89e3\u6210\u591a\u4e2a\u56de\u6389\u51fd\u6570\uff09\u7684\u6267\u884c\uff0c\u4e14\u6267\u884c\u6bcf\u5757\u65f6\u8c03\u7528JavaScript \u5f15\u64ce\uff0c\u8fd9\u79cd\u673a\u5236\u88ab\u79f0\u4e3a\u4e8b\u4ef6\u5faa\u73af\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c",(0,i.jsx)(n.code,{children:"JavaScript \u5f15\u64ce\u672c\u8eab\u5e76\u6ca1\u6709\u65f6\u95f4\u7684\u6982\u5ff5\uff0c\u53ea\u662f\u4e00\u4e2a\u6309\u9700\u6267\u884cJavaScript \u4efb\u610f\u4ee3\u7801\u7247\u6bb5\u7684\u73af\u5883\u3002\u201c\u4e8b\u4ef6\u201d\uff08JavaScript \u4ee3\u7801\u6267\u884c\uff09\u8c03\u5ea6\u603b\u662f\u7531\u5305\u542b\u5b83\u7684\u73af\u5883\u8fdb\u884c"}),"\u3002\u8fd9\u4e2a\u8c03\u5ea6\u662f\u7531\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b\u8c03\u5ea6\u7684\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"2-\u6e32\u67d3\u7ebf\u7a0b",children:"2. \u6e32\u67d3\u7ebf\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u4e5f\u53eb\u6e32\u67d3\u5f15\u64ce\uff08\u6216\u8005\u5927\u5bb6\u4fd7\u8bed\u4e0a\u7684\u6d4f\u89c8\u5668\u5185\u6838\uff0c\u4f46\u5176\u5b9e\u6d4f\u89c8\u5668\u5185\u6838\u5305\u62ec\u6e32\u67d3\u5f15\u64ce\u548cJS\u5f15\u64ce\uff09\uff0c\u4e3b\u8981\u4f5c\u7528\u662f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8d1f\u8d23\u6e32\u67d3\u6d4f\u89c8\u5668\u754c\u9762\uff0c\u89e3\u6790HTML\uff0cCSS\uff0c\u6784\u5efaDOM\u6811\u548cRenderObject\u6811\uff0c\u5e03\u5c40\u548c\u7ed8\u5236\u7b49\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u754c\u9762\u9700\u8981\u91cd\u7ed8\uff08Repaint\uff09\u6216\u7531\u4e8e\u67d0\u79cd\u64cd\u4f5c\u5f15\u53d1\u56de\u6d41(reflow)\u65f6\uff0c\u8be5\u7ebf\u7a0b\u5c31\u4f1a\u6267\u884c"}),"\n",(0,i.jsx)(n.li,{children:"\u6ce8\u610f\uff0cGUI\u6e32\u67d3\u7ebf\u7a0b\u4e0eJS\u5f15\u64ce\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\uff0c\u5f53JS\u5f15\u64ce\u6267\u884c\u65f6GUI\u7ebf\u7a0b\u4f1a\u88ab\u6302\u8d77\uff08\u76f8\u5f53\u4e8e\u88ab\u51bb\u7ed3\u4e86\uff09\uff0cGUI\u66f4\u65b0\u4f1a\u88ab\u4fdd\u5b58\u5728\u4e00\u4e2a\u961f\u5217\u4e2d\u7b49\u5230JS\u5f15\u64ce\u7a7a\u95f2\u65f6\u7acb\u5373\u88ab\u6267\u884c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u540c\u6e32\u67d3\u5f15\u64ce\u5e26\u6765\u7684\u4e3b\u8981\u95ee\u9898\u662f\u5bf9 CSS \u7684\u652f\u6301\u5ea6\u4e0e\u5c5e\u6027\u8868\u73b0\u5dee\u5f02\u3002\u73b0\u5728\u4e3b\u6d41\u7684\u5185\u6838\u6709\uff1aBlink\u3001Webkit\u3001Gecko\u3001EdgeHTML\u3001Trident\uff0c\u8fd9\u91cc\u9762\u6709\u51e0\u4e2a\u57fa\u7840\u77e5\u8bc6\u70b9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Blink \u662f\u5728 Webkit \u7684\u57fa\u7840\u4e0a\u7684\u6539\u8fdb\uff0c\u662f\u73b0\u5728\u5bf9\u65b0\u7279\u6027\u652f\u6301\u5ea6\u6700\u597d\u7684\u5185\u6838"}),"\n",(0,i.jsx)(n.li,{children:"\u79fb\u52a8\u7aef\u57fa\u672c\u4e0a\u5168\u90e8\u662f Webkit \u6216 Blink \u5185\u6838\uff08\u9664\u53bb Android \u4e0a\u817e\u8baf\u5bb6\u7684 X5\uff09\uff0c\u8fd9\u4e24\u4e2a\u5185\u6838\u5bf9\u65b0\u7279\u6027\u7684\u652f\u6301\u5ea6\u8f83\u9ad8\uff0c\u6240\u4ee5\u65b0\u7279\u6027\u53ef\u4ee5\u5728\u79fb\u52a8\u7aef\u5927\u5c55\u8eab\u624b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Trident \u662f IE4+ \u7684\u5185\u6838\uff0c\u4e00\u76f4\u6301\u7eed\u5230 IE11\uff0cEdgeHTML \u662f\u5fae\u8f6f\u629b\u5f03 IE \u540e\u5f00\u53d1\u7684\u5168\u65b0\u5185\u6838"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Chromium\u5185\u6838\u67b6\u6784\uff0c\u5305\u542bBlink\u6e32\u67d3\u5f15\u64ce\u548cV8 JS\u5f15\u64ce\u3002\u7b80\u5355\u7406\u89e3\u662f\u9609\u5272\u7248Chrome\u6d4f\u89c8\u5668\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-\u5176\u4ed6\u7ebf\u7a0b",children:"3. \u5176\u4ed6\u7ebf\u7a0b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f52\u5c5e\u4e8e\u6d4f\u89c8\u5668\u800c\u4e0d\u662fJS\u5f15\u64ce\uff0c\u7528\u6765\u63a7\u5236\u4e8b\u4ef6\u5faa\u73af\uff08\u53ef\u4ee5\u7406\u89e3\uff0cJS\u5f15\u64ce\u81ea\u5df1\u90fd\u5fd9\u4e0d\u8fc7\u6765\uff0c\u9700\u8981\u6d4f\u89c8\u5668\u53e6\u5f00\u7ebf\u7a0b\u534f\u52a9\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53JS\u5f15\u64ce\u6267\u884c\u4ee3\u7801\u5757\u5982setTimeOut\u65f6\uff08\u4e5f\u53ef\u6765\u81ea\u6d4f\u89c8\u5668\u5185\u6838\u7684\u5176\u4ed6\u7ebf\u7a0b,\u5982\u9f20\u6807\u70b9\u51fb\u3001AJAX\u5f02\u6b65\u8bf7\u6c42\u7b49\uff09\uff0c\u4f1a\u5c06\u5bf9\u5e94\u4efb\u52a1\u6dfb\u52a0\u5230\u4e8b\u4ef6\u7ebf\u7a0b\u4e2d"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u5bf9\u5e94\u7684\u4e8b\u4ef6\u7b26\u5408\u89e6\u53d1\u6761\u4ef6\u88ab\u89e6\u53d1\u65f6\uff0c\u8be5\u7ebf\u7a0b\u4f1a\u628a\u4e8b\u4ef6\u6dfb\u52a0\u5230\u5f85\u5904\u7406\u961f\u5217\u7684\u961f\u5c3e\uff0c\u7b49\u5f85JS\u5f15\u64ce\u7684\u5904\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u6ce8\u610f\uff0c\u7531\u4e8eJS\u7684\u5355\u7ebf\u7a0b\u5173\u7cfb\uff0c\u6240\u4ee5\u8fd9\u4e9b\u5f85\u5904\u7406\u961f\u5217\u4e2d\u7684\u4e8b\u4ef6\u90fd\u5f97\u6392\u961f\u7b49\u5f85JS\u5f15\u64ce\u5904\u7406\uff08\u5f53JS\u5f15\u64ce\u7a7a\u95f2\u65f6\u624d\u4f1a\u53bb\u6267\u884c\uff09"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b9a\u65f6\u89e6\u53d1\u5668\u7ebf\u7a0b","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f20\u8bf4\u4e2d\u7684setInterval\u4e0esetTimeout\u6240\u5728\u7ebf\u7a0b"}),"\n",(0,i.jsx)(n.li,{children:"\u6d4f\u89c8\u5668\u5b9a\u65f6\u8ba1\u6570\u5668\u5e76\u4e0d\u662f\u7531JavaScript\u5f15\u64ce\u8ba1\u6570\u7684,\uff08\u56e0\u4e3aJavaScript\u5f15\u64ce\u662f\u5355\u7ebf\u7a0b\u7684, \u5982\u679c\u5904\u4e8e\u963b\u585e\u7ebf\u7a0b\u72b6\u6001\u5c31\u4f1a\u5f71\u54cd\u8bb0\u8ba1\u65f6\u7684\u51c6\u786e\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u56e0\u6b64\u901a\u8fc7\u5355\u72ec\u7ebf\u7a0b\u6765\u8ba1\u65f6\u5e76\u89e6\u53d1\u5b9a\u65f6\uff08\u8ba1\u65f6\u5b8c\u6bd5\u540e\uff0c\u6dfb\u52a0\u5230\u4e8b\u4ef6\u961f\u5217\u4e2d\uff0c\u7b49\u5f85JS\u5f15\u64ce\u7a7a\u95f2\u540e\u6267\u884c\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u6ce8\u610f\uff0cW3C\u5728HTML\u6807\u51c6\u4e2d\u89c4\u5b9a\uff0c\u89c4\u5b9a\u8981\u6c42setTimeout\u4e2d\u4f4e\u4e8e4ms\u7684\u65f6\u95f4\u95f4\u9694\u7b97\u4e3a4ms\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5f02\u6b65http\u8bf7\u6c42\u7ebf\u7a0b","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728XMLHttpRequest\u5728\u8fde\u63a5\u540e\u662f\u901a\u8fc7\u6d4f\u89c8\u5668\u65b0\u5f00\u4e00\u4e2a\u7ebf\u7a0b\u8bf7\u6c42"}),"\n",(0,i.jsx)(n.li,{children:"\u5c06\u68c0\u6d4b\u5230\u72b6\u6001\u53d8\u66f4\u65f6\uff0c\u5982\u679c\u8bbe\u7f6e\u6709\u56de\u8c03\u51fd\u6570\uff0c\u5f02\u6b65\u7ebf\u7a0b\u5c31\u4ea7\u751f\u72b6\u6001\u53d8\u66f4\u4e8b\u4ef6\uff0c\u5c06\u8fd9\u4e2a\u56de\u8c03\u518d\u653e\u5165\u4e8b\u4ef6\u961f\u5217\u4e2d\u3002\u518d\u7531JavaScript\u5f15\u64ce\u6267\u884c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-js\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u5173\u7cfb",children:"4. JS\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u5173\u7cfb"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.a,{href:"/docs/others/js/http-base-1.url",children:"\u8f93\u5165URL\u80cc\u540e\u7684\u6280\u672f\u6b65\u9aa4"}),"\u4e2d\uff0c\u8be6\u7ec6\u8bf4\u4e86\u6d4f\u89c8\u5668\u662f\u5982\u4f55\u89e3\u6790html\u3001css\u4ee5\u53cajs\uff0c\u5e76\u5448\u73b0\u6700\u7ec8\u7684\u7f51\u9875\u51fa\u6765\u3002\u91cd\u70b9\u662f\u6e32\u67d3\u5f15\u64ce\u9047\u5230js\u4ee3\u7801\u4f1a\u901a\u77e5\u8ba9JS\u5f15\u64ce\u89e3\u6790\uff0c\u7136\u540eJS\u5f15\u64ce\u89e3\u91ca\u6267\u884c\u540e\uff0c\u901a\u8fc7DOM\u6539\u53d8\u5e76\u6e32\u67d3\u7f51\u9875\uff08\u8fd9\u90e8\u5206\u5de5\u4f5c\u5c5e\u4e8e\u6e32\u67d3\u5f15\u64ce\uff09\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"JavaScript\u5f15\u64ce\u548c\u6e32\u67d3\u5f15\u64ce\u7684\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6310131/57189224-5bc7ff80-6f3e-11e9-9dd0-2c7bfb5ec14c.png",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"v8\u5f15\u64ce",children:"V8\u5f15\u64ce"}),"\n",(0,i.jsx)(n.p,{children:"\u804a\u4e0b\u5927\u540d\u9f0e\u9f0e\u7684V8\u5f15\u64ce\u3002JavaScriptCore\u662fWebKit\u7684\u9ed8\u8ba4\u5f15\u64ce\uff0c\u5728\u8c37\u6b4c\u7cfb\u5217\u4ea7\u54c1\u4e2d\u88ab\u66ff\u6362\u4e3aV8\u5f15\u64ce\u3002"}),"\n",(0,i.jsx)(n.p,{children:"V8 \u662f\u8c37\u6b4c\u5f00\u53d1\u7684\u9ad8\u6027\u80fd JavaScript \u5f15\u64ce\uff0c\u8be5\u5f15\u64ce\u4f7f\u7528 C++ \u5f00\u53d1\u3002\u5728V8\u5f15\u64ce\u4e2d\uff0c\u6e90\u4ee3\u7801\u5148\u88ab\u89e3\u6790\u5668\u8f6c\u53d8\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811(AST)\uff0c\u7136\u540e\u4f7f\u7528JIT\u7f16\u8bd1\u5668\u7684\u5168\u4ee3\u7801\u751f\u6210\u5668\u4eceAST\u76f4\u63a5\u751f\u6210\u672c\u5730\u53ef\u6267\u884c\u4ee3\u7801\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JavaScriptCore \u7684\u5927\u81f4\u6d41\u7a0b\u4e3a\uff1a\u6e90\u4ee3\u7801-\u2192\u62bd\u8c61\u8bed\u6cd5\u6811-\u2192\u5b57\u8282\u7801(\u53ef\u4f18\u5316\u9636\u6bb5)-\u2192JIT-\u2192\u672c\u5730\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"V8 \u7684\u5927\u81f4\u6d41\u7a0b\u4e3a\uff1a\u6e90\u4ee3\u7801-\u2192\u62bd\u8c61\u8bed\u6cd5\u6811-\u2192JIT-\u2192\u672c\u5730\u4ee3\u7801\uff08\u5728\u6b64\u4f18\u5316\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6310131/57189210-320ed880-6f3e-11e9-8328-941607c36e76.png",alt:"image"})}),"\n",(0,i.jsx)(n.h4,{id:"\u6027\u80fd\u6bd4\u8f83",children:"\u6027\u80fd\u6bd4\u8f83"}),"\n",(0,i.jsx)(n.p,{children:"JS\u662f\u8fb9\u89e3\u91ca\u8fb9\u7f16\u8bd1\uff0cJava\u662f\u63d0\u524d\u7f16\u8bd1\u3002Java\u5728\u7f16\u8bd1\u9636\u6bb5\u628aAST\u8f6c\u6362\u4e3a\u5b57\u8282\u7801\uff0c\u540c\u65f6\u505a\u7740\u4f18\u5316\uff0c\u6700\u540e\u751f\u6210\u53ef\u76f4\u63a5\u6267\u884c\u7684\u672c\u5730\u4ee3\u7801\u3002\u6240\u4ee5\u4ece\u8bed\u8a00\u5c42\u9762\u8bb2\uff0cJS\u7684\u6027\u80fd\u4e0eJava\u3001C++\u4e0d\u518d\u540c\u4e00\u4e2a\u5c42\u6b21\u4e0a\u3002\u4f46\u8fb9\u89e3\u91ca\u8fb9\u7f16\u8bd1\u610f\u5473\u7740js\u8bed\u8a00\u66f4\u52a0\u7075\u6d3b\uff0c\u6613\u7528\uff0c\u540c\u65f6V8\u5f15\u64ce\u4e5f\u5728\u4e0d\u65ad\u4f18\u5316\u6027\u80fd\uff0c\u8d4b\u80fdjs\u66f4\u591a\u9886\u57df\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/6310131/57189215-4652d580-6f3e-11e9-83c8-9b64b07bb9fb.png",alt:"image"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var i=s(6540);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);