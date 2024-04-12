import './Header.css';
import Nav from "./Nav";

const Header = () => {
    return (
        <header className='Layout-header'>
            <a href="/">
                메인로고
            </a>
            <Nav></Nav>
        </header>
    );  
}

export default Header;