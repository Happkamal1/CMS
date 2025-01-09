import React, { useState } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: "John Doe", feedback: "Great course!" },
    { id: 2, name: "Jane Smith", feedback: "Very informative!" },
  ]);
  const [newFeedback, setNewFeedback] = useState({ name: "", feedback: "" });

  const handleDelete = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  const handleAddFeedback = (e) => {
    e.preventDefault();
    const newId = feedbacks.length ? feedbacks[feedbacks.length - 1].id + 1 : 1;
    setFeedbacks([...feedbacks, { id: newId, ...newFeedback }]);
    setNewFeedback({ name: "", feedback: "" });
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Manage Feedback</h2>
        <p className="text-gray-600 mt-4 text-lg">View and manage student feedback.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Feedback List</h3>
        <ul>
          {feedbacks.map((feedback) => (
            <li key={feedback.id} className="flex justify-between items-center mb-4">
              <div>
                <strong>{feedback.name}</strong>
                <p>{feedback.feedback}</p>
              </div>
              <button
                onClick={() => handleDelete(feedback.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Add New Feedback</h3>
        <form onSubmit={handleAddFeedback} className="mt-4">
          <div className="mb-4">
            <input
              type="text"
              value={newFeedback.name}
              onChange={(e) => setNewFeedback({ ...newFeedback, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <textarea
              value={newFeedback.feedback}
              onChange={(e) => setNewFeedback({ ...newFeedback, feedback: e.target.value })}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter feedback"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
