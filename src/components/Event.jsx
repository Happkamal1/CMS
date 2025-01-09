import React from "react";

const EventCard = ({ title, description, date, time, location }) => {
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-r from-blue-50 to-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-extrabold text-blue-700 mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="text-left mb-6">
        <h4 className="text-lg font-semibold text-gray-800">Event Details:</h4>
        <ul className="list-none space-y-2 text-gray-600">
          <li>🗓 <span className="font-medium">Date:</span> {date}</li>
          <li>🕒 <span className="font-medium">Time:</span> {time}</li>
          <li>📍 <span className="font-medium">Location:</span> {location}</li>
        </ul>
      </div>
      <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform duration-300 hover:scale-105">
        Register Now
      </button>
    </div>
  );
};

const Event = () => {
  const eventData = [
    {
      title: "Tech Innovators Workshop",
      description: "Explore groundbreaking innovations and network with tech leaders.",
      date: "January 10, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Online (Zoom link will be provided)",
    },
    {
      title: "AI and Machine Learning Bootcamp",
      description: "Learn the basics and advanced concepts of AI in one session.",
      date: "January 15, 2025",
      time: "11:00 AM - 5:00 PM",
      location: "Online (Zoom link will be provided)",
    },
    {
      title: "Future of Web Development",
      description: "Discover the latest trends in web technologies and frameworks.",
      date: "January 20, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Online (Zoom link will be provided)",
    },
    {
      title: "Cybersecurity Essentials",
      description: "Learn how to protect yourself and your organization from cyber threats.",
      date: "January 25, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Online (Zoom link will be provided)",
    },
    {
      title: "Startup Pitch Fest",
      description: "Pitch your ideas to investors and industry experts.",
      date: "January 30, 2025",
      time: "12:00 PM - 6:00 PM",
      location: "Online (Zoom link will be provided)",
    },
    {
      title: "UI/UX Design Trends 2025",
      description: "Understand the latest trends and practices in UI/UX design.",
      date: "February 4, 2025",
      time: "9:30 AM - 2:30 PM",
      location: "Online (Zoom link will be provided)",
    },
    {
      title: "Blockchain for Beginners",
      description: "Learn the fundamentals of blockchain technology and its applications.",
      date: "February 10, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Online (Zoom link will be provided)",
    },
    {
      title: "Cloud Computing Fundamentals",
      description: "Dive into the basics of cloud computing and its real-world use cases.",
      date: "February 15, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Online (Zoom link will be provided)",
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h1 className="text-2xl md:text-5xl font-extrabold text-gray-800 text-center mb-12">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
