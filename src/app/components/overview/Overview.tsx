'use client';
import React, { useEffect, useState } from 'react'
import styles from '../overview/styles/Overview.module.scss';
import { CoinChart } from '../coin-chart/CoinChart';
import { ConvertToUsd } from '@/app/utils/ConvertToUsd';
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "C:/Users/abolfazl/Desktop/projects/crypto project/app/cryptoapp/src/app/store/store";
import {add} from '../../store/portfolio/index'
import { setRevenue } from '../../store/portfolio/index';
import { GetToday } from '@/app/utils/GetToday';
import { setAsset } from '../../store/portfolio/index';
import { addAsset } from '../../store/portfolio/index';



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
  const [Date,setDate]=useState((GetToday()).slice(2,-1))
  console.log(portfolioData.Asset)
  
  console.log(portfolioData)
  const handleTransactionError=()=>{
    if(TransactionError=='on balance'){
      return(
        <p className={styles.Error}>not enough balance</p>

      )
    }else if(TransactionError=='on coin'){
      <p className={styles.Error}>not enough {OverviewState.name}</p>

    }

  }

  const handleInputChange=(e)=>{
    setinputAmount(e.target.value)
  }

  const handleTransaction=(x:string)=>{
    if(x=='buy'){
      if(portfolioData.Revenue>=OverviewState.price*inputAmount){
        dispatch(add({coin:`${OverviewState.name}`,amount:Number(inputAmount),transactionType:'buy',date:Date,logo:OverviewState.iconUrl}));
        dispatch(setRevenue(portfolioData.Revenue-OverviewState.price*inputAmount))
        setTransactionError('off')
        let j =0;
        for(let x =0 ; x<portfolioData.Asset.length;x=x+1){
          if(portfolioData.Asset[x].coin==OverviewState.name){
            
            dispatch(setAsset([x,inputAmount]))
            j=j+1
          }
        }
        if(j==0){
          dispatch(addAsset({coin:OverviewState.name,amount:inputAmount,logo:OverviewState.iconUrl,Symbol:OverviewState.symbol}))
        }

      }else{
        setTransactionError('on balance')
      }

    }if(x=='sell'){
      if(amount()>=inputAmount){
        dispatch(add({coin:`${OverviewState.name}`,amount:Number(inputAmount),transactionType:'sell',date:Date,logo:OverviewState.iconUrl}));
        dispatch(setRevenue(portfolioData.Revenue+OverviewState.price*inputAmount))
        setTransactionError('off')
        for(let x =0 ; x<portfolioData.Asset.length;x=x+1){
          if(portfolioData.Asset[x].coin==OverviewState.name){
            
            dispatch(setAsset([x,-inputAmount]))
            
          }
        }

      }else{
        setTransactionError('on coin')
      }

    }

  }
  const amount=()=>{
    
    if(OverviewState!=undefined){

      let x=0;
      portfolioData.transactions.forEach(element => {


        if(element.coin==OverviewState.name&&element.transactionType=='buy'){

          x=x+element.amount
  
        }else if(element.coin==OverviewState.name&&element.transactionType=='sell'){
          x=x-element.amount
        } 
      }
      )

      ;
      return(x)
    }
    
  }


  let [OverviewState,setOverviewState]=useState()
  let [Time,setTime]=useState('24h')
  const GetData = async()=>{
    const response = await fetch (`https://api.coinranking.com/v2/coin/${id}?timePeriod=${Time}`)
    const x= await response.json().then((i)=>{return i.data.coin })
    setOverviewState(x)

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
    if(OverviewState!=undefined){
      return <CoinChart spark={OverviewState!=undefined?OverviewState.sparkline:[2,3]} time={Time}/>
    }
  }



  console.log(OverviewState)
  return (
    <>

    <div className={styles.overvieww}>

    <div >
        <div className={styles.des}>
        <h1>{OverviewState!=undefined?OverviewState.name:'ss'}</h1>
        
        <p>{OverviewState!=undefined?OverviewState.description:'ss'}</p>
        
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
          <p>amount of {OverviewState?OverviewState.name:'ss'}:{OverviewState?amount():'ss'}</p>
          <input type="number" onChange={handleInputChange}/>
          <button onClick={()=>handleTransaction('buy')}>buy</button>
          <button  onClick={()=>handleTransaction('sell')}>sell</button>
          {handleTransactionError()}

        </div>
          <div className={styles.info}>
            <p>marketCap:  {OverviewState!=undefined?ConvertToUsd(OverviewState.marketCap):'ss'}</p>
            <p>number Of Exchanges:   {OverviewState!=undefined?OverviewState.numberOfExchanges:'ss'}</p>
            <p>number Of Markets:  {OverviewState!=undefined?OverviewState.numberOfMarkets:'ss'}</p>
            <p>price:  {OverviewState!=undefined?ConvertToUsd(OverviewState.price):'ss'}</p>
            <p>change:  {OverviewState!=undefined?OverviewState.change:'ss'}</p>
            <p>website:  {OverviewState!=undefined?<a href={`${OverviewState.websiteUrl}`}>{OverviewState.websiteUrl}</a>:'ss'}</p>
          </div>
            

        </div>

        

    </div>


    </div>
    
    </>
  )
}

export default Overview;
