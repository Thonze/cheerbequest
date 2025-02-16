import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ()=>{
 const data = {
  labels: ['Nursey', 'Primary', 'Junior', 'Senior'],
  datasets: [
    {
      label: 'Number of applicants',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
        'rgba(255, 159, 64, 0.9)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      
      borderWidth: 1,
    },
    
  ],
  
};
const options = {
  legend: {
    display: false, // Hide the default legend
  },
 
};

return (
    <div className="">
      <Doughnut data={data} options={options} />
    </div>
  );
}
export default DoughnutChart;