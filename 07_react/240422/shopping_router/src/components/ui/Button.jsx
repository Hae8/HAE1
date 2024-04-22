import styled from "styled-components";
import { darken } from "polished";

export const StyledButton = styled.button`
    background-color: #F2F2F2;
    border-radius: 8px;

    width: 100%;
    margin: 24px 12px;
    padding: 12px;

    font-size: large;
    font-weight: bold;

    &:hover {
        background-color: ${darken(0.1, "#F2F2F2")};
    }
    &:active {
        background-color: ${darken(0.1, "#F2F2F2")};
        box-shadow: 0 0 16px #0D0D0D50 inset;
    }

    &+& {
        margin: 4px 12px;
    }

    border: none;
    cursor: pointer;
`