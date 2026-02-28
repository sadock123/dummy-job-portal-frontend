import React, { useState } from 'react';

function ApplyPage({ jobId, onBack }) {
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create the form data payload
    const formData = new FormData();
    formData.append('jobId', jobId);
    formData.append('resume', resume);
    if (coverLetter) {
      formData.append('coverLetter', coverLetter);
    }

    try {
      // Send the POST request to your FastAPI backend
     const response = await fetch('https://dummy-backend-xyz.onrender.com/api/apply', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Server Response:", result);
        alert(`Success! Application submitted for Job ID: ${jobId}`);
        onBack(); // Return to jobs list
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error connecting to the server. Is FastAPI running?");
    }
  };
  return (
    <div className="apply-container">
      <button className="back-btn" onClick={onBack}>← Back to Job Search</button>
      
      <h2 className="job-title" style={{fontSize: '22px', marginBottom: '25px'}}>
        Submit Your Application
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Upload Resume <span style={{color:'red'}}>*</span></label>
          <input 
            type="file" 
            className="file-input" 
            required 
            onChange={(e) => setResume(e.target.files[0])} 
            accept=".pdf,.doc,.docx" 
          />
          <small style={{color: '#718096', display: 'block', marginTop: '8px'}}>
            Supported Formats: DOC, DOCX, PDF, up to 2MB
          </small>
        </div>
        
        <div className="form-group">
          <label className="form-label">Upload Cover Letter (Optional)</label>
          <input 
            type="file" 
            className="file-input" 
            onChange={(e) => setCoverLetter(e.target.files[0])} 
            accept=".pdf,.doc,.docx" 
          />
        </div>
        
        <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '10px', padding: '14px'}}>
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyPage;