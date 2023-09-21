/**
 * Discover-coffee-stores - version 2.13 -  utils > index js
 * - Fetaures:
 * 
 *    --> Building 'isEmpty' function in order to verify 
 *        data in coffee store page
 * 
 * Note: This will include an API call and a util function
 * for empty verification just in case to handle errors
 */

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 
}