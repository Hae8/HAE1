import { Button, InputLabel, TextField, Box, FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material/'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Typography from '@mui/material/Typography'
import axios from 'axios'


const SignUp = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()


    // 회원가입 버튼 동작
    const onRegist = (async (data) => {
        const { email, nickname, password, passwordCheck } = data
        try {
            if (email && nickname && password && passwordCheck && (password === passwordCheck)) {
                const res = await axios.post(`${process.env.REACT_APP_APT_URL}/auth/join`, {
                    email,
                    nickname,
                    password
                })
                if (res.data.code === 200){
                    Swal.fire({
                        title: "축하합니다!",
                        text: res.data.message,
                        icon: "success"
                    });
                    navigate('/')
                } else {
                    throw new Error(res.data.message);
                }
            } else {
                throw new Error("입력값을 확인해주세요.")
            }
        } catch (err) {
            Swal.fire({
                title: "입력값을 확인 후 다시 시도해주세요!",
                text: err.message,
                icon: "error"
            });
        }
    })

    return (
        <>
            <Typography variant="h4" color="initial">회원가입</Typography>
            {/* form tag 시작 */}
            <Box
                component="form"
                my={4}
                p={2}
                borderRadius={4}
                boxShadow={'0 0 4px grey'}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onRegist)}
            >
                <TextField
                    error={errors.email ? true : false}
                    helperText={errors.email && "이메일은 필수 입력값입니다."}
                    label="email"
                    variant="outlined"
                    sx={{ display: 'block' }}
                    autoFocus
                    required
                    {...register("email", { required: true })}
                />
                {/* nickname */}
                <TextField
                    error={errors.nickname ? true : false}
                    helperText={errors.nickname && "닉네임은 필수 입력값입니다."}
                    label="nickname"
                    variant="outlined"
                    sx={{ display: 'block' }}
                    {...register("nickname", { required: true })}
                />
                {/* password */}
                <FormControl sx={{ m: 1, width: '25ch', display: 'block' }} variant="outlined">
                    <InputLabel htmlFor="password">password</InputLabel>
                    <OutlinedInput
                        {...register("password", { required: true })}
                        id="password"
                        autoComplete="new-password"
                        type={showPassword ? 'text' : 'password'}
                        error={errors.password ? true : false}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                {/* password check */}
                <FormControl sx={{ m: 1, width: '25ch', display: 'block' }} variant="outlined">
                    <InputLabel htmlFor="PasswordCheck">PasswordCheck</InputLabel>
                    <OutlinedInput
                        {...register("passwordCheck", { required: true })}
                        id="PasswordCheck"
                        autoComplete="new-password"
                        error={errors.passwordCheck ? true : false}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="PasswordCheck"
                    />
                </FormControl>
                {/* button */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type='suibmit' variant="contained" color="mainColor" sx={{ display: 'block', width: '49%', color: 'bgColor2.main' }}>회원가입</Button>
                    <Button variant="contained" color="subColor" sx={{ display: 'block', width: '49%', color: 'bgColor2.main' }} onClick={(e) => {
                        e.preventDefault()
                        reset();
                    }} >초기화</Button>
                </Box>
            </Box>
        </>
    );
}

export default SignUp;