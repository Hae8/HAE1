import { useContext } from 'react';
import './Button.css'
import { ThemeContext } from '../contexts/ThemeContext';

const Button = ({children}) => {
    const { theme } = useContext(ThemeContext);
    return ( 
        <button className={`Btn ${"Btn-"+theme}`}>{children}</button>
    );
}

export default Button;