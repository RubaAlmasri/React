import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Edit() {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://62baba8b573ca8f83289f6c8.mockapi.io/users/${id}`, {
            name,
            email,
        })
    }

    return (
        <div class="container" style={{ marginTop: 200, paddingLeft: 400 }}>
            {/* <form> */}
                <div class="mb-3 w-50">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div class="mb-3 w-50">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <button type="submit" class="btn btn-primary" onClick={updateAPIData}>Save</button>
            {/* </form> */}
            <a href='/' class='btn btn-secondary'>Back</a>

        </div >
    )
}

