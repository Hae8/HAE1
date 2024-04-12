import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);

    const getProducts = async() => {
        try{
            const response = await axios.get('http://localhost:4000/products')
            console.log(response);
            setLoading(false);
            setProducts(response.data);
        } catch (err) {
            console.error(err);
            setErr(true);
        }
    };

    useEffect(() => { // getProducts()가 딱 한번만 실행 되도록 한다.
        getProducts()
    }, []);

    if (err) {
        return <div>에러 발생</div>
    }

    if (loading){
        return <div>로딩중...</div>
    }

    return ( 
        <main className="Layout-main">
            <div style={{display: "flex", flexWrap:"wrap"}}>
                {products.map(prod => (
                    <div style={{textAlign: "left", display: "flex", flexDirection:"column", width:"30%", padding: "10px"}}>
                        <div style={{width:"100%", height:"200px", backgroundColor:"grey"}}></div>
                        <div>{prod.id} : {prod.name}</div>
                        <div>{prod.price}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Product;