import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from "styled-components";
import { StyledButton } from "../components/ui/Button";

const ProductDetail = () => {
    const { id } = useParams();
    const navi = useNavigate()
    const goList = () => navi({
        pathname: '/products'
    });

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
        <StyledButton onClick={goList}>돌아가기</StyledButton>
        </>
    );
}

const StyleProdDetail = styled.div`
    display: flex;

    .slide {
        width: 40%;
    }
    .react-slideshow-wrapper {
        width: 100%;
    }
    .react-slideshow-container {
        justify-content: center;
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

export default ProductDetail;