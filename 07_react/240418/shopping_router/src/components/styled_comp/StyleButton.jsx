import styled, { css } from "styled-components";
import { lighten, darken } from 'polished';

const type = {
    sort: { height: "3rem", fontSize: "1.25rem" },
    input: { height: "2.25rem", fontSize: "1rem" },
    goBack: { height: "1.75rem", fontSize: "0.875rem" }
}

const typeStyleButton = css`
    ${props => {
        css`
            width: 100%;
            justify-content: center;
            margin: 1rem 0 0 0 !important;
            
            &:hover {
                background-color: ${lighten(0.1, selected)};
            }
            &:active {
                background-color: ${darken(0.1, selected)};
            }
        `
    }}
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
    background-color: #F2F2F2;
    &:hover {
        background-color: #E2E2E2;
    }

    width: 160px;

    margin: 24px 12px;
    padding: 8px;

    border: none;
    cursor: pointer;

    ${typeStyleButton}
`

export default StyleButton;