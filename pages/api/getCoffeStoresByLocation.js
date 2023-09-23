import { fetchCoffeeStores } from "../../lib/coffee.stores";
/**
 * Discover-coffee-stores - version 2.14 -  getCoffeeStoresByLocation
 * - Fetaures:
 * 
 *    --> Building 'getCoffeeStoresByLocation' serveless function
 * 
 * Note: By implementing the action by the useReducer it makes 
 * the state of the view stores to maintain event when i go
 * to other page and come back
 * 
 *   http://localhost:3000/api/getCoffeStoresByLocation?latLong=43.653833032607096%2C-79.37896808855945&limit=30
 * 
*/

const getCoffeeStoresByLocation = async (req, res) => {

    try {
        //configure latLong and limit 
        const { latLong, limit } = req.query;
        const response = await fetchCoffeeStores(latLong, limit);
       
        res.status(200);
        res.json(response);
    } catch (err) {
        console.log('there is an error', err)
        res.status(500);
        res.json({ message: "Oh no! Something went wrong", err })
       
    }
    

    //return
}

export default getCoffeeStoresByLocation;