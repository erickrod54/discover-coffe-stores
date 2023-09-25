/**
 * Discover-coffee-stores - version 2.18 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Clearing first flow containing messages POST - 'Hi there', 
 *        GET - 'method GET'
 * 
 * Note: now 'field' is be shaped by mapping 'findingCoffeeStoreRecords'
 * and setting it as 'res.json'
 */

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY );

const table = base('coffee-stores');

console.log({ table })

const createCoffeeStore = async (req, res) => {
    console.log({ table })
    //find a record

    const findingCoffeeStoreRecords = await table.select({
        filterByFormula:`id="0"`
    }).firstPage();

    console.log({ findingCoffeeStoreRecords })

    if (findingCoffeeStoreRecords.length !== 0) {
        const records = findingCoffeeStoreRecords.map((records) => {
            return{
                ...records.fields
            }
        })
        res.json(records)
    }else{
    //create a record
        res.json({ message: "create a record"})    
    }
    
};

export default createCoffeeStore;