import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import Courses from "./components/Courses";
import Library from "./components/Library";
import Event from "./components/Event";
import Feedback from "./components/Feedback";
import AddFeedback from "./components/AddFeedback";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admin from "./AdminComponent/AdminPanel";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return <AppContent />;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/adminzone");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className="py-4 px-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/library" element={<Library />} />
          <Route path="/events" element={<Event />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedback/add-feedback" element={<AddFeedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminzone/*" element={<Admin />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
export default App;
