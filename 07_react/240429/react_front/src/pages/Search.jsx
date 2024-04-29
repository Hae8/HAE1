import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { PostList } from './../components/Posts';
import { Typography, OutlinedInput, Button } from "@mui/material";

const Search = () => {
    const [ searchParams ] = useSearchParams();
    const hashtag = searchParams.get('hashtag');
    const {
        register,
        handleSubmit,
    } = useForm();
    
    const navigate = useNavigate();

    const [posts, setPosts] = useState();

    const getPosts = useCallback(async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
            params: { hashtag }
        });
        setPosts(res.data.payload);
    }, [hashtag]);

    useEffect(()=>{
        hashtag && getPosts();
    }, [getPosts, hashtag]);

    const onSearch = async (data) => {
        try {
            navigate({
                search: createSearchParams(data).toString()
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Typography variant="h4" sx={{ margin:"16px 0px 4px" }}>검색</Typography>
            <form onSubmit={handleSubmit(onSearch)}>
                <OutlinedInput type="text" variant="outlined" {...register("hashtag")} />
                <Button type="submit" variant="contained" sx={{ margin:"16px", color: "#f2f2f2" }} color="mainColor">
                검색
                </Button>
            </form>
            {
                hashtag ?
                <PostList posts={posts} showCount={3}/> :
                <Typography style={{color: "#7F6DF2"}}>#해시태그로 검색하세요</Typography>
            }
        </>
    );
}

export default Search;