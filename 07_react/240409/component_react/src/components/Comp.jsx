const Header = () => {
    return ( 
        <header> {/* className="App-header" 이거 지정하면 멋지게 됨*/}
            <h1>
                <a href="/">React</a>
            </h1>
        </header>
    );
};

const Navi = () => {
    const home = "Home"
    const menuList = [
        {name: "홈", link: "/"}, 
        {name: "만들기", link: "/create"}, 
        {name: "고치기", link: "/update"}
    ]
    return ( 
        <nav>
            {
                menuList.map((menu) => {
                    return (
                        <div>
                            <a href={menu.link}>{menu.name}</a>
                        </div>
                    )
                })
            }
        </nav>

        /* map 함수를 이용해서 이 내용을 위처럼 쓸 수 있다.
        <nav>
            <div>
                <a href="/">{home}</a>
            </div>
            <div>
                <a href="/create">Create</a>
            </div>
            <div>
                <a href="/update">Update</a>
            </div>
        </nav>
        */
    );
}

const Article = () => {
    return ( 
        <article>
            <h2>환영합니다.</h2>
        </article>
    );
}

export { Header, Navi, Article };