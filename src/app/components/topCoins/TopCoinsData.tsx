'use client';
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import TopCoins from './TopCoins'

const page :React.FC = () => {
    const [coins,setCoins]=useState<Array<object>>()

    useEffect(()=>{
        const getTopCoinData = async()=>{
            const {data} =await axios.get('https://api.coinranking.com/v2/coins');
            setCoins(data.data.coins);

            
        }
        getTopCoinData();
            

      },[coins])



  return (
    <div>

    </div>
  )
}

export default page;
