import './App.css';
import React, { useState } from 'react';
import Page from './components/Page';
import { ThemeContext } from './contexts/ThemeContext';


function App() {

  const [theme, setTheme] = useState('light');
  const onClick = () => theme == 'light'? setTheme('dark') : setTheme('light')
  const [isLogin, setIsLogin] = useState(false)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${"App-"+theme}`}>
          <button
          onClick={onClick}>
            {theme == 'light'? '다크 모드' : '라이트 모드'}
          </button>
          <Page isLogin={isLogin} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
