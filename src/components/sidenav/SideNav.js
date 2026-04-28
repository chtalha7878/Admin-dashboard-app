import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Paid,
  Assessment,
  Inventory,
  Email,
  Grading,
  ChatBubble,
  ManageAccounts,
  Analytics,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 overflow-y-auto hidden md:block">
      <div className="p-5 text-gray-600">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Dashboard</h3>
          <ul className="space-y-1">
            <Link to="/" className="block">
              <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
                <LineStyle className="mr-3 text-primary text-xl" />
                <span>Home</span>
              </li>
            </Link>

            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <Timeline className="mr-3 text-primary text-xl" />
              <span>Analytics</span>
            </li>
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <TrendingUp className="mr-3 text-primary text-xl" />
              <span>Sales</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Admin menu</h3>
          <ul className="space-y-1">
            <Link to="/userlist" className="block">
              <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
                <Person className="mr-3 text-primary text-xl" />
                <span>Users</span>
              </li>
            </Link>

            <Link to="/productlist" className="block">
              <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
                <Paid className="mr-3 text-primary text-xl" />
                <span>Products</span>
              </li>
            </Link>
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <Assessment className="mr-3 text-primary text-xl" />
              <span>Report</span>
            </li>
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <Inventory className="mr-3 text-primary text-xl" />
              <span>Transaction</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Notifications</h3>
          <ul className="space-y-1">
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <Email className="mr-3 text-primary text-xl" />
              <span>Email</span>
            </li>
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <ChatBubble className="mr-3 text-primary text-xl" />
              <span>Messages</span>
            </li>
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <Grading className="mr-3 text-primary text-xl" />
              <span>Manage</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Our Staffs</h3>
          <ul className="space-y-1">
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <ManageAccounts className="mr-3 text-primary text-xl" />
              <span>Manage</span>
            </li>
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <Analytics className="mr-3 text-primary text-xl" />
              <span>Analytics</span>
            </li>
            <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary transition duration-200">
              <Report className="mr-3 text-primary text-xl" />
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
