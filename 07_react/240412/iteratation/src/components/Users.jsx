const User = ({user}) => {
    return ( 
        <div>
            {user.username} / {user.email}
        </div>
    );
}

const UserList = () => {
    const users = [
        { id: 1, username: "최민식", email: "choi@gmail.com" },
        { id: 2, username: "유해진", email: "yoo@gmail.com" },
        { id: 3, username: "김고은", email: "kim@gmail.com" },
        { id: 4, username: "이도현", email: "lee@gmail.com" }
    ]
    return ( 
        <div>
            <h1>사용자 리스트</h1>
            {/* 
            {
                // 자바 스크립트 배열 map 함수를 이용 (key props 필요)
                users.map((user, idx) => (
                    <User user= {user} key={idx}/>
                )) // 성능 상 문제가 있기 때문에 key 값으로 idx를 쓰는 것은 바람직하지 않다.
            }
            */}

            {
                users.map((user) => (
                    <User user= {user} key={user.id}/>
                )) // 데이터가 변동되어도 key 값은 바뀌지 않는 값인 것을 사용하는 게 좋다.
            }
            {/*
            <User user= {users[0]}/>
            <User user= {users[1]}/>
            <User user= {users[2]}/>
            <User user= {users[3]}/>
            */}
        </div>
    );
}

export default UserList;