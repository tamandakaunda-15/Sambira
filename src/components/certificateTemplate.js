// components/Certificate.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CertificateComponent = () => {
  const { id } = useParams();
  const course = {
    1: 'Entrepreneurship 101',
    2: 'Career Coaching Basics',
    // Add more courses here
  }[id];

  const navigate = useNavigate();

  // Handle downloading the certificate as a PDF (using html2pdf.js or another library)
  const downloadCertificate = () => {
    const certificateContent = document.getElementById('certificate').innerHTML;
    const pdf = new window.html2pdf();
    pdf.from(certificateContent).save(`${course}-certificate.pdf`);
  };

  return (
    <div>
      <h2>Certificate of Completion</h2>
      <div id="certificate" style={{ border: '1px solid #ddd', padding: '20px', width: '80%', margin: '0 auto', textAlign: 'center' }}>
        <h3>Certificate of Completion</h3>
        <p>This certifies that</p>
        <h2>John Doe</h2>
        <p>has successfully completed the course</p>
        <h3>{course}</h3>
        <p>On this day, {new Date().toLocaleDateString()}</p>
      </div>
      <button onClick={downloadCertificate}>Download Certificate</button>
      <button onClick={() => navigate('/learning-dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default CertificateComponent;
