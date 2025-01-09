import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./AdminDashboard";
import Courses from "./AdminCourses";
import Student from "./Student";
import Feedback from "./Feedback";
import Library from "./Library";
import Logout from "./Logout";
import Password from "./Password";
import Setting from "./Settings";

const AdminMain = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/students" element={<Student />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/password" element={<Password />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
};

export default AdminMain;
