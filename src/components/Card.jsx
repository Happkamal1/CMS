import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 sm:w-96 px-16 py-16 transform transition duration-300 hover:scale-105">
      <img
        src={props.Img}
        alt={props.Name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{props.Name}</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          {props.Description}
        </p>
      </div>
      <div className="px-4 py-2">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
