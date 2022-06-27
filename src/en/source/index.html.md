---
title: SCLAB API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - javascript

toc_footers:
  - <a href='https://app.sclab.io'>Sign Up for a Developer token</a>
  - <a href='https://www.npmjs.com/package/sclabjs'>NPM - sclabjs</a>
  - <a href='https://github.com/sclab-io'>github</a>

includes:
  - errors

search: true

code_clipboard: true

meta:
  - name: description
    content: Documentation for the SCLAB API
---

# Introduction

Welcome to the SCLAB API! You can use our API to access SCLAB API endpoints.

We have language bindings in Shell, Javascript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

# Get Started

1. create site in SCLAB Studio
2. get api token from SCLAB Studio API page
3. copy the api token

```shell
npm install sclabjs
```

# Authentication

> To authorize, use this code:

```shell
# authorization header 
curl "api_endpoint_here" \
  -H "Authorization: APITokenHere"

# query string for without header
curl "api_endpoint_here?token=APITokenHere"

# json body for POST
curl "api_endpoint_here" \
  -H "Content-Type: application/json" \
  -X POST \
  -d "{\"token\": \"APITokenHere\"}"
```

```javascript
import { Sclab } from 'sclabjs';
```

> Make sure to replace `APITokenHere` with your API Token.

SCLAB uses API JWT to allow access to the API. You can register a new SCLAB API key at our [SCLAB Studio](http://app.sclab.io).

SCLAB expects for the API token to be included in all API requests to the server in a header that looks like the following:

`Authorization: APITokenHere`

And also you can use query string or JSON key and value for POST request.

<aside class="notice">
You must replace <code>APITokenHere</code> with your personal API Token.
</aside>

![API Page Screen Shot](./images/token_screen_shot.png)

# API Action

API action is a function to collectively change the screen of users who are connected to a specific situation (emergency, etc.) in an external service.
Actions only work after publishing, and endpoints that do not have actions registered do not work.

## Run Action

```shell
curl "https://app.sclab.io/api/1/<ID>" \
  -H "Authorization: APITokenHere"
```

```javascript
```

> The above command returns JSON structured like this:

```json
{
  "result": "ok"
}
```

This endpoint run single API Action. 
When this end point got the response successfully, 
then every user who browse your published site will be affected this action.

### HTTP Request

`GET https://app.sclab.io/api/1/<ID>`

<aside class="success">
You must replace <code>ID</code> your api end point like this https://app.sclab.io/api/1/sW47bBZjYyWGjcfaF
</aside>

### URL Parameters

Parameter | Description
-- | --
ID | API Action ID from SCLAB Studio

# Accounts Management

## Get user information

```shell
curl "https://app.sclab.io/api/1/user/get?_userId=jJpp2WfD7yp7y2cEk" \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json"

or
  
curl "https://app.sclab.io/api/1/user/get?email=test@sclab.io" \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json"
```

```javascript
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "_userId": "jJpp2WfD7yp7y2cEk",
    "email": "test@sclab.io",
    "name": "tester",
    "phone": "01012341234",
    "address": "seoul"
  }
}
```

This endpoint get user information.

### HTTP Request

`GET https://app.sclab.io/api/1/user/get`

### JSON Parameters

Parameter | Required | Description
-- | -- | -- |
_userId | N | User id
email | N | Email

## Create new account

```shell
curl "https://app.sclab.io/api/1/user/create" \
  -X POST \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"email@address.com\", \"password\": \"password string\", \"name\": \"user name\"}"
```

```javascript
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "_userId": "aspfokgwegoepwk",
    "status": "user created"
  }
}
```

This endpoint creates new site user account.

### HTTP Request

`POST https://app.sclab.io/api/1/user/create`

### JSON Parameters

Parameter | Required | Description 
-- | -- | -- | 
email | Y | User email address
password | Y | User password
name | Y | User's name
phone | N | User phone number
address | N | User address

## Update account profile

```shell
curl "https://app.sclab.io/api/1/user/update" \
  -X POST \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json" \
  -d "{\"name\": \"user name\"}"
```

```javascript
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "status": "user updated"
  }
}
```

This endpoint update site user account profile [name, phone, address].

### HTTP Request

`POST https://app.sclab.io/api/1/user/create`

### JSON Parameters

Parameter | Required | Description
-- | -- | -- |
_userId | Y | User id
name | N | User's name
phone | N | User phone number
address | N | User address
password | N | User's password


## Delete user from site

```shell
curl "https://app.sclab.io/api/1/user/delete" \
  -X DELETE \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json" \
  -d "{\"_userId\": \"user id\"}"
```

```javascript
```

> The above command returns JSON structured like this:

```json
{
  "result": {
    "status": "user removed"
  }
}
```

This endpoint remove user from your site, but user account is not removed.

### HTTP Request

`DELETE https://app.sclab.io/api/1/user/delete`

### JSON Parameters

Parameter | Required | Description
-- | -- | -- |
_userId | Y | User id
