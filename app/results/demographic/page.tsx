"use client";

import React, { useEffect, useRef, type JSX } from "react";
import Chart, { type ChartConfiguration } from "chart.js/auto";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

export default function ResultsDemographic(): JSX.Element {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    // Your chart data
    const data = {
      labels: ["Male", "Female"],
      datasets: [
        {
          label: "Dataset",
          data: [10, 20, 15, 25, 30],
          fill: false,
          backgroundColor: "#8CD3FF", // Bar fill color
          borderColor: "#8CD3FF", // Bar border color
          cubicInterpolationMode: "monotone", // Use 'monotone' for cubic interpolation
        },
      ],
    };

    // Chart configuration
    const config: ChartConfiguration = {
      type: "bar",
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

  // const chatRef = useRef<HTMLCanvasElement | null>(null);
  // const mapRef = useRef<L.Map | null>(null);

  // useEffect(() => {
  //   // Create Leaflet map
  //   if (!mapRef.current) {
  //     mapRef.current = L.map("leafletMap").setView([0, 0], 2); // Centered on the world, zoom level 2
  //     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapRef.current);

  //     // Place the chart on the map
  //     if (chatRef.current) {
  //       const bounds: L.LatLngBoundsExpression = [
  //         [-90, -180],
  //         [90, 180],
  //       ]; // World bounds
  //       L.imageOverlay(chatRef.current.toDataURL(), bounds).addTo(mapRef.current);
  //     }
  //   }
  // }, []);

  return (
    <div>
      <div className="flex flex-col md:flex md:flex-row justify-evenly items-center my-6">
        <div className="w-2/3 md:w-1/4 xl:w-1/3 h-[350px] m-2 xl:m-6 bg-white p-4 rounded-md border-2">
          <div className="flex justify-between font-medium">
            <p>Gender</p>
            <p>7%</p>
          </div>
          <div>
            <canvas id="myChart" className="h-[270px] w-48" />
          </div>
        </div>
        <div className="w-2/3 md:w-1/4 xl:w-1/3 h-[350px] m-2 xl:m-6 bg-white p-4 rounded-md border-2">
          <div className="flex justify-between font-medium">
            <p>CTR</p>
            <p>5.5%</p>
          </div>
          <div>
            <div id="leafletMap" style={{ height: "270px" }} />
            {/* <canvas ref={chatRef} style={{ display: "none" }} /> */}
          </div>
        </div>
        <div className="w-2/3 md:w-1/4 xl:w-1/3 h-[350px] m-2 xl:m-6 bg-white p-4 rounded-md border-2">
          <div className="flex justify-between font-medium">
            <p>Age</p>
            <p>5.57%</p>
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
