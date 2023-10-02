/**
 * Discover-coffee-stores - version 3.17 -  favouriteCoffeStoresById
 * - Fetaures:
 * 
 *    --> Destructuring 'id' from the body
 * 
 *    --> Put ( updating ) to get the 'id'
 * 
 * Note: This fix will verify the id before creating or finding
 * a coffee store
 */

const favouriteCoffeStoresById = (req, res) => {

    if (req.method === "PUT") {
        const { id } = req.body;
        res.json({ message: "this works", id})
    }
}

export default favouriteCoffeStoresById;