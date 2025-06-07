//This component displays a skip card with details like size, price, and features.
import React from 'react';
import '../styles/SkipCard.css';
import { calculateTotalPrice } from '../services/api';

const SkipCard = ({ skip, isSelected, onSelect, isPopular = false }) => {
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
  
  const getSkipDescription = (size) => {
    if (size <= 6) return 'Perfect for small home projects';
    if (size <= 10) return 'Great for medium renovations';
    if (size <= 16) return 'Ideal for large projects';
    return 'Commercial & major projects';
  };

  const getSkipCapacity = (size) => {
    const capacity = Math.round(size * 1.5);
    return `~${capacity} bags of waste`;
  };

  return (
    <div 
      className={`skip-card ${isSelected ? 'selected' : ''} ${isPopular ? 'popular' : ''}`}
      onClick={() => onSelect(skip)}
    >
      {isPopular && <div className="popular-badge">Most Popular</div>}
      
      <div className="skip-header">
        <div className="skip-size">
          <span className="size-number">{skip.size}</span>
          <span className="size-unit">yard³</span>
        </div>
        <div className="skip-price">
          <span className="price-currency">£</span>
          <span className="price-amount">{totalPrice}</span>
        </div>
      </div>

      <div className="skip-details">
        <h3 className="skip-title">{skip.size} Yard Skip</h3>
        <p className="skip-description">{getSkipDescription(skip.size)}</p>
        <p className="skip-capacity">{getSkipCapacity(skip.size)}</p>
        
        <div className="skip-period">
          <span className="period-icon">📅</span>
          <span>{skip.hire_period_days} days hire</span>
        </div>

        <div className="skip-features">
          {skip.allowed_on_road && (
            <span className="feature-badge road-allowed">
              🚗 Road placement OK
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="feature-badge heavy-waste">
              🏗️ Heavy waste OK
            </span>
          )}
        </div>
      </div>

      <div className="skip-footer">
        <div className="price-breakdown">
          <div className="price-detail">
            <span>Before VAT: £{skip.price_before_vat}</span>
          </div>
          <div className="price-detail">
            <span>VAT ({skip.vat}%): £{Math.round(skip.price_before_vat * skip.vat / 100)}</span>
          </div>
        </div>
        
        <button className={`select-btn ${isSelected ? 'selected' : ''}`}>
          {isSelected ? '✓ Selected' : 'Select Skip'}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;