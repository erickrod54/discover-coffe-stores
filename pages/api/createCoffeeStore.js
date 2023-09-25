/**
 * Discover-coffee-stores - version 2.19 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Handeling errors
 * 
 * Note: To handle errors i have to wrap the shaped object in a
 * 'try-catch' flow so i can catch-handle the error.
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

    try {
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
    } catch (err){
        console.log('Error finding store', err );
        res.status(500);
        res.json({ message: 'Error finding store', err});
    } 
};

export default createCoffeeStore;