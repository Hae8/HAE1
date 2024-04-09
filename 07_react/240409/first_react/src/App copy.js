import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const number = 9;

  let result = ''
  if (number === 9) {
    result = "9 야!"
  } else {
    result = "9 아냐!"
  }
  return (
    <div className="App">
      {/* JSX는 자바스크립트의 확장 문법 */}
      {/* JSX는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서
       일반 자바스크립트 형태로 변환된다. */}
      
      {/* 1. 닫힌 태그 - 단일 태그에서도 태그는 닫혀야 한다. */}
      {/* 2. 하나의 엘리먼트만을 반환한다. - <></> a.k.a. Fragment */}
      {/* 3. HTML보다는 JavaScript에 가깝다. class 👉 className, for 👉 htmlFor */}
      {/* 4. 스타일은 객체 형태로 작성, - 사용이 불가능하니, camelCase로 작성! */}
      {/* 5. JSX 내부에서 중괄호를 열면, 자바스크립트 사용이 가능하다. */}
      <span className='greeting' style={{
        fontSize: "20px",
        fontWeight: "bolder",
        backgroundColor: "cornflowerblue",
        color: 'white',
      }}>안녕하세요</span>

      <h1>{number}일에 배우는 {name}</h1>

      {number === 9 ? <h2>9 야!</h2> : <h2>9 아냐!</h2>}
      <h2>{result}</h2>

      {name === '자바스크립트' ? <h1>자바스크립트입니다.</h1> : null}
      {name === '자바스크립트' && <h1>자바스크립트입니다.</h1>}
    </div>
  );
}

export default App;

