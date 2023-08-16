'use client'
import React from 'react'
import TopCoins from './components/coins-table/TopCoins'
import CoinRow from './components/coins-table/CoinRow'
import OverView from './components/overview/Overview'
import { Provider } from "react-redux"
import { store } from './store/store'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'


const page :React.FC = () => {
  return (
    <>
    <Hero></Hero>
    
        
        <TopCoins></TopCoins>
    
    
    </>
  )
}

export default page;
