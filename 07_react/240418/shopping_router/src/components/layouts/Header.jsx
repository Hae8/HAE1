import { Link } from "react-router-dom";
import { styled } from "styled-components"
import { GoHomeFill } from "react-icons/go";

const Header = () => {
    return (
        <Styledheader>
            <Link to="/"><GoHomeFill /></Link>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/posts">POST</Link>
                <Link to="/products">PRODUCT</Link>
            </nav>
        </Styledheader>
    );
}

const Styledheader = styled.header`
    background-color: #0D0D0D;
    box-shadow: 0 0 16px #0D0D0D50;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    & > a{
            color: #F2F2F2;
            font-size: 2rem;
            text-decoration: none;
            margin-left: 20px;
    }
    nav{
        display: flex;
        margin-right: 20px;
        a{
            color: #F2F2F2;
            font-weight: bold;
            text-decoration: none;

            margin: 0 1rem;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`

export default Header;