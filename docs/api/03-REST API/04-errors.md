---
title: Errors
tags:
  - REST API
  - Error
  - Response code
---

The SCLAB API uses the following error codes:

Error Code | Meaning
-- | --
400 | Bad Request -- Your request is invalid.
401 | Unauthorized -- Your API token is wrong.
403 | Forbidden -- This is not allowed for some reason (Duplicated request, etc.).
404 | Not Found -- Could not be found.
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily offline for maintenance. Please try again later.