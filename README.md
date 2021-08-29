# myTools collection of javascript tools

Disclaimer: Everything here is Beta and might not be useful for others at all.

### Table of Contents

*   [TimeTable][1]

# how to build

*rollup* is used to build linkable modules for node.js, as module or for the browser

* modify file path in package.json where to output packages
* use `npm run build` to build packages

# timeTable.js

A little library to handle time based tables. (created to prepare data for uPlot and used in node-red-contrib-ui-uplot-charts)
The table is organized as an array of arrays. The arrays are sparse arrays for performance and memory efficiency Row 0 holds timestamps (in seconds). Each row can be identified by an unique id.

### Features

[x] identifies row by id stings

[x] works with sparse arrays

[x] differentiate undefined (holes) and null cells

[x] inserts values by timestamp

[x] output CSV strings to circumvent the disability to stringify sparse arrays as JSON

[x] can read CSV strings

[x] limit amount of columns

[x] limit time period to store

[x] map rows by id to row number

[x] remap, order or initialize rows according to an array of ids

[x] works as node.js library and in the browser

### data schema

* columns count from 0..n
* rows count from 1..m (0 = time row)
* width = n
* height = m (without the time row) i.e. one value height === 1;

[1]: #timeTable.js