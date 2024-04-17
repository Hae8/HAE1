import styled, { ThemeProvider } from "styled-components";
import Button from "./Button";

const StyledButtonBox = () => {
    return (
        <div>
            <ThemeProvider 
                theme={
                    {
                        palette: {
                            green: '#00ff99',
                            pink: '#ff6699',
                            grey: '#e6e6e6'
                        }
                    }
            }>
                <Box>
                    <div>
                        <Button size="large">큰 버튼</Button>
                        <Button size="medium">보통 버튼</Button>
                        <Button size="small">작은 버튼</Button>
                    </div>
                    <div>
                        <Button color="green" size="large">큰 버튼</Button>
                        <Button color="green" size="medium">보통 버튼</Button>
                        <Button color="green" size="small">작은 버튼</Button>
                    </div>
                    <div>
                        <Button $outline size="large">큰 버튼</Button>
                        <Button $outline size="medium">보통 버튼</Button>
                        <Button $outline size="small">작은 버튼</Button>
                    </div>
                    <div>
                        <Button $outline color="green" size="large">큰 버튼</Button>
                        <Button $outline color="green" size="medium">보통 버튼</Button>
                        <Button $outline color="green" size="small">작은 버튼</Button>
                    </div>
                    <div>
                    <Button $fullWidth>긴 버튼</Button>
                    <Button $fullWidth color="green">긴 버튼</Button>
                    <Button $fullWidth $outline>긴 버튼</Button>
                    <Button $fullWidth $outline color="green">긴 버튼</Button>
                    </div>
                </Box>
            </ThemeProvider>
        </div>
    );
}

const Box = styled.div` // div 태그에 className을 입력한 거 같은 효과
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`

export default StyledButtonBox;