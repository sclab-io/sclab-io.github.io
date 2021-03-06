---
title: SCLAB API 문서

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - javascript

toc_footers:
  - <a href='https://app.sclab.io'>개발자 토큰 생성</a>
  - <a href='https://www.npmjs.com/package/sclabjs'>NPM - sclabjs</a>
  - <a href='https://github.com/sclab-io'>github</a>

includes:
  - errors

search: true

code_clipboard: true

meta:
  - name: description
    content: SCLAB API 개발 문서
---

# 소개

스크랩 API 문서 페이지에 오신걸 환영합니다. 스크랩 API 엔드포인트를 이용하면 저희 API를 접속하여 사용할 수 있습니다.

쉘, 자바스크립트로 되어있는 예제를 오른쪽의 검은 영역에서 확인 하실 수 있고, 탭을 선택해서 언어간에 전환할 수 있습니다.

# 시작하기

1. 스크랩 스튜디오에서 사이트를 생성
2. 스크랩 스튜디오 API 페이지에서 토근 확인
3. API 토큰 복사

```shell
npm install sclabjs
```

# 인증

> 인증을 위해서 아래 코드를 사용해주세요:

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

> `APITokenHere` 라고 되어있는 부분을 변경해서 사용해주세요.

스크랩은 인증을 위해 JWT 을 사용합니다. 스크랩 API 토큰은 [SCLAB Studio](http://app.sclab.io) 에서 확인 할 수 있습니다.

스크랩에서는 모든 요청 해더에 인증 토큰을 반드시 사용해야 합니다.

`Authorization: APITokenHere`

그리고, 헤더방식과 더불어 쿼리 스트링 또는 POST 요청에서는 JSON 키, 값 으로도 인증이 가능합니다.

<aside class="notice">
You must replace <code>APITokenHere</code> with your personal API Token.
</aside>

![API Page Screen Shot](./images/token_screen_shot.png)

# API 액션

API 액션은 외부 서비스에서 특정상황(긴급상황 등)에 접속해 있는 사용자들의 화면을 일괄적으로 바꾸기 위한 기능 입니다.
액션은 퍼블리싱을 한 이후에만 작동 되며, 액션이 등록되어 있지 않은 엔드포인트는 작동 되지 않습니다.

## 액션 실행

```shell
curl "https://app.sclab.io/api/1/<ID>" \
  -H "Authorization: APITokenHere"
```

```javascript
```

> 위 명령은 아래와 같은 결과값을 리턴합니다:

```json
{
  "result": "ok"
}
```

이 엔드 포인트는 하나의 API 액션을 실행합니다.
이 엔드 포인트가 성공적으로 결과값을 응답 받으면,
퍼블리시된 사이트를 브라우져로 접속한 모든 사용자에게 적용 됩니다.

### HTTP 요청

`GET https://app.sclab.io/api/1/<ID>`

<aside class="success">
<code>ID</code> 값을 자신이 생성한 아이디 값과 일치하게 바꿔 주세요. https://app.sclab.io/api/1/sW47bBZjYyWGjcfaF
</aside>

### URL Parameters

키 | 설명
-- | --
ID | SCLAB Studio 에서 생성한 ID 값

# 계정 관리

## 회원정보 가져오기

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

이 엔드포인트는 회원정보를 가져옵니다.

### HTTP 요청

`GET https://app.sclab.io/api/1/user/get`

### JSON Parameters

키 | 필수 | 설명
-- | -- | -- |
_userId | N | 회원 아이디
email | N | 이메일

## 신규 계정 생성

```shell
curl "https://app.sclab.io/api/1/user/create" \
  -X POST \
  -H "Authorization: APITokenHere" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"email@address.com\", \"password\": \"password string\", \"name\": \"user name\"}"
```

```javascript
```

> 위에 명령은 아래와 같은 JSON 구조를 리턴합니다: 

```json
{
  "result": {
    "_userId": "aspfokgwegoepwk",
    "status": "user created"
  }
}
```

이 엔드포인트는 신규 사이트 사용자 계정을 생성합니다.

### HTTP 요청

`POST https://app.sclab.io/api/1/user/create`

### JSON Parameters

키 | 필수 | 설명 
-- | -- | -- | 
email | Y | 이메일 주소
password | Y | 비밀번호
name | Y | 이름
phone | N | 전화번호
address | N | 주소

## 회원 정보 수정

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

이 엔드포인트는 사이트 회원의 프로필정보를 수정 합니다. [이름, 전화번호, 주소]

### HTTP 요청

`POST https://app.sclab.io/api/1/user/create`

### JSON Parameters

키 | 필수 | 설명
-- | -- | -- |
_userId | Y | 회원아이디
name | N | 이름
phone | N | 전화번호
address | N | 주소
password | N | 비밀번호

## 사이트 회원삭제

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

사이트 회원은 삭제 되지만, 회원 계정은 삭제되지 않습니다.

### HTTP 요청

`DELETE https://app.sclab.io/api/1/user/delete`

### JSON Parameters

키 | 필수 | 설명
-- | -- | -- |
_userId | Y | 회원 아이디
