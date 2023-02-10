import React from 'react';

const AddUser = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const user = {name, email, phone}
        
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('user created successfully')
                form.reset()
            }
        })
    }
    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name' id="" /><br />
                <input type="email" name="email" placeholder='email' id="" /><br />
                <input type="number" name="phone" placeholder='phone' id="" /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;