<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [TimeTable][1]
    *   [mergeObject][2]
        *   [Parameters][3]
    *   [getTable][4]
    *   [setTable][5]
        *   [Parameters][6]
    *   [getRowMap][7]
    *   [setRowMap][8]
        *   [Parameters][9]
    *   [getWidth][10]
    *   [getHeight][11]
    *   [setHeight][12]
        *   [Parameters][13]
    *   [hasRow][14]
        *   [Parameters][15]
    *   [getRow][16]
        *   [Parameters][17]
    *   [getCSV][18]
    *   [parseCSV][19]
        *   [Parameters][20]
    *   [addRow][21]
        *   [Parameters][22]
    *   [addColumnTimestamp][23]
        *   [Parameters][24]
    *   [addValues][25]
        *   [Parameters][26]
    *   [limitColumns][27]
        *   [Parameters][28]
    *   [limitTime][29]
        *   [Parameters][30]

## TimeTable

Copyright 2021 Christian Meinert

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0][31]

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
\*

### mergeObject

deep merge object / array

#### Parameters

*   `target` **[object][32]** target object
*   `source` **[object][32]** source object
    \*

### getTable

get table data

Returns **[array][33]** \[rows]\[columns]
\*

### setTable

set table data

#### Parameters

*   `data` **[array][33]** \[rows]\[columns]
    \*

### getRowMap

get row map

Returns **[object][32]** rowMap {id:row}
\*

### setRowMap

set row map

#### Parameters

*   `rowMap` **[object][32]** {id:row}
    \*

### getWidth

get width (columns)

Returns **[number][34]** amount of columns
\*

### getHeight

get height (rows) without time row

Returns **[number][34]** amount of rows
\*

### setHeight

set height (rows) and adding not populated rows

#### Parameters

*   `rows` **[number][34]** of rows without time row
    \*

### hasRow

checks if a row id exists

#### Parameters

*   `id` **[string][35]** 

Returns **[number][34]** amount of rows
\*

### getRow

get row index by id, returns -1 if row does mot exist exists

#### Parameters

*   `id` **[string][35]** 

Returns **[number][34]** row index
\*

### getCSV

get table data as a CSV string
JSON is not able of sparse arrays so a own
stringify method is necessary

Returns **[string][35]** stringified array
\*

### parseCSV

set table data from a string
JSON is not able of sparse arrays so a own
parse method is necessary

#### Parameters

*   `dataString`  
*   `string` **[string][35]** produced by tableStringify

Returns **[array][33]** \[rows]\[columns]
\*

### addRow

add a row

#### Parameters

*   `id` **([string][35] | [number][34])** of that row or index number
*   `defaultRow` **[array][33]** (optional) default content (optional, default `[]`)

Returns **[number][34]** index of existing or created row (-1 if error)
\*

### addColumnTimestamp

add a column

#### Parameters

*   `time` **[number][34]** timestamp to be added

Returns **[number][34]** column index
\*

### addValues

add values

#### Parameters

*   `time` **[number][34]** timestamp to be added
*   `values` **[array][33]** \[{id,index,timestamp,value}] where index is used if present, timestamp is optional

Returns **[number][34]** number of successfully added values
\*

### limitColumns

limit the amount of columns

#### Parameters

*   `maxColumns`  
*   `maximum` **[number][34]** columns

Returns **[number][34]** number of removed columns
\*

### limitTime

limit the time span

#### Parameters

*   `timeSpan` **[number][34]** seconds from now

Returns **[number][34]** number of removed columns
\*

[1]: #timetable

[2]: #mergeobject

[3]: #parameters

[4]: #gettable

[5]: #settable

[6]: #parameters-1

[7]: #getrowmap

[8]: #setrowmap

[9]: #parameters-2

[10]: #getwidth

[11]: #getheight

[12]: #setheight

[13]: #parameters-3

[14]: #hasrow

[15]: #parameters-4

[16]: #getrow

[17]: #parameters-5

[18]: #getcsv

[19]: #parsecsv

[20]: #parameters-6

[21]: #addrow

[22]: #parameters-7

[23]: #addcolumntimestamp

[24]: #parameters-8

[25]: #addvalues

[26]: #parameters-9

[27]: #limitcolumns

[28]: #parameters-10

[29]: #limittime

[30]: #parameters-11

[31]: http://www.apache.org/licenses/LICENSE-2.0

[32]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[33]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[34]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[35]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
