import React from 'react';
import './profilepage.js';  // Make sure this is the correct path to your CSS file

const ProfilePage = () => {
  return (
    <div>
      <header>
        <h1>User Profile</h1>
        <nav>
          <ul>
            <li><a href="../html/homepage.html">Community</a></li>
            <li><a href="../html/mylearning.html">My Learning</a></li>
            <li><a href="../html/logout.html">Logout</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="profile-info">
          <h2>Profile Information</h2>
          <div className="profile-container">
            <img src="/images/user-photo.jpg" alt="Profile Photo" className="profile-photo" />
            <div className="profile-details">
              <h3 id="profile-name">John Doe</h3>
              <p id="profile-bio">Passionate about learning and helping others grow. Currently focused on career development and entrepreneurship.</p>
              <button className="btn" onClick={() => window.location.href = 'edit-profile.html'}>Edit Profile</button>
            </div>
          </div>
        </section>

        <section id="learning-dashboard">
          <h2>Learning Dashboard</h2>
          <div className="dashboard-container">
            <h3>Your Courses</h3>
            <div className="course">
              <h4>Entrepreneurship 101</h4>
              <progress value="60" max="100"></progress>
              <p>Progress: 60% Completed</p>
              <a href="course-details.html" className="btn">View Course</a>
            </div>
            <div className="course">
              <h4>Career Coaching Basics</h4>
              <progress value="30" max="100"></progress>
              <p>Progress: 30% Completed</p>
              <a href="course-details.html" className="btn">View Course</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="social-media">
          <a href="https://www.linkedin.com"><img src="../my-app/public/images/Vector (24).svg" alt="LinkedIn" /></a>
          <a href="https://www.twitter.com"><img src="../my-app/public/images/Group (1).svg" alt="Twitter" /></a>
        </div>
        <p>&copy; 2024 Learning Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default ProfilePage;
