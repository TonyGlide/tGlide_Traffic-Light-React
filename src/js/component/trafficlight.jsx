import React, { useState, useEffect } from 'react';
import "../../styles/trafficlight.css"

const TrafficLight = () => {
  const [color, setColor] = useState('');
  const [isIntervalRunning, setIsIntervalRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isIntervalRunning) {
      intervalId = setInterval(() => {
        setColor((prevColor) => {
          switch (prevColor) {
            case 'red':
              return 'yellow';
            case 'yellow':
              return 'green';
            case 'green':
              return 'red';
            default:
              return 'red';
          }
        });
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [isIntervalRunning]);

  const handleButtonClick = () => {
    setIsIntervalRunning((prevState) => !prevState);
  };

  const handleLightClick = (clickedColor) => {
    if (!isIntervalRunning) {
      setColor(clickedColor);
    }
  };

  return (
    <div className="body">
      <div className="stem" />
      <div className="traffic-light-body">
      <div className={`red light ${color === 'red' ? 'active' : ''}`}
          onClick={() => handleLightClick('red')}/>
      <div className={`yellow light ${color === 'yellow' ? 'active' : ''}`}
          onClick={() => handleLightClick('yellow')}/>
      <div className={`green light ${color === 'green' ? 'active' : ''}`}
          onClick={() => handleLightClick('green')}/>
      </div>
      
      <button onClick={handleButtonClick}>
        {isIntervalRunning ? '0' : '1'}
      </button>
    </div>
  );
};

export default TrafficLight;