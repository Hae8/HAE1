import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </BrowserRouter>
    );
}

export default Layout;