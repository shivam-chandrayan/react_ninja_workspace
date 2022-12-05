import React from "react"

export default function UserCard({ user }) {
    return (
        <div className="col-md-3 mt-4">
            <div className="card">
                <img className="card-img-top" src={user.avatar} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{user.first_name + " " + user.last_name}</h5>
                    <p className="card-text">{user.email}</p>
                </div>
            </div>
        </div>
    )
}