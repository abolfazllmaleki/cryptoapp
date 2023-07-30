'use client';
import React from 'react';
import { GetToday } from '@/app/utils/GetToday';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display:false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    
  },
  
};

let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export let data = {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: [100,101,102,101,103,108,109],
      borderColor: '#336600',
      backgroundColor: 'rgba(27, 185, 40, 0.568)',
    },
  ],
};

export function CoinChart({spark,time}) {
  ChartJS.defaults.scale.grid.display = false;
  switch(time){
    case '24h':
      data.labels=[GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),GetToday(),]
      break
    case '7d':
      data.labels=['today','last day','2d','3d','4d','5d','6d']
      break
    case '30d':
      data.labels=['today,last dat,2d','3d','4d','5d','6d','7d','8d','9d','10d','11d','12d','13d','14d','15d','16d','17d','18d','19d','20d','21d','22d','23d','24d','25d','26d','29d']
      break
    case '1y':
      data.labels=['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May']
      break

  }


  data.datasets[0].data=spark
  
  
  return <Line options={options} data={data} height={10} width={10}/>;
}
