import React from 'react'

import { Link } from 'react-router-dom'



function Navbar() {

    return (
        <nav className="navbar styleByMe navbar-expand-md navbar-dark bg-dark sticky-top text-center p-3">

            <div className="container">
                <Link to="/" className="navbar-brand justify-content-center">
                    <img src="image/header_logo.svg" alt="" />
                </Link>
                <button class="navbar-toggler nav-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="text-dark navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item"> <Link className="nav-link ancor" to='/'>Home</Link> </li>
                        <li className="nav-item"> <Link className="nav-link ancor" to='/admin'>About</Link> </li>
                        <li className="nav-item">  <Link className="nav-link ancor" to='/teacher'>Team</Link> </li>
                        <li className="nav-item"> <Link className="nav-link ancor" to='/student'>Blog</Link> </li>
                        <li className="nav-item"> <Link className="nav-link ancor">Careers</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



