import React, { useState, useEffect } from 'react';

const MoveElementWithArrowKeys = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newPosition = { ...position };
      if (e.key === 'ArrowUp') newPosition.y -= 10;
      if (e.key === 'ArrowDown') newPosition.y += 10;
      if (e.key === 'ArrowLeft') newPosition.x -= 10;
      if (e.key === 'ArrowRight') newPosition.x += 10;
      setPosition(newPosition);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position]);

  return (
    <div
      className="moveable-element"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      🚗
    </div>
  );
};

export default MoveElementWithArrowKeys;
