import React from "react";
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
} from "chart.js";
import { Line } from "react-chartjs-2";

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
      display: false,
      position: "top",
    },
    title: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.5,
    },
    point: {
      radius: 0,
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
        display: false,
      },
    },
  },
};

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [3, 4, 3, 4, 3, 4],
      borderColor: "rgba(255, 99, 132, 0)",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(190, 1, 0, 0.70)");
        gradient.addColorStop(1, "rgba(190, 1, 0, 0)");
        return gradient;
      },
    },
  ],
};

const Chart = () => {
  return <Line options={options} data={data} />;
};

export default Chart;
