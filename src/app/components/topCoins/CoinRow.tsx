'use client';
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import TopCoinsData from './TopCoinsData'
import styles from './styles/CoinRow.scss'

const page :React.FC = () => {
 
 
    return (
    <div>
      <div className='styles.coin-row'>
        <div className='name'>bitcoin</div>
        <div className='price'>$29.283</div>
        <div className='1h'>0.7%</div>
        <div className='24h'>53%</div>
        <div className='7d'>88%</div>
        <div className='market-cap'> chart</div>
        <div className='last-seven-chart'>chart</div>

        
      </div>
    </div>
  )
}

export default page;
