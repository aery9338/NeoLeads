"use client";

import React, { useEffect, useRef, type JSX } from "react";
import Chart, { type ChartConfiguration } from "chart.js/auto";
// import Table from "../../components/customConversionsTable";

export default function ResultsCustomConversions(): JSX.Element {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    // Your chart data
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Dataset",
          data: [10, 20, 15, 25, 30],
          fill: false,
          borderColor: "#0072ED",
          cubicInterpolationMode: "monotone", // Use 'monotone' for cubic interpolation
        },
      ],
    };

    // Chart configuration
    const config: ChartConfiguration = {
      type: "line",
      data,
      options: {
        maintainAspectRatio: false,
      },
    };

    // Destroy existing chart if it exists
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    // Create the chart
    const ctx = (document.getElementById("myChart") as HTMLCanvasElement).getContext("2d");
    if (ctx !== null) {
      chartRef.current = new Chart(ctx, config);
    }

    // Cleanup on component unmount
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
    };
  }, []);

  // Bar Graph

  const charRef = useRef<Chart | null>(null);

  useEffect(() => {
    // Your chart data
    const customData = {
      labels: ["Messenger", "FB", "Instagram", "Linkedin"],
      datasets: [
        {
          label: "Monthly Sales",
          data: [50, 70, 60, 80, 90],
          backgroundColor: "#8CD3FF", // Bar fill color
          borderColor: "#8CD3FF", // Bar border color
          borderWidth: 1, // Bar border width
        },
      ],
    };

    // Chart configuration
    const config: ChartConfiguration = {
      type: "bar",
      data: customData,
      options: {
        maintainAspectRatio: false,
      },
    };

    // Destroy existing chart if it exists
    if (charRef.current !== null) {
      charRef.current.destroy();
    }

    // Create the chart
    const ctx = (document.getElementById("customChart") as HTMLCanvasElement).getContext("2d");
    if (ctx !== null) {
      charRef.current = new Chart(ctx, config);
    }

    // Cleanup on component unmount
    return () => {
      if (charRef.current !== null) {
        charRef.current.destroy();
      }
    };
  }, []);

  // Horizontal bar graph

  const chatRef = useRef<Chart | null>(null);

  useEffect(() => {
    // Your chart data
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Dataset",
          data: [10, 20, 15, 25, 30],
          fill: false,
          borderColor: "#0072ED",
          cubicInterpolationMode: "monotone", // Use 'monotone' for cubic interpolation
        },
      ],
    };

    // Chart configuration
    const config: ChartConfiguration = {
      type: "line",
      data,
      options: {
        maintainAspectRatio: false,
      },
    };

    // Destroy existing chart if it exists
    if (chatRef.current !== null) {
      chatRef.current.destroy();
    }

    // Create the chart
    const ctx = (document.getElementById("Chart") as HTMLCanvasElement).getContext("2d");
    if (ctx !== null) {
      chatRef.current = new Chart(ctx, config);
    }

    // Cleanup on component unmount
    return () => {
      if (chatRef.current !== null) {
        chatRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex md:flex-row justify-evenly items-center my-6">
        <div className="w-2/3 md:w-1/4 xl:w-1/3 h-[350px] m-2 xl:m-6 bg-white p-4 rounded-md border-2">
          <div className="flex justify-between font-medium">
            <p>Events</p>
          </div>
          <div>
            <canvas id="myChart" className="h-[270px] w-48" />
          </div>
        </div>
        <div className="w-2/3 md:w-1/4 xl:w-1/3 h-[350px] m-2 xl:m-6 bg-white p-4 rounded-md border-2">
          <div className="flex justify-between font-medium">
            <p>Conversions</p>
          </div>
          <div>
            <canvas id="Chart" className="h-[270px] w-48" />
          </div>
        </div>
        <div className="w-2/3 md:w-1/4 xl:w-1/3 h-[350px] m-2 xl:m-6 bg-white p-4 rounded-md border-2">
          <div className="flex justify-between font-medium">
            <p>Events</p>
          </div>
          <div>
            <canvas id="customChart" className="h-[270px] w-48" />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center m-8">
        <Table />
      </div> */}
    </div>
  );
}
