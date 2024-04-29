import axios from "axios";
import { useEffect, useState } from "react";
import { PostList } from "../components/Posts";
import { Typography, Button, InputBase, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const TimeLine = () => {
    const { register, handleSubmit, setValue, getValues, reset } = useForm();
    const showCount = 3
    const [posts, setPosts] = useState();
    const [showPreview, setShowPreview] = useState();
    const getPosts = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
        if (res.data.code === 200) {
            setPosts(res.data.payload)
        }
    }

    useEffect(() => {
        getPosts();
    },[])

    const fileUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("img", file);

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts/image`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": localStorage.getItem("token"),
            },
            data: file,
        });
        // back에서 code 200 반환하도록 추가
        if (res.data.code === 200) {
            console.log(res.data.img);
            setValue("img", res.data.img);
            setShowPreview(res.data.img);
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
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts`, data, {
            headers: {
                "Authorization": localStorage.getItem("token"),
            },
        });
        if (res.data.code === 200) {
            console.log(res.data);
            getPosts();
        }
        setShowPreview();
        reset();
    }

    return (
        <>
            <Typography variant="h4" sx={{ margin:"16px 0px 4px" }}>타임라인</Typography>
            <form onSubmit={handleSubmit((data)=>{postUpload(data)})} >
                <TextField fullWidth {...register("content")} />
                <InputBase type="hidden" {...register("img")}/>
                <InputBase type="file" accept="image/*" onChange={fileUpload} />
                {
                    showPreview &&
                    <img src={'http://localhost:8000/' + getValues("img")} alt="img" style={{width: "200"}} />
                }
                <br />
                <Button type='submit' variant="contained">
                    글쓰기
                </Button>
            </form>
            <PostList
                posts={posts}
                setPosts={setPosts}
                showCount={showCount}
            />
        </>
    );
}

export default TimeLine;