import { useState } from "react";
import Usedata from "./Usedata";



const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {status,handleLogin} = Usedata(email , pass);

    // console.log({status});


    return (
        <div class="container" style={{ marginTop: 200, paddingLeft: 400 }}>

            <h3>Login Page</h3>
            <br /><br />
            {/* <form> */}
                <div class="mb-3 w-50">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div class="mb-3 w-50">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleLogin}>Login</button>
            {/* </form> */}
            <br/><br/>
            <div><h5>{status}</h5></div>



        </div >
    );
}

export default Login;