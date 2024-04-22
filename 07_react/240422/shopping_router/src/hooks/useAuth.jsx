import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

const useAuth = () => {
    return useContext(LoginContext);
}

export default useAuth;