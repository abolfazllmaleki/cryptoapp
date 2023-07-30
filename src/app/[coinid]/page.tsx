'use client'
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'
import styles from './styles/Header.module.scss'
import { usePathname } from 'next/navigation';
import Overview from '../components/overview/Overview';



const CoinPage:React.FC=()=>{

    const router = useRouter()
    const pathname = usePathname();

    

    return(
        <div>
            <Overview id={pathname}></Overview>

        </div>
    )
}
export default CoinPage;