/**
 * Discover-coffee-stores - version 4.01 -  airtable js
 * - Fetaures:
 * 
 *    --> Loging the 'record' to get 'recordId'
 * 
 * Note: once sent on 'postman', the 'record' in order 
 * to set the 'recordId' 
 */

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY );

const table = base('coffee-stores');

const getMinifiedRecord = (record) => {
    console.log({ record })
    return{
        recordId: record.id,
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