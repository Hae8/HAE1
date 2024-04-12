import React, { useState, useRef } from 'react';

const BookList = () => {
    const [books, setBooks] = useState([
        { id: 1, title: '객지' },
        { id: 2, title: '당신들의 천국' },
        { id: 3, title: '관촌수필' },
        { id: 4, title: '묵시의 바다' },
        { id: 5, title: '나목' },
    ]);

    const [inputText, setInputText] = useState("");
    const nextId = useRef(6);
    const onChange = (e) => setInputText(e.target.value);

    const onClick = () => {
        setBooks([...books, { id: nextId.current++, title: inputText }])
        setInputText("")
    };

    const onRemove = (id) => {
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks)
    };

    const onModify = (id) => {
        const newBooks = books.map(book => {
            if (book.id === id) {
                return {...book, title: inputText}
            }
            return book;
        })
        setBooks(newBooks)
        setInputText("")
    }

    const showBook = books.map(book => (
        // react에서 key는 컴포넌트 배열을 렌더링 했을 때,
        // 어떤 요소에 변동이 있었는지 식별하는 것을 돕는다.
        <li key={book.id} onDoubleClick={() => onRemove(book.id)}>
            {book.id}: {book.title} <button
            onClick={() => onModify(book.id)}>수정</button> <hr/>
            
        </li>
    ));

    return ( 
        <>
            <input 
                type='text'
                value={inputText}
                onChange={onChange}
            />
            <button onClick={onClick}>추가</button>
            <ul>
                {showBook}
            </ul>
        </>
    );
}

export default BookList;