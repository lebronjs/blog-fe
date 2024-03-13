"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[6568],{6982:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var o=s(4848),d=s(8453);const r={},c="Node Debug for VSCode",t={id:"others/node/node-vscode-debug",title:"Node Debug for VSCode",description:"\u8c03\u8bd5\u5bf9\u4e8e\u4efb\u4f55\u4e00\u95e8\u8bed\u8a00\u90fd\u662f\u53ca\u5176\u91cd\u8981\u7684\u3002\u597d\u7684\u8c03\u8bd5\u5de5\u5177\u80fd\u8ba9\u4eba\u66f4\u6709\u6548\u7387\u7684\u5f00\u53d1\u4ee5\u53ca\u67e5\u9519\u3002Node\u6ca1\u6709chrome developer tool\u8fd9\u6837\u7684Web\u53ef\u89c6\u5316\u96c6\u6210\u8c03\u8bd5\u5de5\u5177\uff0c\u4f46VSCode\u9ed8\u8ba4\u96c6\u6210\u4e86TS\u3001Git\u3001Debug\u7b49\u5b9e\u7528\u5de5\u5177\uff0c\u800c\u4e14\u4f7f\u7528\u975e\u5e38\u65b9\u4fbf\u3002VSCode\u7684\u63d2\u4ef6\u751f\u6001\uff0c\u4e5f\u8ba9VSCode\u53d8\u6210\u524d\u7aef\u5f00\u53d1\u5fc5\u5907\u7684\u5229\u5668\u3002\u4ee5\u4e0b\u4ecb\u7ecdVSCode\u4e0b\u7684Node\u8c03\u8bd5\u3002",source:"@site/docs/others/node/node-vscode-debug.md",sourceDirName:"others/node",slug:"/others/node/node-vscode-debug",permalink:"/blog-fe/docs/others/node/node-vscode-debug",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"\u5e38\u7528Node\u5de5\u5177\u603b\u7ed3",permalink:"/blog-fe/docs/others/node/node-usage-tool-package"},next:{title:"Redis\u7b80\u4ecb",permalink:"/blog-fe/docs/others/node/redis"}},i={},l=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u8c03\u8bd5\u53c2\u6570\u914d\u7f6e",id:"\u8c03\u8bd5\u53c2\u6570\u914d\u7f6e",level:2},{value:"debug\u4f7f\u7528npm\u542f\u52a8",id:"debug\u4f7f\u7528npm\u542f\u52a8",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"node-debug-for-vscode",children:"Node Debug for VSCode"}),"\n",(0,o.jsx)(n.p,{children:"\u8c03\u8bd5\u5bf9\u4e8e\u4efb\u4f55\u4e00\u95e8\u8bed\u8a00\u90fd\u662f\u53ca\u5176\u91cd\u8981\u7684\u3002\u597d\u7684\u8c03\u8bd5\u5de5\u5177\u80fd\u8ba9\u4eba\u66f4\u6709\u6548\u7387\u7684\u5f00\u53d1\u4ee5\u53ca\u67e5\u9519\u3002Node\u6ca1\u6709chrome developer tool\u8fd9\u6837\u7684Web\u53ef\u89c6\u5316\u96c6\u6210\u8c03\u8bd5\u5de5\u5177\uff0c\u4f46VSCode\u9ed8\u8ba4\u96c6\u6210\u4e86TS\u3001Git\u3001Debug\u7b49\u5b9e\u7528\u5de5\u5177\uff0c\u800c\u4e14\u4f7f\u7528\u975e\u5e38\u65b9\u4fbf\u3002VSCode\u7684\u63d2\u4ef6\u751f\u6001\uff0c\u4e5f\u8ba9VSCode\u53d8\u6210\u524d\u7aef\u5f00\u53d1\u5fc5\u5907\u7684\u5229\u5668\u3002\u4ee5\u4e0b\u4ecb\u7ecdVSCode\u4e0b\u7684Node\u8c03\u8bd5\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u8fdb\u5165VScode\u754c\u9762\uff0c\u70b9\u51fb\u754c\u9762\u5de6\u8fb9\u7684\u7b2c\u56db\u4e2a\u7c7b\u4f3c\u866b\u5b50\u7684\u6309\u94ae\uff0c\u8fdb\u5165\u8c03\u8bd5\u754c\u9762\uff1a\n",(0,o.jsx)(n.img,{src:"https://segmentfault.com/img/bVMhsN?w=640&h=342",alt:""})]}),"\n",(0,o.jsxs)(n.li,{children:["\u70b9\u51fb\u9875\u9762\u4e0a\u65b9\u201c\u6ca1\u6709\u914d\u7f6e\u201d\u4e0b\u62c9\u83dc\u5355\uff0c\u9009\u62e9\u201c\u6dfb\u52a0\u914d\u7f6e\u201d\u3002\n",(0,o.jsx)(n.img,{src:"https://segmentfault.com/img/bVMhsO?w=640&h=571",alt:""})]}),"\n",(0,o.jsxs)(n.li,{children:["\u9009\u62e9Node.js\u73af\u5883\u3002\n",(0,o.jsx)(n.img,{src:"https://segmentfault.com/img/bVMhsP?w=640&h=107",alt:""})]}),"\n",(0,o.jsxs)(n.li,{children:["\u9009\u62e9\u5b8c\u6210\u4e4b\u540e\uff0c\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u4f1a\u751f\u6210\u4e00\u4e2a.vscode\u7684\u76ee\u5f55\uff0c\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u5b58\u653e\u4e86\u5404\u79cd\u5404\u6837\u7684VScode\u7f16\u8f91\u5668\u7684\u914d\u7f6e\u3002VSCode\u6839\u636e\u4f60\u9009\u62e9\u7684\u73af\u5883\uff0c\u751f\u6210\u4e86\u5bf9\u5e94\u7684",(0,o.jsx)(n.code,{children:"\u914d\u7f6e\u6587\u4ef6lanuch.json"}),"\u3002Node\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "node",\n            "request": "launch",\n            "name": "Launch Program",\n            "program": "${workspaceFolder}/node/http.js" // \u8c03\u8bd5\u8def\u5f84\u5165\u53e3,\u9700\u8981\u6839\u636e\u81ea\u5df1\u9879\u76ee\u8fdb\u884c\u914d\u7f6e\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"\u8bbe\u7f6e\u65ad\u70b9\uff0c\u70b9\u51fb\u5f00\u59cb\u8c03\u8bd5\u6309\u94ae\uff08\u7eff\u8272\u4e09\u89d2\u5f62\uff09\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u8c03\u8bd5\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u8c03\u8bd5\u53c2\u6570\u914d\u7f6e",children:"\u8c03\u8bd5\u53c2\u6570\u914d\u7f6e"}),"\n",(0,o.jsxs)(n.p,{children:["lanuch.json\u914d\u7f6e\u9879\u8f83\u591a\uff0c\u53ef\u67e5\u770b",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging",children:"\u5b98\u65b9\u6587\u6863"}),"\u8be6\u7ec6\u4e86\u89e3\u3002VSCode\u4e5f\u96c6\u6210\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u8c03\u8bd5\u914d\u7f6e\u7247\u6bb5\uff0c\u6709Node\u3001Chrome\u3001Electron\u3001Gulp\u7b49\u3002\u4ee5\u4e0b\u8bf4\u660e\u51e0\u4e2a\u91cd\u8981\u53c2\u6570\uff1a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"}),": \u7ed9\u8be5\u914d\u7f6e\u9879\u53d6\u4e2a\u540d\u5b57"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"type"}),": \u901a\u5e38\u6709node\u3001chrome\u7b49\u53c2\u6570"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"request"}),": launch/attach","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["launch\u6a21\u5f0f\uff0c",(0,o.jsx)(n.strong,{children:"\u7531 vscode \u6765\u542f\u52a8"}),"\u4e00\u4e2a\u72ec\u7acb\u7684\u5177\u6709 debug \u6a21\u5f0f\u7684\u7a0b\u5e8f"]}),"\n",(0,o.jsxs)(n.li,{children:["attach\u6a21\u5f0f\uff0c\u662f\u8fde\u63a5",(0,o.jsx)(n.strong,{children:"\u5df2\u7ecf\u542f\u52a8\u7684\u670d\u52a1"}),"\u3002\u6bd4\u5982\u5df2\u7ecf\u5728\u5916\u9762\u5c06\u9879\u76ee\u542f\u52a8\uff0c\u7a81\u7136\u9700\u8981\u8c03\u8bd5\uff0c\u4e0d\u9700\u8981\u5173\u6389\u5df2\u7ecf\u542f\u52a8\u7684\u9879\u76ee\u518d\u53bbvscode\u4e2d\u91cd\u65b0\u542f\u52a8\uff0c\u53ea\u8981\u4ee5attach\u7684\u6a21\u5f0f\u542f\u52a8\uff0cvscode\u53ef\u4ee5\u8fde\u63a5\u5230\u5df2\u7ecf\u542f\u52a8\u7684\u670d\u52a1\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"program"}),": debug node\u5165\u53e3\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u53ea\u5728launch\u6a21\u5f0f\u6709\u6548"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"runtimeExecutable"}),": \u6267\u884c\u5668\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u9ed8\u8ba4\u662fnode\u3002\u53ea\u5728launch\u6a21\u5f0f\u6709\u6548"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"runtimeArgs"}),": \u6267\u884c\u5668\u53c2\u6570\u3002\u53ea\u5728launch\u6a21\u5f0f\u6709\u6548"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"debug\u4f7f\u7528npm\u542f\u52a8",children:"debug\u4f7f\u7528npm\u542f\u52a8"}),"\n",(0,o.jsx)(n.p,{children:"\u4ee5\u4e0aNode\u8c03\u8bd5\u65b9\u5f0f\u6709\u4e2a\u95ee\u9898\uff0c\u6bcf\u6b21\u6587\u4ef6\u5165\u53e3\u4fee\u6539\u90fd\u9700\u8981\u6539\u52a8lanuch.json\u914d\u7f6e\u6587\u4ef6\u3002\u6211\u4eec\u7684\u65b9\u6cd5\u662f\u53ef\u4ee5\u4f7f\u7528\u8ba9npm script\u5145\u5f53\u5165\u53e3\uff0c\u8ba9\u6539\u52a8\u53d8\u6210\u5728package.json\u4e2d\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4ee5\u4e0a\u9700\u8981\u6539\u9020\u4e24\u6b65\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u4fee\u6539lanuch.json\u914d\u7f6e\u6210npm\u547d\u4ee4\u65b9\u5f0f\uff1a"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "node",\n            "request": "launch",\n            "name": "Launch via NPM",\n            "runtimeExecutable": "npm", // npm \u6267\u884c\u5668\u3002\u4f7f\u7528npm script\u65b9\u5f0f\u4f5c\u4e3a\u5165\u53e3\n            "runtimeArgs": [\n                "run-script",\n                "start:debug"\n            ],\n            "port": 5858 // \u8c03\u8bd5\u7684\u7aef\u53e3\u6307\u5b9a\uff0cattach\u65f6\u7528\u5230\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u4fee\u6539package.json\u7684scripts\u914d\u7f6e"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    // \u6ce8\u610f\uff1a\u9700\u8981\u914d\u7f6e\u4e0a--inspect-brk=5858\u4ee5attach\u5230debugger\n    "start:debug": "nodemon --inspect-brk=5858 node/http.js"\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u7ae0",children:"\u53c2\u8003\u6587\u7ae0"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging",children:"nodejs-debugging"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://segmentfault.com/a/1190000009084576",children:"\u4f7f\u7528Visual Studio Code\u5bf9Node.js\u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/43210203/what-is-the-proper-way-to-debug-an-npm-script-using-vscode",children:"What is the proper way to debug an npm script using vscode?\n"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var o=s(6540);const d={},r=o.createContext(d);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);