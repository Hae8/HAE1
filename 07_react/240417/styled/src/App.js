import Box from "./components/css_module/Box";
import CheckBox from "./components/css_module/CheckBox";
import ButtonBox from "./components/scss/ButtonBox";
import styled, {css} from 'styled-components'
import StyledButtonBox from "./components/styled_comp/StyledButtonBox";

function App() {
  const name = '해파리'
  const print1 = `안녕하세요 ${name}님!`

  const obj = { name: '해파리' }
  const print2 = `안녕하세요 ${obj}님!`

  const fn = () => console.log('해파리');
  const print3 = `안녕하세요 ${fn}님!`

  /**
   * 마법의 자바스크립트
   * Tagged Template Literal
   * - 템플릿 리터럴을 이용한 함수 호출 방식이 있다.
   * - 함수를 호출할 때 템플릿 리터럴을 사용하면,
   * 템플릿 리터럴이 함수의 파라미터로 전달된다.
   *    - 첫번째 파라미터: 문자열 값
   *    - 두번째 파라미터: 템플릿 리터럴의 값
   * - 이렇게 함수를 호출하는 방식을 Tagged Template Literal이라 한다.
   */

  const favoriteMovie =  (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
  }

  const movie1 = "파묘";
  const movie2 = "박하사탕";
  favoriteMovie`제가 좋아하는 영화는 ${movie1}과 ${movie2}입니다.`
  

  return (
    <div>
      {/* <ButtonBox /> */}
      {/* <Box /> */}
      {/* {print1} <br />
      {print2} <br />
      {print3} <br />
      <Circle />
      <Circle color="red"/>
      <Circle color="blue"/>
      <Circle huge /> */}

      <StyledButtonBox />
    </div>
  );
}

/**
 * Tagged Template Literal을 이용한 styled-components
 * - yarn add styled-components
 */
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${props => props.color || 'black'};
  /* width : ${props => props.huge ? '10rem' : '5rem'};
  height : ${props => props.huge ? '10rem' : '5rem'}; */
  ${props => props.huge &&
    css `
      width: 10rem;
      height: 10rem;
    `
  }
`

export default App;
