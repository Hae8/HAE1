import { useContext } from "react";
import { GrandFatherContext } from "../contexts/GrandFatherContext";

const Child = () => {
    const 뭐지 = useContext(GrandFatherContext)
    return ( 
        <div>
            {뭐지}
        </div>
    );
}

export default Child;