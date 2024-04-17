import { useState } from 'react';
import './App.css';
import InfoEffect from './components/infoEffect';
import InfoState from './components/infoState';
import PlayerEffect from './components/PlayerEffect';
import PlayerEffect2 from './components/PlayerEffect2';
import News from './components/News';
import Calculator from './components/Calculator';
import Average1 from './components/Average1';


// Hook: 함수형 컴포넌트에서 할 수 없었던 다양한 작업들(*상태관리)을 가능케 해주는 것
// useState, useRef, useEffect, useMemo, useCallback, useReducer, 커스텀Hook
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      {/* <InfoState /> */}

      {/* <button onClick={() => {setNumber(number => number + 1)}}> +1 </button>
      { number % 10 === 5 ? null : <InfoEffect />} */}
      {/* <PlayerEffect /> */}
      {/* <PlayerEffect2 /> */}
      <News />
      {/* <Calculator /> */}
      {/* <Average1 /> */}
    </div>
  );
}

export default App;
