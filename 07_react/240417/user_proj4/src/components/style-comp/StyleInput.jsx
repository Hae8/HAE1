import styled, { css } from "styled-components";

const sizes = {
    large: { height: "3rem", fontSize: "1.25rem" },
    medium: { height: "2.25rem", fontSize: "1rem" },
    small: { height: "1.75rem", fontSize: "0.875rem" }
}

const sizeStyleInput = css`
    ${props =>
        css`
            height: ${sizes[props.size].height};
            font-size: ${sizes[props.size].fontSize};
        `
    }
`
const StyleInput = styled.input`
    display: inline-flex;
    align-items: center;

    border: 1px solid gainsboro;
    border-radius: 40px;

    height: 2.25rem;
    padding: 0 1rem;
    margin: 0 16px 16px;

    font-size: 1rem;
    background-color: whitesmoke;

    ${sizeStyleInput}
`

export default StyleInput;