import { useEffect, useState } from "react";
import PostList from "../components/products/PostList";
import axios from "axios";
import styled from "styled-components";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/post')
            setPosts(response.data.posts);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>게시물 목록</h1>
            <PostList posts={posts}/>
        </>
    );
}

export default Posts;