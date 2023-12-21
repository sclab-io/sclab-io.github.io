---
title: SQL Server Connector
tags:
  - Connector
  - DB
  - MSSQL
  - SQL Server
---

## 소개
이 커넥터는 SQL Server 데이터베이스에 연결하고, API와 IoT 형식으로 SCLAB 쪽에 데이터를 연결할 수 있게 해줍니다.

## 기능
- SQL Server 에 커넥션 풀을 이용하여 연결
- SQL 쿼리를 사용하여 일정 간격으로 MQTT 메시지 발행하기
- SQL 쿼리로 REST API 엔드포인트 생성하기
- HTTP 인증을 위한 JWT
- 결과 데이터를 JSON 형식으로 처리하기
- SQL Injection 차단 (기본 on)

.env 파일에 "QUERY_1=mqtt;query;topic;interval ms" 형식으로 쿼리를 추가하면, SQL을 사용하여 데이터 가져오고 SCLAB과 연결합니다.

두 가지 방법을 지원합니다: MQTT와 API, 각각 다른 변수 형식을 사용합니다:

### MQTT 형식:
QUERY_#=mqtt;SQL Query;topic;interval MS

### API 형식:
QUERY_#=api;SQL Query;Endpoint URL

## 설치방법

### 사전 준비사항
- SQL Server 데이터베이스
- 접속 정보
- docker 또는 nodejs 설치

### 소스 받기
~~~bash
$ git clone https://github.com/sclab-io/sclab-sqlserver-connector
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

# SQL Server Connection
MSSQL_DB_USER=sa
MSSQL_DB_PASSWORD=yourpassword
MSSQL_DB_NAME=dbname
MSSQL_SERVER=localhost
MSSQL_PORT=1433
MSSQL_POOL_MIN=1
MSSQL_POOL_MAX=10
MSSQL_IDLE_TIMEOUT_MS=30000

# SCLAB IoT
# MQTT_TOPIC=yourtopic/
# MQTT_HOST=yourhost
# MQTT_CLIENT_ID=your-client-id/1
# MQTT_ID=your-id
# MQTT_PASSWORD=your-password

# QUERY_#=mqtt;query;topic;interval ms
# QUERY_#=api;query;endPoint
QUERY_0=api;SELECT TOP 1 number FROM (SELECT ABS(CHECKSUM(NEWID())) % 100 + 1 AS number FROM sys.objects) AS random_numbers;/api/1
QUERY_1=api;SELECT * FROM employees;/api/2
# QUERY_3=mqtt;SELECT TOP 1 number FROM (SELECT ABS(CHECKSUM(NEWID())) % 100 + 1 AS number FROM sys.objects) AS random_numbers;test0;1000
# QUERY_4=mqtt;SELECT TOP 1 number FROM (SELECT ABS(CHECKSUM(NEWID())) % 1000 + 1 AS number FROM sys.objects) AS random_numbers;test1;5000

# PORT
PORT=3000

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