/**
 * Discover-coffee-stores - version 3.16 -  favouriteCoffeStoresById
 * - Fetaures:
 * 
 *    --> Building 'favouriteCoffeStoresById' serveless function
 * 
 *    --> Building the flow to only response when the method is
 *        "PUT"
 * 
 * Note: This fix will verify the id before creating or finding
 * a coffee store
 */

const favouriteCoffeStoresById = (req, res) => {

    if (req.method === "PUT") {
        res.json({ message: "this works"})
    }
}

export default favouriteCoffeStoresById;