'use client';
import React, { useEffect, useState } from 'react'
import styles from '../overview/styles/Overview.module.scss';
import { CoinChart } from '../coin-chart/CoinChart';
import { ConvertToUsd } from '@/app/utils/ConvertToUsd';
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "C:/Users/abolfazl/Desktop/projects/crypto project/app/cryptoapp/src/app/store/store";
import { Link } from 'react-router-dom';
import {add} from '../../store/portfolio/index'
import { setRevenue } from '../../store/portfolio/index';
import { Provider } from "react-redux"
import { store } from '../../store/store'


interface OverviewProps{
  id:string
}
const Overview :React.FC<OverviewProps> = ({id='Qwsogvtv82FCd'}) => {
  const dispatch: AppDispatch = useAppDispatch();
  const portfolioData = useSelector((state: RootState) => state.portfolioData)
  const  [inputAmount,setinputAmount]=useState<number>()
  const [inputValue,setinputValue]=useState(0)
  const[TransactionError,setTransactionError]=useState('off')
  const [CoinAmount,setCoinAmount]=useState()
  console.log(portfolioData)
  const handleTransactionError=()=>{
    if(TransactionError=='on balance'){
      return(
        <p className={styles.Error}>not enough balance</p>

      )
    }else if(TransactionError=='on coin'){
      <p className={styles.Error}>not enough {Overview.name}</p>

    }

  }

  const handleInputChange=(e)=>{
    setinputAmount(e.target.value)
  }

  const handleTransaction=(x:string)=>{
    if(x=='buy'){
      if(portfolioData.Revenue>=Overview.price*inputAmount){
        dispatch(add({coin:`${Overview.name}`,amount:Number(inputAmount),transactionType:'buy'}));
        dispatch(setRevenue(portfolioData.Revenue-Overview.price*inputAmount))
        setTransactionError('off')

      }else{
        setTransactionError('on balance')
      }

    }if(x=='sell'){
      if(amount()>=inputAmount){
        dispatch(add({coin:`${Overview.name}`,amount:Number(inputAmount),transactionType:'sell'}));
        dispatch(setRevenue(portfolioData.Revenue+Overview.price*inputAmount))
        setTransactionError('off')

      }else{
        setTransactionError('on coin')
      }

    }

  }
  const amount=()=>{
    
    if(Overview!=undefined){

      let x=0;
      portfolioData.transactions.forEach(element => {


        if(element.coin==Overview.name&&element.transactionType=='buy'){

          x=x+element.amount
  
        }else if(element.coin==Overview.name&&element.transactionType=='sell'){
          x=x-element.amount
        } 
      }
      )

      ;
      return(x)
    }
    
  }


  let [Overview,setOverview]=useState()
  let [Time,setTime]=useState('24h')
  const GetData = async()=>{
    const response = await fetch (`https://api.coinranking.com/v2/coin/${id}?timePeriod=${Time}`)
    const x= await response.json().then((i)=>{return i.data.coin })
    setOverview(x)

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
        <div className={styles.transaction}>
          <p>balance:{portfolioData.Revenue}$</p>
          <p>amount of {Overview?Overview.name:'ss'}:{Overview?amount():'ss'}</p>
          <input type="number" onChange={handleInputChange}/>
          <button onClick={()=>handleTransaction('buy')}>buy</button>
          <button  onClick={()=>handleTransaction('sell')}>sell</button>
          {handleTransactionError()}

        </div>
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
