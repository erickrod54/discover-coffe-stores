/**
 * Discover-coffee-stores - version 2.15 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Testing 'POST' and 'GET' flow
 * 
 * Note: the flow is being created with the 'if-else'
 * condition, the result can be visualized using 
 * 'postman' client - API tester -
 * 
 * by introducing 'http://localhost:3000/api/createCoffeeStore'
 */

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY );

const table = base('coffee-stores');

console.log({ table })

const createCoffeeStore = (req, res) => {
    console.log({ req })
    if (req.method === 'POST') {
        res.json({ message: "Hi there"});
    } else {
        res.json({ message: 'method is GET'});
    }
};

export default createCoffeeStore;