import React from "react";
import {
  Line,
  Legend,
  LineChart,
  PieChart,
  Pie,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Bar,
  BarChart,
  Tooltip,
} from "recharts";
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
function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:w-11/12 mx-auto mx-w-[920px] my-[50px]">
      <LineChartCompo />
      <BarChartCompo />
      <SimpleLineCompo/>
      <PieChartCompo/>
    </div>
  );
}

const LineChartCompo = () => {
  return (
    <div className="w-full">
      <h3 className="text-center font-poppins mx-[10px] font-xl font-semibold text-blue-700">
        Month Wise Sell
      </h3>
      <ResponsiveContainer width="100%" height={270}>
        <LineChart
          data={data}
          //   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
const BarChartCompo = () => {
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
};

const SimpleLineCompo = () => {
  return(
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
          <Line type="monotone" dataKey="investment" stroke="#8884d8"/>
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  </div>
  )
};

const PieChartCompo = () => {
    return(
        <div className="w-full mx-auto">
    <h3 className="text-center font-poppins mx-[10px] font-xl font-semibold text-blue-700">
      Investment Vs Revenue
    </h3>
    <ResponsiveContainer width="100%" height={270}>
    <PieChart width={400} height={400}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
  </div>
    )
}
export default Dashboard;
