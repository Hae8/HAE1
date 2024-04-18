import styled from "styled-components";
import Prod from "./Prod";

const ProdList = ({prods}) => {
    return (
        <StyledProdList>
            {
                prods.length ? 
                prods.map(p => (
                    <Prod key={p.id} p={p}/>
                ))
                :
                <h2 style={{color:"#D4D4D4"}}> 상품이 없습니다. </h2>
            }
        </StyledProdList>
    );
}

const StyledProdList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1%
`


export default ProdList;