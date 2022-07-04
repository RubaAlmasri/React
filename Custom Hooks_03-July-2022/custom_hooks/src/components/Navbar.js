import { NavLink } from "react-router-dom";
import Login from "./Login";



function Navbar() {

// const handleLogout=()=>{
//     <Login/>
// }
   
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div class="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Navbar</NavLink>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            {/* <li class="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li> */}
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about" >About Us</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact" >Contact Us</NavLink>
                            </li>

                        </ul>
                        {/* <button type="submit" class="btn btn-primary" onClick={handleLogout}>Logout</button> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
