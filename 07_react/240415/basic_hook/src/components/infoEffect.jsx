import React, { useState, useEffect } from 'react';

/** useEffect: 컴포넌트의 생명 주기 중에 실행할 작업을 설명
 * 1. 컴포넌트가 마운트 될 때 (처음 화면에 나타날 때)
 * 2. 컴포넌트가 언마운트 될 때 (사라질 때)
 * 3. 컴포넌트가 업데이트 될 때 (특정 props, state가 바뀔 때)
 * 
 * useEffect(콜백함수, [의존성배열])
 * [의존성배열]: 의존하는 값이 들어있는 배열 - 이 배열이 바뀔 때마다 콜백함수가 호출된다.
 * 의존성 배열 없음: 렌더링이 실행될 때마다 설정한 작업을 수행
 * []: 처음 컴포넌트가 나타날 때만 설정한 작업을 수행
 * [data]: 처음 컴포넌트가 나타날 때와 지정한 값이 바뀔 때마다 설정한 작업을 수행
 * 컴포넌트가 사라질 때는 return에 설정한 함수를 호출
 * 
 * useEffect의 사용
 * 1. 어려운 연산
 * 2. 서버API 호출
 * 3. 타이머 설정
 * 4. 로컬 스토리지 사용
 * 5. 외부 라이브러리 사용
*/

const InfoEffect = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);

    // useEffect(() => {
    //     console.log('👾렌더링 중👾');
    // });

    useEffect(() => {
        console.log('최초로 컴포넌트가 화면에 출력될 때만 실행');
        return () => {
            console.log('컴포넌트가 화면에서 사라집니다.');
        }
    }, []);

    // useEffect(() => {
    //     console.log('최초로 컴포넌트가 나타났거나 이름이 변경되었습니다.');
    // }, [name]);

    // useEffect(() => {
    //     console.log('최초로 컴포넌트가 나타났거나 이름 또는 이메일이 변경되었습니다.');
    // }, [name, email]);

    // useEffect(() => {
    //     for(let i=0; i < 10000000; i++) {} // 변경된 이메일을 필요로 하는 시간이 오래걸리는 계산
    //     console.log('최초로 컴포넌트가 나타났거나 이메일이 변경되었습니다.');
    // }, [email]); // 이런 경우에 이름을 바꾸는 것은 문제가 없도록 할 수 있다.

    return ( 
        <div>
            <label>
                이름:
            <input type="text" value={name} onChange={onChangeName}/>
            </label>
            <label>
                이메일:
            <input type="text" value={email} onChange={onChangeEmail}/>
            </label>
        
            <div>
                <p>{ `이름: ${name} / 이메일: ${email}` }</p>
            </div>
        </div>
    );
}

export default InfoEffect;