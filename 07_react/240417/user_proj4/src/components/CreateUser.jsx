import React, { useContext, useRef, useCallback } from 'react'
import { UserContext } from '../App';
import Button from "./style-comp/Button";
import Input from './style-comp/Input';

const CreateUser = ({ username, email, onChange, reset }) => {
    const dispatch = useContext(UserContext);
    const nextId = useRef(5)

        const onInsert = useCallback(() => {
            if (username === '' || email === ''){
            return;
            }
            dispatch({
            type:'CREATE_USER',
            newUser: { id: nextId.current, username, email, active: false }
            });
            reset()
            nextId.current++;
        }, [username, email])

    return ( 
        
            <div>
                <div>
                    <label>
                    이름
                    <Input 
                    name='username' 
                    onChange={onChange} 
                    value={username}
                    />
                    </label>
                </div>
                <div>
                    <label>
                    이메일
                    <Input 
                    name='email' 
                    onChange={onChange} 
                    value={email}
                    />
                    </label>
                </div>
                <Button $fullWidth color="green" onClick={onInsert}>등록</Button>
            </div>
        
    );
}

/** React.memo
 * React.memo를 사용하면 컴포넌트 리-렌더링 최적화
 * 해당 컴포넌트의 props가 바뀌지 않았다면,
 * 리-렌더링을 방지하여, 최적화 할 수 있다.
 */
export default React.memo(CreateUser);