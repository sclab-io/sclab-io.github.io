"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[8287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=l,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={title:"ODBC Connector",tags:["Connector","DB","ODBC"]},i=void 0,o={unversionedId:"tutorial/Connectors/ODBC",id:"tutorial/Connectors/ODBC",title:"ODBC Connector",description:"\uc18c\uac1c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorial/02-Connectors/05-ODBC.md",sourceDirName:"tutorial/02-Connectors",slug:"/tutorial/Connectors/ODBC",permalink:"/ko/docs/tutorial/Connectors/ODBC",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/i18n/ko/docusaurus-plugin-content-docs/current/tutorial/02-Connectors/05-ODBC.md",tags:[{label:"Connector",permalink:"/ko/docs/tags/connector"},{label:"DB",permalink:"/ko/docs/tags/db"},{label:"ODBC",permalink:"/ko/docs/tags/odbc"}],version:"current",sidebarPosition:5,frontMatter:{title:"ODBC Connector",tags:["Connector","DB","ODBC"]},sidebar:"tutorial",previous:{title:"SQL Server Connector",permalink:"/ko/docs/tutorial/Connectors/MSSQL"}},s={},u=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"Features",id:"features",level:2},{value:"MQTT \ud615\uc2dd:",id:"mqtt-\ud615\uc2dd",level:3},{value:"API \ud615\uc2dd:",id:"api-\ud615\uc2dd",level:3},{value:"\uc124\uce58\ubc29\ubc95",id:"\uc124\uce58\ubc29\ubc95",level:2},{value:"\uc0ac\uc804 \uc900\ube44\uc0ac\ud56d",id:"\uc0ac\uc804-\uc900\ube44\uc0ac\ud56d",level:3},{value:"Sample /etc/odbcinst.ini",id:"sample-etcodbcinstini",level:3},{value:"Sample ~/.odbc.ini",id:"sample-odbcini",level:3},{value:"Node.js \uc9c0\uc6d0 \uc815\ubcf4",id:"nodejs-\uc9c0\uc6d0-\uc815\ubcf4",level:3},{value:"nodejs 14 \uc124\uce58",id:"nodejs-14-\uc124\uce58",level:3},{value:"\uc18c\uc2a4 \ubc1b\uae30",id:"\uc18c\uc2a4-\ubc1b\uae30",level:3},{value:"create JWT key file for API",id:"create-jwt-key-file-for-api",level:3},{value:"create .env.production.local",id:"create-envproductionlocal",level:3},{value:"\uc2dc\uc791",id:"\uc2dc\uc791",level:3},{value:"\uc911\uc9c0",id:"\uc911\uc9c0",level:3},{value:"\ub85c\uadf8 \ud655\uc778",id:"\ub85c\uadf8-\ud655\uc778",level:3},{value:"API \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc811\uc18d",id:"api-\uc5d4\ub4dc\ud3ec\uc778\ud2b8-\uc811\uc18d",level:3},{value:"\uc18c\uc2a4 \ube4c\ub4dc \ubc29\ubc95",id:"\uc18c\uc2a4-\ube4c\ub4dc-\ubc29\ubc95",level:2},{value:"\uc18c\uc2a4 \ube4c\ub4dc",id:"\uc18c\uc2a4-\ube4c\ub4dc",level:3},{value:"API\ub97c \uc774\uc6a9\ud55c \ub370\uc774\ud130 \uc5f0\uacb0",id:"api\ub97c-\uc774\uc6a9\ud55c-\ub370\uc774\ud130-\uc5f0\uacb0",level:2},{value:"QUERY_2\uc5d0 \uc811\uc18d\ud558\uae30",id:"query_2\uc5d0-\uc811\uc18d\ud558\uae30",level:3},{value:"1. SCLAB Studio\uc5d0\uc11c \ub370\uc774\ud130 \uc5d0\ub514\ud130 \ud654\uba74\uc73c\ub85c \uc774\ub3d9 \ud6c4 API \ub97c \ucd94\uac00\ud574\uc90d\ub2c8\ub2e4.",id:"1-sclab-studio\uc5d0\uc11c-\ub370\uc774\ud130-\uc5d0\ub514\ud130-\ud654\uba74\uc73c\ub85c-\uc774\ub3d9-\ud6c4-api-\ub97c-\ucd94\uac00\ud574\uc90d\ub2c8\ub2e4",level:3},{value:"2. Headers \ud0ed\uc744 \uc120\ud0dd\ud55c \ud6c4 \uc778\uc99d\ud0a4 \uac12\uc744 \ub123\uc5b4\uc90d\ub2c8\ub2e4.",id:"2-headers-\ud0ed\uc744-\uc120\ud0dd\ud55c-\ud6c4-\uc778\uc99d\ud0a4-\uac12\uc744-\ub123\uc5b4\uc90d\ub2c8\ub2e4",level:3},{value:"3. \ud30c\ub77c\uba54\ud130\uac00 \uc124\uc815\ub41c \ucffc\ub9ac\uc778\uacbd\uc6b0 Params\ud0ed\uc5d0 \uc124\uc815\uac12\uc744 \ucd94\uac00\ud574 \uc90d\ub2c8\ub2e4.",id:"3-\ud30c\ub77c\uba54\ud130\uac00-\uc124\uc815\ub41c-\ucffc\ub9ac\uc778\uacbd\uc6b0-params\ud0ed\uc5d0-\uc124\uc815\uac12\uc744-\ucd94\uac00\ud574-\uc90d\ub2c8\ub2e4",level:3},{value:"4. SEND \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc11c \uc5f0\uacb0\uc744 \ud569\ub2c8\ub2e4.",id:"4-send-\ubc84\ud2bc\uc744-\ub20c\ub7ec\uc11c-\uc5f0\uacb0\uc744-\ud569\ub2c8\ub2e4",level:3},{value:"5. \ub370\uc774\ud130\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ub4e4\uc5b4\uc624\ub294\uc9c0 \ud655\uc778 \ud569\ub2c8\ub2e4.",id:"5-\ub370\uc774\ud130\uac00-\uc815\uc0c1\uc801\uc73c\ub85c-\ub4e4\uc5b4\uc624\ub294\uc9c0-\ud655\uc778-\ud569\ub2c8\ub2e4",level:3},{value:"6. \ub370\uc774\ud130\uac00 \ub4e4\uc5b4\uc628 \uacbd\uc6b0 \ud328\uc2a4\uc124\uc815\uc744 \ud1b5\ud574 \ud544\ub4dc\uc640 \ub808\uc774\ube14 \uac12\uc744 \ub9e4\ud551\ud574\uc90d\ub2c8\ub2e4.",id:"6-\ub370\uc774\ud130\uac00-\ub4e4\uc5b4\uc628-\uacbd\uc6b0-\ud328\uc2a4\uc124\uc815\uc744-\ud1b5\ud574-\ud544\ub4dc\uc640-\ub808\uc774\ube14-\uac12\uc744-\ub9e4\ud551\ud574\uc90d\ub2c8\ub2e4",level:3},{value:"7. SAVE \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc11c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4.",id:"7-save-\ubc84\ud2bc\uc744-\ub20c\ub7ec\uc11c-\ub370\uc774\ud130\ub97c-\uc800\uc7a5\ud569\ub2c8\ub2e4",level:3},{value:"8. \uc774\ud6c4 \ucc28\ud2b8\ub098 \ud14c\uc774\ube14\ub4f1\uc758 \ud615\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc2dc\uac01\ud654\ub97c \uc9c4\ud589\ud558\uba74 \ub429\ub2c8\ub2e4.",id:"8-\uc774\ud6c4-\ucc28\ud2b8\ub098-\ud14c\uc774\ube14\ub4f1\uc758-\ud615\uc2dd\uc73c\ub85c-\ub370\uc774\ud130\ub97c-\uc2dc\uac01\ud654\ub97c-\uc9c4\ud589\ud558\uba74-\ub429\ub2c8\ub2e4",level:3},{value:"Mybatis \ub9e4\ud551 \ud558\uae30",id:"mybatis-\ub9e4\ud551-\ud558\uae30",level:2},{value:"if\ubb38 \uc0ac\uc6a9 \uc608\uc81c",id:"if\ubb38-\uc0ac\uc6a9-\uc608\uc81c",level:3},{value:"\uae30\uac04\ucffc\ub9ac \uc608\uc81c",id:"\uae30\uac04\ucffc\ub9ac-\uc608\uc81c",level:3},{value:"gcc \uad00\ub828 \ubb38\uc81c \ud574\uacb0 \ubc29\ubc95",id:"gcc-\uad00\ub828-\ubb38\uc81c-\ud574\uacb0-\ubc29\ubc95",level:3},{value:"CentOS 7 - 64bit",id:"centos-7---64bit",level:4}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,l.kt)("p",null,"\uc774 \ucee4\ub125\ud130\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 ODBC\ub97c \uc774\uc6a9\ud558\uc5ec \uc5f0\uacb0\ud558\uace0, API\uc640 IoT \ud615\uc2dd\uc73c\ub85c SCLAB \ucabd\uc5d0 \ub370\uc774\ud130\ub97c \uc5f0\uacb0\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"unixODBC\ub97c \uc774\uc6a9\ud558\uc5ec \ub514\ube44 \uc5f0\uacb0"),(0,l.kt)("li",{parentName:"ul"},"SQL \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc77c\uc815 \uac04\uaca9\uc73c\ub85c MQTT \uba54\uc2dc\uc9c0 \ubc1c\ud589\ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},"SQL \ucffc\ub9ac\ub85c REST API \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},"HTTP \uc778\uc99d\uc744 \uc704\ud55c JWT"),(0,l.kt)("li",{parentName:"ul"},"\uacb0\uacfc \ub370\uc774\ud130\ub97c JSON \ud615\uc2dd\uc73c\ub85c \ucc98\ub9ac\ud558\uae30"),(0,l.kt)("li",{parentName:"ul"},"SQL Injection \ucc28\ub2e8 (\uae30\ubcf8 on)"),(0,l.kt)("li",{parentName:"ul"},"Mybatis \ub9e4\ud551")),(0,l.kt)("p",null,'.env \ud30c\uc77c\uc5d0 "QUERY_1=mqtt;query;topic;interval ms" \ud615\uc2dd\uc73c\ub85c \ucffc\ub9ac\ub97c \ucd94\uac00\ud558\uba74, SQL\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130 \uac00\uc838\uc624\uace0 SCLAB\uacfc \uc5f0\uacb0\ud569\ub2c8\ub2e4.'),(0,l.kt)("p",null,"\ub450 \uac00\uc9c0 \ubc29\ubc95\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4: MQTT\uc640 API, \uac01\uac01 \ub2e4\ub978 \ubcc0\uc218 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4:"),(0,l.kt)("h3",{id:"mqtt-\ud615\uc2dd"},"MQTT \ud615\uc2dd:"),(0,l.kt)("p",null,"QUERY_#=mqtt;SQL Query;topic;interval MS"),(0,l.kt)("h3",{id:"api-\ud615\uc2dd"},"API \ud615\uc2dd:"),(0,l.kt)("p",null,"QUERY_#=api;SQL Query;Endpoint URL"),(0,l.kt)("h2",{id:"\uc124\uce58\ubc29\ubc95"},"\uc124\uce58\ubc29\ubc95"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\uc0ac\uc804-\uc900\ube44\uc0ac\ud56d"},"\uc0ac\uc804 \uc900\ube44\uc0ac\ud56d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"install nodejs"),(0,l.kt)("li",{parentName:"ul"},"unixODBC binaries and development libraries for module compilation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"on Ubuntu/Debian ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo apt-get install unixodbc unixodbc-dev")),(0,l.kt)("li",{parentName:"ul"},"on RedHat/CentOS ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo yum install unixODBC unixODBC-devel")),(0,l.kt)("li",{parentName:"ul"},"on OSX",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"using macports.org ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo port unixODBC")),(0,l.kt)("li",{parentName:"ul"},"using brew ",(0,l.kt)("inlineCode",{parentName:"li"},"brew install unixODBC")))),(0,l.kt)("li",{parentName:"ul"},"on FreeBSD from ports ",(0,l.kt)("inlineCode",{parentName:"li"},"cd /usr/ports/databases/unixODBC; make install")),(0,l.kt)("li",{parentName:"ul"},"on IBM i ",(0,l.kt)("inlineCode",{parentName:"li"},"yum install unixODBC unixODBC-devel")," (requires ",(0,l.kt)("a",{parentName:"li",href:"http://ibm.biz/ibmi-rpms"},"yum"),")"))),(0,l.kt)("li",{parentName:"ul"},"ODBC drivers for target database"),(0,l.kt)("li",{parentName:"ul"},"properly configured odbc.ini and odbcinst.ini."),(0,l.kt)("li",{parentName:"ul"},"print config info ",(0,l.kt)("inlineCode",{parentName:"li"},"odbcinst -j")),(0,l.kt)("li",{parentName:"ul"},"test dsn ",(0,l.kt)("inlineCode",{parentName:"li"},"isql -v mydsn myusername mypassword"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sample-etcodbcinstini"},"Sample /etc/odbcinst.ini"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[PostgreSQL]\nDescription     = ODBC for PostgreSQL\nDriver          = /usr/lib/psqlodbcw.so\nSetup           = /usr/lib/libodbcpsqlS.so\nDriver64        = /usr/lib64/psqlodbcw.so\nSetup64         = /usr/lib64/libodbcpsqlS.so\nFileUsage       = 1\n\n[MySQL]\nDescription     = ODBC for MySQL\nDriver          = /usr/lib/libmyodbc5.so\nSetup           = /usr/lib/libodbcmyS.so\nDriver64        = /usr/lib64/libmyodbc5.so\nSetup64         = /usr/lib64/libodbcmyS.so\nFileUsage       = 1\n\n[Tibero]\nDescription = ODBC for Tibero\nDriver = /home/tibero/tibero7/client/lib/libtbodbc.so\nSetup = /home/tibero/tibero7/client/lib/libtbodbc.so\nSetup = 1\nFileUsage = 1\n")),(0,l.kt)("h3",{id:"sample-odbcini"},"Sample ~/.odbc.ini"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[ODBC Data Sources]\nMyDB = MySQL\nMyTB = Tibero 7\n\n[ODBC]\nTrace = yes\nTraceFile = /home/odbc.log\n\n[MyDB]\nDriver = MySQL\nserver = 127.0.0.1\nport = 3306\nuser = myuser\ndatabase = mydb\npassword = password\n\n[MyTB]\ndriver = Tibero\nserver = 127.0.0.1\nport = 8629\nSID = tibero\nuser = sys\npassword = tibero\nDatabase = tibero\n")),(0,l.kt)("h3",{id:"nodejs-\uc9c0\uc6d0-\uc815\ubcf4"},"Node.js \uc9c0\uc6d0 \uc815\ubcf4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node.js 12"),(0,l.kt)("li",{parentName:"ul"},"Node.js 14"),(0,l.kt)("li",{parentName:"ul"},"Node.js 16"),(0,l.kt)("li",{parentName:"ul"},"Node.js 18")),(0,l.kt)("h3",{id:"nodejs-14-\uc124\uce58"},"nodejs 14 \uc124\uce58"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -\nsudo yum install nodejs\n")),(0,l.kt)("h3",{id:"\uc18c\uc2a4-\ubc1b\uae30"},"\uc18c\uc2a4 \ubc1b\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/sclab-io/sclab-odbc-connector-node\n")),(0,l.kt)("h3",{id:"create-jwt-key-file-for-api"},"create JWT key file for API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir jwt\n$ ssh-keygen -t rsa -b 4096 -m PEM -f ./jwt/jwtRS256.key\n# empty passphrase - just press enter\n$ openssl rsa -in ./jwt/jwtRS256.key -pubout -outform PEM -out ./jwt/jwtRS256.key.pub\n")),(0,l.kt)("h3",{id:"create-envproductionlocal"},"create .env.production.local"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ vi .env.production.local\n\n# ODBC Connection string\nCONNECTION_STRING="DSN=MyDB"\nMAX_POOL_SIZE=5\n\n# SCLAB IoT (Remove this environment if you do not need to use MQTT)\n# MQTT_TOPIC=yourtopic/\n# MQTT_HOST=yourhost\n# MQTT_CLIENT_ID=your-client-id/1\n# MQTT_ID=your-id\n# MQTT_PASSWORD=your-password\n\n# QUERY_#=mqtt;query;topic;interval ms\n# QUERY_#=api;query;endPoint\nQUERY_1=api;SELECT ROUND( RAND() * 100 ) AS value, NOW() AS datetime;/api/1\nQUERY_2=api;SELECT ${field} from ${table} where name="${name}";/api/2\n# QUERY_3=mqtt;SELECT ROUND( RAND() * 100 ) AS value, NOW() AS datetime;test0;1000\n# QUERY_4=mqtt;SELECT ROUND( RAND() * 1000 ) AS value, NOW() AS datetime;test1;5000\n# QUERY_mybatis_1=mybatis;sample;test;/api/mybatistest\n\n# PORT\nPORT=3000\n\n# MyBatis\nMY_BATIS_FILE_FOLDER=./mybatis\n\n# TOKEN\nSECRET_KEY=secretKey\nJWT_PRIVATE_KEY_PATH=./jwt/jwtRS256.key\nJWT_PUBLIC_KEY_PATH=./jwt/jwtRS256.key.pub\n\n# LOG\nLOG_FORMAT=combined\nLOG_DIR=../logs\n\n# CORS\nORIGIN=your.domain.com\nCREDENTIALS=true\n\n# SQL INJECTION\nSQL_INJECTION=1\n')),(0,l.kt)("h3",{id:"\uc2dc\uc791"},"\uc2dc\uc791"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# nodejs\n$ npm run start\n\n# pm2\n$ npm run deploy:prod\n")),(0,l.kt)("h3",{id:"\uc911\uc9c0"},"\uc911\uc9c0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# pm2\n$ ./stop.sh\n")),(0,l.kt)("h3",{id:"\ub85c\uadf8-\ud655\uc778"},"\ub85c\uadf8 \ud655\uc778"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./logs.sh\n")),(0,l.kt)("h3",{id:"api-\uc5d4\ub4dc\ud3ec\uc778\ud2b8-\uc811\uc18d"},"API \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc811\uc18d"),(0,l.kt)("p",null,"To access the API, you need to include authorization information in the Request Header in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"authorization: yourkey\n")),(0,l.kt)("p",null,"yourkey \ubd80\ubd84\uc5d0 \ub4e4\uc5b4\uac08 \ub0b4\uc6a9\uc740 \ub85c\uadf8\uc5d0\uc11c \ud655\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc18c\uc2a4-\ube4c\ub4dc-\ubc29\ubc95"},"\uc18c\uc2a4 \ube4c\ub4dc \ubc29\ubc95"),(0,l.kt)("h3",{id:"\uc18c\uc2a4-\ube4c\ub4dc"},"\uc18c\uc2a4 \ube4c\ub4dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n$ npm run build\n")),(0,l.kt)("h2",{id:"api\ub97c-\uc774\uc6a9\ud55c-\ub370\uc774\ud130-\uc5f0\uacb0"},"API\ub97c \uc774\uc6a9\ud55c \ub370\uc774\ud130 \uc5f0\uacb0"),(0,l.kt)("h3",{id:"query_2\uc5d0-\uc811\uc18d\ud558\uae30"},"QUERY_2\uc5d0 \uc811\uc18d\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'QUERY_2=api;SELECT ${field} from ${table} where name="${name}";/api/2\n')),(0,l.kt)("h3",{id:"1-sclab-studio\uc5d0\uc11c-\ub370\uc774\ud130-\uc5d0\ub514\ud130-\ud654\uba74\uc73c\ub85c-\uc774\ub3d9-\ud6c4-api-\ub97c-\ucd94\uac00\ud574\uc90d\ub2c8\ub2e4"},"1. SCLAB Studio\uc5d0\uc11c \ub370\uc774\ud130 \uc5d0\ub514\ud130 \ud654\uba74\uc73c\ub85c \uc774\ub3d9 \ud6c4 API \ub97c \ucd94\uac00\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc8fc\uc18c\ub294 \uc9c0\uae08 \uc5f0\uacb0\ud560 API \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc8fc\uc18c\ub97c \ub123\uc5b4\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4.\n\ub3c4\ucee4\ub97c \uc774\uc6a9\ud560 \uacbd\uc6b0 \uae30\ubcf8 \ud3ec\ud2b8\ub294 9180\uc73c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \ud615\uc2dd\uc73c\ub85c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://ip:3000/api/2\n")),(0,l.kt)("h3",{id:"2-headers-\ud0ed\uc744-\uc120\ud0dd\ud55c-\ud6c4-\uc778\uc99d\ud0a4-\uac12\uc744-\ub123\uc5b4\uc90d\ub2c8\ub2e4"},"2. Headers \ud0ed\uc744 \uc120\ud0dd\ud55c \ud6c4 \uc778\uc99d\ud0a4 \uac12\uc744 \ub123\uc5b4\uc90d\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed"),(0,l.kt)("td",{parentName:"tr",align:null},"yourkeyfromlog")))),(0,l.kt)("h3",{id:"3-\ud30c\ub77c\uba54\ud130\uac00-\uc124\uc815\ub41c-\ucffc\ub9ac\uc778\uacbd\uc6b0-params\ud0ed\uc5d0-\uc124\uc815\uac12\uc744-\ucd94\uac00\ud574-\uc90d\ub2c8\ub2e4"},"3. \ud30c\ub77c\uba54\ud130\uac00 \uc124\uc815\ub41c \ucffc\ub9ac\uc778\uacbd\uc6b0 Params\ud0ed\uc5d0 \uc124\uc815\uac12\uc744 \ucd94\uac00\ud574 \uc90d\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"product")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"Bike")))),(0,l.kt)("h3",{id:"4-send-\ubc84\ud2bc\uc744-\ub20c\ub7ec\uc11c-\uc5f0\uacb0\uc744-\ud569\ub2c8\ub2e4"},"4. SEND \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc11c \uc5f0\uacb0\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"5-\ub370\uc774\ud130\uac00-\uc815\uc0c1\uc801\uc73c\ub85c-\ub4e4\uc5b4\uc624\ub294\uc9c0-\ud655\uc778-\ud569\ub2c8\ub2e4"},"5. \ub370\uc774\ud130\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ub4e4\uc5b4\uc624\ub294\uc9c0 \ud655\uc778 \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"6-\ub370\uc774\ud130\uac00-\ub4e4\uc5b4\uc628-\uacbd\uc6b0-\ud328\uc2a4\uc124\uc815\uc744-\ud1b5\ud574-\ud544\ub4dc\uc640-\ub808\uc774\ube14-\uac12\uc744-\ub9e4\ud551\ud574\uc90d\ub2c8\ub2e4"},"6. \ub370\uc774\ud130\uac00 \ub4e4\uc5b4\uc628 \uacbd\uc6b0 \ud328\uc2a4\uc124\uc815\uc744 \ud1b5\ud574 \ud544\ub4dc\uc640 \ub808\uc774\ube14 \uac12\uc744 \ub9e4\ud551\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"7-save-\ubc84\ud2bc\uc744-\ub20c\ub7ec\uc11c-\ub370\uc774\ud130\ub97c-\uc800\uc7a5\ud569\ub2c8\ub2e4"},"7. SAVE \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc11c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"8-\uc774\ud6c4-\ucc28\ud2b8\ub098-\ud14c\uc774\ube14\ub4f1\uc758-\ud615\uc2dd\uc73c\ub85c-\ub370\uc774\ud130\ub97c-\uc2dc\uac01\ud654\ub97c-\uc9c4\ud589\ud558\uba74-\ub429\ub2c8\ub2e4"},"8. \uc774\ud6c4 \ucc28\ud2b8\ub098 \ud14c\uc774\ube14\ub4f1\uc758 \ud615\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc2dc\uac01\ud654\ub97c \uc9c4\ud589\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"mybatis-\ub9e4\ud551-\ud558\uae30"},"Mybatis \ub9e4\ud551 \ud558\uae30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mybatis\ub294 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/OldBlackJoe/mybatis-mapper/tree/master"},"https://github.com/OldBlackJoe/mybatis-mapper/tree/master")," \ub97c \uc774\uc6a9\ud558\uace0 \uc788\uace0 \uc5ec\uae30\uc11c \uc9c0\uc6d0\ud558\ub294 \ud615\uc2dd\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 mybatis \ud3f4\ub354\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uc138\uc694.")),(0,l.kt)("h3",{id:"if\ubb38-\uc0ac\uc6a9-\uc608\uc81c"},"if\ubb38 \uc0ac\uc6a9 \uc608\uc81c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mybatis \ud3f4\ub354\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="./mybatis/sample.xml"',title:'"./mybatis/sample.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="sample">  \n  <select id="test">\n    SELECT\n      *\n    FROM\n      resume\n    WHERE\n      1=1\n      <if test="id != null and id != \'\'">\n      AND id = ${id}\n      </if>\n    \n    <if test="limit != null and limit != \'\'">\n      LIMIT ${limit}\n    </if>\n  </select>\n</mapper>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc704 \uc608\uc81c\ub294 if \uc870\uac74\ubb38\uc744 \uc774\uc6a9\ud558\uc5ec id \uac12\uc774 \ud30c\ub77c\ubbf8\ud130\ub85c \ub118\uc5b4\uc628 \uacbd\uc6b0\uc5d0\ub9cc id \uc870\uac74\uc73c\ub85c \uac80\uc0c9\ud558\uace0 \uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ubc18\ud658\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"xml\ud30c\uc77c\uc744 \ucd94\uac00\ud55c \ub4a4 \ud658\uacbd \ubcc0\uc218\uc5d0 \uc124\uc815\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env.production.local"',title:'".env.production.local"'},"QUERY_mybatis_1=mybatis;sample;test;/api/mybatistest\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud658\uacbd \ubcc0\uc218\ub97c \ucd94\uac00\ud55c \ub4a4 \uc7ac\uc2dc\uc791 \ud558\uba74 \ud574\ub2f9 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub85c \uc694\uccad \uc2dc mybatis \ud3f4\ub354\uc758 'sample.test' \uc640 \uc5f0\uacb0\uc774 \ub418\uc5b4 \ucffc\ub9ac\ub97c \ub9cc\ub4e4\uace0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uae30\uac04\ucffc\ub9ac-\uc608\uc81c"},"\uae30\uac04\ucffc\ub9ac \uc608\uc81c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="./mybatis/sample2.xml"',title:'"./mybatis/sample2.xml"'},"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE mapper PUBLIC \"-//mybatis.org//DTD Mapper 3.0//EN\" \"http://mybatis.org/dtd/mybatis-3-mapper.dtd\">\n<mapper namespace=\"sample2\">  \n  <select id=\"test\">\n    SELECT \n      DATE_FORMAT(date_parse(date, '%Y%m%d'), '%Y') AS year, \n      DATE_FORMAT(date_parse(date, '%Y%m%d'), '%m') AS month, \n      SUM(newusercount) AS total_new_user_count \n    FROM mycatalog.mydb.statistics \n    WHERE \n      date_parse(date, '%Y%m%d') BETWEEN \n      date_parse(${startDate}, '%Y%m%d') AND \n      date_parse(${endDate}, '%Y%m%d') \n    GROUP BY \n      DATE_FORMAT(date_parse(date, '%Y%m%d'), '%Y'), \n      DATE_FORMAT(date_parse(date, '%Y%m%d'), '%m') \n    ORDER BY year, month\n  </select>\n</mapper>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc704 \ucffc\ub9ac\ub294 \ud1b5\uacc4 \ud14c\uc774\ube14\uc5d0\uc11c \uae30\uac04\ub3d9\uc548 \uac00\uc785\ud55c \ud68c\uc6d0\uc218\ub97c \uac00\uc838\uc624\ub294 \ucffc\ub9ac \uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ud14c\uc774\ube14\uc758 \ub370\uc774\ud130\ub294 date\uac00 20201201 \uacfc \uac19\uc774 'YYYYMMDD' \uc758 \ud615\uc2dd\uc73c\ub85c \uc800\uc7a5 \ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc6d4\ubcc4\ub85c \ub370\uc774\ud130\ub97c \ubf51\uae30\uc704\ud574\uc11c \uc6d4\ubcc4\ub85c \uc2e0\uaddc \uac00\uc785\uc790 \uacc4\uc0b0\ud558\ub294 \ucffc\ub9ac\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubcc4 \ub370\uc774\ud130\ub9cc \uc800\uc7a5\ub418\uc5b4\uc788\uae30 \ub54c\ubb38\uc5d0 SUM\uc73c\ub85c \ud569\uacc4\ub97c \uad6c\ud558\uace0, Group by \ub97c \ud1b5\ud574 \ub144 \uc6d4 \uc758 \ud615\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc635\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env.production.local"',title:'".env.production.local"'},"QUERY_mybatis_2=mybatis;sample2;test;/api/mybatistest2\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud658\uacbd\ubcc0\uc218\ub97c \ucd94\uac00\ud55c \ud6c4 \uc7ac\uc2dc\uc791 \ud574\uc90d\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl \"http://localhost:9180/api/mybatistest2?startDate=20230101&endDate=20230630\" -H 'authorization: TOKEN'\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc704\uc640 \uac19\uc774 \ub370\uc774\ud130\ub97c \uc694\uccad\ud558\uba74 2023\ub144 1\uc6d4 \ubd80\ud130 2023\ub144 6\uc6d4\uae4c\uc9c0\uc758 \uc6d4\ubcc4 \uc2e0\uaddc \ud68c\uc6d0\uac00\uc785\uc790 \uc218\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rows":[\n    {"year":"2023","month":"01","total_new_user_count":3567},\n    {"year":"2023","month":"02","total_new_user_count":3416},\n    {"year":"2023","month":"03","total_new_user_count":4345},\n    {"year":"2023","month":"04","total_new_user_count":4025},\n    {"year":"2023","month":"05","total_new_user_count":4488},\n    {"year":"2023","month":"06","total_new_user_count":4453}\n  ]\n}\u23ce\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gcc-\uad00\ub828-\ubb38\uc81c-\ud574\uacb0-\ubc29\ubc95"},"gcc \uad00\ub828 \ubb38\uc81c \ud574\uacb0 \ubc29\ubc95"),(0,l.kt)("p",null,"unixODBC \uc640 \uc5f0\uacb0\uc744 \uc704\ud574 gcc \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud544\uc694\ud55c\ub370 \uac04\ud639 \uc624\ub798\ub41c os\uc5d0\uc11c\ub294 \uc5d0\ub7ec\uac00 \ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc544\ub798\ub294 \uadf8\uc5d0 \ub300\ud55c \ud574\uacb0 \ubc29\ubc95 \uc785\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"centos-7---64bit"},"CentOS 7 - 64bit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# check libstdc++\n# if 1.3.9 is absent upgrade libstdc++\nstrings /lib64/libstdc++.so.6 | grep CXXABI\n\n# centos7 upgrade process\ncd gcc\n\n# use prebuild lib if this doesn't work you have to build gcc\n./centos7_setup_gcc9.2.0.sh\n\n# check again\nstrings /lib64/libstdc++.so.6 | grep CXXABI\n\n# restart\ncd ..\n./stop.sh\n./run.sh\n\n# if connector has no error, you don't have to run this script\n# or build lib (you can change gcc version in ./centos7_build_gcc9.2.0.sh file's GCC_VERSION=9.2.0)\n./centos7_build_gcc9.2.0.sh\n")))}m.isMDXComponent=!0}}]);