---
title: SCLAB Studio OnPremise
tags:
  - History
---

## Release v1.1, 2025-02-04
### New Features
* [#240] Inference model support feature
* [#238] Added data access permission management

## Release v1.1, 2025-01-27
### New Features
* [#224] Table action feature

## Release v1.1, 2025-01-24
### New Features
* Added Thai language

## Release v1.1, 2025-01-20
### New Features
* [#240] Ollama model information can be used even if it is not available

### Bug Fixes
* [#68] Fixed a bug related to public layout template permissions
* [#68] Fixed a bug related to DB Agent loading

## Release v1.1, 2025-01-03
### New Features
* [#239] SCLAB Agent SSH tunneling feature

## Release v1.1, 2024-12-27
### Bug Fixes
* [#68] Fixed a bug related to data access permissions

## Release v1.1, 2024-12-24
### New Features
* [#232] Add public layout template feature
* [#232] Add layout template upload/download feature
* [#234] Add layout drag select feature
* [#234] Add data connection feature to shapes on the map
* [#68] Change site deletion to complete deletion

## Release v1.1, 2024-12-12
### New Features
* [#229] Treemap color specification feature
* [#230] Post visible status manage feature
* [#228] Add X/Y Axis zoom for ECharts
* [#231] Remove like from Site
* [#228] ECharts theme selection feature
* [#228] Basic Scatter Chart feature
* [#228] ECharts Basic Line Chart feature
* [#228] ECharts Basic Bar Chart feature
* [#228] ECharts Basic Pie Chart feature
* [#228] ECharts Basic Radar Chart feature
* [#228] ECharts Basic Candle Chart feature
* [#228] ECharts Basic Gauge Chart feature
* [#228] ECharts Legend Scroll feature
* [#228] Echarts IoT data connection feature
* [#228] Add chart name i18n
* [#68] Add shift on/off button to the page editor
* [#233] Add post delete feature in post list
* [#233] Add real-time update for new posts

### Bug Fixes
* [#230] Fixed a bug where the status of posts registered with the photo service was not updated
* [#68] Display pin icon bug fix
* [#68] Table CSV download bug fix
* [#68] Pivot CSV download bug fix
* [#68] Language initial value selection related bug
* [#68] Survey registration related bug fix
* [#68] Fix bug where only one row remains and disappears when changing table iot

## Release v1.1, 2024-11-15
### New Features
* Layout template override feature

## Release v1.1, 2024-11-07
### New Features
* Chart action feature
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
