import styled from "styled-components";
import { StyledButton } from "../components/ui/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <StyledNotFound>
            <div>찾을 수 없는 경로입니다.</div>
            <StyledButton><Link to="/">홈으로 돌아가기</Link></StyledButton>
        </StyledNotFound>
    )
}

const StyledNotFound = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    font-size: 1.5rem;
    color: #0D0D0D;
`

export default NotFound;