import React, { useState } from "react";

const Results = () => {
  const [selectedYear, setSelectedYear] = useState("1st Year");
  const [formData, setFormData] = useState({
    rollNumber: "",
    dob: "",
  });

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert(`Form Submitted for ${selectedYear}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 p-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center drop-shadow-md">
          Check Your Results
        </h1>

        <div className="mb-6">
          <label
            htmlFor="year"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Select Year:
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 transition duration-300"
          >
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="selectedYear"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Selected Year:
            </label>
            <input
              type="text"
              id="selectedYear"
              value={selectedYear}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="rollNumber"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Roll Number:
            </label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleInputChange}
              placeholder="Enter your Roll Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 transition duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="dob"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 transition duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Results;
