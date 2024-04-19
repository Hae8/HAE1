import Header from './components/layouts/Header';
import Main from './components/layouts/Main';

/**
 * 주소에 따라 다른 화면을 보여주는 것 -> 라우팅
 * - react에는 라우팅 기능이 공식적으로 없다
 * - 가장 많이 활용되는 라이브러리 "react-router-dom" 사용
 *    - yarn add react-router-dom
 * 
 * 사용 방법
 * 1. BrowserRouter로 전체를 감싼다 (index.js)
 * 2. Routes 안에 Route로 경로와 컴포넌트 요소를 일러준다.
 * 
 * a 태그를 통해 페이지를 이동하면, 페이지를 아예 새롭게 불러온다.
 * - 상태가 초기화 되는 문제 발생 !!
 * - Link 컴포넌트를 이용해, 브라우저의 주소를 바꿔주어야 한다.
 * 
 * react-router-dom 주요 컴포넌트, 기능
 * 1. BrowserRouter : 라우팅을 적용할 컴포넌트 지정
 * 2. Routes : 여러 Route를 감싸는 컴포넌트
 * 3. Route :  경로와 컴포넌트를 연결해주는 컴포넌트
 * 4. Link : 페이지 이동을 도와주는 컴포넌트
 * 5. useNavigate : 페이지 이동을 위한 Hook
 */

function App() {
  return (
      <div>
        <Header />
        <Main />
      </div>
  );
}

export default App;
