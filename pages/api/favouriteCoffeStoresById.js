import { findRecordByFilter } from "../../lib/airtable";
/**
 * Discover-coffee-stores - version 3.19 -  favouriteCoffeStoresById
 * - Fetaures:
 * 
 *    --> Building a flow to avoid empty records when retriving 
 *        using PUT method
 * 
 *    --> Importing 'findRecordByFilter'
 * 
 * Note: This fix will verify the id before creating or finding
 * a coffee store
 */

const favouriteCoffeStoresById = async (req, res) => {

    if (req.method === "PUT") {

        try {
            const { id } = req.body;

                const records = await findRecordByFilter(id)
                    
                if (records.length !== 0) {
                    res.json(records)
                }else{
                    res.json({ message: "Coffee Store Id doesn't exist", id})
                }

        } catch (error) {
            res.status(500);
            res.json({ message: "Error upvoting coffee store", error})
        }
    }
}

export default favouriteCoffeStoresById;