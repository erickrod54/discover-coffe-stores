import { getMinifiedRecords, table } from "../../lib/airtable";

/**
 * Discover-coffee-stores - version 3.13 -  getCoffeeStoreById
 * - Fetaures:
 * 
 *    --> Implementing 'findingCoffeeStoreRecords' code 
 *        previously made in 'createCoffeeStore'
 * 
 *    --> Testing API retrieving the whole record by 'id'
 * 
 *    --> As 'findingCoffeeStoreRecords' is 'await' the serveless 
 *        function becomes in 'async'
 * 
 * Note: An 'Id' from the airtable is taken to test it in postman
 */

const getCoffeeStoreById = async (req, res) => {
    const { id } = req.query;

    try {
        if (id) {

            const findingCoffeeStoreRecords = await table.select({
                filterByFormula: `id="${id}"`
            }).firstPage();
        
            console.log({ findingCoffeeStoreRecords })

            if (findingCoffeeStoreRecords.length !== 0) {
                const records = getMinifiedRecords(findingCoffeeStoreRecords)
                res.json(records)
            }else{
                res.json({ message: `id could not be found`})
            }

        }else{
            res.status(400);
            res.json({ message: "Id is missing"})
        }
        
    } catch (error) {
        res.status(500)
        res.json({ message: 'Something went wrong', error })
    }
};

export default getCoffeeStoreById;