import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function DisplayTotal() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex-[2] w-full">
      <div className="flex items-center justify-between text-gray-600 mb-6">
        <h1 className="text-lg font-medium text-gray-600">Total Revenue</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-28 h-28">
          <CircularProgressbarWithChildren
            value={80}
            text={`${80}%`}
            strokeWidth={10}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: "#2563eb",
              textColor: "#1f2937",
            })}
          />
        </div>
        <p className="text-gray-500 text-sm">Total sales per day</p>
        <p className="text-3xl font-bold text-gray-800">$789</p>
        <p className="text-xs text-gray-400 text-center px-4">
          Processing of previous transactions, last payment might not be
          accounted for
        </p>

        <div className="w-full flex items-center justify-between mt-4">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Daily Target</div>
            <div className="flex items-center justify-center text-red-500 text-sm font-medium">
              <KeyboardArrowDown fontSize="small" />
              <div>$1573</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Last week</div>
            <div className="flex items-center justify-center text-green-500 text-sm font-medium">
              <KeyboardArrowUp fontSize="small" />
              <div>$11573</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Monthly Target</div>
            <div className="flex items-center justify-center text-green-500 text-sm font-medium">
              <KeyboardArrowUp fontSize="small" />
              <div>$20573</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
