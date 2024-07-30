---
title: sclabjs
tags:
  - npm
  - iframe
  - sclab login
---

HTML에 SCLAB을 iframe으로 사용할 때, 로그인과 로그아웃을 위해 sclabjs를 사용할 수 있습니다.
sclabjs는 모듈 시스템을 사용합니다.
이 때문에 typescript, babel과 같은 모듈 컴파일러를 사용해야 합니다.

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

## Source code
https://github.com/sclab-io/sclabjs