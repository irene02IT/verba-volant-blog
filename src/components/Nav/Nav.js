/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    //const [isLinkActive, setIsLinkActive] = useState(false);
    return(
        // <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <Link to="/" ><a class="navbar-brand"> <img src="assets/logo192.png" alt=""/> Verba Volant</a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                }}>
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div className={isNavExpanded ? "collapse navbar-collapse show": "collapse navbar-collapse" } id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" activeClassName="nav-link-active" to="/" >Home</NavLink></li>
                        <li class="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" activeClassName="nav-link-active" to="/about" >About</NavLink></li>
                        <li class="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" activeClassName="nav-link-active" to="/contact" >Contact</NavLink></li>
                        <li class="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4">ITA</NavLink></li>
                        <li class="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" activeClassName="nav-link-active" to="/admin" >Admin</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;