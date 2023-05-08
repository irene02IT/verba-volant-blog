/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
function Nav(){
    const linkStyle = {
        color: "white"
    };
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return(
        // <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand"> <img src="assets/logo192.png" alt=""/> <Link style={linkStyle} to="/" >Verba Volant</Link></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                }}>
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div className={isNavExpanded ? "collapse navbar-collapse show": "collapse navbar-collapse" } id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><Link style={linkStyle} to="/" >Home</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><Link style={linkStyle} to="/about" >About</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" ><Link style={linkStyle} to="/contact" >Contact</Link></a></li>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" >ITA</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;