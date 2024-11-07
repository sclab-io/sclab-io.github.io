---
title: SCLAB Studio OnPremise
tags:
  - History
---

## Release v1.0, 2024-11-07

* Chart action feature
* Table action feature
* Layout template feature

## Release v1.1, 2024-11-06

### Bug Fixes

* Fixed a bug with semicolons during agent query execution.
* Fixed a bug where table information selected in the agent wasn’t correctly passed to the SQL AI when modifying SQL.

## Release v1.1, 2024-10-25

### New Features

#### Location Data

* Added option to select whether to include commas in the values of number charts
* Added function to customize the top background of GIS and location data pop-ups

### Bug Fixes

* Fixed an issue where performance slowed when using numerous combine options
* Resolved a bug where parameters were duplicated in the Agent API
* Fixed an issue in the Agent API where adding multiple semicolons caused errors

## Release v1.1, 2024-10-24

### Bug Fixes

* Reset API variables when navigating between pages
* Fix date combine bug
* Modify the number chart to display empty values when there is no data.

## Release v1.1, 2024-10-16

### New Features

#### Location Data

* Added OD visualization
* Added Line visualization

#### API

* Added time and second interval options for polling feature

### Bug Fixes

* Fixed compatibility issue when calling actions from Leaflet to Mapbox
