'use client';
import React, { useEffect, useState } from 'react'
import styles from './styles/Header.module.scss'
import { useRouter } from 'next/navigation';
export  const Header:React.FC = ()=>{

    const [suggest,setsuggest]=useState('')
    const [results,setresults]=useState<any>()

    const handleroute=(x:any)=>{
        setsuggest('')
        router.push(`${x.uuid}`)
        console.log(suggest)
        
    }
    const show = ()=>{
        const router=useRouter()
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
        setresults(x.slice(0,3))
        console.log(results)
        }
    
      useEffect(()=>{
        GetData()
      },[suggest])
    function setsearch(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return(
        <div className={styles.Header} >

            <div className={styles.parts}>
                <p onClick={()=>{router.push('/')}}>Home</p>
                <p onClick={()=>{router.push('/portfolio')}}>Portfolio</p>
                <p>About</p>
            </div>
            <div className={styles.search}>
         
                <p className={styles.searchl}>search:</p>
                <form onSubmit={()=>setsearch('search...')}>
                <input onChange={(e)=>handleSearch(e)} value={suggest} ></input>
                    {show()}
                </form>
                </div>
            

        </div>

    )
}