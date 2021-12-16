import React from 'react'
import Logo from "./pikkanode.png";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#"></a>
                    <img src = {Logo} alt = "logo" width = "65px" />
                    <a className="nav-link" href="#">Create pikka</a>
                    <a className="nav-link" href="#">Signup</a>
                    <a className="nav-link">Signin</a>
                    <a className="nav-link">Signout</a>
                </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
