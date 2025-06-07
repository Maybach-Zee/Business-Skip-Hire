//This component allows users to select a skip size based on their location and project needs.
import React, { useState, useEffect } from 'react';
import SkipCard from './SkipCard';
import LoadingSpinner from './LoadingSpinner';
import { fetchSkipsByLocation } from '../services/api';
import ProgressSteps from './ProgressSteps';
import '../styles/SkipSizeSelector.css';


const SkipSizeSelector = ({ postcode = 'NR32', area = 'Lowestoft' }) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSkipsByLocation(postcode, area);
        setSkips(data);
      } catch (err) {
        setError('Failed to load skip options. Please try again.');
        console.error('Error loading skips:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, [postcode, area]);

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      // This would typically navigate to the next step
      alert(`Selected ${selectedSkip.size} yard skip for £${Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100))}`);
    }
  };

  

  // Determine most popular skip (typically mid-range)
  const popularSkipSize = skips.length > 0 ? 
    skips.find(skip => skip.size >= 8 && skip.size <= 10)?.size || 
    skips[Math.floor(skips.length / 2)]?.size : null;

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  // Sort skips by size ascending
  const sortedSkips = [...skips].sort((a, b) => a.size - b.size);

  return (

    

    <div className="skip-selector-container">
        
        <ProgressSteps />

      <div className="selector-header">
        <div className="header-content">
          <h1 className="main-title">Choose Your Perfect Skip Size</h1>
          <p className="subtitle">
            Select the ideal skip for your project in <strong>{area}</strong>
          </p>
          <div className="location-info">
            <span className="location-icon">📍</span>
            <span>Delivering to: {postcode}</span>
          </div>
        </div>
      </div>

      <div className="skips-grid">
        {sortedSkips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={handleSkipSelect}
            isPopular={skip.size === popularSkipSize}
          />
        ))}
      </div>

      {selectedSkip && (
        <div className="continue-section">
          <div className="selection-summary">
            <h3>Your Selection</h3>
            <div className="summary-details">
              <span className="selected-skip">
                {selectedSkip.size} yard skip - £{Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100))}
              </span>
              <span className="hire-period">
                {selectedSkip.hire_period_days} days hire period
              </span>
            </div>
          </div>
          
          <button className="continue-btn" onClick={handleContinue}>
            Continue to Next Step
            <span className="continue-arrow">→</span>
          </button>
        </div>
      )}

      <div className="help-section">
        <h3>Need Help Choosing?</h3>
        <div className="help-grid">
          <div className="help-item">
            <div className="help-icon">🏠</div>
            <div className="help-content">
              <h4>Small Projects</h4>
              <p>4-6 yard skips for garden clearance, small renovations</p>
            </div>
          </div>
          <div className="help-item">
            <div className="help-icon">🔨</div>
            <div className="help-content">
              <h4>Medium Projects</h4>
              <p>8-12 yard skips for kitchen/bathroom renovations</p>
            </div>
          </div>
          <div className="help-item">
            <div className="help-icon">🏗️</div>
            <div className="help-content">
              <h4>Large Projects</h4>
              <p>14+ yard skips for major construction work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSizeSelector;