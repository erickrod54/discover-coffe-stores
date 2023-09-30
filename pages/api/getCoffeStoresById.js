/**
 * Discover-coffee-stores - version 3.11 -  getCoffeeStoreById
 * - Fetaures:
 * 
 *    --> Building 'getCoffeeStoreById'.
 * 
 *    --> Testing 'id' using 'postman'  
 * 
 * Note: the test consists in a sample id from the 'airtable'
 * store data as:
 * 
 *      '543e744b498e88f9b19fccfc'
 * 
 * then i build this 'file' and the 'api name' as:
 * 
 *  http://localhost:3000/api/getCoffeStoresById?id=543e744b498e88f9b19fccfc
 * 
 * then i send it and i should visualize in 'postman' the message:
 * 
 *  {
 * 
 *  "message": "id is created 543e744b498e88f9b19fccfc"
 *   
 *  }
 */

const getCoffeeStoreById = (req, res) => {
    const { id } = req.query;

    try {
        res.json({ message: `id is created ${id}`})
        
    } catch (error) {
        res.status(500)
        res.json({ message: 'Something went wrong', error })
    }
};

export default getCoffeeStoreById;