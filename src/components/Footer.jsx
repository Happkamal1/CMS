import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Logo" className="h-[100px] w-[100px] mb-4" />
          <p className="text-base text-gray-400 text-center md:text-left">
            Empowering students with knowledge and resources to achieve their
            goals. Join us and explore limitless possibilities!
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-200">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-200">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-200">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-200">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold mb-4">About CMS</h4>
          <ul className="space-y-2 text-gray-400 text-lg">
            <li>
              <a
                href="/library"
                className="hover:text-blue-400 transition duration-200"
              >
                Programming Books
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="hover:text-blue-400 transition duration-200"
              >
                Program Workshop
              </a>
            </li>
            <li>
              <a
                href="/library"
                className="hover:text-blue-400 transition duration-200"
              >
                Students
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="hover:text-blue-400 transition duration-200"
              >
                Gallary
              </a>
            </li>
            <li>
              <a
                href="/feedback"
                className="hover:text-blue-400 transition duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-lg">
            <li>
              <a
                href="/courses"
                className="hover:text-blue-400 transition duration-200"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/results"
                className="hover:text-blue-400 transition duration-200"
              >
                Results
              </a>
            </li>
            <li>
              <a
                href="/library"
                className="hover:text-blue-400 transition duration-200"
              >
                Library
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="hover:text-blue-400 transition duration-200"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/feedback"
                className="hover:text-blue-400 transition duration-200"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-base text-gray-400 mb-4">
            Be the first to know about updates, new features, and events!
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded border text-black border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-base text-gray-400">
        © 2025 CMS. All rights reserved by Kamal Gupta.
      </div>
    </footer>
  );
};

export default Footer;
