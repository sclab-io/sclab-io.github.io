---
title: Presto/Trino Connector
tags:
  - Connector
  - DB
  - Presto
  - Trino
---

## Introduction
This connector provides functionality for retrieving data using Presto/Trino in SCLAB Studio.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LLNV-QlyW58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Features
- Connect to Presto/Trino
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
- trino or presto (https://trino.io/docs/current/installation.html)
- connection information
- Install docker or nodejs

### clone source
~~~bash
$ git clone https://github.com/sclab-io/sclab-presto-connector
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

# Presto/Trino Connection
PRESTO_HOST=172.17.0.1
PRESTO_PORT=8080
PRESTO_USER=sclab-trino-client

# BASIC AUTH
PRESTO_AUTH=BASIC
PRESTO_BASIC_USER=user
#PRESTO_BASIC_PASSWORD=password

# CUSTOM AUTH
#PRESTO_AUTH=CUSTOM
#PRESTO_CUSTOM_AUTH=Sets HTTP Authorization header with the provided string.

# SCLAB IoT (Remove this environment if you do not need to use MQTT)
MQTT_TOPIC=yourtopic/
MQTT_HOST=yourhost
MQTT_CLIENT_ID=your-client-id/1
MQTT_ID=your-id
MQTT_PASSWORD=your-password

# QUERY_#=mqtt;query;topic;interval ms
# QUERY_#=api;query;endPoint
QUERY_1=api;SELECT ROUND( RAND() * 100 ) AS value, NOW() AS datetime;/api/1
QUERY_2=api;SELECT ${field} from ${table} where name="${name}";/api/2
# QUERY_3=mqtt;SELECT ROUND( RAND() * 100 ) AS value, NOW() AS datetime;test0;1000
# QUERY_4=mqtt;SELECT ROUND( RAND() * 1000 ) AS value, NOW() AS datetime;test1;5000

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
$ ./node_modules/.bin/pm2 stop 0
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
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
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
http://ip:9180/api/2
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

## Mapping with Mybatis
- Mybatis utilizes https://github.com/OldBlackJoe/mybatis-mapper/tree/master, and only the supported formats from there are applicable.
- To use it, please create a mybatis folder.

### Example of using if statement
- You can input the following format in the mybatis folder.

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
- The above example uses an if statement to search by the id condition only if the id value is passed as a parameter. Otherwise, it returns all the data.
- After adding the XML file, add the configuration to the environment variable as follows:
~~~bash title=".env.production.local"
QUERY_mybatis_1=mybatis;sample;test;/api/mybatistest
~~~
- After adding the environment variable, restart the system. Once restarted, when making a request to the corresponding endpoint, it will be connected to sample.test in the mybatis folder, allowing you to create queries and retrieve data.

### Example of using a date range query
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

- The above query retrieves the number of new members who joined during a specific period from a statistics table.
- The data in the table is stored with the format 'YYYYMMDD' for the date.
- To extract data on a monthly basis, the query calculates the new member count for each month.
- Since only daily data is stored, it uses SUM to calculate the total, and GROUP BY retrieves the data in the format of year and month.

~~~bash title=".env.production.local"
QUERY_mybatis_2=mybatis;sample2;test;/api/mybatistest2
~~~

- After adding the environment variable, restart the system.

~~~bash
curl "http://localhost:9180/api/mybatistest2?startDate=20200101&endDate=20231223" -H 'authorization: TOKEN'
~~~

- By making a request like the above, you can retrieve the number of new members who joined on a monthly basis from January 2023 to June 2023.

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