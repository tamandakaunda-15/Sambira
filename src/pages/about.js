import React from "react";
import "./css/about.css"; 
import logo from "./images/Sambira_Logo__1_-removebg-preview.png";
import linkedinIcon from "./images/Vector (27).svg";
import twitterIcon from "./images/Vector (28).svg";
import facebookIcon from "./images/Vector (23).svg";
import instagramIcon from "./images/Group (1).svg";

const About = () => {
  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="navigation">
        <div className="logo-container">
          <img src={logo} alt="Sambira Logo" />
        </div>
        <ul className="navigation-list">
          <li><a href="/homepage">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <button className="GetStarted-Button">
          <a href="/login">Get Started</a>
        </button>
      </nav>

      {/* Main Content */}
      <main>
        <h1>Revolutionizing Education in Rural Malawi</h1>
        <p>
          Bridging the educational gap through accessible, low-bandwidth learning solutions for young
          <br />
          professionals and recent graduates.
        </p>

        <h3>Our Mission</h3>
        <p>
          Sambira Initiative is dedicated to providing essential career resources
          <br />
          and soft skills training to young professionals and recent graduates in rural areas of Malawi.
          <br />
          We understand the challenges of limited internet access and have optimized our platform to work efficiently in low-bandwidth environments.
        </p>

        <h3>Bridging the Gap</h3>
        <p>
          We optimize our platform for low-speed connections, ensuring educational
          <br />
          resources reach even the most remote areas of Malawi.
        </p>

        <h3>Career Development</h3>
        <p>
          Providing comprehensive tools including entrepreneurship training,
          <br />
          resume-building tips, and interview preparation resources.
        </p>

        <h3>Mentorship</h3>
        <p>
          Connecting students with industry leaders and mentors through our integrated
          <br />
          forum system for personalized guidance.
        </p>

        <center>
          <button className="advance">
            <a href="/login">Advance your career today</a>
          </button>
        </center>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="social-media">
            <div className="social">
              <a href="https://www.linkedin.com/in/tamanda-kaunda-/">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.linkedin.com/in/tamanda-kaunda-/">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com/in/tamanda-kaunda-/">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/tamanda-kaunda-/">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>

          <div>
            <ul className="navigation-footer">
              <li><a href="/homepage">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="copyright">
            <p className="copy-footer">&copy; Sambira Initiative. All Rights Reserved.</p>
            <p className="copy-footer">Privacy Policy · Terms & Conditions · Refund Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;