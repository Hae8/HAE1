import User from "./User";
import React from 'react'
import Div from "./style-comp/Div";

const UserList = ({ users }) => {
    return ( 
        <Div>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </Div>
    );
}

export default React.memo(UserList);