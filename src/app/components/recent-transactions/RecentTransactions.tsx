'use client';
import React, { useEffect, useState } from 'react'
import styles from './styles/RecentTransactions.module.scss'
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "../../store/store";
import { GetToday } from '@/app/utils/GetToday';
import { useRouter } from 'next/navigation';


const RecentTransactions:React.FC = ()=>{
    const dispatch: AppDispatch = useAppDispatch();
const portfolioData :any[]= useSelector((state: RootState) => state.portfolioData.transactions.slice(0,5||state.portfolioData.transactions.length))
const router = useRouter()

    console.log(portfolioData)




    return(
        <div className={styles.container}>
            <div>recent transactions</div>
            <div>
                {portfolioData.map(i=>
                <div className={styles.fullrow} onClick={()=>{router.push(`/${i.uuid}`)}} key={i.uuid}>
                    <img className={styles.logo} src={i.logo}/>
                    <div className={styles.row}>  
                          <p>{i.transactionType} {i.coin}</p>
                          <p className={styles.small}>amount of {i.amount} on {i.date} </p>
                      </div>
                </div>

                )
                }
                
            </div>


        </div>

    )
}
export default RecentTransactions