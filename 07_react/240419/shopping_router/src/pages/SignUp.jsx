import styled from "styled-components";
import useInputs from "../hooks/useInputs";
import { StyledButton } from "../components/ui/Button";
import { StyledInput } from "../components/ui/input";
import axios from "axios";
import { useRef, useState } from "react";

const SignUp = () => {
    const [form, onChange, reset, msg] = useInputs({
        email: '',
        nickname: '',
        password: '',
        pwd_chk: '',
        errMsg: '',
        validate: false,
    });

    // const validate = useRef(false);

    const { email, nickname, password, pwd_chk, errMsg, validate } = form;

    // const onValidate = () => {
    //     if (email === '' || nickname === '' || password === '' || pwd_chk === ''){
    //         alert('필수값을 입력하세요')
    //     } else if (password !== pwd_chk){
    //         alert('비밀번호가 다릅니다.')
    //     } else{
    //         validate.current = true // 모든 조건에 부합하지 않는 경우에만 state 값이 true가 된다.
    //     }
    // }

    const onInsertUser = () => {
        if (validate) {
            const url = `${process.env.REACT_APP_SERVER_ADDR}users`;
            const user = {
                email,
                nickname,
                password
            }
            axios.post(url, user)
            .then(res => {
                if (res.status === 201) {
                    alert('회원가입 완료');
                }
            })
            .catch(err => console.error(err))
            .finally(reset());
        }
    };

    return (
        <>
            <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>회원가입</h1>
            <JoinForm>
                <div className="input_group">
                    <label htmlFor="email">이메일</label>
                    <div>
                        <StyledInput id="email" name="email" value={email} onChange={onChange}/>
                        <div className="errMsg">{errMsg?.email}</div>
                    </div>
                </div>
                <div className="input_group">
                    <label htmlFor="nickname">닉네임</label>
                    <div>
                        <StyledInput id="nickname" name="nickname" value={nickname} onChange={onChange} />
                        <div className="errMsg">{errMsg?.nickname}</div>
                    </div>
                </div>
                <div className="input_group">
                    <label htmlFor="password">비밀번호</label>
                    <div>
                        <StyledInput id="password" name="password" value={password} onChange={onChange} />
                        <div className="errMsg">{errMsg?.password}</div>
                    </div>
                </div>
                <div className="input_group">
                    <label htmlFor="pwd_chk">비밀번호 확인</label>
                    <div>
                        <StyledInput id="pwd_chk" name="pwd_chk" value={pwd_chk} onChange={onChange} />
                        <div className="errMsg">{errMsg?.pwd_chk}</div>
                    </div>
                </div>
                <div className="btn_group">
                    <StyledButton type="button" onClick={(e) => {
                        e.preventDefault();
                        reset();
                    }}>초기화</StyledButton>
                    <StyledButton onClick={(e) => {
                        e.preventDefault();
                        onInsertUser();
                        // onValidate();
                        // if (validate.current){
                        //     onInsertUser();
                        // }
                    }}>회원가입</StyledButton>
                </div>
            </JoinForm>
        </>
    );
}

const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    
    .btn_group {
        width: 100%;
        margin: 0 auto;
    }
    .input_group {
        width: 80%;
        margin: 0 auto;
        margin-top:24px;
        display: flex;
        
        justify-content: space-between;

        label{
            width: 25%;
            font-weight: bold;
        }
        div{
            width: 75%;
        }
        .errMsg {
        margin: 0 16px 16px;
        color: #F23838;
        }
    }
`
export default SignUp;