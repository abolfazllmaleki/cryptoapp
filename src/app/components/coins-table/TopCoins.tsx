'use client';
import axios from 'axios';
import React, { ReactElement, ReactNode } from 'react'
import { useEffect,useState } from 'react'
import { JsxClosingElement } from 'typescript';
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "C:/Users/abolfazl/Desktop/projects/crypto project/app/cryptoapp/src/app/store/store";
import CoinRow from './CoinRow';
import {fetchUsers} from '../../store/coins-data/index'
import styles from './styles/CoinRow.module.scss'


const TopCoins :React.FC = () => {

  const [coco,setcoco]=useState<any>()
  let [coins,setCoins]=useState<number>(0)
  const dispatch: AppDispatch = useAppDispatch();
  const coinsData = useSelector((state: RootState) => state.data.data)

  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);
  useEffect(() => {
    setTimeout(()=>{
      dispatch(fetchUsers())

      setcoco(coinsData?.slice(0,7))
      
      }     
    ,2000)
  }, [dispatch,coinsData]);



  
  
  return (
    <>
    
    <div className={styles.coinroww}>
        <div className='name'>name</div>
        <div className='price'> price </div>
        <div className='market'> marketcap</div>
        <div>24h change</div>
        
        <div className={styles.chartss}>24h</div>
      </div>

    
    <div>
      {coco?.map(x=>
      <CoinRow key={x.uuid} icon={x.iconUrl} symbol={x.symbol} coinName={x.name}  price={x.price} rank={x.rank} tf={x.change} marketCap={x.marketCap} chart={x.sparkline}></CoinRow>
      )}
    </div>
    </>
  )
}

export default TopCoins;
