"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[9961],{3848:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=s(4848),t=s(8453);const l={},i="Http/2\u4e0eHttp/1.x\u6bd4\u8f83",c={id:"others/js/http2",title:"Http/2\u4e0eHttp/1.x\u6bd4\u8f83",description:"\u4e86\u89e3\u4e0bhttp1\u7684\u7f3a\u70b9\uff0c\u4ee5\u53cahttp2\u7684\u7279\u6027\u3002\u6ce8\u610f\u7684\u662f\uff0cHTTP/2 \u4ecd\u662f\u5bf9\u4e4b\u524d HTTP \u6807\u51c6\u7684\u6269\u5c55\uff0c\u800c\u975e\u66ff\u4ee3\u3002 HTTP \u7684\u5e94\u7528\u8bed\u4e49\u4e0d\u53d8\uff0c\u63d0\u4f9b\u7684\u529f\u80fd\u4e0d\u53d8\uff0cHTTP \u65b9\u6cd5\u3001\u72b6\u6001\u4ee3\u7801\u3001URI \u548c\u6807\u5934\u5b57\u6bb5\u7b49\u8fd9\u4e9b\u6838\u5fc3\u6982\u5ff5\u4e5f\u4e0d\u53d8\u3002 \u8fd9\u4e9b\u65b9\u9762\u7684\u53d8\u5316\u90fd\u4e0d\u5728 HTTP/2 \u8003\u8651\u4e4b\u5217\u3002",source:"@site/docs/others/js/http2.md",sourceDirName:"others/js",slug:"/others/js/http2",permalink:"/blog-fe/docs/others/js/http2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"HTTP\u8de8\u57df\u89e3\u51b3\u65b9\u6848",permalink:"/blog-fe/docs/others/js/http-cross-domain"},next:{title:"JavaScript\u539f\u578b",permalink:"/blog-fe/docs/others/js/js-base-1.prototype"}},d={},h=[{value:"HTTP/1.x",id:"http1x",level:2},{value:"1. Parser",id:"1-parser",level:3},{value:"2. Request/Response",id:"2-requestresponse",level:3},{value:"3. Push",id:"3-push",level:3},{value:"Http/2",id:"http2",level:2},{value:"1. \u591a\u8def\u590d\u7528",id:"1-\u591a\u8def\u590d\u7528",level:3},{value:"2. \u6807\u5934\u538b\u7f29",id:"2-\u6807\u5934\u538b\u7f29",level:3},{value:"3. \u670d\u52a1\u5668\u63a8\u9001",id:"3-\u670d\u52a1\u5668\u63a8\u9001",level:3},{value:"4. \u6570\u636e\u6d41\u4f18\u5148\u7ea7",id:"4-\u6570\u636e\u6d41\u4f18\u5148\u7ea7",level:3},{value:"5. \u6d41\u63a7\u5236",id:"5-\u6d41\u63a7\u5236",level:3}];function o(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"http2\u4e0ehttp1x\u6bd4\u8f83",children:"Http/2\u4e0eHttp/1.x\u6bd4\u8f83"}),"\n",(0,r.jsx)(n.p,{children:"\u4e86\u89e3\u4e0bhttp1\u7684\u7f3a\u70b9\uff0c\u4ee5\u53cahttp2\u7684\u7279\u6027\u3002\u6ce8\u610f\u7684\u662f\uff0cHTTP/2 \u4ecd\u662f\u5bf9\u4e4b\u524d HTTP \u6807\u51c6\u7684\u6269\u5c55\uff0c\u800c\u975e\u66ff\u4ee3\u3002 HTTP \u7684\u5e94\u7528\u8bed\u4e49\u4e0d\u53d8\uff0c\u63d0\u4f9b\u7684\u529f\u80fd\u4e0d\u53d8\uff0cHTTP \u65b9\u6cd5\u3001\u72b6\u6001\u4ee3\u7801\u3001URI \u548c\u6807\u5934\u5b57\u6bb5\u7b49\u8fd9\u4e9b\u6838\u5fc3\u6982\u5ff5\u4e5f\u4e0d\u53d8\u3002 \u8fd9\u4e9b\u65b9\u9762\u7684\u53d8\u5316\u90fd\u4e0d\u5728 HTTP/2 \u8003\u8651\u4e4b\u5217\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"http1x",children:"HTTP/1.x"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP \u534f\u8bae\u53ef\u4ee5\u7b97\u662f\u73b0\u9636\u6bb5 Web \u4e0a\u9762\u6700\u901a\u7528\u7684\u534f\u8bae\u4e86\uff0c\u5728\u4e4b\u524d\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\uff0c\u5f88\u591a\u5e94\u7528\u90fd\u662f\u57fa\u4e8e HTTP/1.x \u534f\u8bae\uff0cHTTP/1.x \u534f\u8bae\u662f\u4e00\u4e2a\u6587\u672c\u534f\u8bae\uff0c",(0,r.jsx)(n.strong,{children:"\u53ef\u8bfb\u6027\u975e\u5e38\u597d\uff0c\u4f46\u5176\u5b9e\u5e76\u4e0d\u9ad8\u6548"}),"\uff0c\u7b14\u8005\u4e3b\u8981\u78b0\u5230\u8fc7\u51e0\u4e2a\u95ee\u9898\uff1a"]}),"\n",(0,r.jsx)(n.h3,{id:"1-parser",children:"1. Parser"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u8981\u89e3\u6790\u4e00\u4e2a\u5b8c\u6574\u7684 HTTP \u8bf7\u6c42\uff0c\u9996\u5148\u6211\u4eec\u9700\u8981\u80fd\u6b63\u786e\u7684\u8bfb\u51fa HTTP header\u3002HTTP header \u5404\u4e2a fields \u4f7f\u7528 \\r\\n \u5206\u9694\uff0c\u7136\u540e\u8ddf body \u4e4b\u95f4\u4f7f\u7528 \\r\\n\\r\\n \u5206\u9694\u3002\u89e3\u6790\u5b8c header \u4e4b\u540e\uff0c\u6211\u4eec\u624d\u80fd\u4ece header \u91cc\u9762\u7684 content-length \u62ff\u5230 body \u7684 size\uff0c\u4ece\u800c\u8bfb\u53d6 body\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u5957\u6d41\u7a0b\u5176\u5b9e\u5e76\u4e0d\u9ad8\u6548\uff0c\u56e0\u4e3a\u6211\u4eec",(0,r.jsx)(n.code,{children:"\u9700\u8981\u8bfb\u53d6\u591a\u6b21\uff0c\u624d\u80fd\u5c06\u4e00\u4e2a\u5b8c\u6574\u7684 HTTP \u8bf7\u6c42\u7ed9\u89e3\u6790\u51fa\u6765"}),"\uff0c\u867d\u7136\u5728\u4ee3\u7801\u5b9e\u73b0\u4e0a\u9762\uff0c\u6709\u5f88\u591a\u4f18\u5316\u65b9\u5f0f\uff0c\u8b6c\u5982\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e00\u6b21\u5c06\u4e00\u5927\u5757\u6570\u636e\u8bfb\u53d6\u5230 buffer \u91cc\u9762\u907f\u514d\u591a\u6b21 IO read"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bfb\u53d6\u7684\u65f6\u5019\u76f4\u63a5\u5339\u914d \\r\\n \u7684\u65b9\u5f0f\u6d41\u5f0f\u89e3\u6790"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f46\u4e0a\u9762\u7684\u65b9\u5f0f\u5bf9\u4e8e\u9ad8\u6027\u80fd\u670d\u52a1\u6765\u8bf4\uff0c\u7ec8\u5f52\u8fd8\u662f\u4f1a\u6709\u5f00\u9500\u3002\u5176\u5b9e\u6700\u4e3b\u8981\u7684\u95ee\u9898\u5728\u4e8e\uff0c",(0,r.jsx)(n.code,{children:"HTTP/1.x \u7684\u534f\u8bae\u662f \u6587\u672c\u534f\u8bae\uff0c\u662f\u7ed9\u4eba\u770b\u7684\uff0c\u5bf9\u673a\u5668\u4e0d\u53cb\u597d"}),"\uff0c\u5982\u679c\u8981\u5bf9\u673a\u5668\u53cb\u597d\uff0c\u4e8c\u8fdb\u5236\u534f\u8bae\u624d\u662f\u66f4\u597d\u7684\u9009\u62e9\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u5927\u5bb6\u5bf9\u89e3\u6790 HTTP/1.x \u5f88\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u7814\u7a76\u4e0b http-parser\uff0c\u4e00\u4e2a\u975e\u5e38\u9ad8\u6548\u5c0f\u5de7\u7684 C library\uff0c\u89c1\u8fc7\u4e0d\u5c11\u6846\u67b6\u90fd\u662f\u96c6\u6210\u4e86\u8fd9\u4e2a\u5e93\u6765\u5904\u7406 HTTP/1.x \u7684\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"2-requestresponse",children:"2. Request/Response"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP/1.x \u53e6\u4e00\u4e2a\u95ee\u9898\u5c31\u5728\u4e8e\u5b83\u7684\u4ea4\u4e92\u6a21\u5f0f\uff0c",(0,r.jsx)(n.code,{children:"\u4e00\u4e2a\u8fde\u63a5\u6bcf\u6b21\u53ea\u80fd\u4e00\u95ee\u4e00\u7b54\uff0c\u4e5f\u5c31\u662fclient \u53d1\u9001\u4e86 request \u4e4b\u540e\uff0c\u5fc5\u987b\u7b49\u5230 response\uff0c\u624d\u80fd\u7ee7\u7eed\u53d1\u9001\u4e0b\u4e00\u6b21\u8bf7\u6c42\u3002"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u5957\u673a\u5236\u662f\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u4f1a\u9020\u6210\u7f51\u7edc\u8fde\u63a5\u5229\u7528\u7387\u4e0d\u9ad8\u3002",(0,r.jsx)(n.code,{children:"\u5982\u679c\u9700\u8981\u540c\u65f6\u8fdb\u884c\u5927\u91cf\u7684\u4ea4\u4e92\uff0cclient \u9700\u8981\u8ddf server \u5efa\u7acb\u591a\u6761\u8fde\u63a5"}),"(\u6d4f\u89c8\u5668\u4e00\u822c\u6709\u6700\u957f6\u4e2a\u8fde\u63a5)\uff0c\u4f46\u8fde\u63a5\u7684\u5efa\u7acb\u4e5f\u662f\u6709\u5f00\u9500\u7684\uff0c\u6240\u4ee5\u4e3a\u4e86\u6027\u80fd\uff0c\u901a\u5e38\u8fd9\u4e9b\u8fde\u63a5\u90fd\u662f\u957f\u8fde\u63a5\u4e00\u76f4\u4fdd\u6d3b\u7684\uff0c\u867d\u7136\u5bf9\u4e8e server \u6765\u8bf4\u540c\u65f6\u5904\u7406\u767e\u4e07\u8fde\u63a5\u4e5f\u6ca1\u5565\u592a\u5927\u7684\u6311\u6218\uff0c\u4f46\u7ec8\u5f52\u6548\u7387\u4e0d\u9ad8\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"3-push",children:"3. Push"}),"\n",(0,r.jsx)(n.p,{children:"\u7528 HTTP/1.x \u505a\u8fc7\u63a8\u9001\u7684\u540c\u5b66\uff0c\u5927\u6982\u5c31\u77e5\u9053\u6709\u591a\u4e48\u7684\u75db\u82e6\uff0c\u56e0\u4e3a HTTP/1.x \u5e76\u6ca1\u6709\u63a8\u9001\u673a\u5236\u3002\u6240\u4ee5\u901a\u5e38\u4e24\u79cd\u505a\u6cd5\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Long polling \u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f\u76f4\u63a5\u7ed9 server \u6302\u4e00\u4e2a\u8fde\u63a5\uff0c\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff08\u8b6c\u5982 1 \u5206\u949f\uff09\uff0c\u5982\u679c server \u6709\u8fd4\u56de\u6216\u8005\u8d85\u65f6\uff0c\u5219\u518d\u6b21\u91cd\u65b0 poll\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Web-socket\uff0c\u901a\u8fc7 upgrade \u673a\u5236\u663e\u5f0f\u7684\u5c06\u8fd9\u6761 HTTP \u8fde\u63a5\u53d8\u6210\u88f8\u7684 TCP\uff0c\u8fdb\u884c\u53cc\u5411\u4ea4\u4e92\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u76f8\u6bd4 Long polling\uff0c\u7b14\u8005\u8fd8\u662f\u66f4\u559c\u6b22 web-socket \u4e00\u70b9\uff0c\u6bd5\u7adf\u66f4\u52a0\u9ad8\u6548\uff0c\u53ea\u662f web-socket \u540e\u9762\u7684\u4ea4\u4e92\u5e76\u4e0d\u662f\u4f20\u7edf\u610f\u4e49\u4e0a\u9762\u7684 HTTP \u4e86\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"http2",children:"Http/2"}),"\n",(0,r.jsx)(n.p,{children:"HTTP/2 \u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u534f\u8bae\uff0c\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u5b83\u7684\u53ef\u8bfb\u6027\u51e0\u4e4e\u4e3a 0\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e86\u89e3 HTTP/2 \u4e4b\u524d\uff0c\u9700\u8981\u77e5\u9053\u4e00\u4e9b\u901a\u7528\u672f\u8bed\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Stream\uff1a \u4e00\u4e2a\u53cc\u5411\u6d41\uff0c",(0,r.jsx)(n.code,{children:"\u4e00\u6761\u8fde\u63a5\u53ef\u4ee5\u6709\u591a\u4e2a streams"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Message\uff1a \u4e5f\u5c31\u662f\u903b\u8f91\u4e0a\u9762\u7684 request\uff0cresponse\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Frame:\uff1a\u6570\u636e\u4f20\u8f93\u7684\u6700\u5c0f\u5355\u4f4d\u3002\u6bcf\u4e2a Frame \u90fd\u5c5e\u4e8e\u4e00\u4e2a\u7279\u5b9a\u7684 stream \u6216\u8005\u6574\u4e2a\u8fde\u63a5\u3002\u4e00\u4e2a message \u53ef\u80fd\u6709\u591a\u4e2a frame \u7ec4\u6210\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8be6\u7ec6\u89e3\u91ca\u4e0b\u4e8c\u8fdb\u5236\u5206\u5e27\u5c42\uff08Frame\uff09\uff0cHTTP/2 \u6240\u6709\u6027\u80fd\u589e\u5f3a\u7684\u6838\u5fc3\u5728\u4e8e\u65b0\u7684\u4e8c\u8fdb\u5236\u5206\u5e27\u5c42\uff0c\u5b83\u5b9a\u4e49\u4e86\u5982\u4f55\u5c01\u88c5 HTTP \u6d88\u606f\u5e76\u5728\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u4f20\u8f93\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://developers.google.com/web/fundamentals/performance/http2/images/binary_framing_layer01.svg?hl=zh-CN",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u6240\u8c13\u7684\u201c\u5c42\u201d\uff0c\u6307\u7684\u662f\u4f4d\u4e8e\u5957\u63a5\u5b57\u63a5\u53e3\u4e0e\u5e94\u7528\u53ef\u89c1\u7684\u9ad8\u7ea7 HTTP API \u4e4b\u95f4\u4e00\u4e2a\u7ecf\u8fc7\u4f18\u5316\u7684\u65b0\u7f16\u7801\u673a\u5236\uff1aHTTP \u7684\u8bed\u4e49\uff08\u5305\u62ec\u5404\u79cd\u52a8\u8bcd\u3001\u65b9\u6cd5\u3001\u6807\u5934\uff09\u90fd\u4e0d\u53d7\u5f71\u54cd\uff0c\u4e0d\u540c\u7684\u662f\u4f20\u8f93\u671f\u95f4\u5bf9\u5b83\u4eec\u7684\u7f16\u7801\u65b9\u5f0f\u53d8\u4e86\u3002 HTTP/1.x \u534f\u8bae\u4ee5\u6362\u884c\u7b26\u4f5c\u4e3a\u7eaf\u6587\u672c\u7684\u5206\u9694\u7b26\uff0c\u800c HTTP/2 \u5c06\u6240\u6709\u4f20\u8f93\u7684\u4fe1\u606f\u5206\u5272\u4e3a\u66f4\u5c0f\u7684\u6d88\u606f\u548c\u5e27\uff0c\u5e76\u91c7\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f\u5bf9\u5b83\u4eec\u7f16\u7801\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u6837\u4e00\u6765\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e3a\u4e86\u76f8\u4e92\u7406\u89e3\uff0c\u90fd\u5fc5\u987b\u4f7f\u7528\u65b0\u7684\u4e8c\u8fdb\u5236\u7f16\u7801\u673a\u5236\uff1aHTTP/1.x \u5ba2\u6237\u7aef\u65e0\u6cd5\u7406\u89e3\u53ea\u652f\u6301 HTTP/2 \u7684\u670d\u52a1\u5668\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002 \u4e0d\u8fc7\u4e0d\u8981\u7d27\uff0c\u73b0\u6709\u7684\u5e94\u7528\u4e0d\u5fc5\u62c5\u5fc3\u8fd9\u4e9b\u53d8\u5316\uff0c\u56e0\u4e3a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4f1a\u66ff\u6211\u4eec\u5b8c\u6210\u5fc5\u8981\u7684\u5206\u5e27\u5de5\u4f5c\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u591a\u8def\u590d\u7528",children:"1. \u591a\u8def\u590d\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 HTTP/1.x \u4e2d\uff0c",(0,r.jsx)(n.strong,{children:"\u5982\u679c\u5ba2\u6237\u7aef\u8981\u60f3\u53d1\u8d77\u591a\u4e2a\u5e76\u884c\u8bf7\u6c42\u4ee5\u63d0\u5347\u6027\u80fd\uff0c\u5219\u5fc5\u987b\u4f7f\u7528\u591a\u4e2a TCP \u8fde\u63a5"}),"\u3002 \u8fd9\u662f HTTP/1.x \u4ea4\u4ed8\u6a21\u578b\u7684\u76f4\u63a5\u7ed3\u679c\uff0c\u8be5\u6a21\u578b\u53ef\u4ee5\u4fdd\u8bc1\u6bcf\u4e2a\u8fde\u63a5\u6bcf\u6b21\u53ea\u4ea4\u4ed8\u4e00\u4e2a\u54cd\u5e94\uff08\u54cd\u5e94\u6392\u961f\uff09\u3002 \u66f4\u7cdf\u7cd5\u7684\u662f\uff0c",(0,r.jsx)(n.strong,{children:"\u8fd9\u79cd\u6a21\u578b\u4e5f\u4f1a\u5bfc\u81f4\u961f\u9996\u963b\u585e"}),"\uff0c\u4ece\u800c\u9020\u6210\u5e95\u5c42 TCP \u8fde\u63a5\u7684\u6548\u7387\u4f4e\u4e0b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"HTTP/2 \u901a\u8fc7 stream \u652f\u6301\u4e86\u8fde\u63a5\u7684\u591a\u8def\u590d\u7528\uff0c\u63d0\u9ad8\u4e86\u8fde\u63a5\u7684\u5229\u7528\u7387\u3002\u4e00\u6761\u8fde\u63a5\u53ef\u4ee5\u5305\u542b\u591a\u4e2a streams\uff0c\u591a\u4e2a streams \u53d1\u9001\u7684\u6570\u636e\u4e92\u76f8\u4e0d\u5f71\u54cd\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u89e3\u51b3Http/1\u4e2d\u4e00\u95ee\u4e00\u7b54\u5f0f\uff0c\u53ef\u6279\u91cf\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\uff08\u90fd\u662f\u901a\u8fc7\u4e8c\u8fdb\u5236\u5206\u5e27frame\u4f20\u8f93\u6570\u636e\uff09\u3002\u540c\u65f6\u89e3\u51b3\u961f\u9996\u963b\u585e\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u6807\u5934\u538b\u7f29",children:"2. \u6807\u5934\u538b\u7f29"}),"\n",(0,r.jsx)(n.p,{children:"Http/1\u7f3a\u70b9\uff1a\u6bcf\u4e2a HTTP \u4f20\u8f93\u90fd\u627f\u8f7d\u4e00\u7ec4\u6807\u5934\uff0c\u8fd9\u4e9b\u6807\u5934\u8bf4\u660e\u4e86\u4f20\u8f93\u7684\u8d44\u6e90\u53ca\u5176\u5c5e\u6027\u3002 \u5728 HTTP/1.x \u4e2d\uff0c\u6b64\u5143\u6570\u636e\u59cb\u7ec8\u4ee5\u7eaf\u6587\u672c\u5f62\u5f0f\uff0c\u901a\u5e38\u4f1a\u7ed9\u6bcf\u4e2a\u4f20\u8f93\u589e\u52a0 500\u2013800 \u5b57\u8282\u7684\u5f00\u9500\u3002\u5982\u679c\u4f7f\u7528 HTTP Cookie\uff0c\u589e\u52a0\u7684\u5f00\u9500\u6709\u65f6\u4f1a\u8fbe\u5230\u4e0a\u5343\u5b57\u8282\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Http/2\u89e3\u51b3\u65b9\u6848\uff1a\u4e3a\u4e86\u51cf\u5c11\u6b64\u5f00\u9500\u548c\u63d0\u5347\u6027\u80fd\uff0cHTTP/2 \u4f7f\u7528 HPACK \u538b\u7f29\u683c\u5f0f\u538b\u7f29\u8bf7\u6c42\u548c\u54cd\u5e94\u6807\u5934\u5143\u6570\u636e\uff0c\u8fd9\u79cd\u683c\u5f0f\u91c7\u7528\u4e24\u79cd\u7b80\u5355\u4f46\u662f\u5f3a\u5927\u7684\u6280\u672f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8fd9\u79cd\u683c\u5f0f\u652f\u6301\u901a\u8fc7\u9759\u6001\u970d\u592b\u66fc\u4ee3\u7801\u5bf9\u4f20\u8f93\u7684\u6807\u5934\u5b57\u6bb5\u8fdb\u884c\u7f16\u7801\uff0c\u4ece\u800c\u51cf\u5c0f\u4e86\u5404\u4e2a\u4f20\u8f93\u7684\u5927\u5c0f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8fd9\u79cd\u683c\u5f0f\u8981\u6c42\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u540c\u65f6\u7ef4\u62a4\u548c\u66f4\u65b0\u4e00\u4e2a\u5305\u542b\u4e4b\u524d\u89c1\u8fc7\u7684\u6807\u5934\u5b57\u6bb5\u7684\u7d22\u5f15\u5217\u8868\uff08\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u5171\u4eab\u7684\u538b\u7f29\u4e0a\u4e0b\u6587\uff09\uff0c\u6b64\u5217\u8868\u968f\u540e\u4f1a\u7528\u4f5c\u53c2\u8003\uff0c\u5bf9\u4e4b\u524d\u4f20\u8f93\u7684\u503c\u8fdb\u884c\u6709\u6548\u7f16\u7801\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7b80\u5355\u7406\u89e3\u5c31\u662f\uff0c\u7531\u4e8e\u662fframe\u4e8c\u8fdb\u5236\u4f20\u9012\u6570\u636e\uff0c\u901a\u8fc7",(0,r.jsx)(n.code,{children:"\u7ef4\u62a4\u5171\u540c\u7684\u7d22\u5f15\u8868"}),"\u6765\u5bf9\u91cd\u590d\u7684\u8868\u5934\u8fdb\u884c\u503c\u538b\u7f29\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u89e3\u51b3Http/1\u4e2dHeader\u592a\u5927\uff08\u5982Cookie\uff09\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-\u670d\u52a1\u5668\u63a8\u9001",children:"3. \u670d\u52a1\u5668\u63a8\u9001"}),"\n",(0,r.jsx)(n.p,{children:"HTTP/2 \u65b0\u589e\u7684\u53e6\u4e00\u4e2a\u5f3a\u5927\u7684\u65b0\u529f\u80fd\u662f\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u5ba2\u6237\u7aef\u8bf7\u6c42\u53d1\u9001\u591a\u4e2a\u54cd\u5e94\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u9664\u4e86\u5bf9\u6700\u521d\u8bf7\u6c42\u7684\u54cd\u5e94\u5916\uff0c\u670d\u52a1\u5668\u8fd8\u53ef\u4ee5\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u989d\u5916\u8d44\u6e90\uff0c\u800c\u65e0\u9700\u5ba2\u6237\u7aef\u660e\u786e\u5730\u8bf7\u6c42\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u89e3\u51b3Http/1\u4e2d\u4e00\u95ee\u4e00\u7b54\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u4e3b\u52a8\u63a8\u9001\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-\u6570\u636e\u6d41\u4f18\u5148\u7ea7",children:"4. \u6570\u636e\u6d41\u4f18\u5148\u7ea7"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u4e3a\u4e00\u6761\u8fde\u63a5\u5141\u8bb8\u591a\u4e2a streams \u5728\u4e0a\u9762\u53d1\u9001 frame\uff0c\u90a3\u4e48\u5728\u4e00\u4e9b\u573a\u666f\u4e0b\u9762\uff0c\u6211\u4eec\u8fd8\u662f\u5e0c\u671b stream \u6709\u4f18\u5148\u7ea7\uff0c\u65b9\u4fbf\u5bf9\u7aef\u4e3a\u4e0d\u540c\u7684\u8bf7\u6c42\u5206\u914d\u4e0d\u540c\u7684\u8d44\u6e90\u3002\u8b6c\u5982\u5bf9\u4e8e\u4e00\u4e2a Web \u7ad9\u70b9\u6765\u8bf4\uff0c\u4f18\u5148\u52a0\u8f7d\u91cd\u8981\u7684\u8d44\u6e90\uff0c\u800c\u5bf9\u4e8e\u4e00\u4e9b\u4e0d\u90a3\u4e48\u91cd\u8981\u7684\u56fe\u7247\u5565\u7684\uff0c\u5219\u4f7f\u7528\u4f4e\u7684\u4f18\u5148\u7ea7\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"5-\u6d41\u63a7\u5236",children:"5. \u6d41\u63a7\u5236"}),"\n",(0,r.jsx)(n.p,{children:"HTTP/2 \u4e5f\u652f\u6301\u6d41\u63a7\uff0c\u5982\u679c sender \u7aef\u53d1\u9001\u6570\u636e\u592a\u5feb\uff0creceiver \u7aef\u53ef\u80fd\u56e0\u4e3a\u592a\u5fd9\uff0c\u6216\u8005\u538b\u529b\u592a\u5927\uff0c\u6216\u8005\u53ea\u60f3\u7ed9\u7279\u5b9a\u7684 stream \u5206\u914d\u8d44\u6e90\uff0creceiver \u7aef\u5c31\u53ef\u80fd\u4e0d\u60f3\u5904\u7406\u8fd9\u4e9b\u6570\u636e\u3002\u8b6c\u5982\uff0c\u5982\u679c client \u7ed9 server \u8bf7\u6c42\u4e86\u4e00\u4e2a\u89c6\u9891\uff0c\u4f46\u8fd9\u65f6\u5019\u7528\u6237\u6682\u505c\u89c2\u770b\u4e86\uff0cclient \u5c31\u53ef\u80fd\u544a\u8bc9 server \u522b\u518d\u53d1\u9001\u6570\u636e\u4e86\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(6540);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);