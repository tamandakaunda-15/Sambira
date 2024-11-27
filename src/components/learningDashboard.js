import React, { useState } from "react";
import "..css/mylearning.css"; // Adjust the path if necessary
import { Link } from "react-router-dom"; // Assuming React Router is used for navigation

const MyLearning = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [courseModalVisible, setCourseModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const openCourseModal = (courseName) => {
    setSelectedCourse(courseName);
    setCourseModalVisible(true);
  };

  const closeCourseModal = () => {
    setCourseModalVisible(false);
    setSelectedCourse("");
  };

  return (
    <div>
      <nav className="navigation">
        <div className="logo-container">
          <img src="images/Sambira_Logo__1_-removebg-preview.png" alt="Logo" />
        </div>
        <ul className="navigation">
          <li><Link to="/homepage">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/community">Join Our Community</Link></li>
        </ul>

        <div className="user-profile">
          <span className="userName">Hello, Guest!</span>
          <img
            src="images/divaris-shirichena-04Rd4wrSI1M-unsplash.jpg"
            alt="User Profile"
            id="profilePicture"
          />
        </div>
      </nav>

      <div className="container">
        <div>
          <form className="search-input" method="get">
            <input
              type="search"
              placeholder="Search...."
              name="query"
              id="searchInput"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">
              <img src="images/search-icon.svg" alt="Search" />
            </button>
          </form>
        </div>

        <div>
          <select
            id="categoryFilter"
            value={categoryFilter}
            onChange={handleCategoryChange}
          >
            <option value="All">All Categories</option>
            <option value="Career Development">Career Development</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
          </select>
        </div>
      </div>

      <main>
        <h1>Featured Courses</h1>
        <div className="course-container">
          <div
            className="featured-courses"
            data-category="Career Development"
            onClick={() => openCourseModal('Digital Literacy Fundamentals')}
          >
            <img
              src="images/digital-funda-courses.svg"
              alt="Digital Literacy Courses"
            />
            <div className="course-info">
              <h4>Digital Literacy Fundamentals</h4>
              <p><i className="far fa-clock"></i> 6 Weeks</p>
              <p><i className="fas fa-level-up-alt"></i> Beginner</p>
              <p><i className="fas fa-user-graduate"></i> 1.2k Students</p>
            </div>
          </div>

          <div
            className="featured-courses"
            data-category="Career Development"
            onClick={() => openCourseModal('Resume Building Masterclass')}
          >
            <img src="images/entrepreneeurship.svg" alt="Resume Courses" />
            <div className="course-info">
              <h4>Resume Building Masterclass</h4>
              <p><i className="far fa-clock"></i> 4 Weeks</p>
              <p><i className="fas fa-level-up-alt"></i> Intermediate</p>
              <p><i className="fas fa-user-graduate"></i> 856 Students</p>
            </div>
          </div>

          <div
            className="featured-courses"
            data-category="Entrepreneurship"
            onClick={() => openCourseModal('Entrepreneurship Basics')}
          >
            <img
              src="images/divaris-shirichena-04Rd4wrSI1M-unsplash.jpg"
              alt="Entrepreneurship Courses"
            />
            <div className="course-info">
              <h4>Entrepreneurship Basics</h4>
              <p><i className="far fa-clock"></i> 8 Weeks</p>
              <p><i className="fas fa-level-up-alt"></i> Beginner</p>
              <p><i className="fas fa-user-graduate"></i> 3k Students</p>
            </div>
          </div>

          <div
            className="featured-courses"
            data-category="Career Development"
            onClick={() => openCourseModal('Career Readiness Program')}
          >
            <img src="images/home-background.png" alt="Career Readiness" />
            <div className="course-info">
              <h4>Career Readiness Program</h4>
              <p><i className="far fa-clock"></i> 5 Weeks</p>
              <p><i className="fas fa-level-up-alt"></i> Intermediate</p>
              <p><i className="fas fa-user-graduate"></i> 950 Students</p>
            </div>
          </div>
        </div>

        <h1>Learning Paths</h1>
        <div className="learning-paths">
          <div className="path-card">
            <h4>Career Development Track</h4>
            <p>Master essential skills for professional growth, including communication, leadership, and personal branding.</p>
            <p><strong>Modules:</strong> 5</p>
            <button className="explore-button">Explore Track</button>
          </div>

          <div className="path-card">
            <h4>Entrepreneurship Journey</h4>
            <p>Learn how to turn ideas into thriving businesses by mastering financial planning, marketing, and innovation.</p>
            <p><strong>Modules:</strong> 10</p>
            <button className="explore-button">Explore Track</button>
          </div>
        </div>

        <h1>Quick Access Resources</h1>
        <div className="access-resources">
          <div className="resource-card">
            <h4><Link to="/interview-guides">Interview Guides</Link></h4>
            <p>Prepare for your interviews with expert tips and sample questions.</p>
          </div>
          <div className="resource-card">
            <h4><Link to="/cv-templates">CV Templates</Link></h4>
            <p>Access professionally designed CV templates to land your dream job.</p>
          </div>
          <div className="resource-card">
            <h4><Link to="/skill-assessments">Skill Assessments</Link></h4>
            <p>Evaluate your skills with our curated assessments for various careers.</p>
          </div>
        </div>
      </main>

      {courseModalVisible && (
        <div id="courseModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeCourseModal}>&times;</span>
            <h2>{selectedCourse}</h2>
            <p>Do you want to enroll in this course? Track your progress and earn a certificate upon completion.</p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-container">
          <div className="social-media">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <ul className="navigation-footer">
            <li><Link to="/homepage">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <p>&copy; Sambira Initiative. All Rights Reserved.</p>
          <p className="copy-footer">Privacy Policy · Terms & Conditions · Refund Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default MyLearning;
