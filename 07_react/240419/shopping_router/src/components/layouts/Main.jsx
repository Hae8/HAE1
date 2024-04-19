import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import { styled } from "styled-components"
import ProductDetail from "../../pages/ProductDetail";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Users from "../../pages/Users";
import SignUp from "../../pages/SignUp";

const Main = () => {
    return (
        <StyledMain>
            <Routes>
                <Route path="/" element={<Home />}></Route>

                <Route path="/products" element={<Products />}></Route>
                <Route path="/products/:id" element={<ProductDetail />}></Route>

                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/posts/:id" element={<PostDetail />}></Route>

                <Route path="/users" element={<Users />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>

            </Routes>
        </StyledMain>
    );
}

const StyledMain = styled.main`
    width: 70vw;
    margin: 0 auto;
`

export default Main;