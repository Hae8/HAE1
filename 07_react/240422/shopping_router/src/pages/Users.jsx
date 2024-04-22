import { useCallback, useEffect, useState } from "react";
import UserList from "../components/users/UserList";
import axios from 'axios';

const Users = () => {

    const [userList, setUserList] = useState();

    const getUserList = useCallback(() => {
        const url = process.env.REACT_APP_SERVER_ADDR+'users'
        axios.get(url)
        .then(res => res.data)
        .then(data => setUserList(data))
        .catch(err => console.error(err))
    });

    useEffect(() => {
        getUserList()
    }, []);
    
    const onDeleteUser = (id) => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}users/${id}`;
        axios.delete(url)
        .then(res => {
            if (res.status === 200){
                setUserList(userList.filter(user => user.id !== res.data.id))
                // getUserList(); // 같은 기능을 하나 데이터를 매번 새로 가져오므로 비효율적이다.
            }
        })
        .catch(err => console.error(err))
    }

    const onUpdateUser = async (form) => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}users/${form.id}`;
        try {
            const res = await axios.get(url)
            const password = res.data.password;
            if (password === form.password) {
                const res = await axios.patch(url, {
                    email: form.email,
                    nickname: form.nickname
                })
                if (res.status === 200) {
                    setUserList(userList.map(user => {
                        if (user.id === res.data.id) {
                            return {
                                ...user,
                                email: res.data.email,
                                nickname: res.data.nickname
                            }
                        } else {
                            return user;
                        }
                    }))
                }
            } else {
                alert('비밀번호가 일치하지 않습니다.');
                return
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1 style={{color:"#3C5FA6", margin:"72px 0 24px"}}>사용자 관리</h1>
            <UserList userList={userList} onDeleteUser={onDeleteUser} onUpdateUser={onUpdateUser}/>
        </>
    );
}



export default Users;