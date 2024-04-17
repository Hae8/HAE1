import User from "./User";
import React from 'react'

const UserList = ({users, onToggle, onDelete}) => {
    return ( 
        <div>
            {users.map(user => (
                <User key={user.id} user={user} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default React.memo(UserList);