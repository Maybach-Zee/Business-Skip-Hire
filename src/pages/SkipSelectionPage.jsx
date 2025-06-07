// This file is part of the SkipHire project
import React from 'react';
import SkipSizeSelector from '../components/SkipSizeSelector';

const SkipSelectionPage = () => {

  // These would typically come from URL params or props in a real app
  const postcode = 'NR32';
  const area = 'Lowestoft';
  
  return (
    <div className="page-container">
      <SkipSizeSelector postcode={postcode} area={area} />
    </div>
  );
};

export default SkipSelectionPage;