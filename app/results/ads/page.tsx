"use client";

import React, { useEffect, useRef, type JSX } from "react";
import Chart, { type ChartConfiguration } from "chart.js/auto";

export default function ResultsAds(): JSX.Element {
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
      labels: [
        "Tesla Electric Cars",
        "Tesla Electric Cars",
        "Tesla Electric Cars",
        "Tesla Electric Cars",
        "Tesla Electric Cars",
      ],
      datasets: [
        {
          label: "Sales",
          data: [50, 70, 60, 80, 90],
          backgroundColor: "#0072ED", // Bar fill color
          borderColor: "#0072ED", // Bar border color
          borderWidth: 2, // Bar border width
          borderRadius: 10, // Border radius for rounded bars
        },
      ],
    };

    // Chart configuration
    const config: ChartConfiguration = {
      type: "bar", // Use 'barHorizontal' for horizontal bar charts
      data,
      options: {
        indexAxis: "y", // Use 'y' to make it a horizontal bar chart
        maintainAspectRatio: false,
      },
    };

    // Destroy existing chart if it exists
    if (chatRef.current !== null) {
      chatRef.current.destroy();
    }

    // Create the chart
    const ctx = (
      document.getElementById("horizontalRoundedBarChart") as HTMLCanvasElement
    ).getContext("2d");
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
            <p>Cost per app use</p>
            <p>Rs.48</p>
          </div>
          <div>
            <canvas id="myChart" className="h-[270px] w-48" />
          </div>
        </div>
        <div className="w-2/3 md:w-1/4 xl:w-1/3 h-[350px] m-2 xl:m-6 bg-white p-4 rounded-md border-2">
          <div className="flex justify-between font-medium">
            <p>Cost per app use</p>
            <p>Rs. 48</p>
          </div>
          <div>
            <canvas id="horizontalRoundedBarChart" className="h-[270px] w-48" />
          </div>
        </div>
        <div className="w-2/3 md:w-1/4 xl:w-1/3 h-[350px] m-2 xl:m-6 bg-white p-4 rounded-md border-2">
          <div className="flex justify-between font-medium">
            <p>Publisher Platform</p>
          </div>
          <div>
            <canvas id="customChart" className="h-[270px] w-48" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-evenly px-8">
        {[
          ["Clicks", 85],
          ["Impressions", 85],
          ["Average CPC", 85],
          ["CTR", 85],
          ["Cost per app activation", 85],
          ["Cost per app use", 85],
        ].map(([title, value]) => (
          <div className="flex flex-col w-1/3 sm:w-1/4 md:w-[12%] h-28 md:h-40 bg-white p-4 gap-4 justify-center rounded-md border-2">
            <p className="text-sm">{title}</p>
            <p className="text-4xl md:text-5xl font-medium text-center">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
