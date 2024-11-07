import React, { useState } from 'react';
import CallbackChild from './CallbackChild';

// This is a parent component that will render the child component
export default function CallbackParent() {
  const [UIColor, setUIColor] = useState('white'); // Set a default color

  // This function will be passed to the child component
  const getColor = (color) => {
    setUIColor(color); // Update the color in the state
    console.log('Color received from child:', color);
  };

  return (
    <>
      {/* Apply the background color */}
      <div style={{ backgroundColor: UIColor, height: '200px', width: '200px' }}>
        <p>Background Color: {UIColor}</p> {/* Display the current color */}
      </div>
      <br />
      <CallbackChild getColor={getColor} />
    </>
  );
}
