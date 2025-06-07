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

    <div className="modern-selector-header">
      <div className="header-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="header-content">
        <div className="title-section">
          <div className="title-accent">Perfect Skip</div>
          <h1 className="main-title">
            Choose Your
            <span className="title-highlight"> Perfect Skip Size</span>
          </h1>
          <p className="subtitle">
            Tailored waste solutions for your project in <span className="area-highlight">{area}</span>
          </p>
        </div>
        
        <div className="location-card">
          <div className="location-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div className="location-details">
            <span className="location-label">Delivering to</span>
            <span className="location-value">{postcode}</span>
          </div>
          <div className="location-status">
            <div className="status-dot"></div>
            <span>Available</span>
          </div>
        </div>
        
        <div className="feature-pills">
          <div className="pill">
            <span className="pill-icon">⚡</span>
            Same Day Delivery
          </div>
          <div className="pill">
            <span className="pill-icon">♻️</span>
            Eco-Friendly
          </div>
          <div className="pill">
            <span className="pill-icon">💰</span>
            Best Price Guarantee
          </div>
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