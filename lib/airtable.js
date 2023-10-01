/**
 * Discover-coffee-stores - version 3.14 -  airtable js
 * - Fetaures:
 * 
 *    --> Adding 'findRecordByFilter' that will be use 
 *        to finf by 'id' in multiple places
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

const findRecordByFilter = async (id ) => {

    const findingCoffeeStoreRecords = await table.select({
        filterByFormula: `id="${id}"`
    }).firstPage();

    
        return getMinifiedRecords(findingCoffeeStoreRecords)
}

export {table, getMinifiedRecords, findRecordByFilter }