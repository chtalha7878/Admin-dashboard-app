import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Chart() {
  const dataB = [
    { name: "Jan", expensis: 5000, returns: 2900, total: 12000 },
    { name: "Feb", expensis: 7000, returns: 900, total: 13000 },
    { name: "Mar", expensis: 1200, returns: 6000, total: 25300 },
    { name: "Apr", expensis: 9200, returns: 900, total: 17780 },
    { name: "May", expensis: 12000, returns: 5000, total: 6890 },
    { name: "Jun", expensis: 3900, returns: 2100, total: 10390 },
    { name: "Jul", expensis: 7300, returns: 9400, total: 30344 },
    { name: "Aug", expensis: 7300, returns: 3400, total: 30344 },
  ];
  return (
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex-1 lg:flex-[4] mb-6 lg:mb-0 w-full overflow-hidden">
        <h3 className="text-lg font-medium text-gray-600 mb-4">Analytics Overview</h3>
        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer>
            <AreaChart
              data={dataB}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d95087" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#d95087" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="expensis"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="returns"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorRv)"
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
}
