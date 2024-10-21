import React from 'react';

function RenderingLists() {
  const bookNames = [
    "The Alchemist",
    "The Power of Now",
    "The Art of War",
    "The 48 Laws of Power",
    "The Subtle Art of Not Giving a F*ck",
  ];

  return (
    <div>
      <ul>
        {bookNames.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderingLists;
