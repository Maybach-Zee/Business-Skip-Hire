//A simple loading spinner component to indicate that the app is processing a request.
import React from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Finding available skips...</p>
    </div>
  );
};

export default LoadingSpinner;