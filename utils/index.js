/**
 * Discover-coffee-stores - version 4.03 -  utils > index js
 * - Fetaures:
 * 
 *    --> Building the 'fetcher' function
 * 
 * Note: This will include an API call and a util function
 * for empty verification just in case to handle errors
 */

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 
}

export const fetcher = (url) => fetch(url).then((res) => res.json());
