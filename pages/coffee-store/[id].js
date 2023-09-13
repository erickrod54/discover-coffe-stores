import React from "react";
import { useRouter } from 'next/router'
import Link from "next/link"
import coffeeStoresData from '../../data/coffee-stores.json'
import Head from "next/head";
import styles from '../../styles/coffee.store.module.css'
import Image from "next/image";
import cls from 'classnames'

/**
 * Discover-coffee-stores - version 2.01 -  coffee-store-page
 * - Fetaures:
 * 
 *    --> Setting all the styles and layout for the coffee store
 *        page
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
   
    const handleUpvoteButton = () => {
        return console.log('up vote !!')
    }

    
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const { address, name, neighbourhood, imgUrl } = props.coffeeStore;
    
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
                    <Image src={imgUrl} width={600} height={360} className={styles.storeImg} alt={name}/>
                </div>
                <div className={cls("glass",styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/nearMe.svg" width="24" height="24"/>
                        <p className={styles.text}>{address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/places.svg" width="24" height="24"/>
                        <p className={styles.text}>{neighbourhood}</p>
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