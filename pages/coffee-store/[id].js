import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Head from "next/head";
import styles from '../../styles/coffee.store.module.css'
import Image from "next/image";
import cls from 'classnames'
import { fetchCoffeeStores } from "../../lib/coffee.stores";

/**
 * Discover-coffee-stores - version 2.04 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Clearing 'neighbourhood' from the destructure API.
 * 
 *    --> Adding 'Address' and 'dma'
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

export async function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log("params", params);
  
    const coffeeStores = await fetchCoffeeStores();
    return {
      props: {
        coffeeStore: coffeeStores.find((coffeeStore) => {
          return coffeeStore.fsq_id.toString() === params.id; //dynamic id
        }),
      },
    };
  }
  
  export async function getStaticPaths() {
    const coffeeStores = await fetchCoffeeStores();
    const paths = coffeeStores.map((coffeeStore) => {
      return {
        params: {
          id: coffeeStore.fsq_id.toString(),
        },
      };
    });
    return {
      paths,
      fallback: true,
    };
  }

const CoffeStore = (props) => {

    const router = useRouter();
   
    const handleUpvoteButton = () => {
        return console.log('up vote !!')
    }

    
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const { location, name, imgUrl } = props.coffeeStore;
    
    console.log(' coffee store props ==>', props)
    return(
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">
                            Back to Home
                        </Link>
                    </div>   
                    <div className={styles.nameWrapper }>
                        <div className={styles.name}>
                            <p>{name}</p>            
                        </div>
                    </div>                           
                    <Image src={imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} width={600} height={360} className={styles.storeImg} alt={name}/>
                </div>
                <div className={cls("glass",styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/nearMe.svg" width="24" height="24"/>
                        <p className={styles.text}>{location.address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/places.svg" width="24" height="24"/>
                        <p className={styles.text}>{location.dma}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/star.svg" width="24" height="24"/>
                        <p className={styles.text}>1</p>
                    </div>

                    <button className={styles.upvoteButton} onClick={handleUpvoteButton}>Up vote!!</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeStore;