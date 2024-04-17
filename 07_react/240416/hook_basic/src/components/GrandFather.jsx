import { GrandFatherContext } from "../contexts/GrandFatherContext";
import Father from "./Father";

const GrandFather = () => {
    const 유산 = '롯데타워'
    return ( 
        <GrandFatherContext.Provider value={유산}>
            <div>
            <Father/>
            </div>
        </GrandFatherContext.Provider>
    );
}

export default GrandFather;