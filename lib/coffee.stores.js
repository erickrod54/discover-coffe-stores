import { createApi } from 'unsplash-js';
/**
 * Discover-coffee-stores - version 2.06 -  lib > coffee.stores
 * - Fetaures:
 * 
 *    --> Switching from '...results' to aliases 
 * 
 * Note: Switching from '...results' to aliases in order to bring
 * just the information that i need to the single coffe store
*/


const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (query, latLong, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
  };

  
const getPhotosListCoffeeStores = async () => {

      const photos = await unsplash.search.getPhotos({
          query: 'coffee shop',
          page: 1,
          perPage: 10,
        });
        
        const unplashResults = photos.response.results.map((result) => result.urls["small"]);

        //console.log(' unplashResults from the API ==>', unplashResults)

        return unplashResults;
  }
  
  
  export const fetchCoffeeStores = async () => {


    const url = getUrlForCoffeeStores('coffee', '26.52949601659744,-80.06172644425169', 14);
    const photos = await getPhotosListCoffeeStores();
    
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: process.env.FOURSQUARE_API_KEY,
      },
    };
  
    const response = await fetch(url, options);
    const data = await response.json();
  
    //console.log(data.results); // Logging the results
    return data.results.map((result, index) => {

        return{
            id: result.fsq_id,
            address: result.location.address,
            dma:result.location.dma,
            name: result.name,
            imgUrl: photos[index % photos.length], // Cycle through photos if fewer than 10 - in fact the result is fewer than 10, another approach i use a higher number 15+
        }
    });
  };
  