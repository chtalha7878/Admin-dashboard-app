import React from "react";
import {
  PermIdentity,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Edit Profile</h1>
        <Link to="/createuser">
          <button className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            Create User
          </button>
        </Link>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center mb-6">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover border border-gray-200"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-800">Daisy Dominic</h2>
              <p className="text-sm text-gray-500 font-medium">React Dev</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Account Details</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <PermIdentity className="text-primary text-xl" />
                <span className="ml-3 font-medium">Daisy234</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CalendarToday className="text-primary text-xl" />
                <span className="ml-3 font-medium">12 dec 2022</span>
              </div>
              <div className="flex items-center text-gray-600">
                <PhoneAndroid className="text-primary text-xl" />
                <span className="ml-3 font-medium">+14 4225 343</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MailOutline className="text-primary text-xl" />
                <span className="ml-3 font-medium">Daisy234@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <LocationSearching className="text-primary text-xl" />
                <span className="ml-3 font-medium">New York City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[2] bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Edit</h3>
          <form className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Profile Name</label>
                <input
                  type="text"
                  placeholder="daisy234"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Daisy Dominic"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="daisy234@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="+14 4225 343"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Address</label>
                <input
                  type="text"
                  placeholder="New York City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="avatar"
                  className="w-24 h-24 rounded-xl object-cover border border-gray-200"
                />
                <label htmlFor="file" className="cursor-pointer ml-4 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition duration-200">
                  <Publish className="text-gray-600" />
                </label>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                />
              </div>
              <button className="w-full mt-6 md:mt-0 bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
