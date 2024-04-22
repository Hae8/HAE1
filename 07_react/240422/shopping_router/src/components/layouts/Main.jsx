import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import { styled } from "styled-components"
import ProductDetail from "../../pages/ProductDetail";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Users from "../../pages/Users";
import SignUp from "../../pages/SignUp";
import Boards from "../../pages/Boards";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import useAuth from "../../hooks/useAuth";

const Main = () => {

    return (
        <StyledMain>
            <Routes>
                {/* 누구나 접근 가능 */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />

                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<PostDetail />} />

                <Route path="/signup" element={<SignUp />} />

                {/* 회원만 접근 가능 */}
                <Route element={<UserRoute />}>
                    <Route path="/users" element={<Users />} />
                    <Route path="/boards" element={<Boards />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </StyledMain>
    );
}

const UserRoute = () => {
    const { loginUser } = useAuth();
    const isLogin = !!loginUser;
    return (
        isLogin ? <Outlet /> : <Navigate to="/login" />
    );
}

const StyledMain = styled.main`
    width: 70vw;
    margin: 0 auto;
`

export default Main;