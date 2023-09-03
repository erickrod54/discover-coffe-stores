import React from "react";
import { useRouter } from 'next/router'
import Link from "next/link"


/**
 * Discover-coffee-stores - version 1.02 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Building '[id]' dynamic route
 * 
 * Note: conventions: [id] the name of the js file under 
 * the pages directory creates a dynamic route that can be
 * acceced by the hook 'useRouter', by this component i can
 * see how whatever value that comes after 
 * 
 *      /coffee-sote/'ranmdom value' 
 * 
 * gets reflected as '[id]'
 */

const CoffeStore = () => {

    const router = useRouter();
    console.log("router ==>", router)

    return(
        <>
            <div> Coffe Store Page, the page is - {router.query.id}</div>
            <Link href="/">
                Back to Home
            </Link>
            <Link href="/coffee-store/dynamic">
                Go to Page Dynamic
            </Link>
        </>
    )
}

export default CoffeStore;