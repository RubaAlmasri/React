import { NavLink } from "react-router-dom";
import "./Style.css";

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div class="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Navbar</NavLink>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink  className="nav-link" to="/about" >About Us</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact" >Contact Us</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
