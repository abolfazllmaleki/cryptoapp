'use client';
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import TopCoinsData from './TopCoinsData'
import styles from './styles/CoinRow.module.scss'
import CoinMiniChart from './CoinMiniChart'
import { useRouter } from 'next/navigation';
import { FC } from 'react';
interface CoinRowProps{
  icon:string
  symbol:string
  coinName:string
  rank:number
  price:number
  tf:number,
  marketCap:number,
  chart:Array<number>,
  id:string|undefined|null|number
}

const page :FC<CoinRowProps> = ({icon,symbol,coinName,rank,price,tf,marketCap,chart,id}) => {
  const router=useRouter()

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
    <div >

      <div className={styles.coinrow}>
        <div className={styles.names} onClick={()=>{router.push(`${id}`)}}>{rank} - {coinName} ({symbol})
         <img className={styles.logo} src={icon}/>
          </div>
        <div className='price'>${Number(price).toFixed(2)}</div>
        <div className='market'>${setNum(marketCap)}</div>
        {checktf()}
        <div className={styles.chartss}><CoinMiniChart chart={chart}/></div>

        
      </div>
    </div>
  )
}

export default page;
