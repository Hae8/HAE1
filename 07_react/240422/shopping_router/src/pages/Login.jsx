import styled from "styled-components";
import { StyledInput } from "../components/ui/input";
import { StyledButton } from "../components/ui/Button";
import useInputs from "../hooks/useInputs";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {loginUser, login, logout} = useAuth();
    const [form, onChange, reset, setForm] = useInputs({
        email: "",
        password: ""
    });

    const { email, password } = form;

    const onLoginHandler = async() => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}users?email=${email}&password=${password}`
        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                console.log(res.data);
                login(() => {
                    console.log('user');
                    navigate('/');
                }, res.data[0].id);
            }
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <>
        <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>로그인 화면</h1>
        <StyledLoginBox>
            <div className="input_group">
                <StyledInput type="text" name="email" value={form.email} onChange={onChange} placeholder="이메일" style={{width:"90%", margin:5}}/>
                <StyledInput type="text" name="password" value={form.password} onChange={onChange} placeholder="비밀번호" style={{width:"90%", margin:5}}/>
            </div>
            <StyledButton onClick={onLoginHandler} style={{width:"30%", margin:0}}>로그인</StyledButton>
        </StyledLoginBox>
        </>
    )
}

const StyledLoginBox = styled.div`
    display: flex;
    .input_group {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export default Login;