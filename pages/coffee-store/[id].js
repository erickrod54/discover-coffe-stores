import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Head from "next/head";
import styles from '../../styles/coffee.store.module.css'
import Image from "next/image";
import cls from 'classnames'
import { fetchCoffeeStores } from "../../lib/coffee.stores";
import { useCoffeeStoresContext } from "../../context";
import { isEmpty } from "../../utils";

/**
 * Discover-coffee-stores - version 3.10 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Building 'voting' handler 
 * 
 * Note: This is made in order to store the data, and make 
 * the 'vote' persistent so i can get the value each time 
 * it gets updated
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

const CoffeStore = (initialProps) => {

    const router = useRouter();
  
    
    
    if (router.isFallback) {
      return <div>Loading...</div>
    }
    
    
    //console.log(' coffee store props ==>', initialProps)
    
    const id = router.query.id;
    
  const [coffeeStore, setCoffeeStore] = useState(initialProps.coffeeStore);
  
  const {
    state: { coffeeStores },
  } = useCoffeeStoresContext();
  
    const handleCreateCoffeeStore = async (coffeeStore) => {
      try {
        const { id, name, address, dma, vote, imgUrl } = coffeeStore;
        const response = await fetch("/api/createCoffeeStore", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            name,
            address: address || "", 
            dma: dma || "", 
            vote: 0, 
            imgUrl
          }),
        });
        
        const dbCoffeeStore = await response.json();
        console.log({ dbCoffeeStore });
      } catch (err) {
        console.error("Error creating coffee store", err);
      }
    };
    
    
    useEffect(() => {
      if (isEmpty(initialProps.coffeeStore)) {
        if (coffeeStores.length > 0) {
          const coffeeStoreFromContext = coffeeStores.find((coffeeStore) => {
            return coffeeStore.id.toString() === id; //dynamic id
          });
          
          if (coffeeStoreFromContext) {
            setCoffeeStore(coffeeStoreFromContext);
            handleCreateCoffeeStore(coffeeStoreFromContext);
          }
        }
      } else {
        // SSG
        
        handleCreateCoffeeStore(initialProps.coffeeStore)
      }
    }, [id, initialProps, initialProps.CoffeStore]);
    
    const { name, address, dma, imgUrl } = coffeeStore;
    
    const [ voting, setVotingCount ] = useState(1);
    
    const handleUpvoteButton = () => {
      console.log('up vote !!')
      let count = voting + 1;
      setVotingCount(count)
  }
    
    
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
                        <p className={styles.text}>{voting}</p>
                    </div>

                    <button className={styles.upvoteButton} onClick={handleUpvoteButton}>Up vote!!</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeStore;