//A React component that displays a progress bar with steps for a skip hire process.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProgressSteps.css';

const steps = [
    //using 'Select Skip' as the active step for demonstration purposes//
  { label: 'Postcode', status: 'completed', icon: '📍', path: 'select-skip' },
  { label: 'Waste Type', status: 'completed', icon: '♻️', path: 'select-skip' },
  { label: 'Select Skip', status: 'active', number: 3, icon: '🗑️', path: '/select-skip' },
  { label: 'Permit Check', status: 'upcoming', number: 4, icon: '✅', path: '/select-skip' },
  { label: 'Choose Date', status: 'upcoming', number: 5, icon: '📅', path: '/select-skip' },
  { label: 'Payment', status: 'upcoming', number: 6, icon: '💳', path: '/select-skip' },
];

const ProgressSteps = () => {
  const navigate = useNavigate();

  const handleClick = (step) => {
    if (step.status === 'completed' || step.status === 'active') {
      navigate(step.path);
    }
  };

  return (
    <nav className="progress-steps">
      {steps.map((step, index) => (
        <React.Fragment key={step.label}>
          <div
            className={`step ${step.status} ${step.status !== 'upcoming' ? 'clickable' : ''}`}
            onClick={() => handleClick(step)}
          >
            <div className="step-circle">
              {step.status === 'completed' ? (
                <span className="step-icon">✔️</span>
              ) : (
                <span className="step-icon">{step.icon || step.number}</span>
              )}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
          {index < steps.length - 1 && <div className="step-divider" />}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default ProgressSteps;