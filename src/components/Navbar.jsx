import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaSearch, FaTimes, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="container flex items-center justify-between h-16 px-4 relative">
      <div className="logo flex items-center">
        <img src={Logo} alt="Logo" className="h-24" />
      </div>
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full flex-col items-center md:static md:w-auto md:flex md:flex-row md:space-x-6 md-space-y-6 md:z-20 bg-white text-black z-10`}
      >
        <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-lg text-gray-600 hover:text-blue-500 px-4 py-2 rounded-lg ${
                  isActive ? "bg-indigo-800 text-white" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `block text-lg text-gray-600 hover:text-blue-500 px-4 py-2 rounded-lg ${
                  isActive ? "bg-indigo-800 text-white" : ""
                }`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/results"
              className={({ isActive }) =>
                `block text-lg text-gray-600 hover:text-blue-500 px-4 py-2 rounded-lg ${
                  isActive ? "bg-indigo-800 text-white" : ""
                }`
              }
            >
              Results
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/library"
              className={({ isActive }) =>
                `block text-lg text-gray-600 hover:text-blue-500 px-4 py-2 rounded-lg ${
                  isActive ? "bg-indigo-800 text-white" : ""
                }`
              }
            >
              Library
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `block text-lg text-gray-600 hover:text-blue-500 px-4 py-2 rounded-lg ${
                  isActive ? "bg-indigo-800 text-white" : ""
                }`
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className={({ isActive }) =>
                `block text-lg text-gray-600 hover:text-blue-500 px-4 py-2 rounded-lg ${
                  isActive ? "bg-indigo-800 text-white" : ""
                }`
              }
            >
              Feedback
            </NavLink>
          </li>
          <li className="relative flex items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <input
              type="text"
              value={inputValue}
              placeholder="Search"
              onChange={(e) => setInputValue(e.target.value)}
              className="hidden md:block w-full focus:ring-2 focus:ring-gray-200 border border-gray-300 focus:outline-none rounded p-1"
            />
            {inputValue && (
              <button
                onClick={() => setInputValue("")}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-gray-600 hover:text-blue-500"
            >
              <FaSearch className="h-6 w-6" />
            </button>
            {isSearchOpen && (
              <div className="absolute top-8 w-full bg-white shadow-lg md:hidden">
                <input
                  type="text"
                  value={inputValue}
                  placeholder="Search"
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full focus:ring-2 focus:ring-gray-200 border border-gray-300 focus:outline-none rounded p-2"
                />
                {inputValue && (
                  <button
                    onClick={() => setInputValue("")}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <NavLink
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-lg rounded-md transition-all duration-200 flex items-center border-none space-x-2"
        >
          <FaSignInAlt className="h-5 w-5" />
          <span className="hidden md:inline">Log in</span>
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-lg rounded-md transition-all duration-200 flex items-center space-x-2"
        >
          <FaUserPlus className="h-5 w-5" />
          <span className="hidden md:inline">Sign up</span>
        </NavLink>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
          <FaBarsStaggered className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
