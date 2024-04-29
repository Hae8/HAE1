import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { useAuth } from './../hooks/useAuth';
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import { FormControl } from "@mui/base";
import kakaoLoginImg from "../assets/kakao_login_medium_wide.png"
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useProvideAuth } from "../hooks/useProvideAuth";


const Home = () => {
    
    const auth = useProvideAuth();

    const { loginUser, login, logout, kakaoLogin } = useAuth();
    kakaoLogin();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    

    const onSubmit = (data) => {
        // 로그인 시켜주기
        login((res) => {
            if (res.data.code !== 200) {
                Toast.fire({
                    icon: "error",
                    title: "로그인에 실패했습니다.",
                    text: "이메일 또는 비밀번호를 다시 확인해주세요"
                });
            }
        }, data)
        reset();
    }

    // console.log(watch("email")) // 이메일 변경 시 값 확인

    return (
        <Box sx={{ m: 1, width: '25ch', display: "flex", flexDirection: "column", alignItems:"flex-start"}}>
            <Typography variant="h4" sx={{ margin:"16px 0px 4px" }}>Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)} >
                <FormControl>
                <OutlinedInput 
                    type="text" 
                    variant="outlined" 
                    sx={{ margin:"4px 0" }}
                    {...register("email", { required: true })} 
                />{errors.email && <div>이메일은 필수값입니다.</div>}
                </FormControl>
                <FormControl>
                <OutlinedInput 
                    type="password"
                    variant="outlined"
                    sx={{ margin:"4px 0" }}
                    {...register("password", { required: true })}
                />{errors.password && <div>비밀번호는 필수값입니다.</div>}
                </FormControl>
                <Button
                variant="contained" color="mainColor"
                type='submit'
                sx={{ color: 'bgColor2.main', width: '300px', margin:"16px 0px" }}>
                로그인
                </Button>
                <Link to={`${process.env.REACT_APP_API_URL}/auth/kakao`}  sx={{width: "300px", margin:"16px 0px" }}>
                    <img src={kakaoLoginImg} alt='카카오 로그인'/>
                </Link>
            </form>
        </Box>
    );
}

export default Home;