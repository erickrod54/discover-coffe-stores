import { findRecordByFilter, getMinifiedRecords, table } from "../../lib/airtable";


/**
 * Discover-coffee-stores - version 3.14 -  getCoffeeStoreById
 * - Fetaures:
 * 
 *    --> Refactoring 'findingCoffeStore' by 'findRecordByFilter'
 * 
 * Note: This refactor focus on get the 'findingCoffeStore' 
 * reusable by adding it to the features library.
 */

const getCoffeeStoreById = async (req, res) => {
    const { id } = req.query;

    try {
        if (id) {

            const records = await findRecordByFilter(id)

            if (records.length !== 0 ) {
                res.json(records)
            }
            else{
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