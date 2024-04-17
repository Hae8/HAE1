import styled, {css} from "styled-components";
import { lighten, darken } from "polished";

const sizes = {
    large: {height: "3rem", fontSize: "1.25rem"},
    medium: {height: "2rem", fontSize: "1rem"},
    small: {height: "1rem", fontSize: "0.75rem"}
}

const sizeStyleButton = css`
    ${({size}) =>
        css `
            height: ${sizes[size].height};
            font-size: ${sizes[size].fontSize};
        `
    }
    ${props => props.$fullWidth &&
        css`
            width: 100%
            justify-content: center;
            margin: 1rem 0 0 0 !important;
        `
    }
`

const colorStyleButton = css`
    ${ props => {
        const selected = props.theme.palette[props.color];
        return css`
            background-color: ${selected};
            /** yarn add polished
                polished는 스타일링에 사용되는 함수들 (주로 색상 관련)을 모아둔 라이브러리
            */
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
                    border: 2px solid ${selected};
                    &:hover {
                        background-color: ${selected};
                        color: white;
                    };
                `
            }
        `
    }}
`

const StyleButton = styled.button`
    display: inline-flex;
    align-items: center;
    
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    font-size: 1rem;
    font-weight: bold;
    height: 2.25rem;
    padding: 0 1rem;

    color: ${props => props.theme.palette.grey};

    & + &{
        margin-left: 1rem;
    }

    ${sizeStyleButton}

    ${colorStyleButton}
`

export default StyleButton;