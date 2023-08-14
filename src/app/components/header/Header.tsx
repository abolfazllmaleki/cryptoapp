'use client';
import React, { useEffect, useState } from 'react'
import styles from './styles/Header.module.scss'
import { useRouter } from 'next/navigation';
export  const Header:React.FC = ()=>{

    const [suggest,setsuggest]=useState('')
    const [results,setresults]=useState<object[]>()

    const handleroute=(x)=>{
        setsuggest('')
        router.push(`${x.uuid}`)
        console.log(suggest)
        
    }
    const show = ()=>{
        const router=useRouter()
        if(suggest!=''){
            return(

            <div className={styles.sug} >
            {results?.map(x=>
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
    const handleSearch=(e)=>{

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
    return(
        <div className={styles.Header} >

            <div className={styles.parts}>
                <p onClick={()=>{router.push('/')}}>Home</p>
                <p onClick={()=>{router.push('/portfolio')}}>Portfolio</p>
                <p>About</p>
            </div>
            <div className={styles.search}>
                {/* <label>search:</label> */}
                <form onSubmit={()=>setsearch('search...')}>
                <input onChange={(e)=>handleSearch(e)} value={suggest} ></input>
                    {show()}
                </form>
                </div>
            

        </div>

    )
}