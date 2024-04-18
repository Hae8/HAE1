import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Prod = ({p}) => {
    const navigate = useNavigate();

    return (
        <StyledProd key={p.id} onClick={() => navigate(`/products/${p.id}`)}>
            <img src = {p.thumbnail} alt={p.title+"이미지"} />
            <p className="title">{p.title}</p>
            <span className="percent">
            {p.discountPercentage.toFixed(0)+'% SALE'}
            </span>
            <span className="price">
                {p.price} $
            </span>
            <p className="sale_price">
                {(p.price * (1 - p.discountPercentage / 100)).toFixed(0)} $
            </p>
            <p className="rating">{"⭐".repeat(p.rating.toFixed(0))}</p>
        </StyledProd>
    );
}

const StyledProd = styled.div`
    margin: 4px;
    padding: 24px 8px;
    border-radius: 8px;

    &:hover {
        box-shadow: 0 0 16px #0D0D0D50;
        cursor: pointer;
    }
    
    p {
        margin: 0.3rem;
    }
    img {
        width: 100%;
        height: 200px;
    }
    .title {
        font-size: 1.4rem;
        font-weight: bold;
        color: #3587F2;
    }
    .percent {
        font-weight: bold;
        padding-right: 8px;
        color: #F23838;
        animation: twinkle;
        animation-duration: 750ms;
        animation-iteration-count: infinite;
    }
    @keyframes twinkle {
            0% {color: #F23838}
            50% {color: #ffb1b1}
            100% {color: #F23838}
        }
    .price {
        text-decoration: line-through;
        font-size: small;
        color: #0D0D0D50;
    }
    .sale_price{
        font-size: 1.4rem;
        font-weight: bold;
    }
`

export default Prod;