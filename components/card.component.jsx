import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/card.module.css';
import cls from 'classnames'

/* Dicover-coffee-stores - version 1.07 - Card - 
* Features: 
*
*
*    --> Building and styling 'Card'.
*
*Note: this is the initial stylesheet 
*
**/


const Card = (props) => {
    return(
        <Link href={props.href}>
            <a className={styles.cardLink}>
                <div className={cls("glass", styles.container)}>
                    <div className={styles.cardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{props.name}</h2>
                    </div>
                    <div className={styles.cardImageWrapper}>
                        <Image className={styles.cardImage} src={props.imgUrl} width={260} height={160}/>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card;