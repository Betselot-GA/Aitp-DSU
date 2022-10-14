import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

const Header = () => {
    return (
        <header className="fixed-top header">
            <div className="navigation w-100">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <a className="navbar-brand" href="index.html"><img src={Logo} height="100" alt="logo"/></a>
                        <button className="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navigation">
                            <ul className="navbar-nav ml-auto text-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item @@about">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item @@events">
                                    <a className="nav-link" href="/events">EVENTS</a>
                                </li>
                                <li className="nav-item @@blog">
                                    <a className="nav-link" href="/notice">Notice</a>
                                </li>
                             
                                <li className="nav-item @@contact">
                                    <a className="nav-link" href="/contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
 
export default Header;