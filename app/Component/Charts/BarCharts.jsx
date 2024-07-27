import React from 'react';
import { Bar} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
export const BarChart = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['January', 'February', 'March','April', 'May' ,'June', 'July', 'August', 'September','October', 'November' ,'December',  ],
    datasets: [
      {
        label: 'Monthly applications',
        backgroundColor: 'whitesmoke',
        borderColor: 'rgba(75, 192, 172, 1)',
        borderWidth: 1,
        data: [100, 20, 30, 30, 50,70, 100, 20, 30, 30, 50,70, ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      
    },
  };

  return (
    <div  className='md:h-[500px] w-[100%]'>
      <Bar data={data} options={options} />
    </div>
  );
};

export  const PaymentChart =()=>{
  const data = {
    labels: ['online', 'offline', 'both'  ],
    datasets: [
      {
        label: 'payment mode',
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.2)',
         
        ],
        borderColor: 'rgba(75, 12, 102, 1)',
        borderWidth: 1,
        data: [50, 250,  500,],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      
    },
  };

  return (
    <div  className=''>
      <Bar data={data} options={options} />
    </div>
  );
}
