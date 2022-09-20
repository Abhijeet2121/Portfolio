import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

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
            <div className='social-links'>
                <a href="https://www.facebook.com/jeets.tym" target="_blank" rel="noreferrer">
                    <FacebookIcon className='facebook' sx={{ fontSize: 40 }} />
                </a>
                <a href="https://www.instagram.com/abhijeet_kumbhar30/" target="_blank" rel="noreferrer">
                    <InstagramIcon className='instagram' sx={{ fontSize: 40 }} />
                </a>
                <a href="https://www.instagram.com/abhijeet_kumbhar30/" target="_blank" rel="noreferrer">
                    <TwitterIcon className='twitter' sx={{ fontSize: 40 }} />
                </a>
                <a href="https://github.com/Abhijeet2121" target="_blank" rel="noreferrer">
                    <GitHubIcon className='github' sx={{ fontSize: 40 }} />
                </a>
            </div>

        </>
    )
}

export default Navbar;
