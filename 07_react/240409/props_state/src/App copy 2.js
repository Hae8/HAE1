import './App.css';
import React, { Component } from 'react';

/* 함수형 컴포넌트 (sfc) */
const App = () => {
  return ( 
    <div className='App'>
      <Layout>
        <div>
          <h1>게시판 화면</h1>
          <p>
            여기에는 글들이 있겠죠?
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default App;

const Layout = (props) => {
  return ( 
    <>
      <header className='App-header'>
        메인로고, 메인 네비게이션 바, 다른 추가 버튼
      </header>
      <main>
        {props.children} {/* Layout 컴포넌트를 만들 때 주로 사용한다. */}
      </main>
      <footer>
        연락처, 저작권 정보
      </footer>
    </>
  );
}


