// src/services/api.js
const API_BASE_URL = 'https://app.wewantwaste.co.uk/api';

export const fetchSkipsByLocation = async (postcode, area = '') => {
  try {
    const response = await fetch(`${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching skips:', error);
    throw error;
  }
};

export const calculateTotalPrice = (priceBeforeVat, vat) => {
  return Math.round(priceBeforeVat * (1 + vat / 100));
};