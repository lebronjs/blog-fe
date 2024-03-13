"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[9993],{5966:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=o(4848),t=o(8453);const r={},a="\u63a8\u8350-\u4f18\u96c5\u5f15\u7528\u5b57\u4f53",s={id:"others/team-standard/recommend-css-font",title:"\u63a8\u8350-\u4f18\u96c5\u5f15\u7528\u5b57\u4f53",description:"\u7f16\u7a0b\u5f0f\u5b57\u4f53\u65b9\u6cd5\u7684\u597d\u5904",source:"@site/docs/others/team-standard/recommend-css-font.md",sourceDirName:"others/team-standard",slug:"/others/team-standard/recommend-css-font",permalink:"/docs/others/team-standard/recommend-css-font",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"\u63a8\u8350-200\u9519\u8bef\u7edf\u4e00\u5904\u7406",permalink:"/docs/others/team-standard/recommend-code200"},next:{title:"\u63a8\u8350-Vue\u5b9e\u4f8b\u9009\u9879\u987a\u5e8f",permalink:"/docs/others/team-standard/recommend-vue-api-order"}},l={},c=[{value:"\u7f16\u7a0b\u5f0f\u5b57\u4f53\u65b9\u6cd5\u7684\u597d\u5904",id:"\u7f16\u7a0b\u5f0f\u5b57\u4f53\u65b9\u6cd5\u7684\u597d\u5904",level:2},{value:"bad",id:"bad",level:2},{value:"good",id:"good",level:2},{value:"\u6700\u4f73\u5b57\u4f53\u987a\u5e8f\u53c2\u8003",id:"\u6700\u4f73\u5b57\u4f53\u987a\u5e8f\u53c2\u8003",level:2},{value:"PC\u7aef",id:"pc\u7aef",level:3},{value:"\u79fb\u52a8\u7aef",id:"\u79fb\u52a8\u7aef",level:3}];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u63a8\u8350-\u4f18\u96c5\u5f15\u7528\u5b57\u4f53",children:"\u63a8\u8350-\u4f18\u96c5\u5f15\u7528\u5b57\u4f53"}),"\n",(0,i.jsx)(e.h2,{id:"\u7f16\u7a0b\u5f0f\u5b57\u4f53\u65b9\u6cd5\u7684\u597d\u5904",children:"\u7f16\u7a0b\u5f0f\u5b57\u4f53\u65b9\u6cd5\u7684\u597d\u5904"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5b66\u4e60\u89c6\u89c9\u540c\u5b66\u5bf9\u4e8e\u5177\u4f53\u5b57\u4f53\u7684\u8003\u91cf\uff0c\u4e5f\u8bb8\u8fd8\u80fd\u53d1\u73b0\u89c6\u89c9\u540c\u5b66\u7684bug"}),"\n",(0,i.jsx)(e.li,{children:"\u5168\u5c40\u63a7\u5236\uff0c\u907f\u514d\u6837\u5f0f\u6563\u4e71"}),"\n",(0,i.jsx)(e.li,{children:"\u4e66\u5199\u5b57\u4f53\u6837\u5f0f\u6210\u4e3a\u4e00\u95e8\u827a\u672f"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"bad",children:"bad"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-css",children:".form-title {\n    font: 'PingFang-SC-medium';\n    font-size: 18px;\n    font-color: #22222;\n}\n\n.form-text {\n    font: 'PingFang-SC-regular';\n    font-size: 14px;\n    font-color: #333333;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"good",children:"good"}),"\n",(0,i.jsx)(e.p,{children:"variables.scss\u6587\u4ef6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-scss",children:"$font-normal-color = #222222; // \u5b57\u4f53\u989c\u8272\n$font-light-color = #333333;\n\n@mixin font-class($fontFamily, $fontSize, $fontColor) {\n    font-family: $fontFamily;\n    font-size: $fontSize;\n    color: $fontColor;\n}\n\n@mixin font-large($size: 14px, $color: $font-normal-color) {\n    @include font-class($font-family-medium, $size, $color);\n}\n\n@mixin font-normal($size: 14px, $color: $font-light-color) {\n    @include font-class($font-family-regular, $size, $color);\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5e94\u7528:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-scss",children:".form-title {\n    @include font-large(18px, #22222);\n}\n\n.form-text {\n    @include font-large(14px, #333333);\n}\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["font-large/font-normal\u7b49\u516c\u7528mixins\u5efa\u8bae\u653e\u5728\u7edf\u4e00\u7684",(0,i.jsx)(e.code,{children:"variables.scss"}),"\u6587\u4ef6\u4e2d\uff0c\u518d\u901a\u8fc7sass-resource\u81ea\u52a8\u5f15\u5165\u5230\u6240\u6709\u7ec4\u4ef6\u4e2d"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6700\u4f73\u5b57\u4f53\u987a\u5e8f\u53c2\u8003",children:"\u6700\u4f73\u5b57\u4f53\u987a\u5e8f\u53c2\u8003"}),"\n",(0,i.jsx)(e.h3,{id:"pc\u7aef",children:"PC\u7aef"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"$font-family-medium = 'PingFang-SC-medium', Helveti   ca, Tahoma, Arial, 'Microsoft YaHei', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif;\n$font-family-regular = 'PingFang-SC-regular', Helvetica, Tahoma, Arial, 'Microsoft YaHei', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif;\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u79fb\u52a8\u7aef",children:"\u79fb\u52a8\u7aef"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"$font-family-ultralight = 'PingFangSC-Ultralight', 'Source Han Sans CN', \"Helvetica Neue\";\n$font-family-regular = 'PingFangSC-Regular', 'Source Han Sans CN', \"Helvetica Neue\";\n$font-family-medium = 'PingFangSC-Medium', 'Source Han Sans CN Medium', \"Helvetica Neue\";\n$font-family-thin = 'PingFangSC-Thin', 'Source Han Sans CN Thin', \"Helvetica Neue\";\n$font-family-light = 'PingFangSC-Light', 'Source Han Sans CN Light', \"Helvetica Neue\";\n$font-family-semibold = 'PingFangSC-Semibold', 'Source Han Sans CN Light', \"Helvetica Neue\";\n"})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>s});var i=o(6540);const t={},r=i.createContext(t);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);