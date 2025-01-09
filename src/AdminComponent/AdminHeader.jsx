import React from "react";
import Header from "../assets/logo.png";

const AdminHeader = () => {
  return (
    <div className="container">
      <header className="contain flex items-center justify-between h-16">
        <div className="logo flex items-center">
          <img src={Header} alt="" className="h-24" />
        </div>
        <div className="Title">
          <h1 className="font-semibold text-5xl">Admin Panel</h1>
        </div>
        <div className="flex space-x-4">
          <button className=" bg-blue-600 hover:bg-slate-700 text-white px-4 py-2 text-lg rounded-md transition-all duration-200 flex items-center space-x-2">
            Admin
          </button>
          <button className=" bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 text-lg rounded-md transition-all duration-200 flex items-center space-x-2">
            Manager
          </button>
        </div>
      </header>
    </div>
  );
};

export default AdminHeader;
