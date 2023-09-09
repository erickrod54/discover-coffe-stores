import { StrictMode } from 'react';
import '../styles/globals.css';
import { CoffeeStoresProvider } from '../context';

/**
 * Discover-coffee-stores - version 1.12 -  MyApp
 * - Fetaures:
 * 
 *    --> Disabling strict mode.
 * 
 *    --> Wrapping the app with the provider. 
 * 
 * Note: By building this page Document allows to change global
 * setting as the font and other properties applied to all the pages 
 * 
 */

function MyApp({ Component, pageProps }) {
  return(
    <StrictMode strict={false}>
      <CoffeeStoresProvider>
        <Component {...pageProps} />
      </CoffeeStoresProvider>
    </StrictMode>
  )
}

export default MyApp
