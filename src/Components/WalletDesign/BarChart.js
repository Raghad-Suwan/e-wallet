
import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "amount of money",
        backgroundColor: "#FF7F50",
        data: [0,200,300,400,500,1000],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;