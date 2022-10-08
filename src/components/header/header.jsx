import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed-top header">
            <div className="navigation w-100">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <a className="navbar-brand" href="index.html"><img src="../../../public/images/logo.png" alt="logo"/></a>
                        <button className="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navigation">
                            <ul className="navbar-nav ml-auto text-center">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item @@about">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item @@courses">
                                    <Link className="nav-link" to="/courses">COURSES</Link>
                                </li>
                                <li className="nav-item @@events">
                                    <Link className="nav-link" href="/events">EVENTS</Link>
                                </li>
                                <li className="nav-item @@blog">
                                    <Link className="nav-link" to="/blog">BLOG</Link>
                                </li>
                                <li className="nav-item dropdown view">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/teacher">Teacher</Link></li>
                                        <li><Link className="dropdown-item" to="/teacher-single">Teacher Single</Link></li>
                                        <li><Link className="dropdown-item" to="/notice">Notice</Link></li>
                                        <li><Link className="dropdown-item" to="/notice-single">Notice Details</Link></li>
                                        <li><Link className="dropdown-item" to="/research">Research</Link></li>
                                        <li><Link className="dropdown-item" to="/scholarship">Scholarship</Link></li>
                                        <li><Link className="dropdown-item" to="/course-single">Course Details</Link></li>
                                        <li><Link className="dropdown-item" to="/event-single">Event Details</Link></li>
                                        <li><Link className="dropdown-item" to="/blog">Blog Details</Link></li>
                
                                        <li className="dropdown-item dropdown dropleft">
                                            <Link className="dropdown-toggle" to="/" id="navbarDropdownSubmenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sub Menu
                                            </Link>
                                            <ul className="dropdown-menu dropdown-submenu" aria-labelledby="navbarDropdownSubmenu">
                                                <li><Link className="dropdown-item" to="/">Sub Menu 01</Link></li>
                                                <li><Link className="dropdown-item" to="/">Sub Menu 02</Link></li>
                                                <li><Link className="dropdown-item" to="/">Sub Menu 03</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item @@contact">
                                    <Link className="nav-link" to="/">CONTACT</Link>
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