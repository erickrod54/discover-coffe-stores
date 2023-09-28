import '../styles/globals.css';
import { CoffeeStoresProvider } from '../context';

/**
 * Discover-coffee-stores - version 3.07 -  MyApp
 * - Fetaures:
 * 
 *    --> Clearing 'StrictMode' import 
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
