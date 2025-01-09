import React from "react";
import Card from "../components/Card";
import Course1 from "../CourseImg/JavaScript.png";
import Course2 from "../CourseImg/React.png";
import Course3 from "../CourseImg/Python.png";
import Course4 from "../CourseImg/Java.png";
import Course5 from "../CourseImg/MongoDB.png";
import Course6 from "../CourseImg/Node.png";
import Course7 from "../CourseImg/PHP.png";
import Course8 from "../CourseImg/Angular.png";
import Course9 from "../CourseImg/Express.png";

const Courses = () => {
  const courseData = [
    {
      Img: Course1,
      Name: "JavaScript Essentials",
      Description: "Master the fundamentals of JavaScript programming.",
    },
    {
      Img: Course2,
      Name: "React Development",
      Description: "Learn to build modern web apps with React.js.",
    },
    {
      Img: Course3,
      Name: "Python for Beginners",
      Description: "Get started with Python and explore its power.",
    },
    {
      Img: Course4,
      Name: "Java Programming",
      Description: "Develop robust applications with Java.",
    },
    {
      Img: Course5,
      Name: "MongoDB Basics",
      Description: "Learn to work with NoSQL databases like MongoDB.",
    },
    {
      Img: Course6,
      Name: "Node.js Essentials",
      Description: "Build scalable backend applications using Node.js.",
    },
    {
      Img: Course7,
      Name: "PHP for Web Development",
      Description: "Create dynamic web pages with PHP.",
    },
    {
      Img: Course8,
      Name: "Angular Framework",
      Description: "Develop powerful single-page apps with Angular.",
    },
    {
      Img: Course9,
      Name: "Express.js Fundamentals",
      Description: "Master backend development with Express.js.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Courses</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Explore our wide range of courses to enhance your skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {courseData.map((course, index) => (
          <Card
            key={index}
            Img={course.Img}
            Name={course.Name}
            Description={course.Description}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
