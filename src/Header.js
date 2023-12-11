import React from "react";
import './Header.css';
import Echidna from './echidna.png';

function Header() {
    return (
        <header className="header">
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="logo"><img id="header" src={Echidna} alt="fuck props"></img></div>
    </header>
    );
}

export default Header;