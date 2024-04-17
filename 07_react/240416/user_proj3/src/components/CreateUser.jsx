import React, { useContext, useRef, useCallback } from 'react'
import { UserContext } from '../App';

const CreateUser = ({ username, email }) => {
    const dispatch = useContext(UserContext);
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

    return ( 
        <div>
            <div>
                <label>
                이름
                <input 
                name='username' 
                onChange={onChange} 
                value={username}
                />
                </label>
            </div>
            <div>
                <label>
                이메일
                <input 
                name='email' 
                onChange={onChange} 
                value={email}
                />
                </label>
            </div>
            <button onClick={onInsert}>등록</button>
        </div>
    );
}

/** React.memo
 * React.memo를 사용하면 컴포넌트 리-렌더링 최적화
 * 해당 컴포넌트의 props가 바뀌지 않았다면,
 * 리-렌더링을 방지하여, 최적화 할 수 있다.
 */
export default React.memo(CreateUser);