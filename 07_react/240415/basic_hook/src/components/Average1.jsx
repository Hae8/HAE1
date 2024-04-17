import React, { useState, useMemo, useCallback } from 'react';

/**useCallback(콜백함수, [의존성 배열])
 * 
 * useMemo와 비슷한 함수
 * 렌더링 성능을 최적화 할 때 주로 사용 (함수를 재사용)
 * useMemo는 함수 실행의 결과값을 재사용 한다면 useCallback은 함수 자체를 재사용
 * 
 * useCallback(콜백함수, [의존성 배열])
 * 특정 함수를 새로 만들지 않고, 재사용하고자 할 때 사용한다. 
 */

const Average1 = () => {
    const [numList, setNumList] = useState([]);
    const [number, setNumber] = useState(0);
    
    const getAvg = list => {
        console.log('평균 계산 중...');
        if (list.length === 0) return 0;
        const sum = list.reduce((acc, cur) => acc + cur, 0)
        return sum / list.length
    }
    
    const avg = useMemo(() => getAvg(numList), [numList]); // [numList]가 변경될 때만 평균을 계산한다.

    const onChange = useCallback((e) => setNumber(parseInt(e.target.value)), []) // 함수가 렌더링될 때마다 다시 생기는 것이 아니라 처음에 만든 함수를 그대로 사용할 수 있다.

    const onClick = useCallback(() => {
        setNumList(list => list.concat(number));
        setNumber(0)
    },[number]) // number가 바뀔 때마다 함수가 바뀐다.
    // () => setNumList([...numList, number]);
    // state 값이 여기서 변함과 동시에 함수가 다시 실행되며 변수들이 바뀌는 문제가 있다. -> useMemo또는 useCallback로 해결

    return ( 
        <div>
            <input
                type="number" 
                value={number}
                onChange={onChange}
            />
            <button onClick={onClick}>등록</button>

            <ul>
                {
                    numList.map((n,idx) => (
                        <li key={idx}>{n}</li>
                    ))
                }
            </ul>

            <h1>평균값 : {avg}</h1>
        </div>
    );
}

export default Average1;