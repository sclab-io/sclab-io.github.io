---
title: ODBC Connector
tags:
  - Connector
  - DB
  - ODBC
---

## Introduction
This connector provides functionality for retrieving data using ODBC in SCLAB Studio.

## Features
- Connect to Database using unixODBC
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

---

### Requirements
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
* test dsn `isql -v mydsn myusername mypassword`

### Sample /etc/odbcinst.ini
~~~
[PostgreSQL]
Description     = ODBC for PostgreSQL
Driver          = /usr/lib/psqlodbcw.so
Setup           = /usr/lib/libodbcpsqlS.so
Driver64        = /usr/lib64/psqlodbcw.so
Setup64         = /usr/lib64/libodbcpsqlS.so
FileUsage       = 1

[MySQL]
Description     = ODBC for MySQL
Driver          = /usr/lib/libmyodbc5.so
Setup           = /usr/lib/libodbcmyS.so
Driver64        = /usr/lib64/libmyodbc5.so
Setup64         = /usr/lib64/libodbcmyS.so
FileUsage       = 1

[Tibero]
Description = ODBC for Tibero
Driver = /home/tibero/tibero7/client/lib/libtbodbc.so
Setup = /home/tibero/tibero7/client/lib/libtbodbc.so
Setup = 1
FileUsage = 1
~~~

### Sample ~/.odbc.ini
~~~
[ODBC Data Sources]
MyDB = MySQL
MyTB = Tibero 7

[ODBC]
Trace = yes
TraceFile = /home/odbc.log

[MyDB]
Driver = MySQL
server = 127.0.0.1
port = 3306
user = myuser
database = mydb
password = password

[MyTB]
driver = Tibero
server = 127.0.0.1
port = 8629
SID = tibero
user = sys
password = tibero
Database = tibero
~~~

---

### Node.js Version Support
* Node.js 12
* Node.js 14
* Node.js 16
* Node.js 18

### install nodejs 18
~~~bash
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs
~~~

### clone source
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

### start
~~~bash
# pm2
$ ./run.sh
~~~

### stop
~~~bash
# pm2
$ ./stop.sh
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
      resume
    WHERE
      1=1
      <if test="id != null and id != ''">
      AND id = ${id}
      </if>
    
    <if test="limit != null and limit != ''">
      LIMIT ${limit}
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

---
### How to troubleshoot issues related to gcc
The gcc library is required to connect with unixODBC, but errors may occur occasionally on older operating systems.
Below are the solutions for this.

#### CentOS 7 - 64bit
* /lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found
~~~
# check libstdc++
# if 1.3.9 is absent upgrade libstdc++
strings /lib64/libstdc++.so.6 | grep CXXABI

# centos7 upgrade process
cd gcc

# use prebuild lib if this doesn't work you have to build gcc
./centos7_setup_gcc9.2.0.sh

# check again
strings /lib64/libstdc++.so.6 | grep CXXABI

# restart
cd ..
./stop.sh
./run.sh

# if connector has no error, you don't have to run this script
# or build lib (you can change gcc version in ./centos7_build_gcc9.2.0.sh file's GCC_VERSION=9.2.0)
./centos7_build_gcc9.2.0.sh
~~~