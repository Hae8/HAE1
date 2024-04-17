import React, { useState, useMemo } from 'react';

const hardCalculation = (a, b) => {
    console.log('어려운 연산...');
    for (let i=0; i < 1000_000_000; i++) {} // 어려운 연산...
    return a + b;
}

const easyCalculation = (a, b) => {
    console.log('쉬운 연산...');
    return a + b;
}

const Calculator = () => {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    /** useMemo (()=>{}, [])
     * 
     * memo는 메모리제이션
     * 이전에 연산한 값을 메모리에 저장(캐싱)해 두고,
     * 같은 연산을 반복할 때, 저장해 둔 값을 사용하는 것
     * 
     * 함수형 컴포넌트는 함수이다.
     * 렌더링이 될 때마다 함수가 호출된다. (함수 내 지역변수는 초기화)
     * 
     * props와 state가 바뀌면 렌더링이 되기 때문에
     * props와 state가 바뀌면 함수 내 지역변수가 초기화 된다.
     * 
     * useMemo는 값을 기억하고, 값이 변경된 경우에만 함수를 호출한다.
     * 
     * useMemo의 구조: useMemo(콜백 함수, [의존성 배열])
     * 콜백함수: 메모리 제이션 할 값을 반환하는 함수이다.
    */
    const hardResult = useMemo(() => hardCalculation(numberA, numberB), [numberA, numberB]); // 어려운 연산의 결과값을 기억해서 함수가 다시 실행되지 않도록 한다.

    const [numberC, setNumberC] = useState(0);
    const [numberD, setNumberD] = useState(0);
    const easyResult = useMemo(() => easyCalculation(numberC, numberD), [numberC, numberD]);

    return ( 
        <div>
            <h1>느린 계산</h1>
            <input 
                type="number" 
                value={numberA} 
                onChange={(e) => setNumberA(parseInt(e.target.value))} />
            <input 
                type="number" 
                value={numberB} 
                onChange={(e) => setNumberB(parseInt(e.target.value))} />
            <h2>결과: {hardResult}</h2>

            <h1>빠른 계산</h1>
            <input 
                type="number" 
                value={numberC} 
                onChange={(e) => setNumberC(parseInt(e.target.value))} />
            <input 
                type="number" 
                value={numberD} 
                onChange={(e) => setNumberD(parseInt(e.target.value))} />
            <h2>결과: {easyResult}</h2>
        </div>
    );
}

export default Calculator;