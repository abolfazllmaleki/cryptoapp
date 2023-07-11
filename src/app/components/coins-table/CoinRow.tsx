'use client';
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import TopCoinsData from './TopCoinsData'
import styles from './styles/CoinRow.module.scss'
import CoinMiniChart from './CoinMiniChart'
interface CoinRowProps{
  icon:string
  symbol:string
  coinName:string
  rank:number
  price:number
  tf:number,
  marketCap:number,
}

const page :React.FC<CoinRowProps> = ({icon,symbol,coinName,rank,price,tf,marketCap}) => {

  const checktf=()=>{
    if(tf<0){
      return <div className={styles.tfred} > {tf}</div>
    }else{
      return <div className={styles.tfgreen} >+{tf}</div>
    }
  }
    const setNum =(x:number)=>{

      if(x/1000000000>1){
        return (x/1000000000).toFixed(2) + ' billion'
      }else{
        return (x/1000000).toFixed(2)+ ' million'
      }

    }
 
    return (
    <div>
      <div className={styles.coinrow}>
        <div className='name'>{rank} - {coinName} ({symbol})
         <img className={styles.logo} src={icon}/>
          </div>
        <div className='price'>${Number(price).toFixed(2)}</div>
        <div className='market'>${setNum(marketCap)}</div>
        {checktf()}
        <div className={styles.chartss}><CoinMiniChart/></div>

        
      </div>
    </div>
  )
}

export default page;
