import './App.css';
import React, { useState, useRef, useMemo, useCallback, useReducer, createContext} from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import { reducer, initialState } from './reducer/UserReducer';
import useInputs from './hooks/useInputs';
import { ThemeProvider } from "styled-components";
import Div from './components/style-comp/Div';

export const UserContext = createContext(null)

function App() {
  const [{username, email}, onChange, reset] = useInputs({ // 사용자가 customizing 한 hook
    username: '',
    email:''
  });

  const [state, dispatch] = useReducer(reducer, initialState)
  const users = state.users; // state안의 users를 가져와서 배열 사용

  const countActiveUsers = user => {
    return user.filter(user => user.active).length
  }

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <ThemeProvider
            theme={
                {
                    palette: {
                        green: '#b1cbbb',
                        pink: '#c94c4c',
                        grey: '#fff'
                    }
                }
            }
        >
      <UserContext.Provider value={dispatch}>
        <div className="App">
          <CreateUser username={username} email={email} onChange={onChange} reset={reset}/>
          <UserList users={users}/>
          <Div size="large" color="pink">활성 사용자 수 : {count}</Div>
        </div>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
