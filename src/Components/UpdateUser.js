import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const users = useLoaderData()
    console.log(users)
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const user = {name, email, phone}
        
        fetch(`http://localhost:5000/users/${users._id}`, {
            method :'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h1>Update User</h1>
            <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" placeholder='name' defaultValue={users.name} id="" /><br />
                <input type="email" name="email" placeholder='email' defaultValue={users.email}  id="" /><br />
                <input type="number" name="phone" placeholder='phone' defaultValue={users.phone}  id="" /><br />
                <button type="submit">Update</button>
            </form>
            </div>
        </div>
    );
};

export default UpdateUser;