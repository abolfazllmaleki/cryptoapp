'use client'
import TopCoins from './components/coins-table/TopCoins'
import CoinRow from './components/coins-table/CoinRow'
import OverView from './components/overview/Overview'
import { Provider } from "react-redux"
import { store } from './store/store'
import { Footer } from './components/footer/Footer'
import styles from '../app/styles/main.module.scss'
import Page from '../app/page'
import { ReactNode, useState } from "react";
import { Header } from './components/header/Header'





import React, {createContext} from "react";
interface Props {
    children?: ReactNode
}

const ThemeContext = createContext({})

export  const ThemeProvider=({children}:Props)=>{
    const [Theme,setTheme] = useState('dark');
    console.log(Theme)

    const getData=(x:any)=>{
        setTheme(x)

    }


    const handlleTheme=()=>{
        if(Theme=='light'){
            return(
                <div className={styles.containerlight}>

                <Header stheme={(x:any)=>getData(x)}></Header>
                
            
                    {children}
            
                <Footer></Footer>
                </div>

            )

        }else{
            return(
                <div className={styles.containerdark}>

                <Header stheme={(x:any)=>{setTheme(x)}}></Header>
                
            
                    {children}
            
                <Footer></Footer>
                </div>

            )

        }
        
    }


return (
    
<Provider store={store} >
    {handlleTheme()}
    
    
</Provider>
)
}
