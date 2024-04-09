import './App.css';
import { Component } from 'react';

/* react의 component 선언 방식은 두 가지로 나뉜다. 
  1. 클래스형 컴포넌트 - 예전 방식, Component 상속 필요, render() 사용
  2. 함수형 컴포넌트 - 요즘 방식, 훨씬 간결, 메모리도 덜 사용, 배포 시 용량도 적다.
*/

/* 
  컴포넌트?
  리액트에서 컴포넌트는 UI를 구성하는 개별적인 블록이다.
  컴포넌트를 이용하면, 코드의 재사용성을 높이고 유지보수가 쉽다.
  데이터의 변화에 따라 UI를 만들어 주고, 컴포넌트 라이프 사이클 (생명주기) API를 활용해
  컴포넌트가 나타나고, 변화가 일어나고, 사라질 때 작업을 처리할 수 있다.
*/

/* 클래스형 컴포넌트 */
class App extends Component {
  render() {
    const name = '리액트';
    return (
    <div className="App">
      <h1>{name}</h1>
    </div>
    );
  }
}

/* 함수형 컴포넌트
function App() {
  const name = '리액트';
  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
}
 */

export default App;