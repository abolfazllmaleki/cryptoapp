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
                <button className={styles.buttonhide} onClick={()=>{setshown(0)}}><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gNy43MTg3NSA2LjI4MTI1IEwgNi4yODEyNSA3LjcxODc1IEwgMjMuNTYyNSAyNSBMIDYuMjgxMjUgNDIuMjgxMjUgTCA3LjcxODc1IDQzLjcxODc1IEwgMjUgMjYuNDM3NSBMIDQyLjI4MTI1IDQzLjcxODc1IEwgNDMuNzE4NzUgNDIuMjgxMjUgTCAyNi40Mzc1IDI1IEwgNDMuNzE4NzUgNy43MTg3NSBMIDQyLjI4MTI1IDYuMjgxMjUgTCAyNSAyMy41NjI1IFoiPjwvcGF0aD4KPC9zdmc+"/></button>
                

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
                
                <p>$</p>
                <input type="number" alt='amount' />

            </div>
            <div className={styles.depowith}>
            <div className={styles.deposit}>
                <button>Deposit</button>
            </div>
            <div className={styles.withdrawal}>
                <button>
                withdrawal
                    </button>
            </div>

            </div>
            
        </div>

        )
            
            
        }

  

  return (
    <div className={styles.Asset}> 

        <div className={styles.add}>
            <p> Total Revenue</p>
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