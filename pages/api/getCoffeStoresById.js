import { findRecordByFilter } from "../../lib/airtable";


/**
 * Discover-coffee-stores - version 3.15 -  getCoffeeStoreById
 * - Fetaures:
 * 
 *    --> Clearing 'getMinifiedRecords', 'table ' imports
 * 
 * Note: These imports will be use directly by 'findRecordByFilter'
 * at lib directory
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