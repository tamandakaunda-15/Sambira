import React, { useState } from 'react';
import '../css/signup.css'; // Ensure this is the correct path to your CSS file

const SignupPage = () => {
  // State for storing form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
    } else {
      alert('Signup successful!');
      // Handle actual signup logic, such as API calls here
    }
  };

  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default SignupPage;
