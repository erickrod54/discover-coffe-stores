/**
 * Discover-coffee-stores - version 2.24 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Wrapping everything with the 'POST' flow.
 * 
 *    --> Making createRecords dynamic.
 * 
 * Note: createRecors is made dynamic by destructuring field 
 * directly from the 'req.body' from the 'airtables'
 * 
 * 
 */

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY );

const table = base('coffee-stores');

console.log({ table })

const createCoffeeStore = async (req, res) => {
    console.log({ table })

    if (req.method === "POST") {

        //find a record
    
        const { id, name, address, dma, vote, imgUrl } = req.body;
    
        const findingCoffeeStoreRecords = await table.select({
            filterByFormula: `id=${id}`
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
                            id,
                            name,
                            address,
                            dma,
                            vote,
                            imgUrl
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
    }

export default createCoffeeStore;