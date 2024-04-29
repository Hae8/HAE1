import axios from "axios";
import { useEffect, useState } from "react";
import { PostList } from "../components/Posts";
import { Typography, Button, InputBase, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { postApi } from "../api/services/post";

const TimeLine = () => {
    const { register, handleSubmit, setValue, getValues, reset } = useForm();
    const showCount = 3
    const [posts, setPosts] = useState();
    const [showPreview, setShowPreview] = useState();

    const getPosts = async () => {
        const res = await postApi.getPosts();
        setPosts(res.payload);
    };

    useEffect(() => {
        getPosts();
    },[])

        const fileUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("img", file);
        try {
            const res = await postApi.addPostImg(formData);
            console.log(res);
            setValue("img", res.img);
            setShowPreview(res.img);
        } catch (err) {
        console.error(err);
        }
    }
    
    const postUpload = async (data) => {
        if ((!data.content || data.content === "") && !data.img) {
            alert("내용을 입력해주세요.");
            return;
        }
        if (!data.img) {
            data.img = null;
        }
        await postApi.addPost(data);
        getPosts();
        setShowPreview();
        reset();
    }

    return (
        <>
            <Typography variant="h4" sx={{ margin:"16px 0px 8px" }}>타임라인</Typography>
            <form onSubmit={handleSubmit((data)=>{postUpload(data)})} >
                <TextField fullWidth {...register("content")} />
                <Button type='submit' variant="contained" color="mainColor" style={{ margin: "16px 0", color: "#f2f2f2"}} fullWidth>
                    글쓰기
                </Button>
                <InputBase type="hidden" {...register("img")}/>
                <InputBase type="file" accept="image/*" onChange={fileUpload} />
                {
                    showPreview &&
                    <img src={'http://localhost:8000/' + getValues("img")} alt="img" style={{width: "100px"}} />
                }
                <br />
                
            </form>
            <PostList
                posts={posts}
                setPosts={setPosts}
                showCount={showCount}
            />
        </>
    );
}

export default TimeLine