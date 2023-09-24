/**
 * Discover-coffee-stores - version 2.14 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Authenticanting with the airtable API
 * 
 *    --> Building table and Testing in it.
 * 
 *    --> Building 'createCoffeeStore' and testing the API
 * 
 * Note: table will be apppear in the console as it is back end 
 * code, 
 *      and 
 * "Hi there" message will appear as result of the 
 * api url tested in "http://localhost:3000/api/createCoffeeStore"
 * in the browser
 */

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY );

const table = base('coffee-stores');

console.log({ table })

const createCoffeeStore = (req, res) => {
    res.json({ message: "Hi there"})
};

export default createCoffeeStore;