/**
 * Discover-coffee-stores - version 2.22 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Clearing 'createRecords' message
 * 
 *    --> Changing id to check id creation.
 * 
 * Note: create record code block is being modifying to create the
 * coffee store record - harcoded id is set as 3 temproraly so 
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
        filterByFormula:`id="3"`
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
                        id: "3",
                        name: "Favorite Coffee Store Erick with discount",
                        address: "patua vida mia",
                        dma: "patua blv",
                        vote: 200,
                        imgUrl: "http://myimgg.com",
                    }
                }
            ]) 
            const records = createRecords.map((records) => {
                return{
                    ...records.fields
                }
            })
            res.json({records})
        }
    } catch (err){
        console.log('Error finding store', err );
        res.status(500);
        res.json({ message: 'Error finding store', err});
    } 
};

export default createCoffeeStore;