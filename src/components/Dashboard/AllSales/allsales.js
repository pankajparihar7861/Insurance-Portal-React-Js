import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const AllSales = () => {

  const labels = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  const data = {
    labels: labels,

    datasets: [
      {
        label: "Sales",
        backgroundColor: "blue",
        borderColor: "rgb(255, 99, 132)",
        data: [10, 20, 10, 20, 15, 25, 20, 30, 10, 10, 15, 10],
      },
      {
        label: "Target",
        backgroundColor: "orange",
        borderColor: "rgb(255, 99, 132)",
        data: [25, 20, 30, 35, 60, 50, 20, 10, 40, 25, 36, 30],
      },
    ]
  }

  return (
    <div>
      <div class="col-md-12">
        <div class="row">
          <div class="col-lg-12">
            <div class="card recent-sales overflow-auto">
              <div>
                <div class="card-body">
                  <div class="chart-container">
                    <h1 class="card-title">All Sales</h1>
                    <Bar data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSales;
