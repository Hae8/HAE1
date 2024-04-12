import React, { useState, useRef } from 'react';

const SearchRef = () => {
    const inputRef = useRef(null); // input이라는 객체를 담을 값
    const prevkeyWordRef = useRef(""); // input.value 라는 문자열을 담을 값

    const [result, setResult] = useState("검색 결과가 없습니다.");

    const handleSearch = () => {
        if (prevkeyWordRef.current !== inputRef.current.value){ // 같은 값이 여러번 요청되는 것을 막을 수 있다.
            console.log(inputRef.current);
            setResult(`${inputRef.current.value}에 대한 검색 결과입니다.`);
            prevkeyWordRef.current = inputRef.current.value;
        }
        
    };

    return ( 
        <div>
            <input 
                type='text'
                ref={inputRef}
            />
            <button onClick={handleSearch}>검색</button>
            <div>
                {result}
            </div>
        </div>
    );
}

export default SearchRef;