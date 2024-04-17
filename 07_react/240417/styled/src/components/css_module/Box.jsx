import { useState } from 'react';
import styles from './Box.module.css'; // css를 객체 형태로 받아온다.
import CheckBox from './CheckBox';

const Box = () => {
    const [checked, setChecked] = useState(false);
    const onChange = e => setChecked(e.target.checked);
    /** 
     * React에서 컴포넌트를 스타일링 할 때,
     * CSS Module이라는 기술을 사용하면
     * 클래스가 중첩되는 것을 방지할 수 있다.
     * 
     * CSS 파일에 선언한 클래스명이 모두 고유한 값이 된다.
     * 고유 CSS 클래스 명은 파일경로, 클래스명, 해시값 등이 사용될 수 있다.
    */
    return ( 
        <div className={styles.Box}>
            <CheckBox checked={checked} onChange={onChange}>값</CheckBox>
        </div>
    );
}

export default Box;