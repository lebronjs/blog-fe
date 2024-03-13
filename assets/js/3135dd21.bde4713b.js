"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[1528],{769:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(4848),r=i(8453);const s={},o="Nginx\u53cd\u5411\u4ee3\u7406",a={id:"others/node/nginx",title:"Nginx\u53cd\u5411\u4ee3\u7406",description:"1. \u4ec0\u4e48\u662f\u53cd\u5411\u4ee3\u7406",source:"@site/docs/others/node/nginx.md",sourceDirName:"others/node",slug:"/others/node/nginx",permalink:"/blog-fe/docs/others/node/nginx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"othersSidebar",previous:{title:"Koa \u6d0b\u8471\u6a21\u578b\u539f\u7406\u5206\u6790",permalink:"/blog-fe/docs/others/node/koa-compose-modal"},next:{title:"Connect\u6e90\u7801\u89e3\u6790",permalink:"/blog-fe/docs/others/node/node-code-connect"}},l={},c=[{value:"1. \u4ec0\u4e48\u662f\u53cd\u5411\u4ee3\u7406",id:"1-\u4ec0\u4e48\u662f\u53cd\u5411\u4ee3\u7406",level:2},{value:"\u53cd\u5411\u4ee3\u7406\u4f18\u70b9",id:"\u53cd\u5411\u4ee3\u7406\u4f18\u70b9",level:3},{value:"2. Nginx\u57fa\u7840",id:"2-nginx\u57fa\u7840",level:2},{value:"2.1 \u5b89\u88c5",id:"21-\u5b89\u88c5",level:3},{value:"2.2 \u547d\u4ee4",id:"22-\u547d\u4ee4",level:3},{value:"3. Nginx\u914d\u7f6e",id:"3-nginx\u914d\u7f6e",level:2},{value:"3.1 \u4e86\u89e3Nginx\u914d\u7f6e",id:"31-\u4e86\u89e3nginx\u914d\u7f6e",level:3},{value:"3.2 location\u914d\u7f6e",id:"32-location\u914d\u7f6e",level:3},{value:"3.3 \u8d1f\u8f7d\u5747\u8861\uff08\u53cd\u5411\u4ee3\u7406\uff09",id:"33-\u8d1f\u8f7d\u5747\u8861\u53cd\u5411\u4ee3\u7406",level:3},{value:"3.4 nginx.conf \u914d\u7f6e\u6587\u4ef6\u5168\u89e3\u6790",id:"34-nginxconf-\u914d\u7f6e\u6587\u4ef6\u5168\u89e3\u6790",level:3},{value:"4. \u603b\u7ed3\u6280\u5de7",id:"4-\u603b\u7ed3\u6280\u5de7",level:2},{value:"\u9632\u76d7\u94fe",id:"\u9632\u76d7\u94fe",level:3},{value:"\u6839\u636e\u6587\u4ef6\u7c7b\u578b\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4",id:"\u6839\u636e\u6587\u4ef6\u7c7b\u578b\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4",level:3},{value:"\u7981\u6b62\u8bbf\u95ee\u67d0\u4e2a\u76ee\u5f55",id:"\u7981\u6b62\u8bbf\u95ee\u67d0\u4e2a\u76ee\u5f55",level:3},{value:"gzip",id:"gzip",level:3},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",level:3},{value:"\u5185\u5bb9\u63a7\u5236",id:"\u5185\u5bb9\u63a7\u5236",level:3},{value:"SSL HTTPS",id:"ssl-https",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"nginx\u53cd\u5411\u4ee3\u7406",children:"Nginx\u53cd\u5411\u4ee3\u7406"}),"\n",(0,t.jsx)(e.h2,{id:"1-\u4ec0\u4e48\u662f\u53cd\u5411\u4ee3\u7406",children:"1. \u4ec0\u4e48\u662f\u53cd\u5411\u4ee3\u7406"}),"\n",(0,t.jsx)(e.p,{children:"\u5f53\u6211\u4eec\u6709\u4e00\u4e2a\u670d\u52a1\u5668\u96c6\u7fa4\uff0c\u5e76\u4e14\u670d\u52a1\u5668\u96c6\u7fa4\u4e2d\u7684\u6bcf\u53f0\u670d\u52a1\u5668\u7684\u5185\u5bb9\u4e00\u6837\u7684\u65f6\u5019\uff0c\u540c\u6837\u6211\u4eec\u8981\u76f4\u63a5\u4ece\u4e2a\u4eba\u7535\u8111\u8bbf\u95ee\u5230\u670d\u52a1\u5668\u96c6\u7fa4\u670d\u52a1\u5668\u7684\u65f6\u5019\u65e0\u6cd5\u8bbf\u95ee\uff0c\u5fc5\u987b\u901a\u8fc7\u7b2c\u4e09\u65b9\u670d\u52a1\u5668\u624d\u80fd\u8bbf\u95ee\u96c6\u7fa4"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e2a\u65f6\u5019\uff0c\u6211\u4eec\u901a\u8fc7\u7b2c\u4e09\u65b9\u670d\u52a1\u5668\u8bbf\u95ee\u670d\u52a1\u5668\u96c6\u7fa4\u7684\u5185\u5bb9\uff0c\u4f46\u662f\u6211\u4eec\u5e76\u4e0d\u77e5\u9053\u662f\u54ea\u4e00\u53f0\u670d\u52a1\u5668\u63d0\u4f9b\u7684\u5185\u5bb9\uff0c\u6b64\u79cd\u4ee3\u7406\u65b9\u5f0f\u79f0\u4e3a\u53cd\u5411\u4ee3\u7406\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://user-images.githubusercontent.com/6310131/49806720-674e3a80-fd93-11e8-9a95-b268cac617b7.png",alt:"image"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://user-images.githubusercontent.com/6310131/49806621-2a824380-fd93-11e8-86d1-c62f635142af.png",alt:"image"})}),"\n",(0,t.jsx)(e.h3,{id:"\u53cd\u5411\u4ee3\u7406\u4f18\u70b9",children:"\u53cd\u5411\u4ee3\u7406\u4f18\u70b9"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u4fdd\u62a4\u7f51\u7ad9\u5b89\u5168\uff0c\u6240\u6709\u8bf7\u6c42\u90fd\u5148\u7ecf\u8fc7\u4ee3\u7406\u670d\u52a1\u5668\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u8d1f\u8f7d\u5747\u8861\uff0c\u628a\u8bf7\u6c42\u8f6c\u53d1\u5230\u538b\u529b\u8f83\u5c0f\u7684\u670d\u52a1\u5668\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u53ef\u4ee5\u505a\u4e00\u4e9b\u4e2d\u95f4\u5c42\u8bbe\u7f6e\uff0c\u6bd4\u5982\u7f13\u5b58\u9759\u6001\u8d44\u6e90"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"2-nginx\u57fa\u7840",children:"2. Nginx\u57fa\u7840"}),"\n",(0,t.jsx)(e.h3,{id:"21-\u5b89\u88c5",children:"2.1 \u5b89\u88c5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"brew install nginx\nnginx -v // \u663e\u793a\u7248\u672c\u53f7\u5219\u5b89\u88c5\u6210\u529f\n"})}),"\n",(0,t.jsx)(e.h3,{id:"22-\u547d\u4ee4",children:"2.2 \u547d\u4ee4"}),"\n",(0,t.jsx)(e.p,{children:"nginx\u76ee\u5f55"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"nginx -t // \u663e\u793anginx\u914d\u7f6e\u4fe1\u606f\ncd /usr/local/etc/nginx\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u542f\u52a8nginx"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"nginx // \u9ed8\u8ba48080\u7aef\u53e3\u542f\u52a8\u6210\u529f\uff0c\u53ef\u8bbf\u95eehttp://localhost:8080/\nservive nginx start // ubantu\u4e0b\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5173\u95ednginx"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"nginx -s stop\nservive nginx stop // ubantu\u4e0b\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u91cd\u542fnginx"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"nginx -s reload // \u6bcf\u6b21\u4fee\u6539\u5b8cnginx.conf\u6587\u4ef6\u5c31\u9700\u8981\u91cd\u542fnginx\nservive nginx restart // ubantu\u4e0b\n"})}),"\n",(0,t.jsx)(e.h2,{id:"3-nginx\u914d\u7f6e",children:"3. Nginx\u914d\u7f6e"}),"\n",(0,t.jsx)(e.h3,{id:"31-\u4e86\u89e3nginx\u914d\u7f6e",children:"3.1 \u4e86\u89e3Nginx\u914d\u7f6e"}),"\n",(0,t.jsx)(e.p,{children:"\u5148\u770b\u4e2a\u7b80\u5355\u7684\u6848\u4f8b\u4e86\u89e3\u4e0bnginx\u914d\u7f6e\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:'########### \u6bcf\u4e2a\u6307\u4ee4\u5fc5\u987b\u6709\u5206\u53f7\u7ed3\u675f\u3002#################\nhttp {\n    access_log /var/logs/nginx-access.log; # \u8bb0\u5f55\u65e5\u5fd7\u5730\u5740\n    # \u65e5\u5fd7\u683c\u5f0f\n    log_format combined \'$remote_addr - $remote_user [$time_local] \'\n                    \'"$request" $status $body_bytes_sent \'\n                    \'"$http_referer" "$http_user_agent"\';\n\n    # \u53ef\u4ee5\u6709\u591a\u4e2aserver\n    server {\n        listen 8080; #\u76d1\u542cHTTP\u7aef\u53e3\n        server_name 127.0.0.1; #\u76d1\u542c\u5730\u5740  \n        root /data/up1; # server\u6839\u76ee\u5f55\u3002\u672a\u8bbe\u7f6e\u65f6\uff0cMacOS\u9ed8\u8ba4\u662f/usr/local/var/www\n\n        location / {\n            proxy_pass http://localhost:8080; # \u4ee3\u7406\n        }\n\n        location /images/ {\n            root /data; # \u8bbe\u7f6e\u8be5\u8def\u5f84\u4e0b\u7684\u6839\u76ee\u5f55\uff08\u8986\u76d6server\u6839\u76ee\u5f55\uff09\n        }\n\n        # \u63a5\u53e3\n        location = /logout {\n            default_type application/json;\n            add_header Cache-Control no-cache;\n            add_header Access-Control-Allow-Origin *;\n            return 200 \'{"code":200}\';\n        }\n\n        location ~ /\\.ht {  #\u7981\u6b62\u8bbf\u95ee .htxxx \u6587\u4ef6\n           deny all;\n        }\n        location = /do_not_delete.html { #\u76f4\u63a5\u7b80\u5355\u7c97\u66b4\u7684\u8fd4\u56de\u72b6\u6001\u7801\u53ca\u5185\u5bb9\u6587\u672c\n           return 200 "hello.";\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"32-location\u914d\u7f6e",children:"3.2 location\u914d\u7f6e"}),"\n",(0,t.jsx)(e.p,{children:"\u91cd\u70b9\u770b\u4e0blocation\u914d\u7f6e"}),"\n",(0,t.jsxs)(e.p,{children:["\u8bed\u6cd5\u89c4\u5219\uff1a\xa0",(0,t.jsx)(e.code,{children:"location [=|~|~*|^~] /uri/ { \u2026 }"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"=\xa0\u5f00\u5934\u8868\u793a\u7cbe\u786e\u5339\u914d"}),"\n",(0,t.jsx)(e.li,{children:"~\xa0\u5f00\u5934\u8868\u793a\u533a\u5206\u5927\u5c0f\u5199\u7684\u6b63\u5219\u5339\u914d"}),"\n",(0,t.jsx)(e.li,{children:"~* \xa0\u5f00\u5934\u8868\u793a\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\u6b63\u5219\u5339\u914d"}),"\n",(0,t.jsx)(e.li,{children:"^~\xa0\u5f00\u5934\u8868\u793auri\u4ee5\u67d0\u4e2a\u5e38\u89c4\u5b57\u7b26\u4e32\u5f00\u5934"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:"server {\n    listen 80; # \u76d1\u542c80\u7aef\u53e3\n\n    # http://localhost/some/example.html\u8bbf\u95ee/data/www/some/example.html\n    location / {\n        root /data/www;\n    }\n\n    # http://localhost/images/index.html\u8bbf\u95ee/data/images/index.html\n    # \u6ce8\u610f\uff1a\u8fd9\u91cc\u4e0d\u662f\u8bbf\u95ee/data/index.html\n    location /images/ {\n        root /data;\n    }\n\n    # http://localhost/images/example.png\u8bbf\u95ee/data/images/example.png\n    location ~ \\.(gif|jpg|png)$ {\n        root /data/images;\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"33-\u8d1f\u8f7d\u5747\u8861\u53cd\u5411\u4ee3\u7406",children:"3.3 \u8d1f\u8f7d\u5747\u8861\uff08\u53cd\u5411\u4ee3\u7406\uff09"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u7528\u6237\u8f93\u5165",(0,t.jsx)(e.a,{href:"http://test-openai.com",children:"http://test-openai.com"})," \u65f6\uff0c\u8bbf\u95ee80\u7aef\u53e3"]}),"\n",(0,t.jsxs)(e.li,{children:["nginx\u76d1\u542c\u523080\u7aef\u53e3\u88ab\u8bbf\u95ee\uff0c\u5339\u914d\u5230\u7684/\u8def\u5f84\uff0c\u88ab\u53cd\u5411\u4ee3\u7406\u5230",(0,t.jsx)(e.a,{href:"http://dramatic-offical-website",children:"http://dramatic-offical-website"})]}),"\n",(0,t.jsx)(e.li,{children:"dramatic-offical-website\u96c6\u7fa4\u7ba1\u7406\u7740\u4e00\u5806\u673a\u5668\u5730\u5740\uff0c\u4ece\u800c\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u3002"}),"\n",(0,t.jsxs)(e.li,{children:["\u5982\u679c\u5339\u914d\u5230",(0,t.jsx)(e.a,{href:"http://test-openai.com/images/",children:"http://test-openai.com/images/"})," \u8def\u5f84\uff0c\u5219\u76f4\u63a5\u6620\u5c04/data\u4e0b\u7684\u6587\u4ef6"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"# \u865a\u62df\u4e3b\u673a\u914d\u7f6e\nserver {\n    server_name test-openai.com; # \u8bf7\u6c42\u5230\u8fbe\u7684\u670d\u52a1\u5668\u540d,\u5b9a\u4e49\u4f7f\u7528test-openai.com\u8bbf\u95ee,\n    listen 80; # \u76d1\u542c80\u7aef\u53e3\n    listen 443 ssl; # https\u9ed8\u8ba4\u7aef\u53e3\u662f443\n\n    # \u5bf9 / \u6240\u6709\u505a\u8d1f\u8f7d\u5747\u8861+\u53cd\u5411\u4ee3\u7406\n    location / {\n        proxy_pass http://dramatic-offical-website; # \u4ee3\u7406\u5230\u76ee\u6807\u5730\u5740\n    }\n\n    # \u9759\u6001\u6587\u4ef6\uff0cnginx\u81ea\u5df1\u5904\u7406\n    location /images/ {\n        root /data; # \u6620\u5c04\u5230/data/images\n    }\n}\n\n# \u8bbe\u5b9a\u8d1f\u8f7d\u5747\u8861\u540e\u53f0\u670d\u52a1\u5668\u5217\u8868\nupstream dramatic-offical-website {\n    server 10.192.106.133;\n    server 10.192.106.134;\n}\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"34-nginxconf-\u914d\u7f6e\u6587\u4ef6\u5168\u89e3\u6790",children:"3.4 nginx.conf \u914d\u7f6e\u6587\u4ef6\u5168\u89e3\u6790"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:'#\u8fd0\u884c\u7528\u6237\n#user somebody;\n\n#\u542f\u52a8\u8fdb\u7a0b,\u901a\u5e38\u8bbe\u7f6e\u6210\u548ccpu\u7684\u6570\u91cf\u76f8\u7b49\nworker_processes  1;\n\n#\u5168\u5c40\u9519\u8bef\u65e5\u5fd7\nerror_log  D:/Tools/nginx-1.10.1/logs/error.log;\nerror_log  D:/Tools/nginx-1.10.1/logs/notice.log  notice;\nerror_log  D:/Tools/nginx-1.10.1/logs/info.log  info;\n\n#PID\u6587\u4ef6\uff0c\u8bb0\u5f55\u5f53\u524d\u542f\u52a8\u7684nginx\u7684\u8fdb\u7a0bID\npid        D:/Tools/nginx-1.10.1/logs/nginx.pid;\n\n#\u5de5\u4f5c\u6a21\u5f0f\u53ca\u8fde\u63a5\u6570\u4e0a\u9650\nevents {\n    worker_connections 1024;    #\u5355\u4e2a\u540e\u53f0worker process\u8fdb\u7a0b\u7684\u6700\u5927\u5e76\u53d1\u94fe\u63a5\u6570\n}\n\n#\u8bbe\u5b9ahttp\u670d\u52a1\u5668\uff0c\u5229\u7528\u5b83\u7684\u53cd\u5411\u4ee3\u7406\u529f\u80fd\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u652f\u6301\nhttp {\n    #\u8bbe\u5b9amime\u7c7b\u578b(\u90ae\u4ef6\u652f\u6301\u7c7b\u578b),\u7c7b\u578b\u7531mime.types\u6587\u4ef6\u5b9a\u4e49\n    include       D:/Tools/nginx-1.10.1/conf/mime.types;\n    default_type  application/octet-stream;\n\n    #\u8bbe\u5b9a\u65e5\u5fd7\n    log_format  main  \'[$remote_addr] - [$remote_user] [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log    D:/Tools/nginx-1.10.1/logs/access.log main;\n    rewrite_log     on;\n\n    #sendfile \u6307\u4ee4\u6307\u5b9a nginx \u662f\u5426\u8c03\u7528 sendfile \u51fd\u6570\uff08zero copy \u65b9\u5f0f\uff09\u6765\u8f93\u51fa\u6587\u4ef6\uff0c\u5bf9\u4e8e\u666e\u901a\u5e94\u7528\uff0c\n    #\u5fc5\u987b\u8bbe\u4e3a on,\u5982\u679c\u7528\u6765\u8fdb\u884c\u4e0b\u8f7d\u7b49\u5e94\u7528\u78c1\u76d8IO\u91cd\u8d1f\u8f7d\u5e94\u7528\uff0c\u53ef\u8bbe\u7f6e\u4e3a off\uff0c\u4ee5\u5e73\u8861\u78c1\u76d8\u4e0e\u7f51\u7edcI/O\u5904\u7406\u901f\u5ea6\uff0c\u964d\u4f4e\u7cfb\u7edf\u7684uptime.\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\n    keepalive_timeout  120;\n    tcp_nodelay        on;\n\n    #gzip\u538b\u7f29\u5f00\u5173\n    #gzip  on;\n\n    #\u8bbe\u5b9a\u5b9e\u9645\u7684\u670d\u52a1\u5668\u5217\u8868\n    upstream zp_server1{\n        server 127.0.0.1:8089;\n    }\n\n    #HTTP\u670d\u52a1\u5668\n    server {\n        #\u76d1\u542c80\u7aef\u53e3\uff0c80\u7aef\u53e3\u662f\u77e5\u540d\u7aef\u53e3\u53f7\uff0c\u7528\u4e8eHTTP\u534f\u8bae\n        listen       80;\n\n        #\u5b9a\u4e49\u4f7f\u7528www.xx.com\u8bbf\u95ee\n        server_name  www.helloworld.com;\n\n        #\u9996\u9875\n        index index.html\n\n        #\u6307\u5411webapp\u7684\u76ee\u5f55\n        root D:\\01_Workspace\\Project\\github\\zp\\SpringNotes\\spring-security\\spring-shiro\\src\\main\\webapp;\n\n        #\u7f16\u7801\u683c\u5f0f\n        charset utf-8;\n\n        #\u4ee3\u7406\u914d\u7f6e\u53c2\u6570\n        proxy_connect_timeout 180;\n        proxy_send_timeout 180;\n        proxy_read_timeout 180;\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarder-For $remote_addr;\n\n        #\u53cd\u5411\u4ee3\u7406\u7684\u8def\u5f84\uff08\u548cupstream\u7ed1\u5b9a\uff09\uff0clocation \u540e\u9762\u8bbe\u7f6e\u6620\u5c04\u7684\u8def\u5f84\n        location / {\n            proxy_pass http://zp_server1;\n        }\n\n        #\u9759\u6001\u6587\u4ef6\uff0cnginx\u81ea\u5df1\u5904\u7406\n        location ~ ^/(images|javascript|js|css|flash|media|static)/ {\n            root D:\\01_Workspace\\Project\\github\\zp\\SpringNotes\\spring-security\\spring-shiro\\src\\main\\webapp\\views;\n            #\u8fc7\u671f30\u5929\uff0c\u9759\u6001\u6587\u4ef6\u4e0d\u600e\u4e48\u66f4\u65b0\uff0c\u8fc7\u671f\u53ef\u4ee5\u8bbe\u5927\u4e00\u70b9\uff0c\u5982\u679c\u9891\u7e41\u66f4\u65b0\uff0c\u5219\u53ef\u4ee5\u8bbe\u7f6e\u5f97\u5c0f\u4e00\u70b9\u3002\n            expires 30d;\n        }\n\n        #\u8bbe\u5b9a\u67e5\u770bNginx\u72b6\u6001\u7684\u5730\u5740\n        location /NginxStatus {\n            stub_status           on;\n            access_log            on;\n            auth_basic            "NginxStatus";\n            auth_basic_user_file  conf/htpasswd;\n        }\n\n        #\u7981\u6b62\u8bbf\u95ee .htxxx \u6587\u4ef6\n        location ~ /\\.ht {\n            deny all;\n        }\n\n        #\u9519\u8bef\u5904\u7406\u9875\u9762\uff08\u53ef\u9009\u62e9\u6027\u914d\u7f6e\uff09\n        #error_page   404              /404.html;\n        #error_page   500 502 503 504  /50x.html;\n        #location = /50x.html {\n        #    root   html;\n        #}\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5185\u7f6e\u5168\u5c40\u53d8\u91cf\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sh",children:"$args \uff1a\u8fd9\u4e2a\u53d8\u91cf\u7b49\u4e8e\u8bf7\u6c42\u884c\u4e2d\u7684\u53c2\u6570\uff0c\u540c$query_string\n$content_length \uff1a \u8bf7\u6c42\u5934\u4e2d\u7684Content-length\u5b57\u6bb5\u3002\n$content_type \uff1a \u8bf7\u6c42\u5934\u4e2d\u7684Content-Type\u5b57\u6bb5\u3002\n$document_root \uff1a \u5f53\u524d\u8bf7\u6c42\u5728root\u6307\u4ee4\u4e2d\u6307\u5b9a\u7684\u503c\u3002\n$host \uff1a \u8bf7\u6c42\u4e3b\u673a\u5934\u5b57\u6bb5\uff0c\u5426\u5219\u4e3a\u670d\u52a1\u5668\u540d\u79f0\u3002\n$http_user_agent \uff1a \u5ba2\u6237\u7aefagent\u4fe1\u606f\n$http_cookie \uff1a \u5ba2\u6237\u7aefcookie\u4fe1\u606f\n$limit_rate \uff1a \u8fd9\u4e2a\u53d8\u91cf\u53ef\u4ee5\u9650\u5236\u8fde\u63a5\u901f\u7387\u3002\n$request_method \uff1a \u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u52a8\u4f5c\uff0c\u901a\u5e38\u4e3aGET\u6216POST\u3002\n$remote_addr \uff1a \u5ba2\u6237\u7aef\u7684IP\u5730\u5740\u3002\n$remote_port \uff1a \u5ba2\u6237\u7aef\u7684\u7aef\u53e3\u3002\n$remote_user \uff1a \u5df2\u7ecf\u7ecf\u8fc7Auth Basic Module\u9a8c\u8bc1\u7684\u7528\u6237\u540d\u3002\n$request_filename \uff1a \u5f53\u524d\u8bf7\u6c42\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u7531root\u6216alias\u6307\u4ee4\u4e0eURI\u8bf7\u6c42\u751f\u6210\u3002\n$scheme \uff1a HTTP\u65b9\u6cd5\uff08\u5982http\uff0chttps\uff09\u3002\n$server_protocol \uff1a \u8bf7\u6c42\u4f7f\u7528\u7684\u534f\u8bae\uff0c\u901a\u5e38\u662fHTTP/1.0\u6216HTTP/1.1\u3002\n$server_addr \uff1a \u670d\u52a1\u5668\u5730\u5740\uff0c\u5728\u5b8c\u6210\u4e00\u6b21\u7cfb\u7edf\u8c03\u7528\u540e\u53ef\u4ee5\u786e\u5b9a\u8fd9\u4e2a\u503c\u3002\n$server_name \uff1a \u670d\u52a1\u5668\u540d\u79f0\u3002\n$server_port \uff1a \u8bf7\u6c42\u5230\u8fbe\u670d\u52a1\u5668\u7684\u7aef\u53e3\u53f7\u3002\n$request_uri \uff1a \u5305\u542b\u8bf7\u6c42\u53c2\u6570\u7684\u539f\u59cbURI\uff0c\u4e0d\u5305\u542b\u4e3b\u673a\u540d\uff0c\u5982\uff1a\u201d/foo/bar.php?arg=baz\u201d\u3002\n$uri \uff1a \u4e0d\u5e26\u8bf7\u6c42\u53c2\u6570\u7684\u5f53\u524dURI\uff0c$uri\u4e0d\u5305\u542b\u4e3b\u673a\u540d\uff0c\u5982\u201d/foo/bar.html\u201d\u3002\n$document_uri \uff1a \u4e0e$uri\u76f8\u540c\u3002\n"})}),"\n",(0,t.jsx)(e.h2,{id:"4-\u603b\u7ed3\u6280\u5de7",children:"4. \u603b\u7ed3\u6280\u5de7"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"deny"}),"\n",(0,t.jsx)(e.li,{children:"gzip"}),"\n",(0,t.jsx)(e.li,{children:"add_header"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u9632\u76d7\u94fe",children:"\u9632\u76d7\u94fe"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:"location ~* \\.(gif|jpg|swf)$ {\n    valid_referers none blocked start.igrow.cn sta.igrow.cn;\n    if ($invalid_referer) {\n        rewrite ^/ http://$host/logo.png;\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u6839\u636e\u6587\u4ef6\u7c7b\u578b\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4",children:"\u6839\u636e\u6587\u4ef6\u7c7b\u578b\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:"location ~* \\.(js|css|jpg|jpeg|gif|png|swf)$ {\n    if (-f $request_filename) {\n        expires 1h;\n        break;\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u7981\u6b62\u8bbf\u95ee\u67d0\u4e2a\u76ee\u5f55",children:"\u7981\u6b62\u8bbf\u95ee\u67d0\u4e2a\u76ee\u5f55"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:"location ~* \\.(txt|doc)${\n    root /data/www/wwwroot/linuxtone/test;\n    deny all;\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"gzip",children:"gzip"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:'#gzip on|off\ngzip  on;\n\n#\u6d88\u606f\u4f53\u592a\u5c0f\u5c31\u6ca1\u5fc5\u8981\u538b\u7f29(\u8fd9\u91cc\u8bbe\u7f6e\u6700\u5c0f\u8303\u56f41K)\ngzip_min_length  1024; \n\n#Nginx\u505a\u4e3a\u53cd\u5411\u4ee3\u7406\u7684\u65f6\u5019\u542f\u7528\uff0c\n#param:off|expired|no-cache|no-sotre|private|no_last_modified|no_etag|auth|any]\n#expample:gzip_proxied no-cache;\n#off \u2013 \u5173\u95ed\u6240\u6709\u7684\u4ee3\u7406\u7ed3\u679c\u6570\u636e\u538b\u7f29\n#expired \u2013 \u542f\u7528\u538b\u7f29\uff0c\u5982\u679cheader\u4e2d\u5305\u542b\u201dExpires\u201d\u5934\u4fe1\u606f\n#no-cache \u2013 \u542f\u7528\u538b\u7f29\uff0c\u5982\u679cheader\u4e2d\u5305\u542b\u201dCache-Control:no-cache\u201d\u5934\u4fe1\u606f\n#no-store \u2013 \u542f\u7528\u538b\u7f29\uff0c\u5982\u679cheader\u4e2d\u5305\u542b\u201dCache-Control:no-store\u201d\u5934\u4fe1\u606f\n#private \u2013 \u542f\u7528\u538b\u7f29\uff0c\u5982\u679cheader\u4e2d\u5305\u542b\u201dCache-Control:private\u201d\u5934\u4fe1\u606f\n#no_last_modified \u2013 \u542f\u7528\u538b\u7f29\uff0c\u5982\u679cheader\u4e2d\u5305\u542b\u201dLast_Modified\u201d\u5934\u4fe1\u606f\n#no_etag \u2013 \u542f\u7528\u538b\u7f29\uff0c\u5982\u679cheader\u4e2d\u5305\u542b\u201cETag\u201d\u5934\u4fe1\u606f\n#auth \u2013 \u542f\u7528\u538b\u7f29\uff0c\u5982\u679cheader\u4e2d\u5305\u542b\u201cAuthorization\u201d\u5934\u4fe1\u606f\n#any \u2013 \u65e0\u6761\u4ef6\u538b\u7f29\u6240\u6709\u7ed3\u679c\u6570\u636e\n\ngzip_proxied     any;\n\n#Nginx\u4f5c\u4e3a\u53cd\u5411\u4ee3\u7406\u7684\u65f6\u5019\u542f\u7528\uff0c\u5f00\u542f\u6216\u8005\u5173\u95ed\u540e\u7aef\u670d\u52a1\u5668\u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u5339\u914d\u7684\u524d\u63d0\u662f\u540e\u7aef\u670d\u52a1\u5668\u5fc5\u987b\u8981\u8fd4\u56de\u5305\u542b"Via"\u7684 header\u5934\u3002\ngzip_proxied expired no-cache no-store private auth;\n\n#\u538b\u7f29\u6bd4\u4f8b\uff0c\u6bd4\u4f8b\u8d8a\u5927\uff0c\u538b\u7f29\u65f6\u95f4\u8d8a\u957f\u3002\n#\u9ed8\u8ba4\u662f1 \n#\u5efa\u8bae nginx gzip\u7ea7\u522b\u4e3a4\ngzip_comp_level  4;\n\n#\u54ea\u4e9b\u6587\u4ef6\u53ef\u4ee5\u88ab\u538b\u7f29\ngzip_types       text/plain text/html text/javascript text/xml text/css application/x-javascript application/xml;\n\n#\u65e0\u89c6IE6\u8fd9\u4e2a\u7b28\u86cb\ngzip_disable  "MSIE [1-6]\\.";\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u8d1f\u8f7d\u5747\u8861",children:"\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:"upstream mysvr {\n    #weigth\u53c2\u6570\u8868\u793a\u6743\u503c\uff0c\u6743\u503c\u8d8a\u9ad8\u88ab\u5206\u914d\u5230\u7684\u51e0\u7387\u8d8a\u5927\n    server 192.168.8.1x:3128 weight=5;#\u672c\u673a\u4e0a\u7684Squid\u5f00\u542f3128\u7aef\u53e3\n    server 192.168.8.2x:80  weight=1;\n    server 192.168.8.3x:80  weight=6;\n}\n\nlocation ~* /mysvr/ {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_pass http://mysvr/$request_uri;    \n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u5185\u5bb9\u63a7\u5236",children:"\u5185\u5bb9\u63a7\u5236"}),"\n",(0,t.jsx)(e.p,{children:"http\u5934\u63a7\u5236"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:'add_header \u8fd9\u4e2a\u6307\u4ee4\u7528\u6765\u589e\u52a0\u534f\u8bae\u5934\uff1a\nadd_header Cache-Control no-cache;\nadd_header Cache-Control no-store;\nadd_header Cache-Control max-age=60;\nadd_header Content-Encoding gzip\nadd_header Content-Type \'text/html; charset=utf-8\';\n\nif ($request_uri ~* "^/$|^/search/.+/|^/company/.+/") {\n    add_header    Cache-Control  max-age=3600;\n}\n\nif ($request_uri ~* "^/search-suggest/|^/categories/") {\n    add_header    Cache-Control  max-age=86400;\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u76f4\u63a5\u7b80\u5355\u7c97\u66b4\u7684\u8fd4\u56de\u72b6\u6001\u7801\u53ca\u5185\u5bb9\u6587\u672c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:'location = /do_not_delete.html {\n    return 200 "hello.";\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"ssl-https",children:"SSL HTTPS"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:"server{\n    listen 443;\n    server_name www.test.com;\n    charset utf8;\n    ssl on;\n    ssl_certificate /etc/ssl/test.com.crt;\n    ssl_certificate_key /etc/ssl/test.com.key;\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var t=i(6540);const r={},s=t.createContext(r);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);