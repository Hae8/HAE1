import React, { useState, useRef } from 'react';

const Counter = () => {
    // 1. state : useState를 통해 생성한 상태값 (변경사항을 추적 -> 렌더링 o)
    const [numSt, setNumSt] = useState(0);
    const addNumSt = () => {
        setNumSt(numSt + 1)
        console.log(`numSt=${numSt}`);
    }
    
    // 2. 변수 number : let으로 선언한 변수 (변경사항 추적 x -> 렌더링 x)
    let number = 0
    const addNumber = () => {
        number++;
        console.log(`number=${number}`);
    }

    // 3. ref : useRef를 통해 생성한 변수 (변경사항 추적 x -> 렌더링 x)
        // useRef : 값이 바뀌어도 리렌더링 되지 않으며, 리렌더링 되어도 값을 기억한다.
        // current라는 속성을 이용한다.

        // useRef의 장점
        // 1. DOM에 직접 접근할 때 
        // 2. setTimeout, setInterval을 사용할 때
        // 3. 컴포넌트 내부에서 변수를 만들 때
    const numRef = useRef(0);
    const addNumRef = () => {
        numRef.current++;
        console.log(`numRef=${numRef}`);
        console.log(`numRef.current=${numRef.current}`);
    }

    return ( 
        <div>
            <h1>State = {numSt}</h1>
            <button onClick={addNumSt}>+1</button> {/* addNumSt 값이 변하면 number도 초기화된다 */}

            <h1>Number = {number}</h1>
            <button onClick={addNumber}>+1</button>

            <h1>Ref = {numRef.current}</h1>
            <button onClick={addNumRef}>+1</button>
        </div>
    );
}

export default Counter;