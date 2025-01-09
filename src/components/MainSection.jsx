import React from "react";
import BG from "../assets/1.jpg";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const MainSection = () => {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col justify-center items-center h-full text-white px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empowering Education, Enabling Growth
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Seamlessly manage academic, administrative, and student data in one
            place for a smarter future.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition">
            Learn More
          </button>
        </div>
        <div className="absolute right-8 bottom-8 space-y-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-130 transform transition duration-300"
            aria-label="Visit our Facebook page"
          >
            <FaFacebook className="h-6 w-6"/>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-130 transform transition duration-300"
            aria-label="Visit our Twitter page"
          >
            <FaTwitter className="h-6 w-6"/>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-130 transform transition duration-300"
            aria-label="Visit our YouTube page"
          >
            <FaYoutube className="h-6 w-6"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
