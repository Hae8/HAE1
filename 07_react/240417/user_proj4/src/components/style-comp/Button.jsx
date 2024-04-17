import StyleButton from "./StyleButton";

const Button = ({ children, ...rest }) => {
    return (
        <StyleButton {...rest}>{children}</StyleButton>
    );
}

Button.defaultProps = {
    size: "medium",
    color: "pink"
}

export default Button;