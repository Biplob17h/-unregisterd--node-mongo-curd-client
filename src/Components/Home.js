import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadUsers = useLoaderData()
    const [users, setUsers] = useState(loadUsers)
    const handleDelete = user =>{
        const confirm = window.confirm(`are you sure you want to delete ${user.name}`)
        if(confirm){
            fetch(`http://localhost:5000/users/${user._id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    const remaining = users.filter(usr => usr._id !== user._id)
                    setUsers(remaining)
                }
            })
        }
    }
    return (
        <div>
            <h1>User Length : {users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} {user.email} {user.phone} <button onClick={()=> handleDelete(user)}>X</button>
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default Home;