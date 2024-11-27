import React from "react";
import "./homepage.css"; // Adjust the path if the CSS file is elsewhere.

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navigation">
        <div className="logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/Sambira_Logo__1_-removebg-preview.png`}
            alt="Sambira Logo"
          />
        </div>
        <ul className="navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <button className="GetStarted-Button">
          <a href="/login">Get Started</a>
        </button>
      </nav>

      {/* Main Content */}
      <main>
        <h1 className="h1">Revolutionizing education access in rural Malawi</h1>
        <p className="sambira-overview">
          Sambira is an innovative educational platform dedicated to empowering
          young <br />
          professionals and recent graduates in rural Malawi. By leveraging a
          bandwidth-adaptive infrastructure, Sambira brings essential <br />{" "}
          career development resources and soft skills training to communities
          with limited access to educational opportunities.
        </p>
        <p className="sambira-overview">
          Whether you are a recent graduate or a young energetic and passionate
          youth looking to advance your career, we are here for you!!
        </p>
        <div className="button-container">
          <button className="Explore-Button">
            <a href="/login">Explore Our Courses</a>
          </button>
        </div>
      </main>

      {/* FAQ Section */}
      <div className="FAQ">
        <h2 className="h1-FAQ">Frequently Asked Questions</h2>
        <div className="faq-content1">
          <details>
            <summary>How do I create my account as a student?</summary>
            <p className="p-summary">
              To create an account, simply click on the "Sign Up" button on the
              homepage. <br />
              Fill in the required details, verify your email address, <br />
              and you are ready to start exploring courses!
            </p>
          </details>
          <details>
            <summary>How many courses can I enroll into at a time?</summary>
            <p className="p-summary">
              You can select and enroll into as many courses as you want. We
              also have additional helpful resources <br />
              to guide you on your learning journey.
            </p>
          </details>
          <details>
            <summary>
              How can I book a mentorship session with the mentors?
            </summary>
            <p className="p-summary">
              When you go to the 'My Learning' page, scroll to the bottom. There
              you will see several mentors. <br />
              Choose the mentor you want to have a session with and click on
              their profile, <br />
              which will take you to their Google calendar, where you can
              schedule a meeting.
            </p>
          </details>
          <details>
            <summary>How can I access CV templates?</summary>
            <p className="p-summary">
              Visit the 'My Learning' page on the Sambira platform and scroll to
              the bottom, <br />
              where you will find the 'Additional Resources' section. Click on
              'CV/Resume Revamp' to download a CV template.
            </p>
          </details>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer-container">
          {/* Social Media Links */}
          <div className="social-media">
            <div className="social">
              <a href="https://www.linkedin.com/in/tamanda-kaunda-/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Vector (27).svg`}
                  alt="LinkedIn"
                />
              </a>
              <a href="https://www.linkedin.com/in/tamanda-kaunda-/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Vector (28).svg`}
                  alt="Twitter"
                />
              </a>
              <a href="https://www.linkedin.com/in/tamanda-kaunda-/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Vector (23).svg`}
                  alt="Facebook"
                />
              </a>
              <a href="https://www.linkedin.com/in/tamanda-kaunda-/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Group (1).svg`}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          {/* Navigation Footer */}
          <div>
            <ul className="navigation-footer">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="copyright">
            <p className="copy-footer">
              &copy; Sambira Initiative. All Rights Reserved.
            </p>
            <p className="copy-footer">
              Privacy Policy · Terms & Conditions · Refund Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
