import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Frequency of use",
      backgroundColor: "#343a40",
      borderColor: "#FF7F50",
      data: [0,1,2,6,5,4],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;