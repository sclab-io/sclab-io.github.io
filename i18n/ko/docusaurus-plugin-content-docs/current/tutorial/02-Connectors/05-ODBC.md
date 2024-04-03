---
title: ODBC Connector
tags:
  - Connector
  - DB
  - ODBC
---

## 소개
이 커넥터는 데이터베이스에 ODBC를 이용하여 연결하고, API와 IoT 형식으로 SCLAB 쪽에 데이터를 연결할 수 있게 해줍니다.

## Features
- unixODBC를 이용하여 디비 연결
- SQL 쿼리를 사용하여 일정 간격으로 MQTT 메시지 발행하기
- SQL 쿼리로 REST API 엔드포인트 생성하기
- HTTP 인증을 위한 JWT
- 결과 데이터를 JSON 형식으로 처리하기
- SQL Injection 차단 (기본 on)
- Mybatis 매핑

.env 파일에 "QUERY_1=mqtt;query;topic;interval ms" 형식으로 쿼리를 추가하면, SQL을 사용하여 데이터 가져오고 SCLAB과 연결합니다.

두 가지 방법을 지원합니다: MQTT와 API, 각각 다른 변수 형식을 사용합니다:

### MQTT 형식:
QUERY_#=mqtt;SQL Query;topic;interval MS

### API 형식:
QUERY_#=api;SQL Query;Endpoint URL

## 설치방법

---

