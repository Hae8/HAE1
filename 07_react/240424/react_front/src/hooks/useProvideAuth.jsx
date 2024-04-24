import { useState } from "react";
import axios from "axios";

export const useProvideAuth = () => {
    const [loginUser, setLoginUser] = useState(localStorage.getItem("loginUser"));

    const login = async(callback, data) => {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/auth/login`, 
            data
        )
        callback(response);
    }

    const logout = (callback) => {
        localStorage.removeItem("loginUser");
        setLoginUser(null);
        callback();
    }

    return {
        loginUser,
        login,
        logout
    }
}