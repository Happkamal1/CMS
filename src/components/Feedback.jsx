import React from "react";
import { NavLink } from "react-router-dom";

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "John Doe",
      feedback: "This is a great platform! I really enjoyed using it.",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "The user interface is very clean and easy to navigate.",
    },
    {
      id: 3,
      name: "Robert Brown",
      feedback:
        "I think there could be more features, but overall a solid experience.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl md:text:4xl font-extrabold text-gray-800 mb-8">
          User Feedback
        </h1>

        <div className="space-y-8 mb-8">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="font-semibold text-lg text-blue-800">
                {feedback.name}
              </h3>
              <p className="text-gray-700 mt-3">{feedback.feedback}</p>
            </div>
          ))}
        </div>

        <NavLink
          to="/feedback/add-feedback"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300"
        >
          Give Your Feedback
        </NavLink>
      </div>
    </div>
  );
};

export default Feedback;
