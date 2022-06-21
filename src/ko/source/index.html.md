---
title: SCLAB API 문서

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - javascript

toc_footers:
  - <a href='https://app.sclab.io'>개발자 토큰 생성</a>

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
