import Layout from "./components/layouts/Layout";
import {Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import { LoginContext } from './contexts/LoginContext';
import { useProvideAuth } from './hooks/useProvideAuth';
import SignUp from "./pages/SignUp";

function App() {
  const auth = useProvideAuth();
  return (
    <LoginContext.Provider value={auth}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/post' element={<h1>타임라인</h1>} />
          <Route path='/search' element={<h1>검색</h1>} />
          <Route path='/profile' element={<h1>사용자 프로필</h1>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/error' element={<h1>에러</h1>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </LoginContext.Provider>
  )
}

export default App;
