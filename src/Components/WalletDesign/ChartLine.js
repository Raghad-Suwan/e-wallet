import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Sundy", "Monday", "Tusday", "Wedensday", "Thursday", "Friday"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "The number of times the user has used the e-wallet",
      backgroundColor: "",
      borderColor: "#E11400",
      data: [0,1,2,3,4,5,6,7,8,9,10],
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