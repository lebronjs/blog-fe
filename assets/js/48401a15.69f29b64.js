"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[55],{6189:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=r(4848),s=r(8453);const l={},i="JS\u8bbe\u8ba1\u6a21\u5f0f",a={id:"others/js/js-design-pattern",title:"JS\u8bbe\u8ba1\u6a21\u5f0f",description:"js\u5c06\u51fd\u6570\u4f5c\u4e3a\u4e00\u7b49\u516c\u6c11\uff0c\u51fd\u6570\u4e5f\u662f\u5bf9\u8c61\u3002\u6240\u4ee5\u5f88\u591a\u7ecf\u5178\u7684\u8bbe\u8ba1\u6a21\u5f0f\u6848\u4f8b\u5728js\u8bed\u8a00\u4e2d\uff0c\u90fd\u662f\u4ee5\u53d8\u79cd\u7684\u5f62\u5f0f\u800c\u5b58\u5728\u3002",source:"@site/docs/others/js/js-design-pattern.md",sourceDirName:"others/js",slug:"/others/js/js-design-pattern",permalink:"/docs/others/js/js-design-pattern",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"\u52a8\u624b\u5b9e\u73b0Promise",permalink:"/docs/others/js/js-base-4.promise"},next:{title:"\u6392\u5e8f\u7b97\u6cd5",permalink:"/docs/others/js/js-sort"}},c={},o=[{value:"1. \u5355\u4f8b\u6a21\u5f0f",id:"1-\u5355\u4f8b\u6a21\u5f0f",level:2},{value:"1.1 single.getInstance()",id:"11-singlegetinstance",level:3},{value:"1.2 new Single()",id:"12-new-single",level:3},{value:"1.3 \u901a\u7528\u7684\u60f0\u6027\u5355\u4f8b",id:"13-\u901a\u7528\u7684\u60f0\u6027\u5355\u4f8b",level:3},{value:"2. \u804c\u8d23\u94fe\u6a21\u5f0f",id:"2-\u804c\u8d23\u94fe\u6a21\u5f0f",level:2},{value:"3. \u7b56\u7565\u6a21\u5f0f",id:"3-\u7b56\u7565\u6a21\u5f0f",level:2},{value:"4. \u89c2\u5bdf\u8005\u6a21\u5f0f",id:"4-\u89c2\u5bdf\u8005\u6a21\u5f0f",level:2},{value:"5. \u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",id:"5-\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",level:2},{value:"6. \u4ee3\u7406\u6a21\u5f0f",id:"6-\u4ee3\u7406\u6a21\u5f0f",level:2},{value:"7. \u547d\u4ee4\u6a21\u5f0f",id:"7-\u547d\u4ee4\u6a21\u5f0f",level:2},{value:"8. \u7ec4\u5408\u6a21\u5f0f",id:"8-\u7ec4\u5408\u6a21\u5f0f",level:2},{value:"9. \u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",id:"9-\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",level:2},{value:"10. \u4e2d\u4ecb\u8005\u6a21\u5f0f",id:"10-\u4e2d\u4ecb\u8005\u6a21\u5f0f",level:2},{value:"11. \u8fed\u4ee3\u5668\u6a21\u5f0f",id:"11-\u8fed\u4ee3\u5668\u6a21\u5f0f",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"js\u8bbe\u8ba1\u6a21\u5f0f",children:"JS\u8bbe\u8ba1\u6a21\u5f0f"}),"\n",(0,t.jsxs)(e.p,{children:["js\u5c06\u51fd\u6570\u4f5c\u4e3a\u4e00\u7b49\u516c\u6c11\uff0c\u51fd\u6570\u4e5f\u662f\u5bf9\u8c61\u3002\u6240\u4ee5\u5f88\u591a\u7ecf\u5178\u7684\u8bbe\u8ba1\u6a21\u5f0f\u6848\u4f8b\u5728js\u8bed\u8a00\u4e2d\uff0c\u90fd\u662f\u4ee5\u53d8\u79cd\u7684\u5f62\u5f0f\u800c\u5b58\u5728\u3002\n\u8bbe\u8ba1\u6a21\u5f0f\u5728\u9879\u76ee\u4e2d\u7684\u7ecf\u5178\u5b9e\u8df5\u6848\u4f8b\u53ef\u4ee5\u770b\u7b14\u8005github ",(0,t.jsx)(e.a,{href:"https://github.com/lq782655835/design-patterns-project-case",children:"JS\u8bbe\u8ba1\u6a21\u5f0f\u5f00\u53d1\u5b9e\u8df5"}),"\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"1-\u5355\u4f8b\u6a21\u5f0f",children:"1. \u5355\u4f8b\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u5355\u4f8b\u6a21\u5f0f\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5bf9\u8c61\u7684\u521b\u5efa\u8fc7\u7a0b\uff0c\u6b64\u5bf9\u8c61\u53ea\u6709\u4e00\u4e2a\u5355\u72ec\u7684\u5b9e\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u8bbf\u95ee\u5b83\u7684\u5168\u5c40\u8bbf\u95ee\u70b9\u3002\u5e38\u89c1\u7684\u4e0a\u5c42\u8c03\u7528\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"single.getInstance() \u65b9\u6cd5\u8c03\u7528"}),"\n",(0,t.jsx)(e.li,{children:"new Single() \u900f\u660e\u5f0f"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"11-singlegetinstance",children:"1.1 single.getInstance()"}),"\n",(0,t.jsx)(e.p,{children:"ES5\u95ed\u5305\u5b9e\u73b0\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"function singleXXX(){\n    // ... \u751f\u6210\u5355\u4f8b\u7684\u6784\u9020\u51fd\u6570\u7684\u4ee3\u7801\n}\nvar single = (function(){\n    var unique;\n\n    return {\n        getInstance : function() {\n            if (unique === undefined) {\n                unique = new singleXXX()\n            }\n            return unique\n        }\n    }\n})();\n\nlet singleXXX1 = single.getInstance()\nlet singleXXX2 = single.getInstance()\nconsole.log(singleXXX1 === singleXXX2) // true\n"})}),"\n",(0,t.jsx)(e.p,{children:"ES6 Object\u5b9e\u73b0\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"function singleXXX(){}\nlet single = {\n    unique: null,\n    getInstance: function() {\n        if (this.unique === undefined) {\n            this.unique = new singleXXX()\n        }\n        return this.unique\n    }\n}\n // \u4fdd\u8bc1\u5b9e\u4f8b\u4e0d\u88ab\u6539\u5199\nObject.defineProperty(single, 'unique', {\n    writable: false,\n    configurable: false\n})\n// \u6216Object.freeze(single)\n\nlet singleXXX1 = single.getInstance()\nlet singleXXX2 = single.getInstance()\nconsole.log(singleXXX1 === singleXXX2) // true\n"})}),"\n",(0,t.jsx)(e.p,{children:"ES6 Class\u5b9e\u73b0,\u8ddfJava\u3001C#\u7b49\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\u5199\u6cd5\u4e00\u81f4\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"class SingleXXX {\n    constructor() {\n        // ...\u751f\u6210\u5355\u4f8b\u7684\u6784\u9020\u51fd\u6570\u7684\u4ee3\u7801\n    }\n    static getInstance() {\n        if(!this.instance) {\n            this.instance = new SingleXXX()\n        }\n        return this.instance\n    }\n}\nlet singleXXX1 = SingleXXX.getInstance()\nlet singleXXX2 = SingleXXX.getInstance()\nconsole.log(singleXXX1 === singleXXX2) // true\n"})}),"\n",(0,t.jsx)(e.h3,{id:"12-new-single",children:"1.2 new Single()"}),"\n",(0,t.jsx)(e.p,{children:"ES5\u7f13\u5b58\u5b9e\u73b0\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"function SingleXXX() {\n    if (typeof SingleXXX.instance === 'object') {\n        return SingleXXX.instance\n    }\n\n    // ...\u751f\u6210\u5355\u4f8b\u7684\u6784\u9020\u51fd\u6570\u7684\u4ee3\u7801\n\n    // \u7f13\u5b58\u5b9e\u4f8b\n    SingleXXX.instance = this\n}\n\nlet singleXXX1 = new SingleXXX()\nlet singleXXX2 = new SingleXXX()\nconsole.log(singleXXX1 === singleXXX2) // true\n"})}),"\n",(0,t.jsx)(e.p,{children:"ES5\u95ed\u5305\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"function singleXXX(){\n    // ... \u751f\u6210\u5355\u4f8b\u7684\u6784\u9020\u51fd\u6570\u7684\u4ee3\u7801\n}\n\nvar Single = (function(){\n    var unique;\n\n    return function(xx) {\n        if (unique === undefined) {\n            unique = new singleXXX(xx)\n        }\n        return unique\n    }\n})();\n\nlet singleXXX1 = new Single()\nlet singleXXX2 = new Single()\nconsole.log(singleXXX1 === singleXXX2) // true\n"})}),"\n",(0,t.jsx)(e.h3,{id:"13-\u901a\u7528\u7684\u60f0\u6027\u5355\u4f8b",children:"1.3 \u901a\u7528\u7684\u60f0\u6027\u5355\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var getSingle = function(fn) {\n    var instance\n    return function() {\n        return instance || instance = fn.apply(this, arguments)\n    }\n}\n\nSingle = getSingle(function(){\n    // todo something\n    return new XXX()\n})\n\nlet singleXXX1 = Single()\nlet singleXXX2 = Single()\nconsole.log(singleXXX1 === singleXXX2) // true\n"})}),"\n",(0,t.jsx)(e.h2,{id:"2-\u804c\u8d23\u94fe\u6a21\u5f0f",children:"2. \u804c\u8d23\u94fe\u6a21\u5f0f"}),"\n",(0,t.jsxs)(e.p,{children:["\u4f7f\u591a\u4e2a\u5bf9\u8c61\u90fd\u6709\u673a\u4f1a\u5904\u7406\u8bf7\u6c42\uff0c\u4ece\u800c",(0,t.jsx)(e.code,{children:"\u907f\u514d\u8bf7\u6c42\u7684\u53d1\u9001\u8005\u548c\u63a5\u53d7\u8005\u4e4b\u95f4\u7684\u8026\u5408\u5173\u7cfb"}),"\uff0c\u5c06\u8fd9\u4e9b\u5bf9\u8c61\u8fde\u6210\u4e00\u6761\u94fe\uff0c\u5e76\u6cbf\u7740\u8fd9\u6761\u94fe\u4f20\u9012\u8be5\u8bf7\u6c42\uff0c\u76f4\u5230\u6709\u4e00\u4e2a\u5bf9\u8c61\u5904\u7406\u5b83\u4e3a\u6b62\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4f18\u70b9\uff1a\u89e3\u8026\u4e86\u8bf7\u6c42\u53d1\u9001\u8005\u548cN\u4e2a\u63a5\u53d7\u8005\u4e4b\u95f4\u7684\u590d\u6742\u5173\u7cfb\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5f0a\u7aef\uff1a\u4e0d\u80fd\u4fdd\u8bc1\u67d0\u4e2a\u8bf7\u6c42\u4e00\u5b9a\u4f1a\u88ab\u94fe\u4e2d\u7684\u8282\u70b9\u5904\u7406\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'/* \u4f20\u7edf\u65b9\u5f0f\u5b9e\u73b0 */\n// orderType\uff1a[1:500, 2:200, 3:\u666e\u901a]\uff0cisPaid\uff1atrue/false\uff0cstock\uff1a\u5e93\u5b58\u91cf\nvar order = function(orderType, isPaid, stock) {\n    if(orderType === 1) {\n        if(isPaid) {\n            console.log("500\u5143\u5b9a\u91d1\u9884\u8d2d\uff0c\u5f97\u5230100\u4f18\u60e0\u5238");\n        } else {\n            if(stock > 0) {\n                console.log("\u666e\u901a\u8d2d\u4e70\uff0c\u65e0\u4f18\u60e0\u5238");\n            }else {\n                console.log("\u5e93\u5b58\u4e0d\u8db3");\n            }\n        }\n    }else if(orderType === 2) {\n        if(isPaid) {\n            console.log("200\u5143\u5b9a\u91d1\u9884\u8d2d\uff0c\u5f97\u523050\u4f18\u60e0\u5238");\n        } else {\n            if(stock > 0) {\n                console.log("\u666e\u901a\u8d2d\u4e70\uff0c\u65e0\u4f18\u60e0\u5238");\n            }else {\n                console.log("\u5e93\u5b58\u4e0d\u8db3");\n            }\n        }\n    }else if(orderType === 2) {\n        if(stock > 0) {\n            console.log("\u666e\u901a\u8d2d\u4e70\uff0c\u65e0\u4f18\u60e0\u5238");\n        }else {\n            console.log("\u5e93\u5b58\u4e0d\u8db3");\n        }\n    }\n}\n\norder(1, true, 500);\n\n/*\u804c\u8d23\u94fe */\nvar order500 = function(orderType, isPaid, stock) {\n    if(orderType === 1 && isPaid === true) {\n        console.log("500\u5143\u5b9a\u91d1\u9884\u8d2d\uff0c\u5f97\u5230100\u4f18\u60e0\u5238");\n    }else {\n        return "nextSuccessor";\n    }\n};\n\nvar order200 = function(orderType, isPaid, stock) {\n    if(orderType === 2 && isPaid === true) {\n        console.log("200\u5143\u5b9a\u91d1\u9884\u8d2d\uff0c\u5f97\u523050\u4f18\u60e0\u5238");\n    }else {\n        return "nextSuccessor";\n    }\n};\n\nvar orderNormal = function(orderType, isPaid, stock) {\n    if(stock > 0) {\n        console.log("\u666e\u901a\u8d2d\u4e70\uff0c\u65e0\u4f18\u60e0\u5238");\n    }else {\n        console.log("\u5e93\u5b58\u4e0d\u8db3");\n    }\n};\n\n// Function\u539f\u578b\u94fe\u4e0a\u52a0\u5165after\u65b9\u6cd5\nFunction.prototype.after = function(fn) {\n    var self = this;\n    return function() {\n        var ret = self.apply(this, arguments);\n        if(ret === "nextSuccessor") {\n            return fn.apply(this, arguments);\n        }\n        return ret;\n    };\n}\n\nvar order = order500.after(order200).after(orderNormal);\norder(1, true, 10);\n'})}),"\n",(0,t.jsx)(e.h2,{id:"3-\u7b56\u7565\u6a21\u5f0f",children:"3. \u7b56\u7565\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u5b9a\u4e49\u4e00\u7cfb\u5217\u7684\u7b97\u6cd5\uff0c\u628a\u5b83\u4eec\u4e00\u4e2a\u4e2a\u5c01\u88c5\u8d77\u6765\uff0c\u5c06\u4e0d\u53d8\u7684\u90e8\u5206\u548c\u53d8\u5316\u7684\u90e8\u5206\u9694\u5f00\u3002\u7b56\u7565\u6a21\u5f0f\u81f3\u5c112\u90e8\u5206\u7ec4\u6210\uff1a\u7b56\u7565\u7c7b\u548c\u73af\u5883\u7c7b"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"\u7b56\u7565\u7c7b"}),"\uff1a \u5c01\u88c5\u5177\u4f53\u7684\u7b97\u6cd5\uff0c\u53ef\u80fd\u6709\u5f88\u591a\u7b56\u7565\u7b97\u6cd5\uff0c\u8fd9\u662f\u53d8\u5316\u7684\u90e8\u5206\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"\u73af\u5883\u7c7b"}),"\uff1a \u8c03\u7528\u7b97\u6cd5\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u662f\u4e0d\u53d8\u7684\u90e8\u5206\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"/* \u4f20\u7edf\u65b9\u5f0f\u5b9e\u73b0 */\nfunction Price(personType, price) {\n    if (personType == 'vip') {\n        return price * 0.5; //vip 5 \u6298\n    }\n    else if (personType == 'old'){\n        return price * 0.3; //\u8001\u5ba2\u6237 3 \u6298\n    }\n    ... // \u6bcf\u591a\u4e00\u6b21\u60c5\u5f62\uff0c\u591a\u4e00\u6b21else\u5206\u652f\n    else {\n        return price; //\u5176\u4ed6\u90fd\u5168\u4ef7\n    }\n}\n\n/* \u7b56\u7565\u6a21\u5f0f */\n// \u5bf9\u4e8evip\u5ba2\u6237\nfunction vipPrice() {\n    this.discount = 0.5;\n}\nvipPrice.prototype.getPrice = function(price) {\n\u3000\u3000return price * this.discount;\n}\n\n// \u5bf9\u4e8e\u8001\u5ba2\u6237\nfunction oldPrice() {\n    this.discount = 0.3;\n}\noldPrice.prototype.getPrice = function(price) {\n    return price * this.discount;\n}\n\n// \u5bf9\u4e8e\u666e\u901a\u5ba2\u6237\nfunction Price() {\n    this.discount = 1;\n}\nPrice.prototype.getPrice = function(price) {\n    return price ;\n}\n\n// \u73af\u5883\u7c7b\uff0c\u8c03\u7528\u65b9\u5f0f\u662f\u56fa\u5b9a\u7684\u3002\u7b97\u6cd5\u7b56\u7565\u7c7b\u53ef\u53d8\u5316\nfunction Context() {\n    this.name = '';\n    this.strategy = null;\n    this.price = 0;\n}\nContext.prototype.set = function(name, strategy, price) {\n    this.name = name;\n    this.strategy = strategy;\n    this.price = price;\n}\nContext.prototype.getResult = function() {\n    console.log(this.name + ' \u7684\u7ed3\u8d26\u4ef7\u4e3a: ' + this.strategy.getPrice(this.price));\n}\n\nvar context = new Context();\nvar vip = new vipPrice();\ncontext.set ('vip\u5ba2\u6237', vip, 200); // \u89e3\u8026\u53ef\u53d8\u4e0e\u4e0d\u53ef\u53d8\ncontext.getResult();\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0a\u5199\u6cd5\u98ce\u683c\u9002\u7528\u4e8eJava\u3001ASP.NET\u3001JS\u7b49\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\u3002\u8003\u8651\u5230js\u811a\u672c\u7684\u52a8\u6001\u6027\uff0c\u5b9e\u9645\u5e94\u7528\u4e2d\u901a\u5e38\u6211\u4eec\u4f1a\u8fd9\u6837\u5e94\u7528\u7b56\u7565\u6a21\u5f0f\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'var obj = {\n        "vip": function(price) {\n            return price * 0.5;\n        },\n        "old" : function(price) {\n            return price * 0.3;\n        },\n        "normal" : function(price) {\n            return price;\n        }\n};\nvar calculatePrice = function(level,price) {\n    return obj[level](price);\n};\nconsole.log(calculatePrice(\'vip\',200));\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8003\u8651\u5230js\u8bed\u8a00\u4e2d\uff0c\u51fd\u6570\u662f\u4e00\u7b49\u516c\u6c11\uff0c\u53ef\u4ee5\u8fdb\u884c\u53c2\u6570\u4f20\u503c\uff0c\u4ee5\u4e0b\u4e5f\u662fjs\u7b56\u7565\u6a21\u5f0f\u7684\u53d8\u79cd\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"calculatePrice = function(fn, price) {\n    return fn(price)\n}\n\nlet vipFun = function(price) { return price * 0.5 }\nlet oldFun = function(price) { return price * 0.3 }\ncalculatePrice(vipFun, 200)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"4-\u89c2\u5bdf\u8005\u6a21\u5f0f",children:"4. \u89c2\u5bdf\u8005\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"js\u4e2d\u6700\u5e38\u7528\u7684\u8bbe\u8ba1\u6a21\u5f0f\u3002\u5728\u89c2\u5bdf\u8005\u6a21\u5f0f\u4e2d\uff0c\u89c2\u5bdf\u8005\u9700\u8981\u76f4\u63a5\u8ba2\u9605\u76ee\u6807\u4e8b\u4ef6\uff1b\u5728\u76ee\u6807\u53d1\u51fa\u5185\u5bb9\u6539\u53d8\u7684\u4e8b\u4ef6\u540e\uff0c\u76f4\u63a5\u63a5\u6536\u4e8b\u4ef6\u5e76\u4f5c\u51fa\u54cd\u5e94\u3002\u5f88\u591a\u5e93\u90fd\u6709\u8be5\u6a21\u5f0f\u7684\u5b9e\u73b0\uff0c\u6bd4\u5982vue\u3001redux\u7b49\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://user-images.githubusercontent.com/6310131/49351340-0026eb00-f6ee-11e8-8b78-dd823d4a96fc.png",alt:"image"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"function Dep() {\n    this.subs = [];\n}\nDep.prototype.addSub = function (sub) {\n    this.subs.push(sub);\n}\nDep.prototype.notify = function () {\n    this.subs.forEach(sub=>sub.update());\n}\nfunction Watcher(fn) {\n    this.fn = fn;\n}\nWatcher.prototype.update = function () {\n     this.fn();\n}\n\nvar dep = new Dep(); // \u89c2\u5bdf\u8005\ndep.addSub(new Watcher(function () { // \u89c2\u5bdf\u8005\u76f4\u63a5\u8ba2\u9605\u89c2\u5bdf\u8005\n    console.log('okokok');\n}))\ndep.notify();\n"})}),"\n",(0,t.jsx)(e.h2,{id:"5-\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",children:"5. \u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u5c5e\u4e8e\u5e7f\u4e49\u4e0a\u7684\u89c2\u5bdf\u8005\u6a21\u5f0f\uff0c\u4e5f\u662f\u6700\u5e38\u7528\u7684\u89c2\u5bdf\u8005\u6a21\u5f0f\u5b9e\u73b0\u3002\u5728\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u4e2d\uff0c\u53d1\u5e03\u8005\u548c\u8ba2\u9605\u8005\u4e4b\u95f4\u591a\u4e86\u4e00\u4e2a\u53d1\u5e03\u901a\u9053\uff1b\u4e00\u65b9\u9762\u4ece\u53d1\u5e03\u8005\u63a5\u6536\u4e8b\u4ef6\uff0c\u53e6\u4e00\u65b9\u9762\u5411\u8ba2\u9605\u8005\u53d1\u5e03\u4e8b\u4ef6\uff1b\u8ba2\u9605\u8005\u9700\u8981\u4ece\u4e8b\u4ef6\u901a\u9053\u8ba2\u9605\u4e8b\u4ef6\uff0c\u4ee5\u6b64\u907f\u514d\u53d1\u5e03\u8005\u548c\u8ba2\u9605\u8005\u4e4b\u95f4\u4ea7\u751f\u4f9d\u8d56\u5173\u7cfb\u3002\u53d1\u5e03\u8005\u548c\u8ba2\u9605\u8005\u4e0d\u77e5\u9053\u5bf9\u65b9\u7684\u5b58\u5728\uff0c\u6240\u4ee5\u89e3\u8026\u66f4\u5f7b\u5e95\u3002NodeJS\u7684EventEmitter\u5bf9\u8c61\u5373\u4e3a\u8be5\u6a21\u5f0f\u7684\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://user-images.githubusercontent.com/6310131/49351401-51cf7580-f6ee-11e8-9573-ed96842e9657.png",alt:"image"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u7b80\u5355\u7406\u89e3\uff0c\u89c2\u5bdf\u8005\u6a21\u5f0f\u4e2d\uff0c\u53d1\u5e03\u8005\u548c\u8ba2\u9605\u8005\u662f\u77e5\u9053\u5bf9\u65b9\u5b58\u5728\u7684\uff0c\u5b9e\u73b0\u4e0a\u4f7f\u7528\u4e86array\uff1b\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff0c\u53d1\u5e03\u8005\u548c\u8ba2\u9605\u8005\u90fd\u4e0d\u77e5\u9053\u5bf9\u65b9\u5b58\u5728\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u4e2d\u4ecb\u5bf9\u8c61\uff08\u53ef\u62bd\u79bb\u6210\u5355\u72ec\u6587\u4ef6\uff09\uff0c\u5b9e\u73b0\u4e0a\u4f7f\u7528\u4e86object\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"class EmitEvent {\n    constructor() {\n        this._events = {}\n    }\n\n    on(type, callback) {\n        if(!this._events[type]) this._events[type] = []\n\n        this._events[type].push(callback)\n    }\n\n    emit(type, ...args) {\n        if(this._events[type]) {\n            this._events[type].forEach(fn => fn.call(this, ...args))\n        }\n    }\n}\n\n// EmitEvent\u4f5c\u4e3a\u4e8b\u4ef6\u901a\u9053\nlet emitEvent = new EmitEvent()\nemitEvent.on('a', (data) => console.log('123', data))\nemitEvent.emit('a', { field: 1 })\n"})}),"\n",(0,t.jsx)(e.h2,{id:"6-\u4ee3\u7406\u6a21\u5f0f",children:"6. \u4ee3\u7406\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u4ee3\u7406\uff0c\u53ef\u4ee5\u628a\u804c\u8d23\u533a\u5206\u7684\u66f4\u5f00\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u628a\u4e00\u4e9b\u6d88\u8017\u7f51\u7edc\uff08\u5982\u56fe\u7247\u61d2\u52a0\u8f7d\uff09\uff0c\u6216\u67d0\u4e9b\u8017\u8d44\u6e90\u7684\u64cd\u4f5c\uff0c\u5728\u4f7f\u7528\u65f6\u624d\u53bb\u771f\u6b63\u5b9e\u4f8b\u5316\uff08\u5982\u9632\u706b\u5899\uff09\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4ee3\u7406\u6a21\u5f0f\u8bbe\u8ba1\u7f13\u5b58\u6848\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"// \u5355\u7eaf\u7684\u4e58\u57fa\u51fd\u6570\nlet mult = (...args) => args.reduce((total, current) => total * current , 1)\n\n// \u901a\u8fc7\u4ee3\u7406\u628a\u7f13\u5b58\u7684\u903b\u8f91\uff0c\u9694\u79bb\u5f00\u6765\nlet proxyMult = (function() {\n    let cache = {}\n    return function(...args) {\n        let argsStr = args.join(',')\n        return cache[argsStr] || (cache[argsStr] = mult.apply(this, args))\n    }\n})()\n\nproxyMult(1, 2, 3, 4) // 24\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4ee5\u4e0a\u6848\u4f8b\u5728js\u4e2d\u66f4\u591a\u7684\u4f7f\u7528",(0,t.jsx)(e.strong,{children:"\u9ad8\u9636\u51fd\u6570"}),"\uff0c\u4f7f\u5f97\u80fd\u529b\u8fdb\u4e00\u6b65\u6cdb\u5316:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"let mult = (...args) => args.reduce((total, current) => total * current , 1)\n\n// \u9ad8\u9636\u51fd\u6570\nlet proxyFactory = function(fn) {\n    let cache = {}\n    return function(...args) {\n        let argsStr = args.join(',')\n        return cache[argsStr] || (cache[argsStr] = fn.apply(this, args))\n    }\n}\nlet proxyMult = proxyFactory(mult)\n\nproxyMult(1, 2, 3, 4) // 24\n"})}),"\n",(0,t.jsx)(e.h2,{id:"7-\u547d\u4ee4\u6a21\u5f0f",children:"7. \u547d\u4ee4\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u4ecejs\u8bed\u8a00\u770b\uff0c\u547d\u4ee4\u6a21\u5f0f\u5f62\u5f0f\u4e0a\u6709\u70b9\u7c7b\u4f3c\u4ee3\u7406\u6a21\u5f0f\uff0c\u672c\u8d28\u4e0a\u8fd8\u662f\u5206\u79bb\u51fa\u8026\u5408\u7684\u903b\u8f91\uff0c\u4f7f\u5f97\u5404\u72ec\u7acb\u5bf9\u8c61\u6709\u5355\u4e00\u539f\u5219\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"// \u5f3a\u8026\u5408\u65b9\u5f0f\nvar MenuBar = {\n    refresh: () => console.log('refresh')\n}\nvar RightContextBar = {\n    add: (val) => console.log(val, 'add'),\n    del: () => console.log('del')\n}\n\nbutton1.onclick= function() { MenuBar.refresh() }\nbutton2.onclick= function() { RightContextBar.add(val) }\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0a\u5f0a\u7aef\u5f88\u660e\u663e\uff0cbutton1\u548cMenuBar\u5f3a\u8026\u5408\u4e86,\u800c\u4e14\u65e0\u6cd5\u6269\u5c55\uff0c\u6bd4\u5982command\u4e4b\u540e\u53ef\u4ee5undo\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u4e00\u4e2a\u4e2d\u95f4\u7c7b\u6765\u505a\u8fd9\u90e8\u5206\u89e3\u8026\u3002\n\u4ee5\u4e0b\u662f\u4f20\u7edfclass\u65b9\u5f0f\u89e3\u51b3\u65b9\u6848\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"// class \u547d\u4ee4\u6a21\u5f0f\nvar setCommand = (button, command) => button.onclick = function() {\n    // \u6267\u884c\u7edf\u4e00\u65b9\u6cd5\uff1aexecute\uff0c\u4e0d\u7528\u7ba1\u6267\u884c\u65b9\u662f\u8c01\n    command.execute()\n}\n\n// \u5b9a\u4e49\u7684Command\u7c7b\uff0c\u9694\u7edd\u4e86\u8c03\u7528\u65b9\u548c\u88ab\u8c03\u7528\u65b9\uff0c\u5145\u5f53\u4e86\u4e2d\u4ecb\u8005\n//\uff08\u89e3\u8026\u5408\uff0c\u5206\u62c5\u4e86\u90e8\u5206\u804c\u8d23\uff09\u3002\nclass RefreshMenuBarCommand {\n    constructor(receiver) {\n        this.receiver = receiver\n    }\n    execute() {\n        this.receiver.refresh()\n    }\n}\nclass AddMenuBarCommand {\n    constructor(receiver, val) {\n        this.receiver = receiver\n        this.val = val\n    }\n    execute() {\n        this.receiver.add(this.val)\n    }\n}\nsetCommand(button1, new RefreshMenuBarCommand(MenuBar))\nsetCommand(button2, new AddMenuBarCommand(RightContextBar, '1'))\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u4e8e\u51fd\u6570\u662f\u4e00\u7b49\u516c\u6c11\u7684Javascript\uff0c\u4e0d\u9700\u8981\u7528\u5230\u591a\u4f59\u7684class\u7c7b\uff0c\u56e0\u4e3a\u51fd\u6570\u4e5f\u662f\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"// js \u547d\u4ee4\u6a21\u5f0f\nvar setCommand = (button, command) => button.onclick = function() {\n    command()\n}\nvar RefreshMenuBarCommand = function (receiver) {\n    return function() {\n        receiver.refresh()\n    }\n}\nvar AddMenuBarCommand = function (receiver, val) {\n    return function() {\n        receiver.add(val)\n    }\n}\nsetCommand(button1, RefreshMenuBarCommand(MenuBar))\nsetCommand(button2, AddMenuBarCommand(RightContextBar))\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5b9e\u9645\u751f\u4ea7\u4e2d\uff0c\u6211\u4eec\u66f4\u53ef\u80fd\u628acommand\u547d\u4ee4\u7edf\u4e00execute\uff0c\u540c\u65f6\u5229\u7528\u5fc5\u5305\uff0c\u53ef\u4ee5\u5728\u4e2d\u95f4AddMenuBarCommand\u5bf9\u8c61\u4e2d\u5b58\u50a8\u4e00\u4e9b\u4e1c\u897f\uff08\u6bd4\u5982\u505aundo\u884c\u4e3a\uff09"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var setCommand = (button, command) => button.onclick = function() {\n    command.execute()\n}\n\nvar AddMenuBarCommand = function (receiver, val) {\n    // you can store variables for do something in here\n    // ...\n    return {\n        execute: function() {\n            receiver.add(val)\n        }\n    }\n}\n\nsetCommand(button2, AddMenuBarCommand(RightContextBar, val))\n"})}),"\n",(0,t.jsx)(e.h2,{id:"8-\u7ec4\u5408\u6a21\u5f0f",children:"8. \u7ec4\u5408\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u7ec4\u5408\u6a21\u5f0f\u4e3b\u8981\u7528\u5230\u805a\u5408\uff08\u53ef\u8ba4\u4e3a\u4f7f\u7528\u5230js\u6570\u7ec4\uff09\uff0c\u62e5\u6709\u4e0a\u4e0b\u7ea7\u5173\u7cfb\u3002\u8fd9\u6a21\u5f0f\u8981\u6c42\u6709\u4e24\u70b9\uff1a1. \u7ec4\u5408\u5bf9\u8c61\u548c\u53f6\u5bf9\u8c61\u64cd\u4f5c\u5fc5\u987b\u5177\u6709\u4e00\u81f4\u6027\uff0c\u56e0\u4e3a\u6267\u884c\u65f6\u662f\u6df1\u5ea6\u904d\u5386\uff0c\u4e0d\u533a\u5206\u64cd\u4f5c\u3002 2. \u5bf9\u8c61\u4e4b\u95f4\u4e0d\u80fd\u6709\u591a\u91cd\u5173\u7cfb\u3002\u6bd4\u5982A\u8282\u70b9\u65e2\u5c5e\u4e8eB\uff0c\u4e5f\u5c5e\u4e8eC\uff0c\u6b64\u65f6\u5c31\u4e0d\u80fd\u4f7f\u7528\u7ec4\u5408\u6a21\u5f0f\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"class Folder {\n    constructor(name) {\n        this.name = name\n        this.files = []\n    }\n\n    add(file) {\n        this.files.push(file)\n    }\n\n    scan() {\n        console.log(name, 'scan')\n        for (let file of this.files) {\n            file.scan()\n        }\n    }\n}\n\nclass File {\n    constructor(name) {\n        this.name = name\n    }\n\n    add(file) {\n        throw new Error('not add file')\n    }\n\n    scan() {\n        console.log(name, 'scan')\n    }\n}\n\nlet languageFolder = new Folder('language')\n\nlet jsFolder = new Folder('js')\njsFolder.add(new File('vue'))\njsFolder.add(new File('React'))\n\n// \u5bf9\u8c61\u901a\u8fc7add\u5f62\u6210\u4e0a\u4e0b\u7ea7\u5173\u7cfb\nlanguageFolder.add(jsFolder)\nlanguageFolder.add(javaFolder)\n...\n// \u62e5\u6709\u76f8\u540c\u7684\u63a5\u53e3\n// scan\u6267\u884c\u7684\u662f\u6df1\u5ea6\u904d\u5386\nlanguageFolder.scan()\n"})}),"\n",(0,t.jsx)(e.h2,{id:"9-\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",children:"9. \u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u6a21\u5f0f\u5c31\u8f83\u4e3a\u7b80\u5355\uff0c\u4e3b\u8981\u662f\u5bf9\u901a\u7528\u6d41\u7a0b\u8fdb\u884c\u603b\u7ed3\uff0c\u7136\u540e\u8fdb\u884c\u5360\u4f4d\u3002\u6bd4\u5982\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"class Component {\n    constructor() {\n        this.name = name\n        this.init() // \u5173\u952e\u7684\u6d41\u7a0b\n    }\n\n    init() {\n        this.beforeMounted()\n        this.mounted()\n        ...\n    }\n\n    beforeMounted() {}\n    mounted() {}\n}\n\nclass InstanceComponent extends Component {\n    beforeMounted() {\n        console.log('InstanceComponent beforeMounted')\n    }\n    mounted() {\n        console.log('InstanceComponent mounted')\n    }\n}\n\nnew InstanceComponent('instance') // \u81ea\u52a8\u521d\u59cb\u5316\n"})}),"\n",(0,t.jsx)(e.h2,{id:"10-\u4e2d\u4ecb\u8005\u6a21\u5f0f",children:"10. \u4e2d\u4ecb\u8005\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u6765\u9694\u79bb\u5bf9\u8c61\u4e4b\u95f4\u4e92\u76f8\u4f9d\u8d56\uff0c\u4f46\u540c\u65f6\u4f7f\u5f97\u4e2d\u4ecb\u8005\u4efb\u52a1\u8f83\u91cd\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6bd4\u5982\u73a9\u5bf9\u6218\u6e38\u620f\uff0c\u961f\u53cb\u548c\u5bf9\u624b\u90fd\u662f\u5f3a\u76f8\u5173\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"class Player {\n    constructor(name, teamColor) {\n        this.partners = [] // \u5f3a\u4f9d\u8d56\u7684\u961f\u53cb\u5217\u8868\n        this.enemies = [] // \u5f3a\u4f9d\u8d56\u7684\u5bf9\u624b\u5217\u8868\n        // \u81ea\u8eab\u72b6\u6001\n        this.state = 'live'\n        this.name = name\n        this.teamColor = tem\n    }\n\n    win() {\n        console.log('win')\n    }\n\n    lose() {\n        console.log('lose')\n    }\n\n    // \u5f53\u6709\u53d8\u5316\u65f6\uff0c\u9700\u8981\u66f4\u65b0\u6240\u6709\u5f3a\u4f9d\u8d56\u7684\u5bf9\u8c61\uff0c\u975e\u5e38\u590d\u6742\n    // \u961f\u53cb\u6389\u7ebf\u6216\u8005\u6362\u961f\u7b49\u72b6\u6001\u53d8\u5316\uff0c\u90fd\u5f97\u786c\u66f4\u65b0\uff0c\u51e0\u4e4e\u4e0d\u53ef\u7ef4\u62a4\n    die() {\n        let isAllDead = true\n        this.state = 'dead'\n        for (let partner of this.partners) {\n            if(partner.state !== 'dead') {\n                isAllDead = false\n                break\n            }\n        }\n\n        // \u901a\u77e5\n        if (isAllDead) {\n            this.lose() // \u81ea\u5df1\u5931\u8d25\n            for (let partner of this.partners) partner.lose();\n            for (let enemy of this.enemies) enemy.win();\n        }\n    }\n}\n\n// \u521b\u5efapalyer\nlet playerFactory = (function(){\n    let players = []\n    return function(name, teamColor) {\n        let newPlayer = new Player(name, teamColor)\n        // \u5f3a\u4f9d\u8d56\u65f6\uff0c\u521b\u5efa\u5bf9\u8c61\u4e5f\u975e\u5e38\u9ebb\u70e6\n        for(let player of players) {\n            let isPartner = newPlayer.teamColor === player.teamColor\n            newPlayer.partners.push(isPartner ? newPlayer : player)\n            newPlayer.enemies.push(isPartner ? player : newPlayer)\n        }\n        players.push(newPlayer)\n        return newPlayer\n    }\n})()\n\nvar player1 = playerFactory('player1', 'red')\nvar player2 = playerFactory('player2', 'red')\nvar player3 = playerFactory('player3', 'black')\nvar player4 = playerFactory('player4', 'black')\nplayer1.die()\nplayer2.die()\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u8c61\u4e0e\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u90fd\u662f\u5f3a\u4f9d\u8d56\u3002\u5f53\u6709\u53d8\u5316\u65f6\uff0c\u9700\u8981\u66f4\u65b0\u6240\u6709\u5f3a\u4f9d\u8d56\u7684\u5bf9\u8c61\uff0c\u975e\u5e38\u590d\u6742\uff0c\u5047\u5982\u589e\u52a0\u961f\u53cb\u6389\u7ebf\u6216\u8005\u6362\u961f\u7b49\u72b6\u6001\u53d8\u5316\uff0c\u90fd\u5f97\u786c\u66f4\u65b0\uff0c\u51e0\u4e4e\u4e0d\u53ef\u7ef4\u62a4\u3002\u6240\u4ee5\u6b64\u65f6\u9700\u8981\u5206\u79bb\u51fa\u4e00\u4e2a\u4e2d\u4ecb\u8005\uff0c\u9694\u79bb\u5bf9\u8c61\u4e4b\u95f4\u7684\u5f3a\u4f9d\u8d56\u3002\u5bf9\u8c61\u72b6\u6001\u6539\u53d8\u65f6\uff0c\u8ba9\u4e2d\u4ecb\u8005\u53bb\u901a\u77e5\uff0c\u5bf9\u8c61\u4e4b\u95f4\u4e0d\u77e5\u5bf9\u65b9\u7684\u5b58\u5728\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"// \u4e2d\u4ecb\u8005\u6a21\u5f0f\nclass Player {\n    ...\n    die() {\n        this.state = 'dead'\n        // \u53d8\u5316\u90fd\u53d1\u9001\u7ed9\u4e2d\u95f4\u8005\n        playerDirector.dead(this)\n    }\n}\n\nclass PlayerDirector{\n    constructor() {\n        this.players = {} // \u5173\u7cfb\u89e3\u8026\n    }\n    add(player) {\n        let { teamColor } = player\n        (players[teamColor] || players[teamColor] = []).push(player)\n    }\n    dead(player) {\n        // \u83b7\u53d6\u961f\u53cb\u548c\u5bf9\u624b\n        let teamPlayers = this.players[player.teamColor]\n        let enemyPlayers = Object.keys(this.players)\n            .reduce((arr, key) => [...arr, ...this.players[key]], [])\n            .filter(p => p.teamColor !== player.teamColor)\n\n        let isAllDead = true\n        for (let partner of teamPlayers) {\n            if(partner.state !== 'dead') {\n                isAllDead = false\n                break\n            }\n        }\n        if (isAllDead) {\n            player.lose()\n            for (let partner of teamPlayers) partner.lose();\n            for (let enemy of enemyPlayers) enemy.win();\n        }\n    }\n\n}\n\nlet playerDirector = new PlayerDirector()\nplayerDirector.add(new Player('player1', 'red'))\nplayerDirector.add(new Player('player2', 'red'))\n"})}),"\n",(0,t.jsx)(e.h2,{id:"11-\u8fed\u4ee3\u5668\u6a21\u5f0f",children:"11. \u8fed\u4ee3\u5668\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u63d0\u4f9b\u4e00\u79cd\u65b9\u6cd5\uff0c\u987a\u5e8f\u8bbf\u95ee\u4e00\u4e2a\u805a\u5408\u5bf9\u8c61\u7684\u5404\u4e2a\u5143\u7d20\uff0c\u800c\u53c8\u4e0d\u9700\u8981\u66b4\u9732\u8be5\u5bf9\u8c61\u7684\u5185\u90e8\u8868\u793a\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u7b80\u5355\u8bf4\u5c31\u662f\u4f7f\u7528\u7edf\u4e00\u7684\u5904\u7406\u65b9\u6cd5\u5904\u7406\u805a\u5408\u5bf9\u8c61\uff0c\u8fd9\u6a21\u5f0f\u76f8\u5bf9\u7b80\u5355\uff0c\u56e0\u4e3a\u5927\u90e8\u5206\u8bed\u8a00\u90fd\u5185\u7f6e\u4e86\u8fed\u4ee3\u5668\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"// \u8fed\u4ee3\u5668\u6a21\u5f0f\u6a21\u5f0f\u83b7\u53d6\u5408\u9002\u4e0a\u4f20\u7ec4\u4ef6\u5bf9\u8c61\nconst iteratorUploadObj = (...args) => {\n    for (let fn of args) {\n        let uploadObj = fn()\n        if (uploadObj) {\n            return uploadObj\n        }\n    }\n    return null\n}\n\nconst getActiveUploadObj = () => {\n    try {\n        return new ActiveXObject('TXFTNActive.FINUpload') // IE \u4e0a\u4f20\u63a7\u4ef6\n    } catch {\n        return false\n    }\n}\nconst getFlashUploadObj = () => {\n    if (supportFlash()) {\n        let str = '<object type=\"application/xshockwave-flash\"></object>'\n        return $(str).appendTo($('body'))\n    }\n    return false\n}\n\nconst uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj, ...)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u72b6\u6001\u6a21\u5f0f\u3002\u5927\u90e8\u5206\u6a21\u5f0f\u662f\u5c01\u88c5\u884c\u4e3a\uff0c\u8be5\u6a21\u5f0f\u662f\u5c01\u88c5\u72b6\u6001\uff08\u56e0\u4e3a\u72b6\u6001\u8fc7\u591a\uff09"}),"\n",(0,t.jsx)(e.li,{children:"\u9002\u914d\u5668\u6a21\u5f0f\u3002\u5e38\u7528\u4e8e\u517c\u5bb9API"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u8003\u6587\u6863",children:"\u53c2\u8003\u6587\u6863"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/shichuan/javascript-patterns/blob/master/design-patterns/builder.html",children:"design-patterns"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://www.zhihu.com/question/23486749",children:"\u89c2\u5bdf\u8005\u6a21\u5f0f\u548c\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u6709\u4ec0\u4e48\u4e0d\u540c"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://juejin.im/post/5a14e9edf265da4312808d86",children:"\u89c2\u5bdf\u8005\u6a21\u5f0f vs \u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://blog.csdn.net/crylearner/article/details/8888372",children:"\u8bbe\u8ba1\u6a21\u5f0f\u63a8\u6f14\u2014\u2014\u7ec4\u5408\u4e0e\u7ee7\u627f"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u300aJavascript\u8bbe\u8ba1\u6a21\u5f0f\u4e0e\u5f00\u53d1\u5b9e\u8df5\u300b"}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>a});var t=r(6540);const s={},l=t.createContext(s);function i(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);