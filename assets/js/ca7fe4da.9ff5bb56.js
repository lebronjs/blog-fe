"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[9922],{2812:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var s=l(4848),i=l(8453);const c={},r="Canvas\u57fa\u7840",t={id:"others/js/canvas-base",title:"Canvas\u57fa\u7840",description:"canvas \u770b\u8d77\u6765\u548c img \u5143\u7d20\u5f88\u76f8\u50cf\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\u5b83\u5e76\u6ca1\u6709 src \u548c alt \u5c5e\u6027\u3002\u5b9e\u9645\u4e0a\uff0ccanvas \u6807\u7b7e\u53ea\u6709\u4e24\u4e2a\u5c5e\u6027\u2014\u2014 width\u548cheight\u3002",source:"@site/docs/others/js/canvas-base.md",sourceDirName:"others/js",slug:"/others/js/canvas-base",permalink:"/blog-fe/docs/others/js/canvas-base",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"\u4f60\u5fc5\u987b\u77e5\u9053\u7684Webpack",permalink:"/blog-fe/docs/others/interview/webpack-you-need-known"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/blog-fe/docs/others/js/data-structure"}},d={},a=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"xy",id:"xy",level:3},{value:"\u7ed8\u5236\u5f62\u72b6",id:"\u7ed8\u5236\u5f62\u72b6",level:2},{value:"1. \u7ed8\u5236\u77e9\u5f62",id:"1-\u7ed8\u5236\u77e9\u5f62",level:3},{value:"2. \u7ed8\u5236\u8def\u5f84",id:"2-\u7ed8\u5236\u8def\u5f84",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u6837\u5f0f\u548c\u989c\u8272",id:"\u6837\u5f0f\u548c\u989c\u8272",level:2},{value:"\u7ed8\u5236\u5143\u7d20",id:"\u7ed8\u5236\u5143\u7d20",level:2}];function h(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"canvas\u57fa\u7840",children:"Canvas\u57fa\u7840"}),"\n",(0,s.jsx)(e.p,{children:"canvas \u770b\u8d77\u6765\u548c img \u5143\u7d20\u5f88\u76f8\u50cf\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\u5b83\u5e76\u6ca1\u6709 src \u548c alt \u5c5e\u6027\u3002\u5b9e\u9645\u4e0a\uff0ccanvas \u6807\u7b7e\u53ea\u6709\u4e24\u4e2a\u5c5e\u6027\u2014\u2014 width\u548cheight\u3002"}),"\n",(0,s.jsx)(e.p,{children:"canvas \u5143\u7d20\u521b\u9020\u4e86\u4e00\u4e2a\u56fa\u5b9a\u5927\u5c0f\u7684\u753b\u5e03\uff0ccanvas\u8d77\u521d\u662f\u7a7a\u767d\u7684\u3002\u4e3a\u4e86\u5c55\u793a\uff0c\u9996\u5148\u811a\u672c\u9700\u8981\u627e\u5230\u6e32\u67d3\u4e0a\u4e0b\u6587\uff0c\u7136\u540e\u5728\u5b83\u7684\u4e0a\u9762\u7ed8\u5236\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u5b83\u7684getContext() \u65b9\u6cd5\u6765\u8bbf\u95ee\u7ed8\u753b\u4e0a\u4e0b\u6587\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"var canvas = document.getElementById('tutorial');\nvar ctx = canvas.getContext('2d'); // \u753b\u56fe\u57fa\u7840\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,s.jsx)(e.h3,{id:"xy",children:"xy"}),"\n",(0,s.jsxs)(e.p,{children:["\u6805\u683c\u7684\u8d77\u70b9\u4e3a\u5de6\u4e0a\u89d2\uff08\u5750\u6807\u4e3a\uff080,0\uff09\uff09\u3002\u6240\u6709\u5143\u7d20\u7684\u4f4d\u7f6e\u90fd\u76f8\u5bf9\u4e8e\u539f\u70b9\u5b9a\u4f4d\u3002\n",(0,s.jsx)(e.img,{src:"https://mdn.mozillademos.org/files/224/Canvas_default_grid.png",alt:""})]}),"\n",(0,s.jsx)(e.h2,{id:"\u7ed8\u5236\u5f62\u72b6",children:"\u7ed8\u5236\u5f62\u72b6"}),"\n",(0,s.jsx)(e.h3,{id:"1-\u7ed8\u5236\u77e9\u5f62",children:"1. \u7ed8\u5236\u77e9\u5f62"}),"\n",(0,s.jsx)(e.p,{children:"canvas\u53ea\u652f\u6301\u4e00\u79cd\u539f\u751f\u7684\u56fe\u5f62\u7ed8\u5236\uff08\u9a6c\u4e0a\u663e\u73b0\u5728canvas\u4e0a\uff0c\u5373\u65f6\u751f\u6548\uff09\uff1a\u77e9\u5f62\u3002\u6240\u6709\u5176\u4ed6\u7684\u56fe\u5f62\u7684\u7ed8\u5236\u90fd\u81f3\u5c11\u9700\u8981\u751f\u6210\u4e00\u6761\u8def\u5f84\u3002canvas\u63d0\u4f9b\u4e86\u4e09\u79cd\u65b9\u6cd5\u7ed8\u5236\u77e9\u5f62\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"fillRect(x, y, width, height)"}),"\n\u7ed8\u5236\u4e00\u4e2a\u586b\u5145\u7684\u77e9\u5f62"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"strokeRect(x, y, width, height)"}),"\n\u7ed8\u5236\u4e00\u4e2a\u77e9\u5f62\u7684\u8fb9\u6846"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"clearRect(x, y, width, height)"}),"\n\u6e05\u9664\u6307\u5b9a\u77e9\u5f62\u533a\u57df\uff0c\u8ba9\u6e05\u9664\u90e8\u5206\u5b8c\u5168\u900f\u660e\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"x\u4e0ey\u6307\u5b9a\u4e86\u5728canvas\u753b\u5e03\u4e0a\u6240\u7ed8\u5236\u7684\u77e9\u5f62\u7684\u5de6\u4e0a\u89d2\uff08\u76f8\u5bf9\u4e8e\u539f\u70b9\uff09\u7684\u5750\u6807\u3002width\u548cheight\u8bbe\u7f6e\u77e9\u5f62\u7684\u5c3a\u5bf8\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"2-\u7ed8\u5236\u8def\u5f84",children:"2. \u7ed8\u5236\u8def\u5f84"}),"\n",(0,s.jsx)(e.p,{children:"\u8def\u5f84\u7ed8\u5236\u56fe\u5f62\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9996\u5148\uff0c\u4f60\u9700\u8981\u521b\u5efa\u8def\u5f84\u8d77\u59cb\u70b9\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7136\u540e\u4f60\u4f7f\u7528\u753b\u56fe\u547d\u4ee4\u53bb\u753b\u51fa\u8def\u5f84\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4e4b\u540e\u4f60\u628a\u8def\u5f84\u5c01\u95ed\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4e00\u65e6\u8def\u5f84\u751f\u6210\uff0c\u4f60\u5c31\u80fd\u901a\u8fc7\u63cf\u8fb9\u6216\u586b\u5145\u8def\u5f84\u533a\u57df\u6765\u6e32\u67d3\u56fe\u5f62\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u51fd\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"beginPath()"}),"\uff0c\u8def\u5f84\u7684\u7b2c\u4e00\u6b65\u3002\n\u65b0\u5efa\u4e00\u6761\u8def\u5f84\uff0c\u751f\u6210\u4e4b\u540e\uff0c\u56fe\u5f62\u7ed8\u5236\u547d\u4ee4\u88ab\u6307\u5411\u5230\u8def\u5f84\u4e0a\u751f\u6210\u8def\u5f84\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"closePath()"}),"\uff0c\u4e0d\u662f\u5fc5\u9700\u7684\u3002\n\u95ed\u5408\u8def\u5f84\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"stroke()"}),"\uff0c\u6ca1\u6709\u95ed\u5408\u7684\u5f62\u72b6\u4e0d\u4f1a\u81ea\u52a8\u95ed\u5408\u3002\n\u901a\u8fc7\u7ebf\u6761\u6765\u7ed8\u5236\u56fe\u5f62\u8f6e\u5ed3\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"fill()"}),"\uff0c\u6ca1\u6709\u95ed\u5408\u7684\u5f62\u72b6\u90fd\u4f1a\u81ea\u52a8\u95ed\u5408\u3002\n\u901a\u8fc7\u586b\u5145\u8def\u5f84\u7684\u5185\u5bb9\u533a\u57df\u751f\u6210\u5b9e\u5fc3\u7684\u56fe\u5f62\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u753b\u77e9\u5f62","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"fillRect"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u753b\u8def\u5f84","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u57fa\u7840","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"beginPath()\u3002\u5e38\u548cmoveTo\uff08\u5c06\u7b14\u89e6\u79fb\u52a8\u5230\u6307\u5b9a\u7684\u5750\u6807x\u4ee5\u53cay\u4e0a\uff09\u642d\u914d"}),"\n",(0,s.jsx)(e.li,{children:"closePath() \u548c\u5f00\u59cb\u8def\u5f84\u5f62\u6210\u95ed\u5408\u8def\u5f84\u3002"}),"\n",(0,s.jsx)(e.li,{children:"fill() \u586b\u5145"}),"\n",(0,s.jsx)(e.li,{children:"stroke() \u753b\u7ebf"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u753b\u56fe\u5f62","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"arc(x, y, radius, startAngle, endAngle, anticlockwise)"}),"\n",(0,s.jsx)(e.li,{children:"lineTo(x, y) \u7ed8\u5236\u76f4\u7ebf"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u753b\u8def\u5f84\uff0c\u4e00\u5b9a\u662f\u9047\u5230stroke/fill\u65b9\u6cd5\uff0c\u624d\u5f00\u59cb\u7ed8\u5236\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u751f\u6210\u95ed\u5408\u8def\u5f84\uff08\u5982\u4e09\u89d2\u5f62\u8fb9\u6846\uff09\uff0c\u9700\u8981closePath + stroke()\u7ec4\u5408\u3002\u5f53\u7136\uff0c\u5982\u679c\u4f60\u672c\u8eab\u662f\u4e0d\u9700\u8981\u95ed\u5408\u7684\u56fe\u5f62\uff0c\u5219\u76f4\u63a5\u4f7f\u7528stroke\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"var ctx = canvas.getContext('2d');\n\nctx.beginPath();\nctx.moveTo(75, 50);\nctx.lineTo(100, 75);\nctx.lineTo(100, 25);\nctx.fill();\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6837\u5f0f\u548c\u989c\u8272",children:"\u6837\u5f0f\u548c\u989c\u8272"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u989c\u8272","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"fillStyle"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"strokeStyle"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u6837\u5f0f","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"globalAlpha"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"lineWidth"})}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"globalCompositeOperation"})," \u906e\u76d6\u7b56\u7565"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'// \u8fd9\u4e9b fillStyle \u7684\u503c\u5747\u4e3a \'\u6a59\u8272\'\nctx.fillStyle = "orange";\nctx.fillStyle = "#FFA500";\nctx.fillStyle = "rgb(255,165,0)";\nctx.fillStyle = "rgba(255,165,0,1)";\n\n// \u8bbe\u7f6e\u900f\u660e\u5ea6\u503c\nctx.globalAlpha = 0.2;\n\n// \u5f53\u524d\u7ed8\u7ebf\u7684\u7c97\u7ec6\nctx.lineWidth = 1;\n\n// \u8bbe\u7f6e\u906e\u76d6\u7b56\u7565\uff1a\u4ea4\u96c6\u6e05\u9664\nctx.globalCompositeOperation = \'destination-out\'\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u7ed8\u5236\u5143\u7d20",children:"\u7ed8\u5236\u5143\u7d20"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u56fe\u7247","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"drawImage(imageOrCanvas, x, y)"}),"\u3002image \u662f image \u6216\u8005 canvas \u5bf9\u8c61\uff0cx \u548c y \u662f\u5176\u5728\u76ee\u6807 canvas \u91cc\u7684\u8d77\u59cb\u5750\u6807\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u6587\u672c","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"fillText(text, x, y [, maxWidth])"}),"\n\u5728\u6307\u5b9a\u7684(x,y)\u4f4d\u7f6e\u586b\u5145\u6307\u5b9a\u7684\u6587\u672c\uff0c\u7ed8\u5236\u7684\u6700\u5927\u5bbd\u5ea6\u662f\u53ef\u9009\u7684."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"strokeText(text, x, y [, maxWidth])"}),"\n\u5728\u6307\u5b9a\u7684(x,y)\u4f4d\u7f6e\u7ed8\u5236\u6587\u672c\u8fb9\u6846\uff0c\u7ed8\u5236\u7684\u6700\u5927\u5bbd\u5ea6\u662f\u53ef\u9009\u7684."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'var img = new Image();\nimg.src = \'images/backdrop.png\';\nimg.onload = function(){\n    ctx.drawImage(img,0,0);\n}\n\nctx.font = "48px serif";\nctx.fillText("Hello world", 10, 50);\n'})})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>r,x:()=>t});var s=l(6540);const i={},c=s.createContext(i);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);