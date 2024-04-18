import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { darken } from 'polished';
import 'react-slideshow-image/dist/styles.css';
import styled from "styled-components";

const PostDetail = () => {
    const parameter = useParams();
    const { id } = parameter;
    
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const [postDetail, setPostDetail] = useState();
    const getPostDetail = () => {
        axios.get(`https://dummyjson.com/posts/${id}`)
        .then(res => res.data)
        .then(data => setPostDetail(data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getPostDetail();
    }, [])
    
    return (
        <>
            <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}} >{id}번 게시물</h1>
            {
                postDetail &&
                    <StylePostDetail>
                            <div className="title">{postDetail.title}</div>
                            <div className="userId">{postDetail.userId}</div>
                            <div className="body">{postDetail.body}</div>
                            <div className="tag">{postDetail.tags.map((t, idx) => (
                                <span key={idx}>#{t}</span>
                            ))}</div>
                    </StylePostDetail>
            }
            <StyledButton onClick={goBack}>돌아가기</StyledButton>
        </>
    );
}

const StylePostDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        justify-content: center;

        font-size: xx-large;
        font-weight: bold;
        margin: 1rem;
    }
    .userId{
        display: flex;
        justify-content: end;

        margin: 1rem;
    }
    .body {
        padding: 2rem;
        font-size: large;
        line-height : 150%;
    }
    .tag {
        display: flex;
        justify-content: center;

        margin: 1rem;
        span{
            margin: 0 4px;
            color: #3587F2;
        }
    }
`
const StyledButton = styled.button`
    background-color: #F2F2F2;

    border-radius: 8px;
    &:hover {
        background-color: ${darken(0.1, "#F2F2F2")};
    }
    &:active {
        background-color: ${darken(0.1, "#F2F2F2")};
        box-shadow: 0 0 16px #0D0D0D50 inset;
    }

    width: 100%;

    margin: 36px 12px;
    padding: 12px;

    border: none;
    cursor: pointer;
`

export default PostDetail;