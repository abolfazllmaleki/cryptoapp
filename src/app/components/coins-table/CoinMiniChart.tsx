'use client';
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarController, BarElement, PointElement, LineElement, Filler, DatasetController, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";


import styles from './styles/CoinRow.module.scss'
import { PieController, scales } from 'chart.js/dist';
ChartJS.register(
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement,
  Filler,
  Tooltip,

)
interface chartprops{
  chart:Array<number>
  color:string
  backgroundColor:string
}


const page :React.FC<chartprops> = ({chart,color,backgroundColor}) => {
  Chart.defaults.scale.grid.display = false;
  Chart.defaults.scale.display=false;

  const data = {

    labels: ['24h','18h','12h','9h','6h','3h','0h'],
    datasets: [
      {
        label: "price",
        data: [chart[0],chart[2],chart[5],chart[8],chart[11],chart[17],chart[23]],
        fill: false,
        backgroundColor: `${backgroundColor}`,
        borderColor: `${color}`,
        
      },
      
      

    ],
    maintainAspectRatio: false,
    responsive: true,
    options:{
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }

    }
  };
  return (
    <div>

      <Line data={data} options={{ maintainAspectRatio: false,plugins:{legend:{display:false}}}}  height={70} />
    </div>
  );
}

export default page;