// components/CourseDetail.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const courses = [
  { id: 1, name: 'Entrepreneurship 101', description: 'Learn the basics of entrepreneurship.' },
  { id: 2, name: 'Career Coaching Basics', description: 'Learn career coaching fundamentals.' },
  // Add more courses as needed
];

const CourseDetailComponent = () => {
  const { id } = useParams(); // Get course id from URL
  const navigate = useNavigate();
  const course = courses.find(course => course.id === parseInt(id));

  const [progress, setProgress] = useState(0); // Track the course progress (in percentage)

  if (!course) {
    return <div>Course not found</div>;
  }

  // Handle progress update when user clicks the button
  const updateProgress = () => {
    setProgress(prevProgress => {
      if (prevProgress < 100) {
        const newProgress = prevProgress + 10; // Increase by 10% each time
        // Save progress to localStorage
        localStorage.setItem(course.id, newProgress);
        return newProgress;
      }
      return 100;
    });
  };

  const handleEnroll = () => {
    // Simulate enrolling the user (could be API call or localStorage update)
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    enrolledCourses.push(course);
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));

    // Navigate to dashboard or another page
    navigate('/learning-dashboard');
  };

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <div>
        <progress value={progress} max="100"></progress>
        <p>Progress: {progress}%</p>
      </div>
      <button onClick={updateProgress}>Mark Progress</button>
      <button onClick={handleEnroll}>Enroll in this course</button>
    </div>
  );
};

export default CourseDetailComponent;
