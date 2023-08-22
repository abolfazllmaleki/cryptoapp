'use client'
import React from 'react'
import TopCoins from './components/coins-table/TopCoins'
import CoinRow from './components/coins-table/CoinRow'
import OverView from './components/overview/Overview'
import { Provider } from "react-redux"
import { store } from './store/store'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import styles from '../app/styles/main.module.scss'


const page :React.FC = () => {
  return (
    <>
      <div className={styles.container}>

        <Hero></Hero>  
        <TopCoins></TopCoins>
      </div>
    
    
    </>
  )
}

export default page;
