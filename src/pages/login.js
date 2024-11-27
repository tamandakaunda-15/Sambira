import React, { useState } from "react";
import "./css/login.css"; // Adjust the path if the CSS file is elsewhere.

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
    // Add login logic here, e.g., API calls
  };

  return (
    <div className="login-container">
      <h2>Login to Sambira</h2>
      <form id="loginForm" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <input
              type="checkbox"
              id="togglePassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
};

export default Login;
