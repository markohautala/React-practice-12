import React, { useState } from 'react';

// This is a child component that will be rendered by the parent component
const CallbackChild = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState('');

  const handleChange = (e) => {
    const colorValue = e.target.value;
    setActiveColor(colorValue);

    // Pass the color value to the parent component if it's not empty
    if (colorValue.trim()) {
      getColor(colorValue);
    }
  };

  return (
    <>
      <input
        type="text"
        id="input"
        aria-label="input for color change"
        placeholder="Enter a color name"
        onChange={handleChange}
        value={activeColor}
      />
    </>
  );
};

export default CallbackChild;
