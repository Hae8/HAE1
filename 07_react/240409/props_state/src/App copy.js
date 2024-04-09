import './App.css';

import React, { Component } from 'react';
import { PropsComp, Button } from './components/PropsComp';

/* 클래스형 컴포넌트 (rcc)
class App extends Component {
  render() {
    return (
      <div>App</div>
    );
  }
}
*/

/* 함수형 컴포넌트 (ffc)
function App() {
  return ( 
    <div>App</div>
  );
}
*/

/* 함수형 컴포넌트 (sfc) */
const App = () => {
  // const my_info = ['해파리', 20, '남자']
  return ( 
    <div className='App'>
      {/* props란? 부모 컴포넌트가 자식 컴포넌트에게 전달하는 값 */}
      <h1>props</h1>
      <PropsComp name='해파리' age='20' gender='남자' />
      <PropsComp name='말미잘' age='20' gender='여자' />
      <PropsComp name='해삼' />
      <Button size="small" />
      <Button event={() => {alert('클릭!')}}>클릭</Button>
      <Button size="big" />인사</Button>
    </div>
  );
}

export default App;
