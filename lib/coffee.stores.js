/**
 * Discover-coffee-stores - version 1.17 -  lib > coffee.stores
 * - Fetaures:
 * 
 *    --> Building server call for the endpoint API
 * 
 *    --> Writting interpolation to change the url params
 * 
 * Note: This styles are grid layout based thinking in mobile
 * first
*/

const getUrlForCoffeeStores = (query, latLong, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
  };

  
  
  export const fetchCoffeeStores = async () => {

    const url = getUrlForCoffeeStores('coffee', '26.52949601659744,-80.06172644425169', 14);
  
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: process.env.FOURSQUARE_API_KEY,
      },
    };
  
    const response = await fetch(url, options);
    const data = await response.json();
  
    console.log(data.results); // Logging the results
    return data.results;
  };
  