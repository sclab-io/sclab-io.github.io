---
title: API
tags:
  - DATA
  - API
---


![Get API data](./21.png)
- If you drag and drop the API icon, a pop-up window will appear as shown above.
- Enter the API name, enter the API address next to GET, and click Send.
- Detailed data appears on the Pretty side below.
- If the desired data type does not appear on the right, find the Root and Path of the desired data under Pretty, enter it, and click the A-shaped button. Click the arrow button next to the left number under Pretty and find the root name of the upper level containing the desired data. And find the necessary detailed data in which part under the upper root name. Enter 'Root name' and 'path name' corresponding to the right Root path column and click the A-shaped button. You can see that additional data paths and labels are entered.
- You can select the polling cycle in minutes. No polling means fetching data only once.
- If you enter the API name and press SAVE, you can see that API data is generated and one more turquoise hexagon is created.
<br/><br/>

## Variable Types
- "FIXED" is used for values that do not change and are only used on the server side when calling the API. The client side cannot access these values, making it suitable for secure values such as keys.
- "Variable" is used for data in variable format, and its value can be changed using action functions.
- "Current Location" represents the current location value.
- "Map Location" retrieves the coordinates of the center of the map to load data.
- "Date" represents a date value and can be used to generate values.

### Date Format
- Dates can be formatted as yyyy-MM or any other date format, and the API will be called with the corresponding date.
- JSON format allows for more diverse date formats.

~~~json
{
"format": "yyyy-MM",
"add": {
"days": 1
},
"startOf": "day"
}
~~~

| Key | Format | Description |
|--- | --- |-------------------------------------|
| format | String | {"format": "YYYY-MM-DD"} Date format |
| add | Object | {"days": -1} -> Yesterday |
| startOf | String | {"startOf": "month"} -> Start of the month |
| endOf | String | {"endOf": "month"} -> End of the month |
| utc | Boolean | Use UTC |
<iframe width="100%" height="640" src="https://www.youtube.com/embed/39EXX0toy4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/><br/>

## API Data Flow
![API Data flow](./API.png)