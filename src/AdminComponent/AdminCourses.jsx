import React, { useState } from "react";

const AdminCourses = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState(null);

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleCourseDescriptionChange = (e) => {
    setCourseDescription(e.target.value);
  };

  const handleCourseImageChange = (e) => {
    setCourseImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      name: courseName,
      description: courseDescription,
      image: courseImage,
    };
    console.log("New Course Added: ", newCourse);
    setCourseName("");
    setCourseDescription("");
    setCourseImage(null);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Add a New Course</h2>
        <p className="text-gray-600 mt-4 text-lg">Fill in the details below to add a new course.</p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="courseName" className="block text-lg font-semibold text-gray-700 mb-2">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={handleCourseNameChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter course name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="courseDescription" className="block text-lg font-semibold text-gray-700 mb-2">
            Course Description
          </label>
          <textarea
            id="courseDescription"
            value={courseDescription}
            onChange={handleCourseDescriptionChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter course description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="courseImage" className="block text-lg font-semibold text-gray-700 mb-2">
            Course Image
          </label>
          <input
            type="file"
            id="courseImage"
            onChange={handleCourseImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AdminCourses;
