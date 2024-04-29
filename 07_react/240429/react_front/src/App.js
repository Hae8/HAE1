import Layout from "./components/layouts/Layout";
import {Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import { LoginContext } from './contexts/LoginContext';
import { useProvideAuth } from './hooks/useProvideAuth';
import SignUp from "./pages/SignUp";
import MyProfile from "./pages/MyProfile";
import Profile from "./pages/Profile";
import TimeLine from "./pages/TimeLine";
import Search from "./pages/Search";


function App() {
  const auth = useProvideAuth();
  return (
    <LoginContext.Provider value={auth}>
      <Layout>
        <Routes>
          <Route path='/' element={auth.loginUser?.id ? <MyProfile /> : <Home/>} />
          <Route path='/post' element={<TimeLine />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/error' element={<h1>에러</h1>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </LoginContext.Provider>
  )
}

export default App;
