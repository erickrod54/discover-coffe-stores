import { useRouter } from "next/router"
import Head from 'next/head';

/**
 * Discover-coffee-stores - version 4.06 -  DynamicRoute
 * - Fetaures:
 * 
 *    --> Clearing logs
 * 
 * Note: By this route i can see how 'query' and 'router'
 * can modify values of the 'Head' ( a behavior similar 
 * to Helmet Component in React )
 */

const DynamicRoute = () => {

    const router = useRouter();
    const query = router.query.dynamic

    //console.log('value of the query => ', query)
    /**as this log i know that the id match with 'dynamic' ( in 
     * fact is my [dynamic] defined as the name of the file) */

    return(
        <div>
            <Head>
                <title>{query}</title>
            </Head>
            <div>Hi i am the dynamic route - {query}</div>
        </div>
    )
}

export default DynamicRoute