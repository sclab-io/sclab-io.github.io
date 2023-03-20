---
title: How to create custom chart
tags:
  - Iframe
  - Custom chart
---

You can make custom chart using iframe.
You have to select data before using this feature.

![Iframe popup screen shot](./iframe_popup.png)

```html
<div id='container'>
  Loading...
</div>
<script defer>
  function render(data){
    document.getElementById('container').innerHTML = data.rows[0].toString();
  }
  (function(){
    window.addEventListener("message", (event)=>{
      if(event.data && event.data.type === "IFRAME_DATA_RES"){
        render(event.data);
      }
    });
    
    //window.parent.postMessage("IFRAME_DATA_REQ,D7sRjaQRr2yo3zvoL");
    window.parent.postMessage("IFRAME_DATA_REQ,__IFRAME_ID_HERE__");
  })();
</script>
```  
:::info
change ID to your iframe id
:::