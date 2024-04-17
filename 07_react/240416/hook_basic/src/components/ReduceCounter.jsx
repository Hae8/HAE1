import React, { useReducer } from 'react';

/** reducer 함수 생성
 *  - action.type에 따라서 각각 다른 작업을 수행하도록 할 수 있다.
 */
// const reducer = (state, action) => {
//     if (action.type === 'INCREMENT'){
//         return { value : state.value + 1 }; // 새로운 state를 리턴
//     } else if (action.type === 'DECREMENT') {
//         return { value : state.value - 1 }; // 새로운 state를 리턴
//     } else {
//         return state;
//     }
// }
    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
                return { value : state.value + 1 }; // 새로운 state를 리턴
            case "DECREMENT":
                return { value : state.value - 1 }; // 새로운 state를 리턴
            case "RESET":
                return { value : 0 }
            default:
                break;
        }
    }

/** useReducer
 * - useState보다 더 다양한 컴포넌트 상태 관리가 가능하다.
 * - 컴포넌트의 상태 업데이트 로직을 컴포넌트 밖에서 관리
 * - const [state, dispatch함수] = useReducer(reducer 함수, initialValue, initializer)
 *      - dispatch 함수 (* action 객체를 파라미터로 받아서, reducer함수를 호출)
 *      - 첫 번째 매개변수: reducer 함수 (* state, action을 매개로 하여, 새로운 state를 만든다.)
 *      - 두 번째 매개변수: state의 초기값
 *      - 세 번째 매개변수: 초기 state를 만들어 주는 함수 (생략 가능)
*/
const ReduceCounter = () => {
    const [state, dispatch] = useReducer(reducer, { value : 0 })

    return ( 
        <div>
            <h1>숫자 상태: { state.value }</h1>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
            <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
        </div>
    );
}

/** useReducer는 setState 대신에,
 *  dispatch로 액션을 넘기고,
 *  reducer로 해당 액션에 따른 상태를 변경한다. 
 */

export default ReduceCounter;