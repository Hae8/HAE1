import StyleDiv from './StyleDiv'

const Div = ({ children, ...rest }) => {
    return (
        <StyleDiv {...rest}>{ children }</StyleDiv>
    );
}

export default Div;