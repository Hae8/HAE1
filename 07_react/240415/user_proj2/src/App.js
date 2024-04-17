import './App.css';
import React, { useState, useRef, useMemo, useCallback, useReducer, createContext} from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import { reducer, initialState } from './reducer/UserReducer';

export const UserContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { username, email } = state.inputs; // state안의 inputs를 가져와서 구조분해 할당
  const users = state.users; // state안의 users를 가져와서 배열 사용

  const nextId = useRef(5)

  const onChange = useCallback((e) => {
    // setInputs({...inputs, [e.target.name]: e.target.value});
    const { name, value } = e.target;
    dispatch({ 
      type:'CHANGE_INPUT',
      name,
      value
  })
  }, []);

  const onInsert = useCallback(() => {
    if (username === '' || email === ''){
      return;
    }
    dispatch({
      type:'CREATE_USER',
      newUser: { id: nextId.current, username, email, active: false }
    });
    nextId.current++;
  }, [username, email])

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id
    })
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id
    })
  }, []);

  const countActiveUsers = user => {
    return user.filter(user => user.active).length
  }

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserContext.Provider value={{onToggle, onDelete}}>
      <div className="App">
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onInsert={onInsert}
        />
        <UserList users={users}/>
        <div>활성 사용자 수 : {count}</div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
