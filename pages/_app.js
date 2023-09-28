import { StrictMode } from 'react';
import '../styles/globals.css';
import { CoffeeStoresProvider } from '../context';

/**
 * Discover-coffee-stores - version 3.06 -  MyApp
 * - Fetaures:
 * 
 *    --> Taking 'StrictMode' off and switching it from
 *        'next.config.js' 
 * 
 * Note: By building this page Document allows to change global
 * setting as the font and other properties applied to all the pages 
 * 
 */

function MyApp({ Component, pageProps }) {
  return(
      <CoffeeStoresProvider>
        <Component {...pageProps} />
      </CoffeeStoresProvider>
  )
}

export default MyApp
