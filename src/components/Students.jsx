import React from "react";
import Student from "../components/Student";
import ProfilePic from "../CourseImg/User.jpg";

const StudentPage = () => {
  const studentData = [
    {
      Img: ProfilePic,
      Name: "John Doe",
      Age: 16,
      Grade: "10th Grade",
      Subjects: ["Math", "Science", "History"],
    },
    {
      Img: ProfilePic,
      Name: "Jane Smith",
      Age: 17,
      Grade: "11th Grade",
      Subjects: ["English", "Biology", "Physics"],
    },
    {
      Img: ProfilePic,
      Name: "Jane Smith",
      Age: 17,
      Grade: "11th Grade",
      Subjects: ["English", "Biology", "Physics"],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Student Directory
        </h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Students..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentData.map((student, index) => (
            <Student
              key={index}
              Img={student.Img}
              Name={student.Name}
              Age={student.Age}
              Grade={student.Grade}
              Subjects={student.Subjects}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
