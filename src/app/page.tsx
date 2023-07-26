'use client'
import React from 'react'
import TopCoins from './components/coins-table/TopCoins'
import CoinRow from './components/coins-table/CoinRow'
import OverView from './components/overview/Overview'
import { Provider } from "react-redux"
import { store } from './store/store'


const page :React.FC = () => {
  return (
    <>
    
      <Provider store={store}>
        <OverView></OverView>
        <TopCoins></TopCoins>
      </Provider>
    
    </>
  )
}

export default page;
