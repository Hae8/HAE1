import React, { useState } from 'react';

const EventPractice = () => {
    const [message, setMessage] = useState("기본값");
    return ( 
        <div>
            <h1>이벤트 연습1</h1>
            {/* input 요소를 이용해 onChange 이벤트 연습 */}
            <input
                type='text'
                name='message'
                placeholder='아무거나 입력해 보세요'
                value={message} // value 값을 state의 message 값으로 설정
                onChange={(e) => { setMessage(e.target.value) }} // onChange 이벤트가 발생할 때 마다 message 값을 업데이트
            />
            <div>메시지 값은? {message} </div>
            <button
                // onClick 이벤트가 발생하면, message 값을 alert으로 출력 
                onClick={() => {
                    alert(message);
                    setMessage("")
                }}
                onDoubleClick={() => {
                    console.log('메시지 :', message);
                }}
            >확인</button>
        </div>
    );
}

export default EventPractice;