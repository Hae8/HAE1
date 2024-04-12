import React, { useState, useRef } from 'react';

const RefFocus = () => {
    const [form, setForm] = useState({
        username:"",
        userpw:""
    });
    const { username, userpw } = form;
    
    const usernameRef = useRef()

    const handleChange = (e) => {setForm({...form, [e.target.name]: e.target.value})}
    const onReset = (e) => {
        setForm({
            username:"",
            userpw:""
        })
        usernameRef.current.focus()
    }

    return ( 
        <div>
            <h1>이벤트 연습2</h1>
            <input 
                name='username'
                type='text'
                placeholder='name'
                value={username}
                onChange={handleChange}
                ref={usernameRef}
            />
            <br />
            <input 
                name='userpw'
                type='password'
                placeholder='password'
                value={userpw}
                onChange={handleChange}
            />

            <button onClick={onReset}>초기화</button>
        </div>
    );
}

export default RefFocus;