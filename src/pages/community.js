import React from "react";
import "./css/community.css";

const CommunityForum = () => {
  return (
    <div>
      <header>
        <h1>Sambira Community Forum</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#groups">Groups</a></li>
            <li><a href="#mentors">Mentors</a></li>
            <li><a href="#create-post">Create Post</a></li>
            <li><a href="#my-posts">My Posts</a></li>
            <li><a href="mylearning.html">My Learning</a></li>
          </ul>
          <div className="user-profile">
            <span className="userName">Hello, Guest!</span>
            <img
              src="/images/divaris-shirichena-04Rd4wrSI1M-unsplash.jpg"
              alt="User Profile"
              id="profilePicture"
            />
          </div>
        </nav>
      </header>

      <main>
        <section id="groups">
          <h2>Forum Groups</h2>
          <div className="groups-container">
            <div className="group" id="entrepreneurship">
              <h3>Entrepreneurship</h3>
              <p>
                Connect with aspiring entrepreneurs and share insights on starting and running a business.
              </p>
              <button className="btn join-group" data-group="Entrepreneurship">
                Join Group
              </button>
            </div>

            <div className="group" id="career-development">
              <h3>Career Development</h3>
              <p>
                Enhance your career skills, from resume writing to interview preparation.
              </p>
              <button className="btn join-group" data-group="Career Development">
                Join Group
              </button>
            </div>
          </div>
        </section>

        <section id="mentors">
          <h2>Mentors</h2>
          <div className="mentors-container">
            <div className="mentor" data-group="Entrepreneurship">
              <h3>James Chirwa</h3>
              <p>Entrepreneurship Coach with 10 years of experience.</p>
              <a
                href="https://calendar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Book Coaching Session
              </a>
            </div>

            <div className="mentor" data-group="Career Development">
              <h3>Jane Banda</h3>
              <p>
                Career Development Expert helping students land their dream jobs.
              </p>
              <a
                href="https://calendar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Book Coaching Session
              </a>
            </div>
          </div>
        </section>

        <section id="create-post">
          <h2>Create a New Post</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="group-select">Select Group:</label>
              <select id="group-select" name="group" required>
                <option value="">Choose a group</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Career Development">Career Development</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" required />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content:</label>
              <textarea id="content" name="content" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn">Post</button>
          </form>
        </section>

        <section id="posts">
          <h2>Recent Group Posts</h2>
          <div className="posts-container">
            <article className="post" data-group="Entrepreneurship">
              <h3>How to Start a Business</h3>
              <p>Explore the key steps to launching your first startup...</p>
              <p>Posted by User123</p>
            </article>

            <article className="post" data-group="Career Development">
              <h3>Resume Tips</h3>
              <p>Learn how to make your resume stand out...</p>
              <p>Posted by User456</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Sambira Initiative. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CommunityForum;
