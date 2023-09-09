import React, { useContext } from "react";
import coffeeStores from './data/coffee-stores.json';


/**
 * Discover-coffee-stores - version 1.13 -  context js
 * - Fetaures:
 * 
 *    --> Importing and providing 'coffeeStores'
 * 
 * Note: This styles are grid layout based thinking in mobile
 * first
 */


const CoffeeStoresContext = React.createContext();

export const CoffeeStoresProvider = ({ children }) => {

    return(
        <CoffeeStoresContext.Provider
            value={{coffeeStores}}
        >
            {children}
        </CoffeeStoresContext.Provider>
    )
}

export const useCoffeeStoresContext = () => {

    return useContext(CoffeeStoresContext)
}