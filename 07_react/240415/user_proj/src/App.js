import './App.css';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import { useReducer } from 'react';

/**
 * useCallback을 사용함으로써 바로 눈에 띄는 최적화는 없다 ㅠㅠ
 * 컴포넌트 렌더링 최적화 작업(React.memo)s을 해주면 성능이 눈에 띄게 보인다.
 */

function App() {
  const [users, setUsers] = useState([
    { id: 1, username:'휘인', email:'whee@gamil.com', active: true },
    { id: 2, username:'화사', email:'hwa@gamil.com', active: true },
    { id: 3, username:'문별', email:'star@gamil.com', active: true },
    { id: 4, username:'솔라', email:'sol@gamil.com', active: true }
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email:''
  });

  const nextId = useRef(5)
  const { username, email } = inputs;

  const onChange = useCallback((e) => {
    // setInputs({...inputs, [e.target.name]: e.target.value});
    const { name, value } = e.target;
    setInputs(inputs => ({ 
      ...inputs, 
      [name]: value 
    }))
  }, []);

  const onInsert = useCallback(() => {
    if (username === '' || email === ''){
      return;
    }
      const newUser = { id: nextId.current, username, email, active: false };
      setUsers(users => users.concat(newUser));
      setInputs({ username: '', email: '' });
      nextId.current++;
  }, [inputs])

  const onToggle = useCallback((id) => {
    setUsers(
      users => 
        users.map(user => 
          user.id === id ? {...user, active: !user.active} : user
      ) // users 배열에 map을 돌려셔 user 개체의 id 값이 입력한 id 값과 같다면 user의 active 값을 반대로 만들어줘
    )
  }, []);

  const onDelete = useCallback((id) => {
    setUsers(
      users => users.filter(user => user.id !== id)
    )
  }, []);

  const countActiveUsers = user => {
    return user.filter(user => user.active).length
  }

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <div className="App">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onInsert={onInsert}
      />
    <UserList
      users={users}
      onToggle={onToggle}
      onDelete={onDelete}
    />
    <div>활성 사용자 수 : {count}</div>
    </div>
  );
}

export default App;
