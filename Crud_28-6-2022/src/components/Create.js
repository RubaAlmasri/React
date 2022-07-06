import React, { useState } from 'react';
import axios from 'axios';


export default function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const postData = () => {
        console.log(name);
        console.log(email);
        axios.post(`https://62baba8b573ca8f83289f6c8.mockapi.io/users`, {
            name,
            email,
        })
    }
    return (
        <div class="container" style={{ marginTop: 200, paddingLeft: 400 }}>
            {/* <form> */}
                 <div class="mb-3 w-50">
                     <label class="form-label">Name</label>
                     <input type="text" class="form-control" onChange={(e) => setName(e.target.value)}></input>
                 </div>
                 <div class="mb-3 w-50">
                     <label class="form-label">Email</label>
                     <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                 </div>
                 <button type="submit" class="btn btn-primary" onClick={postData}>Save</button>
             {/* </form> */}
        </div>
    )
}