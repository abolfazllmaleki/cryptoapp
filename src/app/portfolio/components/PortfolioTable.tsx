'use client'
import React, { useState } from 'react'
import styles from '../styles/PortfolioTable.module.scss';
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "../../store/store";
import { useRouter } from 'next/navigation';


const PortfolioTable:React.FC = () => {

    const dispatch:AppDispatch = useAppDispatch();
    const portfolioData = useSelector((state: RootState) => state.portfolioData.Asset)
    console.log(portfolioData)
    const router = useRouter()



  return (
    <div > 
        <div className={styles.container}>
            <div>Portfolio</div>
            <div>
                {portfolioData.map((i:{
                    [x: string]: any;logo:any;coin:any;amount:any;Symbol:any
})=>
                <div className={styles.fullrow} onClick={()=>{router.push(`/${i.uuid}`)}} key={i.logo}>
                    <img className={styles.logo} src={i.logo}/>
                    <div className={styles.row}> 
                    
                          <p>{i.coin}</p>
                          <p>{i.amount} {i.Symbol}</p> 
                    

                    </div>

                </div>

                )
                }
                
            </div>


        </div>



    </div>
  )
};

export default PortfolioTable;