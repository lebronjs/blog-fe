"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[1559],{5186:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>u});var s=o(4848),l=o(8453);const r={},d="Node\u6a21\u5757\u6e90\u7801\u5206\u6790",t={id:"others/node/node-module",title:"Node\u6a21\u5757\u6e90\u7801\u5206\u6790",description:"\u6a21\u5757\u7cfb\u7edf\u662fnodejs\u7684\u57fa\u7840\uff0c\u4f7f\u7528\u9891\u7387\u4e5f\u5f88\u9ad8\u3002\u5728\u4f7f\u7528nodejs\u8fc7\u7a0b\u4e2d\uff0c\u4ee5\u4e0b\u51e0\u4e2a\u5173\u4e8e\u6a21\u5757\u7cfb\u7edf\u7684\u95ee\u9898\u662f\u5426\u5e38\u5e38\u56f0\u6270\u7740\u4f60\uff1a",source:"@site/docs/others/node/node-module.md",sourceDirName:"others/node",slug:"/others/node/node-module",permalink:"/docs/others/node/node-module",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"Express\u6e90\u7801\u89e3\u6790",permalink:"/docs/others/node/node-code-express"},next:{title:"MongoDB\u6307\u5357",permalink:"/docs/others/node/node-mongodb"}},i={},u=[{value:"CommonJS\u89c4\u8303",id:"commonjs\u89c4\u8303",level:2},{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"node\u6a21\u5757\u6e90\u7801\u5206\u6790",children:"Node\u6a21\u5757\u6e90\u7801\u5206\u6790"}),"\n",(0,s.jsx)(n.p,{children:"\u6a21\u5757\u7cfb\u7edf\u662fnodejs\u7684\u57fa\u7840\uff0c\u4f7f\u7528\u9891\u7387\u4e5f\u5f88\u9ad8\u3002\u5728\u4f7f\u7528nodejs\u8fc7\u7a0b\u4e2d\uff0c\u4ee5\u4e0b\u51e0\u4e2a\u5173\u4e8e\u6a21\u5757\u7cfb\u7edf\u7684\u95ee\u9898\u662f\u5426\u5e38\u5e38\u56f0\u6270\u7740\u4f60\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e3a\u4ec0\u4e48\u5728\u6a21\u5757\u4e2d\u6709\u5168\u5c40\u7684require\u3001module.exports\u3001exports\u3001__dirname\u3001__filename\u7b49\u5173\u952e\u5b57,\u5b83\u4eec\u662f\u4ece\u54ea\u6765\u7684\uff1f"}),"\n",(0,s.jsx)(n.li,{children:"\u4e3a\u4ec0\u4e48\u4e00\u5b9a\u8981\u4f7f\u7528module.exports\u6216\u8005exports\u5bfc\u51fa\u6a21\u5757\u4fe1\u606f\uff1f"}),"\n",(0,s.jsx)(n.li,{children:"module.exports\u548cexports\u7684\u533a\u522b\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u901a\u8fc7\u6e90\u7801\u5206\u6790",(0,s.jsx)(n.a,{href:"https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js",children:"lib/module.js"}),"\u6765\u89e3\u51b3\u8fd9\u4e9b\u56f0\u60d1\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u5206\u6790\u7684\u6e90\u7801\u7248\u672c\u662f\u76ee\u524d\u6700\u65b0\u7684Node V11.12\uff0c\u540c\u65f6\u4e3a\u65b9\u4fbf\u7406\u89e3\uff0c\u7b14\u8005\u7cbe\u7b80\u51fa\u4e00\u4e9b\u5173\u952e\u7684\u4ee3\u7801\uff0c\u540c\u65f6\u6709\u8be6\u7ec6\u6ce8\u91ca\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"commonjs\u89c4\u8303",children:"CommonJS\u89c4\u8303"}),"\n",(0,s.jsx)(n.p,{children:"\u4f17\u6240\u5468\u77e5\uff0cnodejs\u662f\u57fa\u4e8eCommonJS\u89c4\u8303\u6765\u5b9e\u73b0\uff0cCommonJS\u89c4\u8303\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u70b9\u5185\u5bb9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6bcf\u4e2a\u6587\u4ef6\u5c31\u662f\u4e00\u4e2a\u6a21\u5757\uff0c\u6709\u81ea\u5df1\u7684\u4f5c\u7528\u57df\u3002\u5728\u4e00\u4e2a\u6587\u4ef6\u91cc\u9762\u5b9a\u4e49\u7684\u53d8\u91cf\u3001\u51fd\u6570\u3001\u7c7b\uff0c\u90fd\u662f\u79c1\u6709\u7684\uff0c\u5bf9\u5176\u4ed6\u6587\u4ef6\u4e0d\u53ef\u89c1\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6bcf\u4e2a\u6a21\u5757\u5185\u90e8\uff0cmodule\u53d8\u91cf\u4ee3\u8868\u5f53\u524d\u6a21\u5757\u3002\u8fd9\u4e2a\u53d8\u91cf\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u7684exports\u5c5e\u6027\uff08\u5373module.exports\uff09\u662f\u5bf9\u5916\u7684\u63a5\u53e3\u3002\u52a0\u8f7d\u67d0\u4e2a\u6a21\u5757\uff0c\u5176\u5b9e\u662f\u52a0\u8f7d\u8be5\u6a21\u5757\u7684module.exports\u5c5e\u6027\u3002"}),"\n",(0,s.jsx)(n.li,{children:"require\u65b9\u6cd5\u7528\u4e8e\u52a0\u8f7d\u6a21\u5757"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// moduleA.js\nmodule.exports = function( value ){\n    return value * 2;\n}\n\n// moduleB.js\nvar multiplyBy2 = require('./moduleA');\nvar result = multiplyBy2(4);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u770b\u4ee5\u4e0a\u5b9a\u4e49\u5185\u5bb9\u6211\u4eec\u77e5\u9053\uff0cCommonJS\u89c4\u8303\u89c4\u5b9a\u4e86\u6bcf\u4e2a\u6a21\u5757\u5185\u90e8\u90fd\u6709module\u53d8\u91cf\u8868\u793a\u5f53\u524d\u6a21\u5757\uff0c\u4f7f\u7528exports\u5bfc\u51fa\u6a21\u5757\u5185\u5bb9\u4ee5\u53carequire\u5bfc\u5165\u6a21\u5757\uff0c\u5230\u5177\u4f53\u6e90\u7801\u4e0a\u5b83\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u5462\uff1f"}),"\n",(0,s.jsx)(n.h2,{id:"\u6e90\u7801\u5206\u6790",children:"\u6e90\u7801\u5206\u6790"}),"\n",(0,s.jsx)(n.p,{children:"\u5148\u4ece\u5f15\u5165\u6a21\u5757require\u8fdb\u884c\u5206\u6790\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// lib/internal/modules/cjs/loader.js\n\n// require\u65b9\u6cd5\u6302\u8f7d\u5230Module\u539f\u578b\u94fe\u4e0a\nModule.prototype.require = function(id) {\n  return Module._load(id, this, /* isMain */ false);\n};\n\nModule._load = function(request, parent, isMain) {\n  // \u89e3\u6790\u51fa\u5b8c\u6574\u7edd\u5bf9\u8def\u5f84\uff0crequest\u8def\u5f84\u53ef\u80fd\u6709\u591a\u79cd\u5f62\u5f0f\n  // 1. \u5185\u90e8\u6a21\u5757\uff1arequire('http')\n  // 2. \u76f8\u5bf9\u4f4d\u7f6e-\u6587\u4ef6\uff1arequire('./module')\n  // 3. \u76f8\u5bf9\u4f4d\u7f6e-\u6587\u4ef6\u5939\uff1arequire('./module/')\n  // 4. \u7edd\u5bf9\u4f4d\u7f6e\uff1a require('/temp/module')\n  var filename = Module._resolveFilename(request, parent, isMain);\n\n  // \u7f13\u5b58\u5904\u7406\uff0c\u63d0\u5347\u6027\u80fd\n  // \u540c\u65f6\u53ef\u4ee5\u89e3\u51b3a\u3001b\u6a21\u5757\u4e92\u76f8\u4f9d\u8d56\u5bfc\u81f4\u5faa\u73af\u7684\u95ee\u9898\n  // \u56e0\u4e3a\u53ea\u52a0\u8f7d\u4e00\u6b21\uff0c\u7b2c\u4e8c\u6b21\u52a0\u8f7d\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\uff0c\u4e0d\u7528\u91cd\u65b0\u52a0\u8f7d\n  var cachedModule = Module._cache[filename];\n  if (cachedModule) {\n    return cachedModule.exports; // \u5bfc\u51fa\u7684\u6c38\u8fdc\u662fmodule.exports\u7684\u5185\u5bb9\n  }\n\n  // \u5148\u5b9e\u4f8b\u5316\u4e00\u4e2a\u7a7a\u7684module\n  var module = new Module(filename, parent);\n  Module._cache[filename] = module; // \u5b58\u5165\u7f13\u5b58\n\n  // \u52a0\u8f7dmodule\n  module.load(filename);\n\n  // \u95ee\u98982\u7b54\u6848\uff1a\u5bfc\u51fa\u7684\u662fexports\u5185\u5bb9\n  return module.exports;\n};\n\n// \u6bcf\u4e2a\u6a21\u5757\u5bf9\u5e94\u5c31\u662fModule\u5b9e\u4f8b\nfunction Module(id, parent) {\n  this.id = id; // \u6a21\u5757\u7684\u8bc6\u522b\u7b26\uff0c\u901a\u5e38\u662f\u5e26\u6709\u7edd\u5bf9\u8def\u5f84\u7684\u6a21\u5757\u6587\u4ef6\u540d\n  this.exports = {}; // \u6a21\u5757\u5bf9\u5916\u8f93\u51fa\u7684\u503c\n  this.parent = parent; // \u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8868\u793a\u8c03\u7528\u8be5\u6a21\u5757\u7684\u6a21\u5757\n  this.filename = null; // \u6a21\u5757\u7684\u6587\u4ef6\u540d\uff0c\u5e26\u6709\u7edd\u5bf9\u8def\u5f84\n  this.loaded = false; // \u662f\u5426\u5df2\u52a0\u8f7d\u6a21\u5757\u6807\u8bb0\n  this.children = []; // \u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u8868\u793a\u8be5\u6a21\u5757\u8981\u7528\u5230\u7684\u5176\u4ed6\u6a21\u5757\n}\n\nmodule.exports = Module; // node\u5185\u90e8\u6e90\u7801\u4f7f\u7528\u7684\u4e5f\u662f\u6a21\u5757\u7cfb\u7edf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["1 . \u53ef\u4ee5\u770b\u5230",(0,s.jsx)(n.code,{children:"require"}),"\u65b9\u6cd5\u662f\u7ed1\u5b9a\u5728Module\u7c7b\u7684\u539f\u578b\u94fe\u65b9\u6cd5\uff0c\u8bf4\u660e\u53ea\u6709\u83b7\u53d6\u5230\u5f53\u524d\u5b9e\u4f8bmodule\u624d\u80fd\u8c03\u7528require\u3002\u800c\u6bcf\u4e2a\u6a21\u5757\u90fd\u53ef\u4ee5\u62ff\u5230\u81ea\u5df1\u7684\u5f53\u524d\u5b9e\u4f8bmodule\u53d8\u91cf\uff0c\u5b83\u662f\u5982\u4f55\u628a\u5b9e\u4f8bmodule\u6ce8\u5165\u5230\u6a21\u5757\u4e2d\u7684\u5462\uff1f",(0,s.jsx)(n.strong,{children:"\u7b54\u6848\u662f\u4f7f\u7528\u6c99\u7bb1\u73af\u5883\uff0c\u4ee5\u95ed\u5305\u51fd\u6570\u7684\u65b9\u5f0f\u4f20\u5165\u5f53\u524dmodule"}),"\uff0c\u540e\u7eed\u6e90\u7801\u89e3\u8bfb\u4f1a\u6709\u8be6\u7ec6\u8bf4\u660e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["2 . node\u6a21\u5757\u7cfb\u7edf\u8def\u5f84\u52a0\u8f7d\u591a\u79cd\u591a\u6837\uff0c\u6709\u5185\u7f6e\u7684\u3001\u6709\u4ece\u76f8\u5bf9\u4f4d\u7f6e\u8bfb\u53d6\u3001\u6709\u4ece\u7edd\u5bf9\u4f4d\u7f6e\u8bfb\u53d6\uff0c\u52a0\u8f7d\u8be6\u7ec6\u89c4\u5219\u53ef\u4ee5\u770bNodeJS\u5b98\u65b9\u6587\u6863 ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/modules.html#modules_file_modules",children:"modules_file_modules"}),"\u3002\u60f3\u4e86\u89e3\u5177\u4f53\u5b9e\u73b0\u539f\u7406\u53ef\u4ee5\u770b\u4e0b",(0,s.jsx)(n.code,{children:"Module._resolveFilename"}),"\u65b9\u6cd5\u6e90\u7801\uff0c\u8be5\u65b9\u6cd5\u4e3b\u8981\u786e\u5b9a\u6a21\u5757\u52a0\u8f7d\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u4e86\u89e3\u8be5\u6e90\u7801\u540e\uff0c\u5982\u4e0b\u5b98\u65b9\u6587\u6863\u89e3\u91ca\u5f88\u5bb9\u6613\u7406\u89e3\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_file_modules",children:"File Modules"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_folders_as_modules",children:"Folders as Modules#\n"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_loading_from_node_modules_folders",children:"Loading from node_modules Folders"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_loading_from_the_global_folders",children:"Loading from the global folders"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["3 . \u53ef\u4ee5\u770b\u5230",(0,s.jsx)(n.code,{children:"Module._load"}),"\u65b9\u6cd5\u901a\u8fc7new Module()\u6765\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684module\u5b9e\u4f8b\uff0c\u7136\u540e\u901a\u8fc7\u539f\u578b\u65b9\u6cd5",(0,s.jsx)(n.code,{children:"module.load"}),"\u771f\u6b63\u7684\u53bb\u8bfb\u53d6\u6a21\u5757\u5185\u5bb9\u3002",(0,s.jsxs)(n.strong,{children:["\u6ce8\u610freturn\u5bfc\u51fa\u7684\u662f",(0,s.jsx)(n.code,{children:"module.exports"})]}),"\uff0c\u8fd9\u5c31\u89e3\u91ca\u4e86CommonJS\u89c4\u8303\u4e2d\u8981\u6c42\u7684\u6700\u7ec8\u5bfc\u51fa\u7684\u5185\u5bb9\u662fmodule.exports\uff08\u7b2c\u4e8c\u4e2a\u95ee\u9898\u7b54\u6848\uff09\u3002\u81f3\u4e8eexports\u662fmodule.exports\u7684\u7b80\u5199\uff0c\u5373exports = module.exports\uff0c\u4e0b\u6587\u4f1a\u89e3\u91ca\u8fd9\u5173\u7cfb\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Module.prototype.load = function(filename) {\n  // module\u5b9e\u4f8b\u4e0a\u53ef\u4ee5\u62ff\u5230filename\u3001paths\u5c5e\u6027\n  this.filename = filename;\n  this.paths = Module._nodeModulePaths(path.dirname(filename));\n\n  // node\u5f15\u7528\u6a21\u5757\u53ef\u4ee5\u9ed8\u8ba4\u4e0d\u5199\u540e\u7f00\uff0c\u987a\u5e8f\u89c4\u5219\uff1a.js\u3001.json .node\n  var extension = findLongestRegisteredExtension(filename);\n  // \u4e0d\u540c\u540e\u7f00\u7684\u6587\u4ef6\u6a21\u5757\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u7b56\u7565\u3002\n  Module._extensions[extension](this, filename);\n\n  this.loaded = true; // \u6807\u8bb0\u6210\u6a21\u5757\u5df2\u52a0\u8f7d\n}\n\nModule._extensions['.js'] = function(module, filename) {\n  var content = fs.readFileSync(filename, 'utf8');\n  // \u83b7\u5f97\u6a21\u5757\u4ee3\u7801\u7eaf\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u7f16\u8bd1compile\u5b57\u7b26\u4e32\u4ee3\u7801\n  // stripBOM\u65b9\u6cd5\u4f5c\u7528\u662f\u5265\u79bb utf8 \u7f16\u7801\u7279\u6709\u7684BOM\u6587\u4ef6\u5934\n  module._compile(stripBOM(content), filename);\n};\n\nModule._extensions['.json'] = function(module, filename) {\n  const content = fs.readFileSync(filename, 'utf8');\n  // json\u540e\u7f00\u52a0\u8f7d\u7b56\u7565\uff1a\u628a\u5b57\u7b26\u4e32JSON.parse\u89e3\u6790\u6210\u5bf9\u8c61\n  // \u5c06\u5bf9\u8c61\u8d4b\u503c\u7ed9module.exports,\u56e0\u4e3a\u6700\u7ec8\u5bf9\u5916\u5bfc\u51famodule.exports\n  module.exports = JSON.parse(stripBOM(content));\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u518d\u6765\u770b\u770b",(0,s.jsx)(n.code,{children:"Module.prototype.load"}),"\u505a\u4e86\u4ec0\u4e48\u3002nodejs\u6a21\u5757\u7cfb\u7edf\u4e2d\u662f\u53ef\u4ee5\u4e0d\u5e26\u540e\u7f00\u7684\uff0c\u4ed6\u4f1a\u6839\u636e",(0,s.jsx)(n.code,{children:".js,.json,.node"}),"\u7684\u987a\u5e8f\u89c4\u5219\u53bb\u786e\u5b9a\u6700\u7ec8\u4f7f\u7528\u54ea\u4e2a\u6587\u4ef6\u3002\u800c\u4e0d\u540c\u540e\u7f00\u7684\u6587\u4ef6\u6a21\u5757\u52a0\u8f7d\u7b56\u7565\u662f\u4e0d\u4e00\u6837\u7684\uff0cjson\u7b56\u7565\u662f\u628a\u5b57\u7b26\u4e32JSON.parse\u89e3\u6790\u6210\u5bf9\u5e94\u4ee3\u7801\uff0c\u901a\u8fc7module.exports\u5bfc\u51fa\u4f9b\u5916\u90e8\u4f7f\u7528\u3002js\u7b56\u7565\u662f\u4f7f\u7528",(0,s.jsx)(n.code,{children:"module._compile"}),"\u65b9\u6cd5\u5904\u7406\uff0c\u8ba9\u6211\u4eec\u770b\u4e0b_compile\u7684\u6e90\u7801\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Module.prototype._compile = function(content, filename) {\n  // \u5c06\u6a21\u5757\u5185\u5bb9\u4f7f\u7528function\u5305\u88c5\u8d77\u6765\n  const wrapper = Module.wrap(content);\n  // \u5173\u952e\uff1a\u901a\u8fc7\u5185\u90e8vm\u6a21\u5757\u65b9\u6cd5\uff0c\u628astring\u5b57\u7b26\u4e32\u4ee3\u7801\uff0c\u53d8\u6210\u771f\u6b63\u7684\u53ef\u6267\u884c\u4ee3\u7801\n  cosnt compiledWrapper = vm.runInThisContext(wrapper, {...})\n\n  var dirname = path.dirname(filename);\n  var require = makeRequireFunction(this); // \u5bf9\u5916\u66b4\u9732\u7684require api\n  // \u95ee\u98983\u7b54\u6848\uff1aexports\u548cmodule.exports\u7684\u5173\u7cfb\n  // \u5373exports = module.exports = {}\n  var exports = this.exports;\n  var thisValue = exports;\n  var module = this; // \u628a\u5f53\u524d\u5b9e\u4f8b\u4f20\u5165\n\n  // \u95ee\u98981\u7b54\u6848\uff1a\u5728\u6a21\u5757\u5185\u90e8\uff0c\u62e5\u6709require\u3001module\u3001exports\u7b49\u5168\u5c40\u53d8\u91cf\n  // \u539f\u7406\u662f\u901a\u8fc7compiledWrapper.call\u6267\u884c\u51fd\u6570\uff0c\u628a\u8fd9\u4e9b\u5185\u5bb9\u4f20\u5165\u5230\u6a21\u5757\u5185\u90e8\n  var result = compiledWrapper.call(thisValue, exports, require, module, filename, dirname);\n  return result\n}\n\n// \u6700\u65b0\u7248node\u4f7f\u7528Proxy\uff0c\u4f7f\u5f97Module.wrap\u4ee3\u7406wrap\u5bf9\u8c61\nObject.defineProperty(Module, 'wrap', {\n  get() {\n    return wrap;\n  },\n  set(value) {\n    wrap = value;\n  }\n});\n\nlet wrap = function(script) {\n  return Module.wrapper[0] + script + Module.wrapper[1];\n};\nconst wrapper = [\n  '(function (exports, require, module, __filename, __dirname) { ',\n  '\\n});'\n];\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Module.prototype._compile"}),"\u662f\u6574\u4e2a\u6a21\u5757\u52a0\u8f7d\u7684\u6838\u5fc3\u5185\u5bb9\uff0c\u5176\u672c\u8d28\u662f\u5c06\u5b57\u7b26\u4e32\u6e90\u7801\u62fc\u63a5\u6210\u95ed\u5305\u51fd\u6570\uff08\u901a\u8fc7VM\u6a21\u5757\u7684runInThisContext\uff09\uff0c\u6ce8\u5165exports\u3001require\u3001module\u7b49\u5168\u5c40\u53d8\u91cf\uff0c\u518d\u6267\u884c\u6a21\u5757\u6e90\u7801\uff0c\u5c06module\u7684exports\u503c\u8f93\u51fa\u3002\u7b49\u540c\u4e8e\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"(function (exports, require, module, __filename, __dirname) {\n  // \u6a21\u5757\u5185\u90e8\u5b9a\u4e49\u4ee3\u7801\n  const otherModule = require('./other') // \u5185\u90e8\u53ef\u4ee5\u4f7f\u7528require\u3001module\u7b49\u5168\u5c40\u53d8\u91cf\n  module.exports = function() {...} // \u5fc5\u987b\u4f7f\u7528module.exports\u4ee5\u5bfc\u51fa\u672c\u6a21\u5757\u5185\u5bb9\n})(this.exports, this.require, this, filename, dirname)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e86\u89e3\u4ee5\u4e0a\u6e90\u7801\u540e\uff0c\u5982\u4e0b\u5b98\u65b9\u6587\u6863\u89e3\u91ca\u5f88\u5bb9\u6613\u7406\u89e3\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_the_module_wrapper",children:"The module wrapper"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_the_module_scope",children:"The module scope"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_exports_shortcut",children:"exports shortcut"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6a21\u5757\u52a0\u8f7d\uff0c\u662f\u901a\u8fc7\u6c99\u7bb1\u65b9\u5f0f\uff0c\u628a\u5b57\u7b26\u4e32\u62fc\u63a5\u6210\u95ed\u5305\u51fd\u6570\u7684\u5f62\u5f0f\uff0c\u628a\u5b9e\u4f8bmodule\u3001exports\u3001require\u3001__filename\u3001__dirname\u4ee5\u53c2\u6570\u65b9\u5f0f\u6ce8\u5165\u5230\u73af\u5883\u53d8\u91cf\u4e2d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6a21\u5757\u5bfc\u51fa\u7684\u5185\u5bb9\u662f\u5fc5\u987b\u662fmodule.exports\u7684\u5185\u5bb9\uff0cexports\u662fmodule.exports\u7b80\u5199\uff0c\u6307\u5411\u540c\u4e00\u5757\u5185\u5b58\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["exports = module.exports\uff0c\u4f46exports\u88ab\u8986\u76d6\u65f6\uff0cexports\u88ab\u8d4b\u503c\u7684\u662f\u4e00\u4e2a\u65b0\u5f00\u8f9f\u7684\u5185\u5b58\uff0c\u4e0d\u518d\u6307\u5411module.exports\u3002\u6240\u4ee5\u5b98\u7f51\u5efa\u8bae\u4e0d\u8981\u5728\u6a21\u5757\u5185\u90e8\u76f4\u63a5\u8986\u76d6exports\uff0c\u5373",(0,s.jsx)(n.code,{children:"\u4e0d\u8981\u5199exports = ..."}),"\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u53ef\u4ee5\u4f7f\u7528nodejs vm\u6a21\u5757\uff0c\u5c06\u62fc\u63a5\u5b57\u7b26\u4e32\u4ee3\u7801\u8f6c\u53ef\u6267\u884c\u4ee3\u7801\uff0c\u89e3\u51b3\u4e00\u4e9b\u975e\u5e38\u89c4\u9700\u6c42\uff0c\u5982\u7528\u6237\u81ea\u5b9a\u4e49\u6267\u884c\u51fd\u6570\u3001\u81ea\u5b9a\u4e49Mock\u51fd\u6570\u3001\u81ea\u5b9a\u4e49\u6a21\u5757\u52a0\u8f7d\u5668\u7b49\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u7ae0",children:"\u53c2\u8003\u6587\u7ae0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://javascript.ruanyifeng.com/nodejs/module.html",children:"CommonJS\u89c4\u8303"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://www.ruanyifeng.com/blog/2015/05/require.html",children:"require() \u6e90\u7801\u89e3\u8bfb"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js",children:"module.exports vs exports in Node.js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cnodejs.org/topic/5231a630101e574521e45ef8",children:"exports \u548c module.exports \u7684\u533a\u522b"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html",children:"node - modules"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>t});var s=o(6540);const l={},r=s.createContext(l);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);