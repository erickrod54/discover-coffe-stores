import React, { useContext } from "react";
//import coffeeStores from './data/coffee-stores.json';


/**
 * Discover-coffee-stores - version 1.12 -  context js
 * - Fetaures:
 * 
 *    --> Building context js
 * 
 * Note: This styles are grid layout based thinking in mobile
 * first
 */


const CoffeeStoresContext = React.createContext();

const test = 'coffee stores api works!!'

export const CoffeeStoresProvider = ({ children }) => {

    return(
        <CoffeeStoresContext.Provider
            value={{test}}
        >
            {children}
        </CoffeeStoresContext.Provider>
    )
}

export const useCoffeeStoresContext = () => {

    return useContext(CoffeeStoresContext)
}