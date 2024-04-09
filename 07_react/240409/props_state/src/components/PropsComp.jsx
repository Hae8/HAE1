// import { Children } from "react";

import PropTypes from 'prop-types';

export const PropsComp = ({ name, age, gender }) => { // 비구조화 할당을 이용해 작성할 수 있다.
    return ( 
        <>
            <h2>Hello!</h2>
            <p>내 이름은 {name} 이에요.</p>
            <p>나이는 {age} 이에요.</p>
            <p>성별은 {gender} 이에요.</p>
        </>
    );
}

// props의 타입을 검사한다.
// 타입이 맞지 않으면 경고 메시지가 출력된다. (에러 아님)
PropsComp.propTypes = {
    name: PropTypes.string, // PropTypes를 import 하여 사용
    age: PropTypes.number,
    gender: PropTypes.string.isRequired
}

PropsComp.defaultProps = {
    name: "미등록자",
    age: "불명",
    gender: "미상"
}

export const Button = (props) => {
    const buttonSize = {
        small: { w: "50px", h:"25px", font: "0.5em", color: "coral"},
        medium: { w: "75px", h:"38px", font: "1em", color: "gold"},
        big: { w: "100px", h:"50px", font: "1.5em", color: "cornflowerblue"}
    }

    const buttonStyle = {
        width: buttonSize[props.size].w,
        height: buttonSize[props.size].h,
        backgroundColor: buttonSize[props.size].color,
        color: "white",
        fontSize: buttonSize[props.size].font,
        fontWeight: "bold",
        borderRadius: "10px",
        border: "none",
        outline: "none",
        cursor: "pointer",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)"
    }
    return(
        <button style={buttonStyle} onClick={props.event}>{props.children}</button>
    );
}

Button.defaultProps = {
    size: "medium",
    color: "black",
    Children: "클릭"
}