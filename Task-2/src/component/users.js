import React from 'react'
import UserItem from './userItem';

const Users = ({personData}) => {
    return (
        <div className="usergrid">
            {personData.map((user) =><UserItem key={ user.id}  user={user} />)}
        </div>
    )
}

export default Users;
