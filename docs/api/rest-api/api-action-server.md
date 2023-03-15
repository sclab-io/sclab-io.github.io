---
title: API Action - Server
tags:
  - REST API
  - Action
---

`API Action - Server` is designed to enable users connected to a specific situation, such as an emergency, to collectively view a changed screen in an external service. 
Please note that actions only work after publishing, and endpoints without registered actions will not function properly.

## Run Action

This endpoint runs a single API action. 
Once the endpoint has successfully received a response, every user browsing your published site will be affected by this action.

```shell
curl "https://app.sclab.io/api/1/<ID>" \
  -H "Authorization: APITokenHere"
```

> The above command returns JSON structured like this:

```json
{
  "result": "ok"
}
```

### HTTP Request
`GET https://app.sclab.io/api/1/<ID>`

:::tip

You must replace `ID` your api end point like this https://app.sclab.io/api/1/sW47bBZjYyWGjcfaF

:::

### URL Parameters

Parameter | Description
-- | --
ID | API Action ID from SCLAB Studio