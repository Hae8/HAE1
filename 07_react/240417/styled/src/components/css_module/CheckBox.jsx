import styles from './CheckBox.module.css'
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";

const CheckBox = ({children, checked, ...rest}) => {
    // yarn add react-icons를 설치하면 아이콘 사용이 가능하다.
    // https://react-icons.github.io/react-icons/
    return ( 
        <div className={styles.CheckBox}>
            <label>
                <input type='checkbox' checked={checked} {...rest}/>
                <div className={styles.icon}>
                    {
                        checked? 
                        <ImCheckboxChecked className={styles.checked}/> : 
                        <ImCheckboxUnchecked />}
                </div>
                <span>{children}</span>
            </label>
        </div>
    );
}

export default CheckBox;