/**
 * Discover-coffee-stores - version 2.08 -  use.track.location
 * - Fetaures:
 * 
 *    --> Building this hook pops the window to ask user 
 *      for the location
 * 
 * Note: This hooks pops the window to ask user for the location
 * 
*/

import { useState } from "react"

const useTrackLocation = () => {
    const [ locationErrorMsg, setLocationErrorMsg ] = useState('')
    const [ latLong, setlatLong ] = useState('')

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setlatLong(`${latitude},${longitude}`);
        setLocationErrorMsg('')
    }
    
    const error = () => {
        setLocationErrorMsg("Unable to retrieve your location")
    }

    const handleTrackLocation = () => {
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser");
          } else {
            // status.textContent = "Locating…";
            navigator.geolocation.getCurrentPosition(success, error);
          }
    }

    return {
        latLong,
        handleTrackLocation,
        locationErrorMsg
    }

}

export default useTrackLocation;