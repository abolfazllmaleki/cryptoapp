'use client'
import { url } from "inspector"
import React from "react"
import styles from './styles/Hero.module.scss'
import img from '../../../app/hero-banner.png'

export const Hero = ()=>{
    return(
        <>
        <div className={styles.container}>
            <div>
                <h1>
                Buy & Sell Digital Assets In The Cryptex
                </h1>
                <h3>
                Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                </h3>
                <div className={styles.herobutton}>Get started now</div>
            </div>
            <div className={styles.heroimage} style={{backgroundImage:`url(${img.src})`}}>

            </div>


        

        </div>
        </>
    )
}