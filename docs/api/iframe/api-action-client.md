---
title: API Action - Client
tags:
  - Iframe
  - Action
---

`API Action - Client` is API for between SCLAB and iframe layout.
This Action is only affected current browser.
Before you start, you must create your client api on the SCLAB Studio.

![Client API Page Screen Shot](./api_action_client_screen_shot.png)

We implemented API Action, API Event using [window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

## Run Action

Run single action from your iframe.

```html
<button onclick="window.parent.postMessage('clientAPIIdHere')">A</button>
```

```javascript
window.parent.postMessage('clientAPIIdHere');
```

:::info
You must replace `clientAPIIdHere` your api ID "sW47bBZjYyWGjcfaF"
:::

## API Event

  When you want to call your function from SCLAB layout, you can add API Event Action in layout setting and map elements setting.

![Layout Setting Screent Shot](./layout_API_EVENT_screen_shot.png)

```javascript
window.addEventListener("message", (event)=>{
  if(event.origin !== 'https://yoursitecode.sclab.io'){
    return;
  }
  if(event.data === "MY_DATA") {
    console.log('data received');
  }
});
```

```html
<script>
  window.addEventListener("message", (event)=>{
    if(event.origin !== 'https://yoursitecode.sclab.io'){
      return;
    }
    
    if(event.data === "MY_DATA") {
      document.getElementById("msg").innerHTML = "clicked";
    }
  });
</script>
<div id="msg">
  HI
</div>
```