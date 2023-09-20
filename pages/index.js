import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Banner, Card } from '../components/index.components'
import Image from 'next/image';
import { fetchCoffeeStores } from '../lib/coffee.stores';
import useTrackLocation from '../hooks/use.track.location';
import { useEffect, useState } from 'react';
/**
 * Discover-coffee-stores - version 2.12 -  Home page ( index js )
 * - Fetaures:
 * 
 *    --> Building the error state.
 * 
 *    --> Rendering 'coffeeStores' ( comes from the server API by user Location )
 * 
 *    --> Rendering 'props.coffeeStores' ( pre Render coffee stores )
 * 
 * Note: Refer to lib > coffee.stores
 * 
*/


export async function getStaticProps(context) {

      const coffeeStores = await fetchCoffeeStores();
      return {
        props: {
          coffeeStores: coffeeStores,
        }
      }
}




export default function Home(props) {
  
  //console.log('coffeeStores pre render ==>', props)
  
  const { handleTrackLocation, latLong, locationErrorMsg, isFindingLocation } = useTrackLocation()

  const [ coffeeStores, setcoffeeStores ] = useState('');
  const [ coffeeStoresError, setCoffeeStoresError ] = useState(null);
   
  console.log({ latLong, locationErrorMsg });

 useEffect(() => {
  async function setCoffeeStoresByLocation() {
    if (latLong) {
      try {
        const fetchedCoffeeStores = await fetchCoffeeStores(latLong, 20);
        console.log({ fetchedCoffeeStores });
        setcoffeeStores(fetchedCoffeeStores);
        //set coffee stores
      } catch (error) {
        //set error
        setCoffeeStoresError(error)
      }
    }
  }
  setCoffeeStoresByLocation();
}, [latLong]);

  const handleOnBannerBtnClick = () => {
    console.log("hi banner button!!");
    handleTrackLocation();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText={isFindingLocation ? "Locating..." : "View stores nearby"} handleOnClick={handleOnBannerBtnClick}/>
        { locationErrorMsg && <p> Something went wrong: {locationErrorMsg} </p>}
        { coffeeStoresError && <p> Something went wrong: {coffeeStoresError}</p>}
        <div className={styles.heroImage}>
          <Image src='/statics/hero_image.png' width={650} height={550}/>
        </div>

        {coffeeStores.length > 0 && (
          <div className={styles.titleAndlist}>
            <h2 className={styles.heading2}>Stores near me</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.filter((diferrentDunkin) => diferrentDunkin.name !== `Dunkin'` && diferrentDunkin.name !== `Starbucks`).map((coffeeStore) => {

                return(
                  
                  <Card 
                    key={coffeeStore.id}
                    className={styles.card}
                    name={coffeeStore.id === `Dunkin'` ? 'duplicate' : coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    }
                    href={`/coffee-store/${coffeeStore.id}`}
                  />
                )
              })}
            </div>
          </div>
        )}

      <div className={styles.sectionWrapper}>
          {props.coffeeStores.length > 0 && (
            <>
              <h2 className={styles.heading2}>Boynton coffee stores</h2>
              <div className={styles.cardLayout}>
                {props.coffeeStores.map((coffeeStore) => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      imgUrl={
                        coffeeStore.imgUrl ||
                        "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                      }
                      href={`/coffee-store/${coffeeStore.id}`}
                      className={styles.card}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>

    </div>
  )
}
