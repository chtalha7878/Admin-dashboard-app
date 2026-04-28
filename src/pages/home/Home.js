import React from "react";
import Chart from "../../components/chart/Chart";
import DisplayTotal from "../../components/displaytotal/DisplayTotal";
import Featured from "../../components/featured/Featured";
import MenbersWidget from "../../components/menberWidget/MenbersWidget";
import OrderWidget from "../../components/orderwidget/OrderWidget";

export default function Home() {
  return (
    <div className="flex-1 p-6 space-y-6 overflow-x-hidden">
      <Featured />
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <Chart />
        <DisplayTotal />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <OrderWidget />
        <MenbersWidget/>
      </div>
    </div>
  );
}
