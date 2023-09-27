/**
 * Discover-coffee-stores - version 3.03 -  airtable js
 * - Fetaures:
 * 
 *    --> Refactoring 'airtable' code in a reusable recurrent function
 * 
 * Note: this code will invoke to 'find' and to 'create' a coffee 
 * store
 */

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY );

const table = base('coffee-stores');

const getMinifiedRecord = (record) => {
    return{
        ...record.fields
    }
}

const getMinifiedRecords = (records) => {
    return records.map((record) => getMinifiedRecord(record));
}

export {table, getMinifiedRecords }