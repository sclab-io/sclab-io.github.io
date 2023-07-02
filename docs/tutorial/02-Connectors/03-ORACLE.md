---
title: ORACLE Connector
tags:
  - Connector
  - DB
  - ORACLE
---

## Introduction
This connector provides functionality for retrieving data using ORACLE Database in SCLAB Studio.

### Features
- Connect to ORACLE DB with connection pool
- MQTT message publish using SQL Query with interval
- Create REST API endpoint with SQL Query
- JWT for HTTP authorization
- Processing of result data into JSON format
- SQL Injection filter (default on)
- Mapping with Mybatis

By adding a query in the format of "QUERY_1=mqtt;query;topic;interval ms" to the .env file, SQL is automatically executed to connect and retrieve data from SCLAB.

Two methods are supported: MQTT and API, each with a different variable format:

### mqtt method format:
QUERY_#=mqtt;SQL Query;topic;interval MS

### api method format:
QUERY_#=api;SQL Query;Endpoint URL

## Installation

### Prerequisites
- ORACLE Database
- connection information
- Install docker or nodejs

### clone source
~~~bash
$ git clone https://github.com/sclab-io/sclab-oracle-connector
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

### start
~~~bash
# docker compose
$ ./run.sh

# nodejs
$ npm run start

# pm2
$ npm run deploy:prod
~~~

### stop
~~~bash
# docker compose
$ ./stop.sh

# pm2
$ ./node_modules/pm2/bin/pm2 stop 0
~~~

### logs
~~~bash
$ ./logs.sh
~~~

### access API end point
To access the API, you need to include authorization information in the Request Header in the following format:

~~~
authorization: yourkey
~~~

You can find your key information through the logs.

## Build source
### install nodejs
~~~bash
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install nodejs
~~~

### build source
~~~bash
$ npm install
$ npm run build
~~~

## Connect data using API

### Connect to QUERY_2
~~~
QUERY_2=api;SELECT ${field} from ${table} where name="${name}";/api/2
~~~

### 1. Navigate to the data editor screen in SCLAB Studio and add an API.
Enter the API endpoint address you want to connect to. If you are using Docker, the default port is set to 9180.

Please enter the address in the following format.
~~~
http://ip:9080/api/2
~~~

### 2. Select the Headers tab and enter the authentication key value.
Key | Value Type | Value
--- | ---------- | -----
authorization | Fixed | yourkeyfromlog

### 3. If it is a query with parameters set, add the setting value to the Params tab.
Key | Value Type | Value
--- | ---------- | -----
field | Variable | *
table | Variable | product
name | Variable | Bike

### 4. Click the SEND button to establish a connection.
### 5. Verify that the data is coming in properly.
### 6. If the data is received, map the field and label values through the Pass Configuration.
### 7. Click the SAVE button to save the data.
### 8. Then, proceed to visualize the data in chart or table format.

## Oracle Client mode

### Thin mode (nodejs default)
- Support Oracle Database version 12.1 or later

### Thick mode (docker-compose default)
- Support Oracle Database version 21, 19, 18, 12, and 11.2
- If you are using Docker, it runs by default in thick mode, so you don't need to install client.

#### Thick mode install
- download client
- https://www.oracle.com/database/technologies/instant-client/downloads.html
- unzip client
- uncomment ORACLE_CLIENT_DIR with your client path
- more detail in https://node-oracledb.readthedocs.io/en/latest/user_guide/installation.html#install-oracle-client-to-use-thick-mode

## Mapping with Mybatis
- Mybatis uses the format supported by https://github.com/OldBlackJoe/mybatis-mapper/tree/master.
- Exceptionally, you can pass bindJSON values to use PL/SQL.
- To use it, please create a "mybatis" folder.

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
- The above example uses an if condition to search by the "id" condition only if the "id" value is passed as a parameter. Otherwise, it returns all data.
- After adding the XML file, add the configuration to the environment variables.
~~~bash title=".env.production.local"
QUERY_mybatis_1=mybatis;sample;test;{};/api/mybatistest
~~~
- After adding the environment variables, restart the system. Once restarted, when making a request to the corresponding endpoint, it will be connected to the 'sample.test' in the mybatis folder, allowing you to create queries and retrieve data.

### Example of using a Stored Procedure
- To use a Stored Procedure, add the Mybatis file.
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

- The above example is a simple Stored Procedure that takes input and output.
- "p_id" is an input that accepts a numeric value, and "p_name" and "p_view_count" are outputs of string and numeric types, respectively.
- To use the above example, add the following configuration to the environment variables.
~~~bash title=".env.production.local"
QUERY_mybatis_2=mybatis;sample2;test;{"p_id": {"type": "number", "dir": "in"}, "p_name": {"dir": "out", "type": "string"}, "p_view_count": {"dir": "out", "type": "number"}};/api/mybatistest2
~~~

- The bind information in the 4th value is bound to the input/output values of the Stored Procedure.
- Currently, only three types of binding are supported: string, number, and cursor.
- "dir" supports only two values: "in" and "out".

### Example of a Stored Procedure with a Cursor
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
