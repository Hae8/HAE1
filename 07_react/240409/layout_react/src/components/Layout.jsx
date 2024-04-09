import './Layout.css'

const Layout = (props) => {
    return (
        <>
            <header className='Layout-header'>
                <a href="/">
                    메인로고
                </a>
                <nav>
                    <li><a href="#">menu 1</a></li>
                    <li><a href="#">menu 2</a></li>
                    <li><a href="#">menu 3</a></li>
                    <li><a href="#">menu 4</a></li>
                </nav>
            </header>
            <main className="Layout-main">
                {props.children}
            </main>
            <footer className="Layout-footer">
                연락처, 저작권 정보
            </footer>
        </>
    );
}

export default Layout;