import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: false,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      grace: 1,
      ticks: {
        display: false,
        beginAtZero: true,
        stepSize: 1,
        max: 100,
        min: 0,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        // display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [3, 5, 3, 4, 2, 4, 0],
      backgroundColor: "#919CA2",
      borderRadius: 15,
    },
    {
      label: "Dataset 2",
      data: [0, 0, 0, 0, 0, 0, 7],
      backgroundColor: "#BE0100",
      borderRadius: 15,
    },
  ],
};

const Chart = () => {
  return <Bar options={options} data={data} />;
};

export default Chart;
