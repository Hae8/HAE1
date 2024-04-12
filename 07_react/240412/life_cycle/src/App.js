import React, { useState } from 'react';

import './App.css';
import LifeCycle from './components/LifeCycle';


function App() {

  const [color, setColor] = useState('#000000');
  const handleRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor)
  }

  return (
    <div className="App">
      <button onClick={handleRandomColor}>색상 변경</button>
      { color[0] || color[2] || color[5] ? <LifeCycle color={color}/> : null}
      {/* 컴포넌트에도 생명 주기가 있다! */}
    </div>
  );
}

export default App;
