import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  useEffect(() => {
    const handleKeyPress = (e) => {
      const { top, left } = position;
      if (e.key === 'ArrowUp') setPosition({ top: top - 10, left });
      if (e.key === 'ArrowDown') setPosition({ top: top + 10, left });
      if (e.key === 'ArrowLeft') setPosition({ top, left: left - 10 });
      if (e.key === 'ArrowRight') setPosition({ top, left: left + 10 });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [position]);

  return (
    <div
      className="box"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
      }}
    ></div>
  );
};

export default App;
