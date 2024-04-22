import axios from "axios";
import { useEffect, useState } from "react";
import BoardList from "../components/boards/BoardList";

const Boards = () => {
    const [boards, setBoards] = useState();
    const [users, setUsers] = useState();
    const getBoards = async () => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}posts`;
        try {
            const res = await axios.get(url);
            if (res.status === 200) setBoards(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getUsers = async () => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}users`;
        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                const obj = {}
                res.data.forEach(u => {
                    obj[u.id] = u
                }) // users는 객체로 만든다.
                setUsers(obj);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=>{
        getBoards();
        getUsers();
    }, [])
    
    return (
        <div>
            <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>나의 게시판</h1>
            <BoardList boards={boards} users={users}/>
        </div>
    );
}



export default Boards;