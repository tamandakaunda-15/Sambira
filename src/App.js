import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "./pages/home.js";
import AboutPage from "./pages/about.js";
import ContactPage from "./pages/contact.js";
import CommunityPage from "./pages/community.js";
import LoginPage from "./pages/login.js";

// Import components
import EditProfile from "./components/editProfile.js";
import ProfilePage from "./components/profilepage.js";
import SignupPage from "./components/signup.js";
import LearningDashboard from "./components/learningDashboard.js";
import CourseList from "./components/courselist.js";
import CourseDetailComponent from "./components/courseDetailTemplate.js";
import CertificateComponent from "./components/certificate.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/learning-dashboard" element={<LearningDashboard />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetailComponent />} />
        <Route path="/certificate/:id" element={<CertificateComponent />} /> {/* Route for certificate */}
      </Routes>
    </Router>
  );
}

export default App;
