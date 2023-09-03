import React from "react";
import styles from '../styles/banner.module.css';

/**
 * Discover-coffee-stores - version 1.02 -  Banner
 * - Fetaures:
 * 
 *    --> Adding 'styles.buttonWrapper' 
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
            <div className={styles.buttonWrapper }>
                <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
            </div>
        </div>
    )
}

export default Banner;