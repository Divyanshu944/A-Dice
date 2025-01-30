import React, { useState } from 'react';
import './Dice.css';

function Dice() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleRotate = () => {
    setRotation({
      x: rotation.x + 90, 
      y: rotation.y + 90, 
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRotate();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [rotation]);

  return (
    <div 
      className="dice" 
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }} 
      onClick={handleRotate}
    >
      <div className="face front">1</div>
      <div className="face back">6</div>
      <div className="face right">4</div>
      <div className="face left">3</div>
      <div className="face top">2</div>
      <div className="face bottom">5</div>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <h1 className="heading">3D Dice in React</h1>
      <Dice />
    </div>
  );
}

export default App;
