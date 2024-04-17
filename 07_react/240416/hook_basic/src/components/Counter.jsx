import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    const decrementNum = () => setNumber(num => num - 1);
    const incrementNum = () => setNumber(num => num + 1);
    const resetNum = () => setNumber(0);
    
    return ( 
        <div>
            <h1>숫자 상태: {number}</h1>
            <button onClick={decrementNum}>-1</button>
            <button onClick={incrementNum}>+1</button>
            <button onClick={resetNum}>초기화</button>
        </div>
    );
}

export default Counter;