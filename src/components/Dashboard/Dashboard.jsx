import React from "react";
import BarChartCompo from "./BarChartCompo";
import LineChartCompo from "./LineChartCompo";
import PieChartCompo from "./PieChartCompo";
import SimpleLineCompo from "./SimpleLineCompo";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:w-11/12 mx-auto mx-w-[920px] m-[10px]">
      <LineChartCompo/>
      <BarChartCompo />
      <SimpleLineCompo />
      <PieChartCompo />
    </div>
  );
}
export default Dashboard;
