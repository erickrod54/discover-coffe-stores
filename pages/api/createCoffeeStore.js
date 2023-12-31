import { findRecordByFilter, getMinifiedRecords, table } from "../../lib/airtable";
/**
 * Discover-coffee-stores - version 4.06 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Clearing logs
 * 
 * Note: This fix will verify the id before creating or finding
 * a coffee store
 */

//console.log({ table })

const createCoffeeStore = async (req, res) => {
    //console.log({ table })

    if (req.method === "POST") {

        //find a record
    
        const { id, name, address, dma, vote, imgUrl } = req.body;
            
        
        try {

            if (id) {
                
                const records = await findRecordByFilter(id)
                
                if (records.length !== 0) {
                    res.json(records)
                }else{
                    if (name) {
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
                            const records = getMinifiedRecords(createRecords)
                            res.json({records})
                        }else{
                            res.status(400)
                            res.json({ message: 'Id or name is missing'})
                        }
                    }
            }else{
                res.status(400);
                res.json({ message: "Id is missing" });
            }
            } catch (err){
                ('Error creating or finding store', err );
                res.status(500);
                res.json({ message: 'Error creating or finding store', err});
            } 
        };
        }
    

export default createCoffeeStore;