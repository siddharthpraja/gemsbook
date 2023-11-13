"use client";
import { BarChart, LineChart } from "@mui/x-charts";
import React from "react";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const Chart = () => {
  return (
    <div className="grid grid-cols-1 bg-base-100 justify-evenly lg:grid-cols-2 ">
      <div className="w-full lg:w-1/2">
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["bar A", "bar B", "bar C"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <LineChart
          width={500}
          height={300}
          className="w-90% mx-5%"
          series={[
            { data: pData, label: "pv" },
            { data: uData, label: "uv" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels  }]}
          yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
          rightAxis="rightAxisId"
        />
      </div>

    </div>
  );
};

export default Chart;
