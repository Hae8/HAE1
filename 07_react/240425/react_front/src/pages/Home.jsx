import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { useAuth } from './../hooks/useAuth';
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import { FormControl } from "@mui/base";
import kakaoLoginImg from "../assets/kakao_login_medium_wide.png"
import { Link } from "react-router-dom";


const Home = () => {
    const { loginUser, login, logout } = useAuth();

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

    const handleLogout  = () => {
        logout(() => {
            Toast.fire({
                icon: "success",
                title: "해파리님 안녕히 가세요"
            });
        })
    }

    return (
        <>
            <h1>홈</h1>
        {
            loginUser ?
            <Button variant="outlined" color="mainColor" onClick={handleLogout}>
                로그아웃
            </Button> :
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl sx={{ width: '25ch', display: 'block' }}>
                <OutlinedInput type="text" variant="outlined" {...register("email", { required: true })} />
                {errors.email && <span>이메일은 필수값입니다.</span>}
                </FormControl>
                <FormControl sx={{ width: '25ch', display: 'block' }}>
                <OutlinedInput type="password" variant="outlined"{...register("password", { required: true })} />
                {errors.password && <span>비밀번호는 필수값입니다.</span>}
                </FormControl>
                <Button
                variant="contained" color="mainColor"
                type='submit' sx={{ color: 'bgColor2.main', display: 'block', width: '100%' }}>
                로그인
                </Button>
                <Link to='/#'>
                    <img src={kakaoLoginImg} alt='카카오 로그인' style={{width: '25ch'}}/>
                </Link>
            </form>
        } 
        </>
    );
}

export default Home;