import React from "react";
import "../css/edit-profile.css";

const EditProfile = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Edit Profile</h1>
        <nav>
          <ul>
            <li>
              <a href="/profile">Back to Profile</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main>
        <section id="edit-profile-info">
          <h2>Update Your Information</h2>
          <form action="/save-profile-changes" method="POST" encType="multipart/form-data">
            {/* Profile Photo Upload */}
            <div className="form-group">
              <label htmlFor="profile-photo">Profile Photo:</label>
              <input type="file" id="profile-photo" name="profile-photo" accept="image/*" />
            </div>

            {/* Full Name Input */}
            <div className="form-group">
              <label htmlFor="profile-name">Full Name:</label>
              <input type="text" id="profile-name" name="profile-name" defaultValue="John Doe" required />
            </div>

            {/* Bio Input */}
            <div className="form-group">
              <label htmlFor="profile-bio">Bio:</label>
              <textarea
                id="profile-bio"
                name="profile-bio"
                rows="4"
                defaultValue="Passionate about learning and helping others grow."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn">
              Save Changes
            </button>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <div className="social-media">
          <a href="https://www.linkedin.com">
            <img src={require("../images/LinkedIn-icon.png")} alt="LinkedIn" />
          </a>
          <a href="https://www.twitter.com">
            <img src={require("../images/Twitter-icon.png")} alt="Twitter" />
          </a>
        </div>
        <p>&copy; 2024 Learning Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default EditProfile;
