'use client'
import React from 'react'
import TopCoins from './components/coins-table/TopCoins'
import CoinRow from './components/coins-table/CoinRow'
import { Provider } from "react-redux"
import { store } from './store/store'


const page :React.FC = () => {
  return (
    <div>
      <Provider store={store}>
      <TopCoins></TopCoins>
      </Provider>

     </div>
  )
}

export default page;
