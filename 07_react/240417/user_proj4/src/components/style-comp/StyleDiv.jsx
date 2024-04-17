import styled, { css } from "styled-components";

const sizes = {
    large: { fontSize: "1.5rem", fontWeight: "bold"},
    medium: { fontSize: "1rem", fontWeight: "normal" },
    small: { fontSize: "0.875rem", fontWeight: "normal" }
}

const sizeStyledDiv = css`
    ${props => props.size &&
        css`
            font-size: ${sizes[props.size].fontSize};
            font-weight: ${sizes[props.size].fontWeight};
        `
    }
`

const colorStyledDiv = css`
    ${props => {
        const selected = props.theme.palette[props.color];
        return css`
            margin-top: 32px;
            color: ${selected};
        `
    }}
`

const StyledDiv = styled.div`
    font-size: 1rem;

    ${sizeStyledDiv}

    ${colorStyledDiv}
`

export default StyledDiv;