import React, { useContext, useReducer } from "react";
import coffeeStores from './data/coffee-stores.json';


/**
 * Discover-coffee-stores - version 2.12 -  context js
 * - Fetaures:
 * 
 *    --> Building 'ACTION_TYPES' - for action names.
 * 
 *    --> Building 'storeReducer' - to define action flow and set a payload
 * 
 *    --> Building 'initialState' - to manage multiple states and 'disptatch' mutator 
 *        and providing them ( as LatLong, and coffeeStores )
 * 
 *    --> Implementing 'useReducer'
 * 
 *    --> Providing  'coffeeStores', 'state', 'dispatch'
 *  
 * Note: At this version the reducer and values can be checkcked by the browser
 * in Components section
 */


const CoffeeStoresContext = React.createContext();

export const ACTION_TYPES = {
    SET_LANG_LONG: 'SET_LANG_LONG',
    SET_COFFEE_STORES: 'SET_COFFEE_STORES'
}

const storeReducer = (state, action ) => {
    switch (action.type) {
        case ACTION_TYPES.SET_LANG_LONG:{
            return {...state, latLong: action.payload.latLong }
        }
        
        case ACTION_TYPES.SET_COFFEE_STORES:{
            return {...state, coffeeStores: action.payload.coffeeStores }  
        }
        
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export const CoffeeStoresProvider = ({ children }) => {

    const initialState = {
        latLong:"",
        coffeeStores:[]
    }

    const [ state, dispatch ] = useReducer(storeReducer, initialState)

    return(
        <CoffeeStoresContext.Provider
            value={{
                coffeeStores,
                state,
                dispatch
            }}
        >
            {children}
        </CoffeeStoresContext.Provider>
    )
}

export const useCoffeeStoresContext = () => {

    return useContext(CoffeeStoresContext)
}