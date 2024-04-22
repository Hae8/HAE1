import { useState } from "react";

const useProvideAuth = () => {
    const [loginUser, setLoginUser] = useState(localStorage.getItem("loginUser"));

    const login = (callback, userId) => {
        localStorage.setItem("loginUser", userId);
        setLoginUser(userId);
        callback();
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

export default useProvideAuth;