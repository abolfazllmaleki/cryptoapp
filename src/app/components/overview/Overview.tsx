'use client';
import React, { useEffect, useState } from 'react'
import styles from '../overview/styles/Overview.module.scss';
import { CoinChart } from '../coin-chart/CoinChart';
import { ConvertToUsd } from '@/app/utils/ConvertToUsd';
import { Link } from 'react-router-dom';


interface OverviewProps{
  id:string
}
const Overview :React.FC<OverviewProps> = ({id='Qwsogvtv82FCd'}) => {


  let [Overview,setOverview]=useState()
  let [Time,setTime]=useState('24h')
  const GetData = async()=>{
    const response = await fetch (`https://api.coinranking.com/v2/coin/${id}?timePeriod=${Time}`)
    const x= await response.json().then((i)=>{return i.data.coin })
    setOverview(x)
    console.log(Overview)
    }

  useEffect(()=>{
    GetData()
  },[Time])


  const handleTimePeriod=(x)=>{

    switch(x){
      case 24:setTime('24h')
      break
      case 7:setTime('7d')
      break
      case 30:setTime('30d')
      break
      case 365:setTime('1y')
      break
      }
    }

  
  
  let chartP=()=>{
    if(Overview!=undefined){
      return <CoinChart spark={Overview!=undefined?Overview.sparkline:[2,3]} time={Time}/>
    }
  }



  
  return (
    <>
    <div className={styles.overvieww}>

    <div >
        <div className={styles.des}>
        <h1>{Overview!=undefined?Overview.name:'ss'}</h1>
        
        <p>{Overview!=undefined?Overview.description:'ss'}</p>
        

        </div>

        
        <div className={styles.timefield}>
          <button onClick={()=>handleTimePeriod(24) }>24h</button>
          <button onClick={()=>handleTimePeriod(7)}>7d</button>
          <button onClick={()=>handleTimePeriod(30)}>1m</button>
          <button onClick={()=>handleTimePeriod(365)}>1y</button>
        </div>

        
        <div className={styles.charts}>
        {chartP()}
          <div className={styles.info}>
            <p>marketCap:  {Overview!=undefined?ConvertToUsd(Overview.marketCap):'ss'}</p>
            <p>number Of Exchanges:   {Overview!=undefined?Overview.numberOfExchanges:'ss'}</p>
            <p>number Of Markets:  {Overview!=undefined?Overview.numberOfMarkets:'ss'}</p>
            <p>price:  {Overview!=undefined?ConvertToUsd(Overview.price):'ss'}</p>
            <p>change:  {Overview!=undefined?Overview.change:'ss'}</p>
            <p>website:  {Overview!=undefined?Overview.websiteUrl:'ss'}</p>
          </div>
            

        </div>

        

    </div>


    </div>
    </>
  )
}

export default Overview;
