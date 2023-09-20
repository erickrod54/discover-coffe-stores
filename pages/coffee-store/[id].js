import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Head from "next/head";
import styles from '../../styles/coffee.store.module.css'
import Image from "next/image";
import cls from 'classnames'
import { fetchCoffeeStores } from "../../lib/coffee.stores";

/**
 * Discover-coffee-stores - version 2.12 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Building 'findCoffeeStoreById' to make a condition
 *        flow
 * 
 * Note: this condition flow is created to get a value of the 
 * coffee store when the user click on the view stores near me
 * 
 * - this functionality is later will be modified to get coffe 
 * stores by id in the server side-
 * 
 * at this version the 'coffee-store' page will display the complete 
 * info of the pre render coffee stores.
 */

export async function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log("params", params);
  
    const coffeeStores = await fetchCoffeeStores();
    const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
      return coffeeStore.id.toString() === params.id; //dynamic id
    })

    return {
      props: {
        coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {}
      },
    };
  }
  
  export async function getStaticPaths() {
    const coffeeStores = await fetchCoffeeStores();
    const paths = coffeeStores.map((coffeeStore) => {
      return {
        params: {
          id: coffeeStore.id.toString(),
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
    const { address, dma,  name, imgUrl } = props.coffeeStore;
    
    console.log(' coffee store props ==>', props)
    return(
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Image className={styles.arrow} src="/statics/icons/arrowBack.svg" width="24" height="24"/>
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
                        <p className={styles.text}>{address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/places.svg" width="24" height="24"/>
                        <p className={styles.text}>{dma}</p>
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