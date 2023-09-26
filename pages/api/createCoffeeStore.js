/**
 * Discover-coffee-stores - version 2.21 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Shaping 'createRecords' to 'fields'
 * 
 * Note: create record code block is being modifying to create the
 * coffee store record - harcoded id is set as 2 temproraly so 
 * i can get the message "create a record"
 */

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY );

const table = base('coffee-stores');

console.log({ table })

const createCoffeeStore = async (req, res) => {
    console.log({ table })
    //find a record

    const findingCoffeeStoreRecords = await table.select({
        filterByFormula:`id="2"`
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
            const createRecords = await table.create([
                {
                    fields: {
                        id: "1",
                        name: "Favorite Coffee Store Erick",
                        address: "patua vida",
                        dma: "patua blv",
                        vote: 200,
                        imgUrl: "http://myimg.com",
                    }
                }
            ]) 
            const records = createRecords.map((records) => {
                return{
                    ...records.fields
                }
            })
            res.json({ message: "create a record", records})
        }
    } catch (err){
        console.log('Error finding store', err );
        res.status(500);
        res.json({ message: 'Error finding store', err});
    } 
};

export default createCoffeeStore;