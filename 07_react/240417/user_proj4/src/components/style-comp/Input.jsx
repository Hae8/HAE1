import StyleInput from './StyleInput'

const Input = ({ children, ...rest }) => {
    return ( 
        <StyleInput {...rest}>{children}</StyleInput>
    );
}

Input.defaultProps = {
    size: "medium"
}

export default Input;