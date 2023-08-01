'use client'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import React from 'react'
import Asset from'./components/Asset'
import {DoughnutChart} from './components/DoughnutChart'

const page :React.FC = () => {
  

  return (
    <div> 
      <Asset/>
    </div>
  )
}

export default page;
