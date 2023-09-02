import React from "react";
import styles from '../styles/banner.module.css';

/**
 * Discover-coffee-stores - version 1.01 -  Banner
 * - Fetaures:
 * 
 *    --> Building Banner Component 
 * 
 * 
 * Notes: here i receive the props and start tp apply it them
 */

const Banner = (props) => {

    return(
        <div className={styles.container}> 
             <h1 className={styles.title}> 
                 <span className={styles.title1}> Coffe </span> 
                 <span className={styles.title2}> Connoisseur </span>
            </h1>
            <p className={styles.subTitle}>Discover your local coffe shops!</p>
            <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
        </div>
    )
}

export default Banner;