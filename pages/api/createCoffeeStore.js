/**
 * Discover-coffee-stores - version 2.16 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Testing 'POST' flow
 * 
 * Note: the flow is being created with the 'if-else'
 * condition, the result can be visualized using 
 * 'postman' client - API tester -
 * 
 * by introducing 'http://localhost:3000/api/createCoffeeStore'
 * 
 * i will get a message to 'create' a coffeeStore and if it exists 
 * with the id of '0', i get an object from airtable, that will 
 * contain in 'fields' the information i am interested in.
 * 
 * this 'field' will be shaped in the next version by mapping them
 */

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY );

//var base = new Airtable({apiKey: 'patBuS90L8qsGpOe9.d8c6b5eb75a466e9b2bf673aa8bccb155a5181b511f3475160fad27d7c88057d'}).base(process.env.AIRTABLE_BASE_KEY);

const table = base('coffee-stores');

console.log({ table })

const createCoffeeStore = async (req, res) => {
    console.log({ table })
    //find a record

    const findingCoffeeStoreRecords = await table.select({
        filterByFormula:`id="0"`
    }).firstPage();

    console.log({ findingCoffeeStoreRecords })

    if (findingCoffeeStoreRecords.length !== 0) {
        res.json(findingCoffeeStoreRecords)
    }else{
    //create a record
        res.json({ message: "create a record"})    
    }
    
    if (req.method === 'POST') {
        res.json({ message: "Hi there"});
    } else {
        res.json({ message: 'method is GET'});
    }
};

export default createCoffeeStore;