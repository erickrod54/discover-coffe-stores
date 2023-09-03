import React from "react";
import Link from "next/link"

/**
 * Discover-coffee-stores - version 1.01 -  NextJs
 * - Fetaures:
 * 
 *    --> Building NextJs dynamic route
 * 
 * Note: this route is created in order to switch 
 * between dynamic routes.
 */

const NextJs = () => {

    return(
        <>
            <div>Welcome to Next Js with Erick</div>
            <Link href="/">
                Back to Home
            </Link>
        </>
    )
}

export default NextJs;