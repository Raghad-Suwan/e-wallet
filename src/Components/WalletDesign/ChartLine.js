import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Sundy", "Monday", "Tusday", "Wedensday", "Thursday", "Friday"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "The amount of withdrawals and deposits per month",
      backgroundColor: "",
      borderColor: "#E11400",
      data: [0,1,2,5],
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