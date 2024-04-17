import './Button.scss'
import classNames from 'classnames'

const Button = ({children, size, color, outline, fullWidth, ...rest }) => {
    return ( 
        <button
            // className={`Button ${size}`}
            // className을 활용하면 조건부 스타일이 가능하다.
            className = {classNames('Button', size, color, {outline, fullWidth})}
            {...rest}
        >{children}</button>
    );
}

Button.defaultProps = {
    size : "medium",
    color: "blue"
}

export default Button;