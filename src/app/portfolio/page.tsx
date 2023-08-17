'use client'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import React from 'react'
import Asset from'./components/Asset'
import {DoughnutChart} from './components/DoughnutChart'
import  RecentTransactions  from '../components/recent-transactions/RecentTransactions';
import styles from './styles/page.module.scss'
import PortfolioTable from '../portfolio/components/PortfolioTable'


const page :React.FC = () => {
  

  return (
    <>
    <div className={styles.container}> 
      
      <div className={styles.chart}>
        <DoughnutChart></DoughnutChart>
        <PortfolioTable></PortfolioTable>

      </div>
      <div>
      <Asset/>
      <RecentTransactions/>
      </div>
      


    </div>
    </>
  )
}

export default page;
