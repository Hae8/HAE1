import { useState } from "react";

const Counter = () => {
    let btnstyle = {
        width: "120px",
        height: "120px",
        margin: "10px",
        fontSize: "100px",
        backgroundColor: "cornflowerblue",
        color: "white",
        cursor: "pointer",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)"
    }
    // State
    // 컴포넌트에서 관리하는 값 (변경될 수 있는 값!)
    // ⭐⭐⭐ State가 변경되면 컴포넌트가 다시 렌더링된다! ⭐⭐⭐

    // 함수형 컴포넌트에서는 state를 사용할 수 있도록
    // useState hook를 제공한다.
    // useState 함수의 인자는 초기값을 전달한다.
    // useState 함수는 배열을 반환한다. [상태값, 상태 변경 함수]
    // useState 함수는 콘솔에 바로 반영되지 않고, 렌더링을 한 이후에 한 단계 전의 것이 찍힌다.

    const [number, setNumber] = useState(1);
    const handleNumberPlus = () => {setNumber(number + 1)}
    const handleNumberminus = () => {setNumber((prevNum) => prevNum - 1)}
    return (
        <div>
            <h1 style={{fontSize: "120px"}}>{number}</h1>
            <button onClick={handleNumberPlus} style={btnstyle}>+</button>
            <button onClick={handleNumberminus} style={btnstyle}>-</button>
        </div>
    )
}

export default Counter;