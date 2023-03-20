---
title: Introduction
tags:
  - API
---

Welcome to the SCLAB API. 
With our API, you can easily integrate event data from your server into a SCLAB dashboard and streamline the login process by linking member information. 
You can also send action signals from your custom iframe to the SCLAB dashboard and create your own charts effortlessly.

## Iframe
By using Iframes, you can embed pages created in SCLAB Studio into your web page, and vice versa, you can also embed your web page into the layout of SCLAB Studio. Depending on the situation, you can make better use of Iframe APIs.

- If you embed an SCLAB page on your site: You can integrate the membership system.
- If you embed your web page as an Iframe in the SCLAB layout: You can send action signals to SCLAB using API actions, and you can also create charts directly by receiving data from SCLAB.

## REST API
By using REST API, you can change the dashboard of SCLAB when an event occurs on your server, and prevent double login by integrating member information.

## sclabjs
When you use SCLAB into your HTML using iframe, you can use sclabjs for login and logout. sclabjs using module system. For this reason you need use module compiler like typescript, babel.
