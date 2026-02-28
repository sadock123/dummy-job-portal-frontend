import React from 'react';
import jobsData from './jobs.json';

function JobBoard({ onApplyClick }) {
  return (
    <div>
      {jobsData.map((job) => (
        <div key={job.id} className="job-card">
          <h2 className="job-title">{job.title}</h2>
          <p className="company-name">{job.company}</p>
          
          <div className="job-meta">
            <span>💼 {job.experience}</span>
            <span>₹ {job.salary}</span>
            <span>📍 {job.location}</span>
          </div>
          
          <div className="job-desc">
            <span style={{color: '#8292af'}}>Job description: </span>
            {job.description}
          </div>
          
          <div className="skills">
            {job.skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
          
          <div className="btn-group">
            <button className="btn-primary" onClick={() => onApplyClick(job.id)}>Apply</button>
            <a href={job.jdDownloadLink} download className="btn-secondary">Download JD</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobBoard;