import React from "react";
import { useRouter } from 'next/router'
import Link from "next/link"
import coffeeStoresData from '../../data/coffee-stores.json'
import Head from "next/head";

/**
 * Discover-coffee-stores - version 2.00 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Making the paths dynamic
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

export function getStaticProps(staticProps) {

    const params = staticProps.params

    console.log('params ==>', params)
    return{
        props: {
            coffeeStore: coffeeStoresData.find(coffeeStore => {
                /**convert to string cause the id in the json it is an integer, and i'm comparing 
                 * with the param that is a string */
                return coffeeStore.id.toString() === params.id
            })
        }
    }
}

export function getStaticPaths() {
    
    const paths = coffeeStoresData.map((coffeeStore) => {
        return{
            params:{
                id: coffeeStore.id.toString()
            }
        }
    })
    return {
      paths,
      fallback: true,
    };
  }

const CoffeStore = (props) => {

    const router = useRouter();
    //console.log("router ==>", router)

    
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const { address, name, neighbourhood} = props.coffeeStore;
    
    console.log(' coffee store props ==>', props)
    return(
        <>
            <div> Coffe Store Page, the page is - {router.query.id}</div>
            <Head>
                <title>{name}</title>
            </Head>
            <Link href="/">
                Back to Home
            </Link>
            <p>{address}</p>
            <p>{name}</p>
            <p>{neighbourhood}</p>
        </>
    )
}

export default CoffeStore;