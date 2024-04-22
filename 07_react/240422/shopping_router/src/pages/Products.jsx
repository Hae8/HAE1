import { useEffect, useState } from "react";
import styled from "styled-components";
import { darken } from 'polished';
import ProdList from "../components/products/ProdList";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { StyledInput } from "../components/ui/input";

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [prods, setProds] = useState([]);
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

    const onClickSearch = () => {
        searchParams.set("검색어", keyword)
        setSearchParams(searchParams)
    }

    const onClickOrder = (key, way) => {
        searchParams.set("기준", key);
        searchParams.set("방식", way);
        setSearchParams(searchParams)
    }

    const handleSearch = () => {
        if (searchParams.size === 0) {
            getProds();
        } else {
            const q = searchParams.get("검색어");
            if (q) {
                axios.get(`https://dummyjson.com/products/search?q=${q}`)
                .then(res => {
                    return res.data.products
                })
                .then (data => {
                    ordering(data);
                })
                .catch(err => {
                    console.error(err);
                })
            } else {
                ordering(prods);
            }
        }
        
    }

    const ordering = (data) => {
        const key = searchParams.get('기준')
        const sort = searchParams.get('방식')

        if (key !== '') {
            const copy = [...data];
            copy.sort((a, b) => {
                if (sort === 'desc') {
                    return a[key] > b[key] ? -1 : 0;
                } else {
                    return a[key] < b[key] ? -1 : 0;
                }
            })
            setProds(copy);
        }
    }

    useEffect(() => {
        handleSearch()
    }, [searchParams]);

    useEffect(() => {
        getProds();
    }, [])

    return (
        <>
        <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>상품 목록</h1>
        {/*
            localhost:3000/products?기준=가격&방식=오름차
            localhost:3000/products?기준=가격&방식=내림차
            localhost:3000/products?기준=평점&방식=오름차
            localhost:3000/products?기준=평점&방식=내림차
            localhost:3000/products?기준=할인율&방식=오름차
            localhost:3000/products?기준=할인율&방식=내림차


            정렬 기준 :
                가격, 평점, 할인율
                오름차 내림차

        */}
        <ProdOption>
            <div>
                <StyledInput type="text" value={keyword} onChange={handleKeyword}/>
                <StyledButton onClick={onClickSearch}>검색</StyledButton>
            </div>
            <div>
                {
                    searchParams.get('기준') ==='price' && searchParams.get('방식') ==='desc' ?
                        <StyledButton onClick={() => { onClickOrder('price', 'asc')}}>가격 높은 순 ▼</StyledButton>
                    :
                        <StyledButton onClick={() => { onClickOrder('price', 'desc')}}>가격 낮은 순 ▼</StyledButton>
                }
                {
                    searchParams.get('기준') ==='rating' && searchParams.get('방식') ==='desc' ?
                        <StyledButton onClick={() => { onClickOrder('rating', 'asc')}}>평점 높은 순 ▼</StyledButton>
                    :
                        <StyledButton onClick={() => { onClickOrder('rating', 'desc')}}>평점 낮은 순 ▼</StyledButton>
                }
                {
                    searchParams.get('기준') ==='discountPercentage' && searchParams.get('방식') ==='desc' ?
                        <StyledButton onClick={() => { onClickOrder('discountPercentage', 'asc')}}>할인율 높은 순 ▼</StyledButton>
                    :
                        <StyledButton onClick={() => { onClickOrder('discountPercentage', 'desc')}}>할인율 낮은 순 ▼</StyledButton>
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
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        margin: 16px 0;
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

    width: 180px;

    margin: 0 16px 16px;
    padding: 8px;

    border: none;
    cursor: pointer;
`

export default Products;