### 사전 준비사항
* install nodejs
* unixODBC binaries and development libraries for module compilation
  * on Ubuntu/Debian `sudo apt-get install unixodbc unixodbc-dev`
  * on RedHat/CentOS `sudo yum install unixODBC unixODBC-devel`
  * on OSX
    * using macports.org `sudo port unixODBC`
    * using brew `brew install unixODBC`
  * on FreeBSD from ports `cd /usr/ports/databases/unixODBC; make install`
  * on IBM i `yum install unixODBC unixODBC-devel` (requires [yum](http://ibm.biz/ibmi-rpms))
* ODBC drivers for target database
* properly configured odbc.ini and odbcinst.ini.
* print config info `odbcinst -j`
---

### Node.js 지원 정보
* Node.js 12
* Node.js 14
* Node.js 16
* Node.js 18

---

### 소스 받기
~~~bash
$ git clone https://github.com/sclab-io/sclab-odbc-connector-node
~~~

### create JWT key file for API
~~~bash
$ mkdir jwt
$ ssh-keygen -t rsa -b 4096 -m PEM -f ./jwt/jwtRS256.key
# empty passphrase - just press enter
$ openssl rsa -in ./jwt/jwtRS256.key -pubout -outform PEM -out ./jwt/jwtRS256.key.pub
~~~

### create .env.production.local
~~~bash
$ vi .env.production.local

# ODBC Connection string
CONNECTION_STRING="DSN=MyDB"
MAX_POOL_SIZE=5

# SCLAB IoT (Remove this environment if you do not need to use MQTT)
# MQTT_TOPIC=yourtopic/
# MQTT_HOST=yourhost
# MQTT_CLIENT_ID=your-client-id/1
# MQTT_ID=your-id
# MQTT_PASSWORD=your-password

# QUERY_#=mqtt;query;topic;interval ms
# QUERY_#=api;query;endPoint
QUERY_1=api;SELECT ROUND( RAND() * 100 ) AS value, NOW() AS datetime;/api/1
QUERY_2=api;SELECT ${field} from ${table} where name="${name}";/api/2
# QUERY_3=mqtt;SELECT ROUND( RAND() * 100 ) AS value, NOW() AS datetime;test0;1000
# QUERY_4=mqtt;SELECT ROUND( RAND() * 1000 ) AS value, NOW() AS datetime;test1;5000
# QUERY_mybatis_1=mybatis;sample;test;/api/mybatistest

# PORT
PORT=3000

# MyBatis
MY_BATIS_FILE_FOLDER=./mybatis

# TOKEN
SECRET_KEY=secretKey
JWT_PRIVATE_KEY_PATH=./jwt/jwtRS256.key
JWT_PUBLIC_KEY_PATH=./jwt/jwtRS256.key.pub

# LOG
LOG_FORMAT=combined
LOG_DIR=../logs

# CORS
ORIGIN=your.domain.com
CREDENTIALS=true

# SQL INJECTION
SQL_INJECTION=1
~~~

### 시작
~~~bash
# nodejs
$ npm run start

# pm2
$ npm run deploy:prod
~~~

### 중지
~~~bash
# pm2
$ ./stop.sh
~~~

### 로그 확인
~~~bash
$ ./logs.sh
~~~

### API 엔드포인트 접속
To access the API, you need to include authorization information in the Request Header in the following format:

~~~
authorization: yourkey
~~~

yourkey 부분에 들어갈 내용은 로그에서 확인이 가능합니다.

## 소스 빌드 방법
### nodejs 설치
~~~bash
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install nodejs
~~~

### 소스 빌드
~~~bash
$ npm install
$ npm run build
~~~

## API를 이용한 데이터 연결

### QUERY_2에 접속하기
~~~
QUERY_2=api;SELECT ${field} from ${table} where name="${name}";/api/2
~~~

### 1. SCLAB Studio에서 데이터 에디터 화면으로 이동 후 API 를 추가해줍니다.
주소는 지금 연결할 API 엔드포인트 주소를 넣어주시면 됩니다.
도커를 이용할 경우 기본 포트는 9180으로 설정되어 있습니다.

아래와 같은 형식으로 주소를 입력해주세요.
~~~
http://ip:3000/api/2
~~~

### 2. Headers 탭을 선택한 후 인증키 값을 넣어줍니다.
Key | Value Type | Value
--- | ---------- | -----
authorization | Fixed | yourkeyfromlog

### 3. 파라메터가 설정된 쿼리인경우 Params탭에 설정값을 추가해 줍니다.
Key | Value Type | Value
--- | ---------- | -----
field | Variable | *
table | Variable | product
name | Variable | Bike

### 4. SEND 버튼을 눌러서 연결을 합니다.
### 5. 데이터가 정상적으로 들어오는지 확인 합니다.
### 6. 데이터가 들어온 경우 패스설정을 통해 필드와 레이블 값을 매핑해줍니다.
### 7. SAVE 버튼을 눌러서 데이터를 저장합니다.
### 8. 이후 차트나 테이블등의 형식으로 데이터를 시각화를 진행하면 됩니다.

## Mybatis 매핑 하기
- Mybatis는 https://github.com/OldBlackJoe/mybatis-mapper/tree/master 를 이용하고 있고 여기서 지원하는 형식만 가능합니다.
- 사용하기 위해서는 mybatis 폴더를 만들어주세요.

### if문 사용 예제 
- mybatis 폴더에 아래와 같은 형식으로 입력하시면 됩니다.

~~~xml title="./mybatis/sample.xml"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="sample">  
  <select id="test">
    SELECT
      *
    FROM
      POST
    WHERE
      1=1
      <if test="id != null and id != ''">
      AND id = #{id}
      </if>
    <if test="limit != null and limit != ''">
      LIMIT ${limit}
    </if>  
  </select>
</mapper>
~~~
- 위 예제는 if 조건문을 이용하여 id 값이 파라미터로 넘어온 경우에만 id 조건으로 검색하고 그렇지 않은 경우는 모든 데이터를 반환하는 예제입니다.
- xml파일을 추가한 뒤 환경 변수에 설정을 추가합니다.
~~~bash title=".env.production.local"
QUERY_mybatis_1=mybatis;sample;test;/api/mybatistest
~~~
- 환경 변수를 추가한 뒤 재시작 하면 해당 엔드포인트로 요청 시 mybatis 폴더의 'sample.test' 와 연결이 되어 쿼리를 만들고 데이터를 가져올 수 있습니다.

### 기간쿼리 예제
~~~xml title="./mybatis/sample2.xml"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="sample2">  
  <select id="test">
    SELECT 
      DATE_FORMAT(date_parse(date, '%Y%m%d'), '%Y') AS year, 
      DATE_FORMAT(date_parse(date, '%Y%m%d'), '%m') AS month, 
      SUM(newusercount) AS total_new_user_count 
    FROM mycatalog.mydb.statistics 
    WHERE 
      date_parse(date, '%Y%m%d') BETWEEN 
      date_parse(${startDate}, '%Y%m%d') AND 
      date_parse(${endDate}, '%Y%m%d') 
    GROUP BY 
      DATE_FORMAT(date_parse(date, '%Y%m%d'), '%Y'), 
      DATE_FORMAT(date_parse(date, '%Y%m%d'), '%m') 
    ORDER BY year, month
  </select>
</mapper>
~~~

- 위 쿼리는 통계 테이블에서 기간동안 가입한 회원수를 가져오는 쿼리 입니다.
- 해당 테이블의 데이터는 date가 20201201 과 같이 'YYYYMMDD' 의 형식으로 저장 되어있습니다.
- 월별로 데이터를 뽑기위해서 월별로 신규 가입자 계산하는 쿼리입니다.
- 일별 데이터만 저장되어있기 때문에 SUM으로 합계를 구하고, Group by 를 통해 년 월 의 형식으로 데이터를 가져옵니다.

~~~bash title=".env.production.local"
QUERY_mybatis_2=mybatis;sample2;test;/api/mybatistest2
~~~

- 환경변수를 추가한 후 재시작 해줍니다.

~~~bash
curl "http://localhost:9180/api/mybatistest2?startDate=20230101&endDate=20230630" -H 'authorization: TOKEN'
~~~

- 위와 같이 데이터를 요청하면 2023년 1월 부터 2023년 6월까지의 월별 신규 회원가입자 수를 가져올 수 있습니다.

~~~json
{
  "rows":[
    {"year":"2023","month":"01","total_new_user_count":3567},
    {"year":"2023","month":"02","total_new_user_count":3416},
    {"year":"2023","month":"03","total_new_user_count":4345},
    {"year":"2023","month":"04","total_new_user_count":4025},
    {"year":"2023","month":"05","total_new_user_count":4488},
    {"year":"2023","month":"06","total_new_user_count":4453}
  ]
}⏎
~~~
