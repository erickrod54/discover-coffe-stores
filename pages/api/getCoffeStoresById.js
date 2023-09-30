/**
 * Discover-coffee-stores - version 3.12 -  getCoffeeStoreById
 * - Fetaures:
 * 
 *    --> Testing API without the 'id'
 * 
 * Note: the test is for 'res.status(400)' that 
 * is part od the 'id' flow
 */

const getCoffeeStoreById = (req, res) => {
    const { id } = req.query;

    try {
        if (id) {
            res.json({ message: `id is created ${id}`})
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