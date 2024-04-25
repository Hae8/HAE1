import { useState } from "react";
import axios from "axios";

export const useProvideAuth = () => {
    const [loginUser, setLoginUser] = useState({
        id: localStorage.getItem("userId"),
        token : localStorage.getItem("token")
    })
        

    const login = async(callback, data) => {
        try{
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/login`, 
                data
            );
            if (response.data.code === 200) {
                const id = response.data.userId
                const token = response.data.accessToken;
                localStorage.setItem('userId', id)
                localStorage.setItem('token', token)
                setLoginUser({
                    id, token
                });
            }
            callback(response);
        } catch(err) {
            console.error(err);
        }
    }

    const logout = (callback) => {
        localStorage.removeItem("token");
        setLoginUser(null);
        // 리프레쉬 토큰 삭제
        callback();
    }

    return {
        loginUser,
        login,
        logout
    }
}