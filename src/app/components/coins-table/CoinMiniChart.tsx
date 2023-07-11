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


const page :React.FC = () => {
  Chart.defaults.scale.grid.display = false;
  Chart.defaults.scale.display=false;

  const data = {

    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","sddf","sdf"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65,25,0],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        
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