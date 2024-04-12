import React, { useState } from 'react';

const EventPractice2 = () => {
    const [form, setForm] = useState({
        useremail:"",
        username:"",
        userpw:""
    });

    const { useremail, username, userpw } = form;

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleFocus = (e) => {
        if (e.key === "Enter"){
            e.target.nextSibling.nextSibling.focus()
        }
    }

    const handleBtnClick = ()=>{
        console.log(username, userpw);
        if (!username || !userpw){
            return alert('필수 값을 입력해야 합니다.')
        }
        setForm({
            useremail:"",
            username:"",
            userpw:""
        })
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter"){
            handleBtnClick()
        }
    }

    return ( 
        <div>
            <h1>이벤트 연습2</h1>
            <input 
                name='useremail'
                type='email'
                placeholder='email'
                value={useremail}
                onChange={handleChange}
                onKeyDown={handleFocus}
            />
            <br />
            <input 
                name='username'
                type='text'
                placeholder='name'
                value={username}
                onChange={handleChange}
                onKeyDown={handleFocus}
            />
            <br />
            <input 
                name='userpw'
                type='password'
                placeholder='password'
                value={userpw}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />

            <button onClick={handleBtnClick}>확인</button>
        </div>
    );
}

export default EventPractice2;