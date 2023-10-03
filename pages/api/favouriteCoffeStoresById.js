import { findRecordByFilter } from "../../lib/airtable";
/**
 * Discover-coffee-stores - version 4.00 -  favouriteCoffeStoresById
 * - Fetaures:
 * 
 *    --> Calculating voting once the API gets updated ( PUT method )   
 * 
 * Note: This is been tested on 'postman' by hitting send with the API:
 * 
 *  http://localhost:3000/api/favouriteCoffeStoresById?id
 * 
 * and visualizing 'calculateVoting' in the terminal being incremented each time
 */

const favouriteCoffeStoresById = async (req, res) => {

    if (req.method === "PUT") {

        try {
            const { id } = req.body;

            if (id) {
                const records = await findRecordByFilter(id)
                    
                if (records.length !== 0) {

                    const record = records[0]

                    const calculateVoting = parseInt(record.vote) + 1;

                    console.log({ calculateVoting })
                    
                    res.json(records)
                }else{
                    res.json({ message: "Coffee Store Id doesn't exist", id})
                }
                
            }else{
                res.status(400)
                res.json({ message: "Id is missing"})
            }


        } catch (error) {
            res.status(500);
            res.json({ message: "Error upvoting coffee store", error})
        }
    }
}

export default favouriteCoffeStoresById;