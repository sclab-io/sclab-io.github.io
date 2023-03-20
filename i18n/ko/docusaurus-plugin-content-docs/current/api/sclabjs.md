---
title: sclabjs
tags:
  - npm
  - iframe
  - sclab login
---

When you use SCLAB into your HTML using iframe, you can use sclabjs for login and logout.
sclabjs using module system. 
For this reason you need use module compiler like typescript, babel.

## Install

```bash
npm install sclabjs
```

## Usage

```ts
import { Sclab } from 'sclabjs';

// client side
Sclab.init("https://userSiteCode.sclab.io", ()=>{
  // ready

  // login
  Sclab.login('abc@sclab.io', '1234', (result: boolean)=>{
    if(result){
      // move to user page
    }else{
      // login error
    }
  });
});
```

## Client APIs

### init(siteURL, apiToken?, callback?)

#### siteURL

Type: `string`

Published site url of your SITE.

#### callback

Type: `function`

callback function when sclabjs ready to use

### login(email, password, callback)

#### email

Type: `string`

email address

#### password

Type: `string`

user password

#### callback

Type: `function`

callback function when login complete

### loginWithToken(loginToken, callback)

#### loginToken

Type: `string`

loginToken from REST API

#### callback

Type: `function`

callback function when login complete

### logout(callback)

#### callback

Type: `function`

callback function when logout complete


### kill()

clear Sclab
