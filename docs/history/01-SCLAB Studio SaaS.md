---
title: SCLAB Studio SaaS
tags:
  - History
---

## Upcoming Release v1.0
### New Features
* [#242] AI Agent

## Release v1.0, 2025-05-01
### New Features
* [#218] Removed activation and transition animations when selecting items from the data list
* [#218] Added display of API URL in chart, pivot, location, and table titles when the data source is API-based

### Bug Fixes
* [#68] Fixed an issue where changing the text chart value did not update the rows.
* [#68] Fixed an issue where the `value` name in OD visualization did not reflect label changes made on the API side.

## Release v1.0, 2025-04-29
### New Features
* [#245] Added a Layout Edit button (Allows direct editing of items assigned to a layout)
* [#245] Modified the Combine search method
* [#246] Added "Linear" option to remove curves from Line Charts
* [#218] Added DB Agent search functionality
* [#68] Changed layout name display method

### Bug Fixes
* [#68] Fixed a bug where `SCLABDebugger.on()` did not apply the debugger to iframes
* [#68] Changed Combine AUTO to use a select box for search
* [#68] Fixed a bug where initial values were not applied properly when Combine AUTO data was modified
* [#68] Modified tooltip data order for location data to match the order selected in the location data settings
* [#68] Fixed a bug where toggling edit on location data also incorrectly toggled visibility

## Release v1.0, 2025-04-27
### Bug Fixes
* [#68] Union update bug fix

## Release v1.0, 2025-04-26
### New Features
* [#68] Added **SCLABDebugger** (You can view data transmission details by entering `SCLABDebugger.on()` in the browser console.)

### Bug Fixes
* [#68] Fixed an issue where union data was not updated during API polling.
* [#68] Fixed a bug where time information (hours and minutes) was incorrectly included when applying start/end dates.
* [#68] Added a feature to synchronize state values when embedding a site page URL via an iframe.

## Release v1.0, 2025-04-23
### New Features
* [#68] Added an option to apply [Apply Start/End to selection values] in the Combine Date settings.

### Bug Fixes
* [#68] Date component font style and weight not applied issue fixed
* [#68] Added exception handling to prevent errors when there is no data in the number chart.
* [#68] Added `startOf` and `endOf` date selection options in Combine Date.
* [#68] Fixed an issue where values were cut off when the legend position was set to the bottom and "Show Values" was checked in the bar chart.

## Release v1.0, 2025-04-22
### New Features
* [#243] GPT4.1 model support
* [#218] Modified the text on the login screen and removed the explanation
* [#218] Added a tab to check the final SQL query in the DB Agent
* [#218] Added syntax highlight feature for DB Agent and Union Syntax

## Release v1.0, 2025-04-12
### New Features
* [#218] Added API refresh action
* [#218] Added Refresh option to API Variable action
* [#218] Added feature to set size for each column in the table
* [#218] Added Number chart preview background color setting feature
* [#218] Modified to adjust the screen when setting the location data to fit the screen, so that multiple location data is combined (previously adjusted to the last loaded area)

### Bug Fixes
* [#218] Fixed a bug where the public layout template restoration was not working properly
* [#68] Fixed a bug where the line chart value was not displayed

## Release v1.0, 2025-03-29
### New Features
* [#218] OD visualization alignment feature
* [#218] Add type information to DB Agent columns
* [#218] Added API loading display page setting
* [#218] Added layout refresh action
* [#218] Added undo / redo keys "command+shift+z", "ctrl+shift+z", "command+z", "ctrl+z"

### Bug Fixes
* [#68] Fixed a bug where an error occurred when connecting to ODBC
* [#68] OD visualization active color tint -> fixed color
* [#218] Fixed a bug where empty values were sent as empty strings in combine, and null strings were sent as null, and undefined strings were sent as undefined
* [#218] Fixed a bug where the maximum and minimum values in OD location were fixed to the values at the time of API call

## Release v1.0, 2025-03-18
### New Features
* [#218] API data JS Parser added
* [#218] Iframe data selection box changed to searchable selection box
* [#218] Location icon tint changed from 1 second to maintain
* [#218] Added selected location icon
* [#218] Added direction selection feature to location data

### Bug Fixes
* [#68] Fixed a bug where small-sized layout buttons were hidden when at the bottom
* [#68] Table page disabled color change
* [#68] Debounce cancel added (Fixed a bug where API calls were duplicated twice when DATA_REFRESH)
* [#68] Fixed a bug where the arrow line step was not displayed in the location data, and the gradient and width step 0 were displayed
* [#68] Fixed a bug related to tools in the latest ollama LLM model and function call bug
* [#68] AI Service bun version update to 1.2.5
* [#68] Fixed a bug related to date preview in combine
* [#68] Fixed a bug related to OD visualization status maintenance

## Release v1.0, 2025-03-07
### New Features
* [#224] Table action feature
* [#240] Ollama model information can be used even if it is not available
* [#241] Change free plan page view count from 100 to 1000
* [#68] Added Thai language
* [#238] Added data access permission management
* [#218] Added start and end icons to line location data
* [#218] Modified the z-index of the line in line location data
* [#218] Modified DB Agent to allow execution of queries other than SELECT statements

### Bug Fixes
* [#68] Fixed a bug related to public layout template permissions
* [#68] Fixed a bug related to DB Agent loading

## Release v1.0, 2025-01-03
### New Features
* [#239] SCLAB Agent SSH tunneling feature

### Bug Fixes
* [#68] Fixed a bug where subscription could not be renewed if the subscription period had expired

## Release v1.0, 2024-12-27
### Bug Fixes
* [#68] Fixed a bug related to data access permissions

## Release v1.0, 2024-12-24
### New Features
* [#232] Add public layout template feature
* [#232] Add layout template upload/download feature
* [#234] Add layout drag select feature
* [#234] Add data connection feature to shapes on the map

## Release v1.0, 2024-12-12
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

## Release v1.0, 2024-11-15
### New Features
* Layout template override feature

## Release v1.0, 2024-11-07
### New Features
* Chart action feature
* Layout template feature

## Release v1.0, 2024-11-05

### Bug Fixes

* Fixed a bug with semicolons during agent query execution.
* Fixed a bug where table information selected in the agent wasn’t correctly passed to the SQL AI when modifying SQL.

## Release v1.0, 2024-10-25

### New Features

#### Location Data

* Added option to select whether to include commas in the values of number charts
* Added function to customize the top background of GIS and location data pop-ups

### Bug Fixes

* Fixed an issue where performance slowed when using numerous combine options
* Resolved a bug where parameters were duplicated in the Agent API
* Fixed an issue in the Agent API where adding multiple semicolons caused errors

## Release v1.0, 2024-10-24

### Bug Fixes

* Reset API variables when navigating between pages
* Fix date combine bug
* Modify the number chart to display empty values when there is no data.

## Release v1.0, 2024-10-22

### New Features

* Added functionality for combining date with hours, minutes, and seconds
* Changed maximum size of location icon from 60px to 720px

### Bug Fixes

* Fixed the issue with recognizing the number of occurrences when there are multiple LIMIT clauses in agent
* Fixed infinite loading issue when map object loading fails
* Fixed browser crashing issue when there are too many combine items

## Release v1.0 (2024-10-16)

### New Features

#### Location Data

* Added OD visualization
* Added Line visualization

#### API

* Added time and second interval options for polling feature

### Bug Fixes

* Fixed compatibility issue when calling actions from Leaflet to Mapbox
