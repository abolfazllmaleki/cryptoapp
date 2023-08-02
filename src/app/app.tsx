'use client'
import TopCoins from './components/coins-table/TopCoins'
import CoinRow from './components/coins-table/CoinRow'
import OverView from './components/overview/Overview'
import { Provider } from "react-redux"
import { store } from './store/store'
import { Header } from './components/header/Header'
import Page from '../app/page'


import React, {createContext} from "react";

const ThemeContext = createContext({})

export default function ThemeProvider({children}){
return (
<Provider store={store}>
 {children}
</Provider>
)
}
