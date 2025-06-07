import React from 'react';
import '../styles/ProgressSteps.css'; // Ensure you have the appropriate CSS for styling

const steps = [
  { label: 'Postcode', status: 'completed', icon: '📍', path: 'select-skip' },
  { label: 'Waste Type', status: 'completed', icon: '♻️', path: 'select-skip' },
  { label: 'Select Skip', status: 'active', number: 3, icon: '🗑️', path: '/select-skip' },
  { label: 'Permit Check', status: 'upcoming', number: 4, icon: '✅', path: '/select-skip' },
  { label: 'Choose Date', status: 'upcoming', number: 5, icon: '📅', path: '/select-skip' },
  { label: 'Payment', status: 'upcoming', number: 6, icon: '💳', path: '/select-skip' },
];

const ProgressSteps = () => {
  const handleClick = (step) => {
    if (step.status === 'completed' || step.status === 'active') {
      console.log(`Navigate to: ${step.path}`);
    }
  };

  const getProgressWidth = () => {
    const activeIndex = steps.findIndex(s => s.status === 'active');
    return `${((activeIndex + 0.5) / steps.length) * 100}%`;
  };

  const getCurrentStep = () => {
    const activeStep = steps.find(s => s.status === 'active');
    const stepNumber = steps.findIndex(s => s.status === 'active') + 1;
    return { stepNumber, label: activeStep?.label || '' };
  };

  return (
    <div className="progress-container">
      <div className="progress-wrapper">
        {/* Progress Line Background */}
        <div className="progress-line-bg"></div>
        
        {/* Active Progress Line */}
        <div 
          className="progress-line-active"
          style={{ width: getProgressWidth() }}
        ></div>

        {/* Steps Container */}
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.label} className="step-group">
              {/* Step Circle */}
              <div
                className={`step-circle ${step.status} ${
                  (step.status === 'completed' || step.status === 'active') ? 'clickable' : ''
                }`}
                onClick={() => handleClick(step)}
              >
                {step.status === 'completed' ? (
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="step-icon-text">{step.icon || step.number}</span>
                )}
                
                {/* Ripple Effect for Active Step */}
                {step.status === 'active' && <div className="ripple-effect"></div>}
              </div>

              {/* Step Label */}
              <div className="step-info">
                <p className={`step-label ${step.status}`}>
                  {step.label}
                </p>
                
                {/* Status Indicator */}
                <div className={`status-indicator ${step.status}`}>
                  {step.status === 'completed' && 'Complete'}
                  {step.status === 'active' && 'Current'}
                  {step.status === 'upcoming' && 'Upcoming'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Summary */}
      <div className="progress-summary">
        <div className="summary-content">
          <div className="pulse-dot"></div>
          <span className="summary-text">
            Step {getCurrentStep().stepNumber} of {steps.length}: {getCurrentStep().label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;