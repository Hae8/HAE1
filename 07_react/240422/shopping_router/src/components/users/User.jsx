import { css, styled } from 'styled-components';
import { darken } from 'polished';
import { useState } from 'react';
import useInputs from '../../hooks/useInputs';
import { MdCancel } from "react-icons/md";
import useAuth from '../../hooks/useAuth';

const User = ({user, onDeleteUser, onUpdateUser}) => {
    const { loginUser } = useAuth();
    const [isModify, setIsModify] = useState(false);

    const [form, onChange, reset, setForm] = useInputs({
        id: '',
        email: '',
        nickname: '',
        password: ''
    });

    const showModifyForm = (user) => {
        setForm({
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            password: ''
        })
        setIsModify(true)
    }
    return (
        <StyledUser>
            <UserInfo>
                {isModify ? 
                <>
                <MdCancel onClick={()=>setIsModify(false)} />
                <input type='text' name='nickname' value={form.nickname} onChange={onChange}/>
                <input type='text' name='email' value={form.email} onChange={onChange}/>
                <input type='text' name='password' value={form.password} onChange={onChange}/>
                </>
                :
                <>
                <p>아이디: {user.id}</p>
                <p>닉네임: {user.nickname}</p>
                <p>이메일: {user.email}</p>
                </>
                }
                
            </UserInfo>
            <UserInfo>
                {
                    loginUser === user.id &&
                    <>
                        {isModify ?
                            <StyledButton onClick={() => {
                                onUpdateUser(form)
                                setIsModify(false)
                        }}>적용</StyledButton>
                        :
                        <StyledButton onClick={ () => showModifyForm(user) }>수정</StyledButton>
                    }
                    <StyledButton color="danger" onClick={() => onDeleteUser(user.id)}>삭제</StyledButton>
                </>
            }
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
    & > svg {
        float: right;
        cursor: pointer;
    }
    & > input {
        width: 90%;
        padding: 0.2rem;
        margin: 0.2rem;
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