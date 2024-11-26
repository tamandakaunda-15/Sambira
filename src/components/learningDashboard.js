<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Learning</title>
    <link rel="stylesheet" href="../css/mylearning.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
</head>
<body>
    <nav class="navigation">
        <div class="logo-container">
            <img src="images/Sambira_Logo__1_-removebg-preview.png" alt="Logo" />
        </div>
        <ul class="navigation">
            <li><a href="../html/homepage.html">Home</a></li>
            <li><a href="../html/about.html">About Us</a></li>
            <li><a href="../html/contact.html">Contact Us</a></li>
            <li><a href="../html/community.html">Join Our Community</a></li>
        </ul>

        <div class="user-profile">
            <span class="userName">Hello, Guest!</span>
            <img src="../my-app/public/images/divaris-shirichena-04Rd4wrSI1M-unsplash.jpg" alt="User Profile" id="profilePicture" />
        </div>
    </nav>

    <div class="container">
        <div>
            <form class="search-input" method="get">
                <input type="search" placeholder="Search...." name="query" id="searchInput" />
                <button type="submit" class="search-button">
                    <img src="images/search-icon.svg" alt="Search" />
                </button>
            </form>
        </div>
    

        <div>
            <select id="categoryFilter">
                <option value="All">All Categories</option>
                <option value="Career Development">Career Development</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
            </select>
        </div>
    </div>
     

    <main>
        <h1>Featured Courses</h1>
        <div class="course-container">
            <div class="featured-courses"  data-category="Career Development" onclick="openCourseModal('Digital Literacy Fundamentals')">
                <img src="../my-app/public/images/digital-funda-courses.svg" alt="Digital Literacy Courses" />
                <div class="course-info">
                    <h4>Digital Literacy Fundamentals</h4>
                    <p><i class="far fa-clock"></i> 6 Weeks</p>
                    <p><i class="fas fa-level-up-alt"></i> Beginner</p>
                    <p><i class="fas fa-user-graduate"></i> 1.2k Students</p>
                </div>
            </div>
        
            <div class="featured-courses" data-category="Career Development" onclick="openCourseModal('Resume Building Masterclass')">
                <img src="../my-app/public/images/entrepreneuurship.svg" alt="Resume Courses" />
                <div class="course-info">
                    <h4>Resume Building Masterclass</h4>
                    <p><i class="far fa-clock"></i> 4 Weeks</p>
                    <p><i class="fas fa-level-up-alt"></i> Intermediate</p>
                    <p><i class="fas fa-user-graduate"></i> 856 Students</p>
                </div>
            </div>
        
            <div class="featured-courses" data-category="Entrepreneurship" onclick="openCourseModal('Entrepreneurship Basics')">
                <img src="../my-app/public/images/divaris-shirichena-04Rd4wrSI1M-unsplash.jpg" alt="Entrepreneurship Courses" />
                <div class="course-info">
                    <h4>Entrepreneurship Basics</h4>
                    <p><i class="far fa-clock"></i> 8 Weeks</p>
                    <p><i class="fas fa-level-up-alt"></i> Beginner</p>
                    <p><i class="fas fa-user-graduate"></i> 3k Students</p>
                </div>
            </div>
         
            <div class="featured-courses" data-category="Career Development" onclick="openCourseModal('Career Readiness Program')">
                <img src="../my-app/public/images/home-background.png" alt="Career Readiness" />
                <div class="course-info">
                    <h4>Career Readiness Program</h4>
                    <p><i class="far fa-clock"></i> 5 Weeks</p>
                    <p><i class="fas fa-level-up-alt"></i> Intermediate</p>
                    <p><i class="fas fa-user-graduate"></i> 950 Students</p>
                </div>
            </div>
        </div>
        

        <h1>Learning Paths</h1>
        <div class="learning-paths">
            <div class="path-card">
                <h4>Career Development Track</h4>
                <p>Master essential skills for professional growth, including communication, leadership, and personal branding.</p>
                <p><strong>Modules:</strong> 5</p>
                <button class="explore-button">Explore Track</button>
            </div>
        
            <div class="path-card">
                <h4>Entrepreneurship Journey</h4>
                <p>Learn how to turn ideas into thriving businesses by mastering financial planning, marketing, and innovation.</p>
                <p><strong>Modules:</strong> 10</p>
                <button class="explore-button">Explore Track</button>
            </div>
        </div>
        

        <h1>Quick Access Resources</h1>
<div class="access-resources">
    <div class="resource-card">
        <h4><a href="interview-guides.html">Interview Guides</a></h4>
        <p>Prepare for your interviews with expert tips and sample questions.</p>
    </div>
    <div class="resource-card">
        <h4><a href="cv-templates.html">CV Templates</a></h4>
        <p>Access professionally designed CV templates to land your dream job.</p>
    </div>
    <div class="resource-card">
        <h4><a href="skill-assessments.html">Skill Assessments</a></h4>
        <p>Evaluate your skills with our curated assessments for various careers.</p>
    </div>
</div>

    </main>

   
    <div id="courseModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeCourseModal()">&times;</span>
            <h2 id="courseTitle">Course Title</h2>
            <p>Do you want to enroll in this course? Track your progress and earn a certificate upon completion.</p>
            <button class="enroll-button">Enroll Now</button>
        </div>
    </div>

    <footer>
        <div class="footer-container">
            <div class="social-media">
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            <ul class="navigation-footer">
                <li><a href="../html/homepage.html">Home</a></li>
                <li><a href="../html/about.html">About Us</a></li>
                <li><a href="../html/contact.html">Contact Us</a></li>
            </ul>
            <p>&copy; Sambira Initiative. All Rights Reserved.</p>
            <p class="copy-footer">Privacy Policy · Terms & Conditions · Refund Policy</p>
        </div>
    </footer>

    <script src="../js/mylearning.js"></script>
</body>
</html>
