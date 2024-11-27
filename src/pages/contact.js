import React from "react";
import "../css/contact.css"; // Ensure CSS is in the correct location
import logo from "../images/Sambira_Logo__1_-removebg-preview.png"; // Update path based on your folder structure
import linkedinIcon from "../images/Vector (27).svg";
import twitterIcon from "../images/Vector (28).svg";
import facebookIcon from "../images/Vector (23).svg";
import instagramIcon from "../images/Group (1).svg";

// Navigation Component
const Navigation = () => (
  <nav className="navigation">
    <div className="logo-container">
      <img src={logo} alt="Sambira Logo" />
    </div>
    <ul className="navigation">
      <li><a href="/homepage">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
    <button className="GetStarted-Button">
      <a href="/login">Get Started</a>
    </button>
  </nav>
);

// Contact Form Component
const ContactForm = () => (
  <form className="contact-form" action="#" method="POST">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Type your message here..."
        rows="5"
        required
      ></textarea>
    </div>

    <button type="submit" className="submit-button">
      Send Message
    </button>
  </form>
);

// Footer Component
const Footer = () => (
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
        <p className="copy-footer">
          Privacy Policy · Terms & Conditions · Refund Policy
        </p>
      </div>
    </div>
  </footer>
);

// Contact Page Component
const Contact = () => (
  <div>
    <Navigation />
    <main className="contact-main">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have a question? We'd love to hear from you.</p>
        <ContactForm />
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
