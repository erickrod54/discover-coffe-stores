/**
 * Discover-coffee-stores - version 2.09 -  use.track.location
 * - Fetaures:
 * 
 *    --> Implementing 'isFindingLocation' to change from 
 *        Locating to View stores nearby  
 * 
 * Note: This hooks pops the window to ask user for the location
 * 
*/

import { useState } from "react"

const useTrackLocation = () => {
    const [ locationErrorMsg, setLocationErrorMsg ] = useState('');
    const [ latLong, setlatLong ] = useState('');
    const [ isFindingLocation, setIsFindingLocation ] = useState(false);

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setlatLong(`${latitude},${longitude}`);
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
        latLong,
        handleTrackLocation,
        locationErrorMsg,
        isFindingLocation
    }

}

export default useTrackLocation;