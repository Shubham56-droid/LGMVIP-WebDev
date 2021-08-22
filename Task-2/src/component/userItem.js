import React from 'react'

const UserItem = ({user}) => {
    return (
        <div className="content">
        <div className="card">
            <div className="avatar_img">
                <img src={user.avatar} alt="Profile img" />
            </div>
            <div className="userdata">
                <h4 className="name">{`${user.first_name} ${user.last_name}`}</h4>
                <p className="email">{`${user.email}`}</p>
            </div>
        </div>
        </div>
    )
}

export default UserItem;
