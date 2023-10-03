/**
 * Discover-coffee-stores - version 3.18 -  favouriteCoffeStoresById
 * - Fetaures:
 * 
 *    --> Defining a 'status code' 500 for an error upvoting
 *        a coffee store
 * 
 * Note: This fix will verify the id before creating or finding
 * a coffee store
 */

const favouriteCoffeStoresById = (req, res) => {

    if (req.method === "PUT") {

        try {
            const { id } = req.body;
            res.json({ message: "this works", id})
        } catch (error) {
            res.status(500);
            res.json({ message: "Error upvoting coffee store", error})
        }
    }
}

export default favouriteCoffeStoresById;