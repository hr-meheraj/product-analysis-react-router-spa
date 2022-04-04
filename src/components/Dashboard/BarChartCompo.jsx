import React from 'react'
import {
    Legend,
    CartesianGrid,
    XAxis,
    ResponsiveContainer,
    YAxis,
    Bar,
    BarChart,
    Tooltip,
  } from "recharts";
  function BarChartCompo() {
    const data = [
      {
        month: "Mar",
        investment: 100000,
        sell: 241,
        revenue: 10401,
      },
      {
        month: "Apr",
        investment: 200000,
        sell: 423,
        revenue: 24500,
      },
      {
        month: "May",
        investment: 500000,
        sell: 726,
        revenue: 67010,
      },
      {
        month: "Jun",
        investment: 500000,
        sell: 529,
        revenue: 40405,
      },
      {
        month: "Jul",
        investment: 600000,
        sell: 601,
        revenue: 50900,
      },
      {
        month: "Aug",
        investment: 700000,
        sell: 670,
        revenue: 61000,
      },
    ];
    return (
        <div className="w-full mx-auto">
          <h3 className="text-center font-poppins mx-[10px] font-xl font-semibold text-blue-700">
            Investment Vs Revenue
          </h3>
          <ResponsiveContainer width="100%" height={270}>
            <BarChart maxWidth={320} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
}

export default BarChartCompo
