import { useContext } from "react";
import { MyColorContext } from "../contexts/myColor";

const Color = () => {
    const { myColor } = useContext(MyColorContext);
    return ( 
        <div>
            <div style={{
                width: "128px",
                height: "128px",
                backgroundColor: myColor,
                margin: "24px auto"
            }}            
            ></div>
        </div>
    );
}

export default Color;