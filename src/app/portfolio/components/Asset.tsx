'use client'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import styles from '../styles/Asset.module.scss';


const Asset :React.FC = () => {

    const [shown,setshown]=useState(0)
    const buttonShow=()=>{
        if(shown==1){
            return(
                <button className={styles.buttonhide} onClick={()=>{setshown(0)}}>*</button>
                

            )
        }else{
            return(
                <button className={styles.buttonshow} onClick={()=>{setshown(1)}}>withdra/depo</button>

            )
        }
    }



    const show=()=>{
        return(
            <div className={styles.depo}>
            <div className={styles.amountinput}>
                <p>amount:</p>
                <input type="number" alt='amount' />

            </div>
            <div className={styles.depowith}>
            <div className={styles.deposit}>
                <p>deposit</p>
            </div>
            <div className={styles.withdrawal}>
                <p>withdrawal</p>
            </div>

            </div>
            
        </div>

        )
            
            
        }

  

  return (
    <div className={styles.Asset}> 

        <div className={styles.add}>
            <p>total revenue</p>
            <p>$500</p>
            {buttonShow()}
            
        </div>
        {shown==1?show():''}

        <div className={styles.revenue} >
            <div>
                <p>profit/loss</p>
                <p>80$</p>
            </div>
            <div>
                <p>Blance</p>
                <p>70$</p>
            </div>

            
        </div>
    </div>
  )
}

export default Asset;