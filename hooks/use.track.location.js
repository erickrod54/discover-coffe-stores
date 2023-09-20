
import { useState } from "react"
import { ACTION_TYPES, useCoffeeStoresContext } from "../context";

/**
 * Discover-coffee-stores - version 2.12 -  use.track.location
 * - Fetaures:
 * 
 *    --> Implementing action types to set the latLong of the user  
 * 
 * Note: This ACTION_TYPES located in the context is created to be 
 * provided where is needed, and has a useReducer implementation
 * 
*/

const useTrackLocation = () => {
    
    const { dispatch } = useCoffeeStoresContext()

    const [ locationErrorMsg, setLocationErrorMsg ] = useState('');
    //const [ latLong, setlatLong ] = useState('');
    const [ isFindingLocation, setIsFindingLocation ] = useState(false);

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        //setlatLong(`${latitude},${longitude}`);
        dispatch({
            type: ACTION_TYPES.SET_LANG_LONG,
            payload: { latLong: `${latitude},${longitude}`}
        })
        setLocationErrorMsg('')
        setIsFindingLocation(false);
    }
    
    const error = () => {
        setIsFindingLocation(false);
        setLocationErrorMsg("Unable to retrieve your location")
    }

    const handleTrackLocation = () => {
        setIsFindingLocation(true);

        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser");
            setIsFindingLocation(false);
          } else {
            // status.textContent = "Locating…";
            navigator.geolocation.getCurrentPosition(success, error);
          }
    }

    return {
        //latLong,
        handleTrackLocation,
        locationErrorMsg,
        isFindingLocation
    }

}

export default useTrackLocation;