import React from "react";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Courses from "./Courses";
import Library from "./Library";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div>
      <MainSection />
      <Courses />
      <Library />
      <Feedback/>
    </div>
  );
};

export default Home;
