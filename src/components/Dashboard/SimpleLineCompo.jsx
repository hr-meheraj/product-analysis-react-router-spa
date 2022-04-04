import React from 'react'
import {
    Line,
    Legend,
    LineChart,
    CartesianGrid,
    XAxis,
    ResponsiveContainer,
    YAxis,
    Tooltip,
  } from "recharts";
function SimpleLineCompo() {
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
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investment" stroke="#8884d8" />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
}

export default SimpleLineCompo
