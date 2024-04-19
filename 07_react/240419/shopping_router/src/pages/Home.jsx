import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StyledInput } from "../components/ui/input";
import { StyledButton } from "../components/ui/Button";

const Home = () => {
    const [detail, setDetail] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const detailInfo = searchParams.get('detail')

    return (
        <>
            <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>홈 </h1>
            <StyledInput 
                type="text" 
                value={detail}
                onChange={(e) => setDetail(e.target.value)} />
            <StyledButton onClick={() => {
                // setSearchParams({detail : detail});
                navigate({
                    pathname:'',
                    search: `detail=${detail}`
                })
                setDetail('');
            }}>이동</StyledButton>
            <h2>현재 state: {detail}</h2>
            <h2>serchParam을 통해 가져온 값: {detailInfo}</h2>

            <img src="https://images.unsplash.com/photo-1585144860106-998ca0f2922a?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width: "100%"}}></img>
        </>
    );
}

export default Home;