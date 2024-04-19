import { css, styled } from 'styled-components';
import { darken } from 'polished';

const User = ({user, onDeleteUser}) => {
    return (
        <StyledUser>
            <UserInfo>
                <p>아이디: {user.id}</p>
                <p>닉네임: {user.nickname}</p>
                <p>이메일: {user.email}</p>
            </UserInfo>
            <UserInfo>
                <StyledButton >수정</StyledButton>
                <StyledButton color="danger" onClick={() => onDeleteUser(user.id)}>삭제</StyledButton>
            </UserInfo>
        </StyledUser>
    );
}

const StyledUser = styled.div`
    width: 100%;
    padding: 16px 8px;

    border-radius: 8px;
    box-shadow: 0 0 8px #0D0D0D50;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
    background-color: ${darken(0.0125, "#FBFBFB")};
    }
`

const UserInfo = styled.div`
    & > p {
        margin: 0.4rem;
    }
`

const StyledButton = styled.button`
    ${props => css`
        color: white;
        background-color: ${props.color ? "#F23838" : "#3587F2"};
        
        border-radius: 8px;
        &:hover {
            background-color: ${darken(0.1, props.color ? "#F23838" : "#3587F2")};
        }
        &:active {
            background-color: ${darken(0.1, props.color ? "#F23838" : "#3587F2")};
            box-shadow: 0 0 16px #0D0D0D70 inset;
        }

        width: 80px;

        margin: 12px 6px;
        padding: 8px;

        border: none;
        cursor: pointer;
    `
    }
`

export default User;