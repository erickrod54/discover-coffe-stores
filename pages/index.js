import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Banner } from '../components/index.components'
import Image from 'next/image'


/**
 * Discover-coffee-stores - version 1.01 -  Home page ( index js )
 * - Fetaures:
 * 
 *    --> Importing and placing Banner Component 
 * 
 * Note: i create here the handlers and apply prop drilling to 
 * make the component re-usable
 */


const handleOnBannerBtnClick = () => {
  console.log("hi banner button!!")
}

export default function Home() {
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
      </main>

    </div>
  )
}
