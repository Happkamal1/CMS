import React from "react";

const Student = ({ Img, Name, Age, Grade, Subjects }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={Img} alt={`${Name}'s profile`} className="w-full h-40 object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{Name}</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Age:</span> {Age}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Grade:</span> {Grade}
        </p>
        <h3 className="text-gray-800 font-medium mb-2">Subjects:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {Subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Student;
