import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Banner, Card } from '../components/index.components'
import Image from 'next/image'
import { useCoffeeStoresContext } from '../context';


/**
 * Discover-coffee-stores - version 1.12 -  Home page ( index js )
 * - Fetaures:
 * 
 *    --> testing context api
 * 
 * Note: This styles are grid layout based thinking in mobile
 * first
 */


const handleOnBannerBtnClick = () => {
  console.log("hi banner button!!")
}

export default function Home() {

  const { test } = useCoffeeStoresContext();

  console.log('coffeeStores ==>', test)

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick}/>
        <div className={styles.heroImage}>
          <Image src='/statics/hero_image.png' width={650} height={550}/>
        </div>
        <div className={styles.cardLayout}>
          <Card 
            className={styles.card}
            name='DarkHorse Coffee'
            imgUrl='/statics/hero_image.png'
            href='/coffee-store/darkhorse-coffee'
          />
          <Card 
            className={styles.card}
            name='DarkHorse Coffee'
            imgUrl='/statics/hero_image.png'
            href='/coffee-store/darkhorse-coffee'
          />
        </div>
      </main>

    </div>
  )
}
