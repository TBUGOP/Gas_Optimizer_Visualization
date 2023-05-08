import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function LineChart3({ chartData }) {
    const data = {
        labels:[100000, 150000, 200000, 250000, 300000],
        datasets: [
            {
                label: "Original Gas Price",
                data: [227081,159902,273942,244648,235133],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                stack: 'Stack 0',
            },
            {
                label: 'Optimized Gas Price',
                data: [227081,159668,271803,242406,232890],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.8)',
                stack: 'Stack 1',
            },
            {
                label: 'With YUL Optimizer',
                data: [143011,106660,185639,173822,173270],
                borderColor: 'rgb(63, 200, 100)',
                backgroundColor: 'rgba(63, 200, 100, 0.8)',
                stack: 'Stack 2',
            },
        ],
    };

    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };
    
    return <Bar data={data} options={options} />

}
export default LineChart3;