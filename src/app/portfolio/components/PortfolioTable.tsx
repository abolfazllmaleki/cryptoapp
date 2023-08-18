'use client'
import React, { useState } from 'react'
import styles from '../styles/PortfolioTable.module.scss';
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "C:/Users/abolfazl/Desktop/projects/crypto project/app/cryptoapp/src/app/store/store";



const PortfolioTable:React.FC = () => {

    const dispatch:AppDispatch = useAppDispatch();
    const portfolioData = useSelector((state: RootState) => state.portfolioData.Asset)
    console.log(portfolioData)




  return (
    <div > 
        <div className={styles.container}>
            <div>Portfolio</div>
            <div>
                {portfolioData.map(i=>
                <div className={styles.fullrow}>
                    <img className={styles.logo} src={i.logo}/>
                    <div className={styles.row}> 
                    
                          <p>{i.coin}</p><p>{i.amount} {i.Symbol}</p> 
                    

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