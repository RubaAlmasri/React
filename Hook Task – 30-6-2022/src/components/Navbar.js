import { NavLink } from "react-router-dom";

function Navbar() {
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
                                <NavLink className="nav-link" to="/movielist" >MovieList</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about" >About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;