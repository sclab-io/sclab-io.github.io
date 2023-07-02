---
title: ORACLE Connector
tags:
  - Connector
  - DB
  - ORACLE
---

## 소개
이 커넥터는 OracleDB에 연결하고, API와 IoT 형식으로 SCLAB 쪽에 데이터를 연결할 수 있게 해줍니다.

## 기능
- ORACLE 에 커넥션 풀을 이용하여 연결
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

### 사전 준비사항
- 오라클 데이터베이스
- 접속 정보
- docker 또는 nodejs 설치

### 소스 받기
~~~bash
$ git clone https://github.com/sclab-io/sclab-oracle-connector
~~~

### API 보안을 위한 JWT 키파일 생성
~~~bash
$ mkdir jwt
$ ssh-keygen -t rsa -b 4096 -m PEM -f ./jwt/jwtRS256.key
# empty passphrase - just press enter
$ openssl rsa -in ./jwt/jwtRS256.key -pubout -outform PEM -out ./jwt/jwtRS256.key.pub
~~~

### 환경변수 파일 생성 .env.production.local
~~~bash
$ vi .env.production.local

# ORACLE Connection
ORACLE_USER="C##USER"
ORACLE_PASSWORD=pasword
# https://node-oracledb.readthedocs.io/en/latest/user_guide/connection_handling.html#connection-strings
ORACLE_CONNECTION_STRING=host:1521/SID
ORACLE_POOL_MAX_SIZE=10
ORACLE_POOL_MIN_SIZE=4
ORACLE_POOL_INCREMENT_SIZE=1
ORACLE_MAX_ROW_SIZE=1000

# ORACLE_CLIENT_DIR=./client/instantclient_21_10

# SCLAB IoT
# MQTT_TOPIC=yourtopic/
# MQTT_HOST=yourhost
# MQTT_CLIENT_ID=your-client-id/1
# MQTT_ID=your-id
# MQTT_PASSWORD=your-password

# QUERY_#=mqtt;query;topic;interval ms
# QUERY_#=api;query;endPoint
# QUERY_#=mybatis;namespace;queryid;bindJSON;endpoint
QUERY_1=api;SELECT DBMS_RANDOM.VALUE(1, 100) AS random_number, SYSDATE AS current_time FROM dual;/api/1
QUERY_2=api;SELECT ${field} FROM ${table} where name="${name}";/api/2
# QUERY_3=mqtt;SELECT DBMS_RANDOM.VALUE(1, 100) AS random_number, SYSDATE AS current_time FROM dual;test0;1000
# QUERY_4=mqtt;SELECT DBMS_RANDOM.VALUE(1, 1000) AS random_number, SYSDATE AS current_time FROM dual;test1;5000
# QUERY_mybatis_1=mybatis;sample;test;{};/api/mybatistest
# QUERY_mybatis_2=mybatis;sample2;test;{"p_id": {"type": "number", "dir": "in"}, "p_name": {"dir": "out", "type": "string"}, "p_view_count": {"dir": "out", "type": "number"}};/api/mybatistest2
# QUERY_mybatis_3=mybatis;sample3;test;{"p_id": {"type": "number", "dir": "in"}, "p_cursor": {"dir": "out", "type": "cursor"}};/api/mybatistest3

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
# docker compose
$ ./run.sh

# nodejs
$ npm run start

# pm2
$ npm run deploy:prod
~~~

### 중지
~~~bash
# docker compose
$ ./stop.sh

# pm2
$ ./node_modules/pm2/bin/pm2 stop 0
~~~

### 로그 확인
~~~bash
$ ./logs.sh
~~~

### API 엔드포인트 접속
API에 접속하기 위해서는 인증정보를 해더값에 추가해야 합니다. 형식은 아래와 같습니다.

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
http://ip:9080/api/2
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

## Oracle Client mode

### Thin mode (nodejs default)
- 지원 Oracle Database 버전 최소 12.1

### Thick mode (docker-compose default)
- 지원 Oracle Database 버전 21, 19, 18, 12, and 11.2
- 도커를 이용해서 실하시는 경우 기본적으로 thick 모드로 실행되니까, 별도로 클라이언트를 설치하지 않으셔도 됩니다.

#### Thick mode install
- download client
- https://www.oracle.com/database/technologies/instant-client/downloads.html
- unzip client
- uncomment ORACLE_CLIENT_DIR with your client path
- more detail in https://node-oracledb.readthedocs.io/en/latest/user_guide/installation.html#install-oracle-client-to-use-thick-mode

## Mybatis 매핑 하기
- Mybatis는 https://github.com/OldBlackJoe/mybatis-mapper/tree/master 를 이용하고 있고 여기서 지원하는 형식만 가능합니다.
- 예외적으로 PL/SQL을 사용하기 위해 bindJSON 값을 넘겨줄 수 있습니다.
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
  </select>
</mapper>
~~~
- 위 예제는 if 조건문을 이용하여 id 값이 파라미터로 넘어온 경우에만 id 조건으로 검색하고 그렇지 않은 경우는 모든 데이터를 반환하는 예제입니다.
- xml파일을 추가한 뒤 환경 변수에 설정을 추가합니다.
~~~bash title=".env.production.local"
QUERY_mybatis_1=mybatis;sample;test;{};/api/mybatistest
~~~
- 환경 변수를 추가한 뒤 재시작 하면 해당 엔드포인트로 요청 시 mybatis 폴더의 'sample.test' 와 연결이 되어 쿼리를 만들고 데이터를 가져올 수 있습니다.

### Stored procedure 사용 예제
- Stored procedure를 사용하기 위해서 mybatis 파일을 추가합니다.
~~~xml title="./mybatis/sample2.xml"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="sample2">  
  <sql id="test">
  BEGIN
    myproc(
      :p_id,
      :p_name,
      :p_view_count
    );
  END;  
  </sql>
</mapper>
~~~

- 위 예제는 간단하게 입력과 출력을 가져오는 Stored procedure 입니다.
- p_id 는 숫자 값을 입력으로 받고, p_name, p_view_count는 각각 문자와 숫자형 출력입니다.
- 위 예제를 사용하기 위해서 환경변수를 아래와 같이 추가해 줍니다.
~~~bash title=".env.production.local"
QUERY_mybatis_2=mybatis;sample2;test;{"p_id": {"type": "number", "dir": "in"}, "p_name": {"dir": "out", "type": "string"}, "p_view_count": {"dir": "out", "type": "number"}};/api/mybatistest2
~~~

- 4번째 값에 들어간 bind 정보는 Stored procedure에 입/출력 값과 바인딩 됩니다.
- 현재 바인딩 타입은 string, number, cursor 3가지만 지원합니다.
- dir 값은 in, out 두가지만 지원 합니다.

### Cursor가 있는 Stored procedure 예제
~~~xml title="./mybatis/sample3.xml"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="sample3">  
  <sql id="test">
  BEGIN myproc2(:p_id, :p_cursor); END;
  </sql>
</mapper>
~~~

~~~bash title=".env.production.local"
QUERY_mybatis_3=mybatis;sample3;test;{"p_id": {"type": "number", "dir": "in"}, "p_cursor": {"dir": "out", "type": "cursor"}};/api/mybatistest3
~~~
