import React from "react";
import "./Pages.css";
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/components/Pages/Map">
                    <li>Map</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;