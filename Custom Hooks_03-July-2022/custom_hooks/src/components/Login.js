import { useState } from "react";
import Usedata from "./Usedata";



const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [status, setSataus] = useState('');

    const handleLogin = () => {
        const [data] = Usedata(email, pass);
        console.log(email === 'ruba.almasri@gmail.com');

        // if (email === 'ruba.almasri@gmail.com' && pass === '1234') {
        //     setSataus('Done');
        // }
        // else {
        //     setSataus('Invalid Email or Password');
        // }
        return <h1>{status}</h1>;
    }


    return (
        <div class="container" style={{ marginTop: 200, paddingLeft: 400 }}>
            <h3>Login Page</h3>
            <br /><br />
            <form>
                <div class="mb-3 w-50">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div class="mb-3 w-50">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleLogin}>Login</button>
            </form>


        </div >
    );
}

export default Login;