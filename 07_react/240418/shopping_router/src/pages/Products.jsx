import { useEffect, useState } from "react";
import styled from "styled-components";
import { darken } from 'polished';
import ProdList from "../components/products/ProdList";
import axios from "axios";

const Products = () => {
    const [prods, setProds] = useState([]);

    const [order, setOrder] = useState({
        key: '',
        order: false
    });

    const [keyword, setKeyword] = useState('');
    const handleKeyword = (e) => setKeyword(e.target.value)

    const getProds = async() => {
        try{
            const response = await axios.get('https://dummyjson.com/product?limit=12')
            setProds(response.data.products)
        } catch (err) {
            console.error(err);
        }
    }

    const handleSearch = () => {
        const q = keyword;
        axios.get(`https://dummyjson.com/products/search?q=${q}`)
        .then(res => {
            return res.data.products
        })
        .then (data => {
            setProds(data);
        })
        .catch(err => {
            console.error(err);
        })
        setKeyword('');
    }

    const ordering = () => {
        if (order.key !== '') {
            const copy = [...prods];
            copy.sort((a, b) => {
                if (order.order) {
                    return a[order.key] > b[order.key] ? -1 : 0;
                } else {
                    return a[order.key] < b[order.key] ? -1 : 0;
                }
            })
            setProds(copy);
        }
    }

    useEffect(() => {
        ordering();
    }, [order]);

    useEffect(() => {
        getProds();
    }, [])

    return (
        <>
        <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>상품 목록</h1>
        <ProdOption>
            <div>
                <StyledInput type="text" value={keyword} onChange={handleKeyword}/>
                <StyledButton onClick={handleSearch}>검색</StyledButton>
            </div>
            <div>
                {
                    order.order ?
                        <StyledButton onClick={() => setOrder({...order, key:'price', order:false})}>가격 높은 순 ▼</StyledButton>
                    :
                        <StyledButton onClick={() => setOrder({...order, key:'price', order:true})}>가격 낮은 순 ▼</StyledButton>
                }
                {
                    order.order ?
                        <StyledButton onClick={() => setOrder({...order, key:'rating', order:false})}>평점 높은 순 ▼</StyledButton>
                    :
                        <StyledButton onClick={() => setOrder({...order, key:'rating', order:true})}>평점 낮은 순 ▼</StyledButton>
                }
                {
                    order.order ?
                        <StyledButton onClick={() => setOrder({...order, key:'discountPercentage', order:false})}>할인율 높은 순 ▼</StyledButton>
                    :
                        <StyledButton onClick={() => setOrder({...order, key:'discountPercentage', order:true})}>할인율 낮은 순 ▼</StyledButton>
                }
            </div>
        </ProdOption>
        <ProdList prods={prods}/>
        </>
    );
}

const ProdOption = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledInput = styled.input`
    border: 1px solid gainsboro;
    border-radius: 40px;

    width: 70%;
    height: 2.25rem;
    padding: 0 1rem;
    margin: 0 16px 16px;

    font-size: 1rem;
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

    width: 160px;

    margin: 24px 12px;
    padding: 8px;

    border: none;
    cursor: pointer;
`

export default Products;