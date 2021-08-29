/**
 * Copyright 2021 Christian Meinert
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

export default class TimeTable {
  constructor() {
      var table = this;
      table.content = [[]];
      table.rowMap = {};
      table.columns = 0;
      table.rows = 0;
  }
  /*************************************************
   * deep merge object / array
   * @param {object} target target object
   * @param {object} source source object
   *************************************************/
   mergeObject(target,source) {
    if (typeof source === 'object') {
        Object.keys(source).forEach(element => {
            if (typeof source[element] !== "object") {
                target[element] = source[element];
            } else {
                if (!target.hasOwnProperty(element)) {
                    target[element] = (Array.isArray(source[element])) ? [] : {};
                }
                this.mergeObject(target[element],source[element])
            }
        });
    } else {
        target=source;
    }
  }
  /*************************************************
   * get table data
   * @return {array} [rows][columns]
   *************************************************/
  getTable() { return this.content };
  /*************************************************
   * set table data
   * @param {array} data [rows][columns]
   *************************************************/
  setTable(data) { 
    if (Array.isArray(data)) {
      delete this.content;
      this.content = [];
      this.mergeObject(this.content,data);
      this.columns = this.content[0].length;
      this.rows = this.content.length;
    } else {console.warn('timeTable.setTable() data must be an array!', data);}
  };
  /*************************************************
   * get row map
   * @return {object} rowMap {id:row}
   *************************************************/
  getRowMap() { return this.rowMap };
  /*************************************************
   * set row map
   * @param {object} rowMap {id:row}
   *************************************************/
  setRowMap(rowMap) {
    if (typeof rowMap === 'object') {
      delete this.rowMap;
      this.rowMap = {};
      this.mergeObject(this.rowMap,rowMap);
    } else {console.warn('timeTable.rowMap() rowMap must be an object!', rowMap);}
  };
  /*************************************************
   * get width (columns)
   * @return {number} amount of columns
   *************************************************/
  getWidth() { return this.content[0].length };
  /*************************************************
   * get height (rows) without time row
   * @return {number} amount of rows
   *************************************************/
  getHeight() { return this.content.length-1 };
  /*************************************************
   * set height (rows) and adding not populated rows
   * @param {number} rows of rows without time row
   *************************************************/
  setHeight(rows) {
    var table = this;
    // console.log('setHeight',table.content);
    let row = table.content.length;
    while (row <= rows) {
      table.content[row]=Array(table.content[0].length);
      row++;
    } 
    table.rows = table.content.length;
  };
  /*************************************************
   * checks if a row id exists
   * @param {string} id
   * @return {number} amount of rows
   *************************************************/
  hasRow(id) { return this.content.hasOwnProperty(id); };
  /*************************************************
   * get table data
   * @return {array} [rows][columns]
   *************************************************/
  getTableAsString() {
    var table = this;
    let result = '[';
    table.content.forEach(row => {
      result += '[';
      row.forEach(col => {
          if (result!==undefined) {
            result += (result!==null) ? col : 'null';
          }
          result += ','
      });
      result.slice(0,-1); // remove the last comma
      result += "],";
    });
    result.slice(0,-1); // remove the last comma
    result += "]";
    return result;
  };
  /*************************************************
   * add a row 
   * @param {string|number} id of that row or index number
   * @param {array} defaultRow (optional) default content
   * @return {object} {row:rowData, isNew:true if new row was created) new or existing row
   *************************************************/
  addRow(id, defaultRow = []) {
      var table = this;
      var isNew = false;
      switch (typeof id) {
        case 'string':
          if (!table.rowMap.hasOwnProperty(id)) { // add a new row
              isNew=true;
              table.content[table.content.length] = defaultRow;
              table.content[table.content.length-1].length = table.content[0].length;
              table.rowMap[id] = table.rows = table.content.length;
          }
          return {row:table.content[table.rowMap[id]-1],isNew:isNew};
        case 'number':
          if (id < table.content.length) {
            return {row:table.content[id],isNew:isNew};
          } else {
            console.log(`timeTable.addRow(id) id index exceeds number of initialized rows is: ${id} max ${table.content.length}`);
            return;
          }
        default :
          console.log(`timeTable.addRow(id) id has to be of type number or string! is: "${typeof id}"`);
          return;
      }
  };
  
  /*************************************************
   * add a column 
   * @param {number} time timestamp to be added
   * @return {number} column index
   *************************************************/
  addColumnTimestamp(time) {
    var table = this;
    let col = table.content[0].findIndex(element => element >= time);
    table.rows = table.content.length;
    table.columns = table.content[0].length;
    if (col < 0 || col === undefined) { // add new column @ the end
        table.columns++;
        table.content.forEach(row => row.length = table.columns);
        col=table.columns;
    } else if (time !== table.content[0][col]) { // insert a column
        table.content.forEach(row => {
            table.columns++;
            row.splice(col, 0, undefined)
            delete row[col];
        });            
    } else { // existing column
      col++;
    }
    table.content[0][col-1] = time;
    return col;
  };
  /** 
  * add values 
  * @param {number} time timestamp to be added
  * @param {array} values [{id,index,timestamp,value}] where index is used if present, timestamp is optional
  * @return {number} column index
  **/
  addValue(time,values) {
    var table = this;
    var returnValue = {};
    values.forEach(value => {
      let column = 0;
      column = table.addColumnTimestamp((time!==undefined) ? time : value.timestamp);
      let row = table.addRow(id); // get or add row

    })
    Object.keys(values).forEach(id => {
      row.row[returnValue.col-1] = values[id];
      returnValue.newRow = row.isNew;
    })
    return returnValue;
  }
  /** 
   * limit the amount of columns
   * @param {number} maximum columns
   * @return {number} number of removed columns
   **/
  limitColumns(maxColumns) {  
    var table = this;
    let toRemove = 0;
    if (table.content[0].length > maxColumns) {
      toRemove = table.content[0].length - maxColumns;
      table.content.forEach(row => row.splice(0,toRemove));
    }
    return toRemove;
  }
  /** 
   * limit the time span
   * @param {number} timeSpan seconds from now
   * @return {number} number of removed columns
  **/
  limitTime(timeSpan) {  
    var table = this;
    if (table.content[0].length < 1) return 0;
    let limit = Date.now()/1000 - timeSpan;
    let toRemove = 0;
    while (toRemove < table.content[0].length && table.content[0][toRemove] < limit) { toRemove ++};
    if (toRemove > 0) {
      table.content.forEach(row => row.splice(0,toRemove));
    }
    return toRemove;
  } 
}
// module.exports = TimeTable;