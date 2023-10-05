import { findRecordByFilter } from "../../lib/airtable";


/**
 * Discover-coffee-stores - version 4.03 -  getCoffeeStoreById
 * - Fetaures:
 * 
 *    --> Fixing '404' error
 * 
 * Note: to solve this issue i had to test the serveless function
 * without any content as initially was tested
 * 
 *      res/json({ message: 'hello there'})
 * 
 * by doing this and getting back the original code the API 
 * response change and retrieve the coffeeStore
 */

const getCoffeeStoreById = async (req, res) => {
    const { id } = req.query;
    //console.log('the id is  ===>', id)

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