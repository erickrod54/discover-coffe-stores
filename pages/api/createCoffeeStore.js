/**
 * Discover-coffee-stores - version 3.00 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Validating 'id' and 'name' to 'createCoffee' Store
 * 
 * Note: this will prevent to create a new coffee store without
 * 'name' and 'id' that is essential in order to identify them
 * as a coffee store
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
                if (name && id) {
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
                    }else{
                        res.status(400)
                        res.json({ message: 'Id or name is missing'})
                    }
                }
        } catch (err){
            console.log('Error finding store', err );
            res.status(500);
            res.json({ message: 'Error finding store', err});
        } 
    };
    }

export default createCoffeeStore;