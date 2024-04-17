import styled, { css } from "styled-components";
import { lighten, darken } from 'polished';

const sizes = {
    large: { height: "3rem", fontSize: "1.25rem" },
    medium: { height: "2.25rem", fontSize: "1rem" },
    small: { height: "1.75rem", fontSize: "0.875rem" }
}

const sizeStyleButton = css`
    ${props =>
        css`
            height: ${sizes[props.size].height};
            font-size: ${sizes[props.size].fontSize};
        `
    }
    ${props => props.$fullWidth &&
        css`
            width: 100%;
            height: ${sizes[props.size].height};
            justify-content: center;
            margin: 1rem 0 0 0 !important;
        `
    }
`

const colorStyleButton = css`
    ${props => {
        const selected = props.theme.palette[props.color];
        return css`
            background-color: ${selected};
            // yarn add polished
            // polished는 스타일링에 사용되는 함수들(주로 색상 관련)을 모아둔 라이브러리
            &:hover {
                background-color: ${lighten(0.1, selected)};
            }
            &:active {
                background-color: ${darken(0.1, selected)};
            }
            ${props.$outline &&
            css`
                    color: ${selected};
                    background-color: transparent;
                    border: 1px solid ${selected};
                    &:hover {
                        background-color: ${selected};
                        color: white;
                    }
                `
            }
        `
    }}
`

const StyleButton = styled.button`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline: none;

    border: none;
    border-radius: 4px;

    height: 2.25rem;
    margin: 0.5rem;
    padding: 0 1rem;

    font-size: 1rem;
    font-weight: bold;

    color: ${props => props.theme.palette.grey};

    ${sizeStyleButton}

    ${colorStyleButton}
`

export default StyleButton;