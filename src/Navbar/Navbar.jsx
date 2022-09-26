import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Social from "../Social-liinks";
import "./Navbar.scss"

const Navbar = () => {

    return (
        <>
            <nav className="nav">
                <div className="nav-logo">
                    <h1>AK</h1>
                </div>
                <div className="nav-links">
                    <Link smooth to='#' className="nav-link">
                            HOME
                    </Link>
                    <Link smooth to="#About" className="nav-link">
                            ABOUT
                    </Link>
                    <Link smooth to='#Certification' className="nav-link">
                            CERTIFICATION
                    </Link>
                    <Link smooth to="#Portfolio" className="nav-link">
                            PROJECTS
                    </Link>
                    <Link smooth to='#Contact' className="nav-link">
                            CONTACT
                    </Link>
                </div>
            </nav>

            <div className="Main-Content">
                <p>
                    Hi! I'm
                    <br />
                    Abhijeet Kumbhar
                    <br />
                    Frontend-Devloper
                </p>
            </div>

            <Social/>

        </>
    )
}

export default Navbar;
