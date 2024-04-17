import Button from './Button';
import './ButtonBox.scss'

/** 
 * SASS (Syntactically Awesome Style Sheets)
 * SCSS (Sassy CSS)
 * - 이 둘은 CSS 전 처리기 (pre-processor)
 * - SASS 다음에 SCSS가 나왔다.
 * - SCSS -> 높은 범용성과 호환성을 가지고 있다.
 * - 확장자 (.sass, .scss)
 * - yarn add node-sass
*/
const ButtonBox = () => {
    const handleClick1 = () => {console.log('1번 클릭');}
    const handleClick2 = () => {console.log('2번 클릭');}
    const handleClick3 = () => {console.log('3번 클릭');}
    const handleMouseOver1 = () => {console.log('1번 안으로 쏙!');}
    const handleMouseOver2 = () => {console.log('2번 안으로 쏙!');}
    const handleMouseOver3 = () => {console.log('3번 안으로 쏙!');}
    const handleMouseOut1 = () => {console.log('1번에서 나갑니다~');}
    const handleMouseOut2 = () => {console.log('2번에서 나갑니다~');}
    const handleMouseOut3 = () => {console.log('3번에서 나갑니다~');}
    const handleMouseMove1 = () => {console.log('1번 안에서 움직입니다.');}
    const handleMouseMove2 = () => {console.log('2번 안에서 움직입니다.');}
    const handleMouseMove3 = () => {console.log('3번 안에서 움직입니다.');}

    return ( 
        <div className="ButtonBox">
            <div>
                <Button size="large" onClick={handleClick1}>큰 버튼</Button>
                <Button onClick={handleClick2}>보통 버튼</Button>
                <Button size="small" onClick={handleClick3}>작은 버튼</Button>
            </div>
            <div>
                <Button size="large" color="pink" onMouseOver={handleMouseOver1}>큰 버튼</Button>
                <Button color="pink" onMouseOver={handleMouseOver2}>보통 버튼</Button>
                <Button size="small" color="pink" onMouseOver={handleMouseOver3}>작은 버튼</Button>
            </div>
            <div>
                <Button outline size="large" onMouseOut={handleMouseOut1}>큰 버튼</Button>
                <Button outline onMouseOut={handleMouseOut2}>보통 버튼</Button>
                <Button outline size="small" onMouseOut={handleMouseOut3}>작은 버튼</Button>
            </div>
            <div>
                <Button outline size="large" color="pink" onMouseMove={handleMouseMove1}>큰 버튼</Button>
                <Button outline color="pink" onMouseMove={handleMouseMove2}>보통 버튼</Button>
                <Button outline size="small" color="pink" onMouseMove={handleMouseMove3}>작은 버튼</Button>
            </div>
            <div>
                <Button fullWidth>긴 버튼</Button>
                <Button fullWidth outline>긴 버튼</Button>
                <Button fullWidth color="pink">긴 버튼</Button>
                <Button fullWidth outline color="pink">긴 버튼</Button>
            </div>
        </div>
    );
}

export default ButtonBox;