import React from 'react';
import { Image } from 'react-shimmer';
import './Shimmer.css'; // Custom spinner CSS

const CustomSpinner = () => {
  return <div className="custom-spinner"></div>;
};

const Shimmer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Image
        src="https://example.com/test.jpg"
        fallback={<CustomSpinner />} // Use custom spinner
      />
    </div>
  );
};

export default Shimmer;
