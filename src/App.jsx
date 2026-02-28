import React, { useState } from 'react';
import JobBoard from './JobBoard';
import ApplyPage from './ApplyPage';
import './App.css'; // <-- Importing the CSS we just made

function App() {
  const [applyingToJobId, setApplyingToJobId] = useState(null);

  return (
    <div className="app-wrapper">
      {/* Fake Naukri Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">NaukriClone</div>
      </nav>

      <main className="main-container">
        {applyingToJobId ? (
          <ApplyPage 
            jobId={applyingToJobId} 
            onBack={() => setApplyingToJobId(null)} 
          />
        ) : (
          <JobBoard 
            onApplyClick={(id) => setApplyingToJobId(id)} 
          />
        )}
      </main>
    </div>
  );
}

export default App;