'use client';
import React, { useEffect, useState } from 'react'
import styles from './styles/Header.module.scss'
import { useRouter } from 'next/navigation';

import { Console } from 'console';
export  const Header:React.FC = ({stheme}:any)=>{

    const [suggest,setsuggest]=useState('')
    const [results,setresults]=useState<any>()
    const [theme,settheme]=useState('dark')

    const send=()=>{
        stheme(theme)
    }
    


    const handletheme:any=(e:any)=>{

        if(theme=='light'){
            settheme('dark')
        }else if (theme=='dark'){
            settheme('light')
        }
        
    }
    useEffect(()=>{
        send()
    }
    ,[theme])

    const handleroute=(x:any)=>{
        setsuggest('')
        router.push(`${x.uuid}`)
        console.log(suggest)
        
    }
    const show = ()=>{
       
        if(suggest!=''){
            return(

            <div className={styles.sug} >
            {results?.map((x: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; symbol: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; })=>
                    <div className={styles.sugrow} onClick={()=>handleroute(x)}>
                        <p>{x.name}</p>
                        <p>{x.symbol}</p>
                    </div> 
                
                )}
            

        </div>
            )

        }
    }
    
    const router = useRouter()
    const handleSearch=(e: React.ChangeEvent<HTMLInputElement>)=>{

        setsuggest(e.target.value)
    

    }


    const GetData = async()=>{
        const response = await fetch (`https://api.coinranking.com/v2/search-suggestions?query=${suggest}`)
        const x= await response.json().then((i)=>{return i.data.coins })
        setresults(x.slice(0,1))
        console.log(results)
        }
    
      useEffect(()=>{
        GetData()
      },[suggest])
    function setsearch(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return(
        <div className={styles.Header}  >

            <div className={styles.parts}>
                <p onClick={()=>{router.push('/')}}>Home</p>
                <p onClick={()=>{router.push('/portfolio')}}>Portfolio</p>
                <p>About</p>
            </div>
            <div className={styles.search}>

                <div className={styles.toog}  >
                <input type="checkbox" id="switch" onClick={()=>{handletheme()}} /><label htmlFor='switch'></label>   
                </div>
         
                <p className={styles.searchl}>search:</p>
                <form onSubmit={()=>setsearch('search...')}>
                <input onChange={(e)=>handleSearch(e)} value={suggest} ></input>
                    {show()}
                </form>
                </div>
                
            

        </div>

    )
}