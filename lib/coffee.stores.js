import { createApi } from 'unsplash-js';
/**
 * Discover-coffee-stores - version 2.04 -  lib > coffee.stores
 * - Fetaures:
 * 
 *    --> Building API call for 'getPhotosListCoffeeStores'
 * 
 * Note: This styles are grid layout based thinking in mobile
 * first
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
          perPage: 1,
        });
        
        const unplashResults = photos.response.results.map((result) => result.urls["small"]);

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
    return data.results.map((result) => {

        return{
            ...result,
            imgUrl: photos[0]
        }
    });
  };
  