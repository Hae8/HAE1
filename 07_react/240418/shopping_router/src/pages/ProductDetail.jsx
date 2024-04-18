import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import { darken } from 'polished';
import 'react-slideshow-image/dist/styles.css'
import styled from "styled-components";

const ProductDetail = () => {
    const { id } = useParams();
    const navi = useNavigate()
    const goBack = () => navi(-1);

    const [prodDetail, setProdDetail] = useState();
    const getProdDetail = () => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => res.data)
        .then(data => setProdDetail(data));
    }

    useEffect(() => {
        getProdDetail();
    }, [])

    return (
        <>
        <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>{id}번 상품 설명 페이지</h1> 
        {/* 변수 명은 Main.jsx에서 정한 :/cate, :/id를 그대로 useParams()으로 받아와 쓴다. */}
        {
            prodDetail &&
            <StyleProdDetail>
                <div className="slide">
                    <Slide>
                        {
                            prodDetail.images.map((img, idx) => (
                                <div className="each-slide-effect" key={idx}>
                                    <div style={{ 'backgroundImage': `url(${img})` }}></div>
                                </div>
                            ))
                        }
                    </Slide>
                </div>
                <div className="info">
                    <h1>{prodDetail.title}</h1>
                    <div>{prodDetail.description}</div>
                </div>
            </StyleProdDetail>
        }
        <StyledButton onClick={goBack}>돌아가기</StyledButton>
        </>
    );
}

const StyleProdDetail = styled.div`
    display: flex;

    .slide {
        width: 40%;
    }
    .info {
        width: 60%;
        margin-left: 24px;
        div {
            color: #3587F2;
            font-size: x-large;
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

export default ProductDetail;