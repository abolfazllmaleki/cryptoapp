'use client';
import React, { useEffect, useState } from 'react'
import styles from './styles/Header.module.scss'
import { useRouter } from 'next/navigation';
export  const Header:React.FC = ()=>{
    const router = useRouter()

    return(
        <div className={styles.Header}>

            <div className={styles.parts}>
                <p onClick={()=>{router.push('/')}}>Home</p>
                <p onClick={()=>{router.push('/portfolio')}}>Portfolio</p>
                <p>About</p>
            </div>
            <div className={styles.search}>serasad</div>
            

        </div>

    )
}