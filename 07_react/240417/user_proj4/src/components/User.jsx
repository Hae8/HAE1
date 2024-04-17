import React, { useContext } from 'react'
import { UserContext } from '../App';
import Button from "./style-comp/Button";

const User = ({ user }) => {
    const dispatch = useContext(UserContext)
    const style = {
        fontSize: "large",
        fontWeight: "bold",
        color: user.active ? '#eea29a' : 'grey',
        margin: "4px",
        cursor: "pointer"
    }

    return ( 
        <div>
            <span style={style} onClick={() => {
                dispatch({
                    type: "TOGGLE_USER",
                    id: user.id
                })
            }} >{user.username}</span>
            <span>{user.email}</span>
            <Button color="pink" size="small" onClick={() => {
                dispatch({
                    type: "REMOVE_USER",
                    id: user.id
                })
            }}>삭제</Button>
        </div>
    );
}

export default React.memo(User);