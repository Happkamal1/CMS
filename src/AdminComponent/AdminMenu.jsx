import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <nav className="p-2">
      <div className="Menu p-6 ">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Menu</h1>
        <ul className="space-y-6">
          <li className="transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
            <NavLink
              to="/adminzone/dashboard"
              className="block hover:bg-blue-600 hover:text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
              activeClassName="bg-blue-700 text-white"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
            <NavLink
              to="/adminzone/courses"
              className="block hover:bg-blue-600 hover:text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
              activeClassName="bg-blue-700 text-white"
            >
              Courses
            </NavLink>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
            <NavLink
              to="/adminzone/students"
              className="block hover:bg-blue-600 hover:text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
              activeClassName="bg-blue-700 text-white"
            >
              Students
            </NavLink>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
            <NavLink
              to="/adminzone/feedback"
              className="block hover:bg-blue-600 hover:text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
              activeClassName="bg-blue-700 text-white"
            >
              Feedback
            </NavLink>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
            <NavLink
              to="/adminzone/library"
              className="block hover:bg-blue-600 hover:text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
              activeClassName="bg-blue-700 text-white"
            >
              Library
            </NavLink>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
            <NavLink
              to="/adminzone/password"
              className="block hover:bg-blue-600 hover:text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
              activeClassName="bg-blue-700 text-white"
            >
              Password
            </NavLink>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
            <NavLink
              to="/adminzone/settings"
              className="block hover:bg-blue-600 hover:text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
              activeClassName="bg-blue-700 text-white"
            >
              Settings
            </NavLink>
          </li>
          <li className="transition-all duration-300 transform hover:scale-105 hover:translate-x-2">
            <NavLink
              to="/adminzone/logout"
              className="block hover:bg-blue-600 hover:text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
              activeClassName="bg-blue-700 text-white"
            >
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminMenu;
