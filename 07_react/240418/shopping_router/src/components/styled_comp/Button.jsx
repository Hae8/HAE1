import StyleButton from "./StyleButton";

const Button = ({ children, ...rest }) => {
    return (
        <StyleButton {...rest}>{children}</StyleButton>
    );
}

Button.defaultProps = {
    type: "sort"
}

export default Button;