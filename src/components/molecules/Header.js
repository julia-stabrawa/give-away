import React from "react";
import {Link} from "react-router-dom";
import Nav from "../atoms/Nav";

function Header() {
    return (
        <nav>
            <ul className="registration">
                <li>
                    <Link to="/log">Log in</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
            <Nav/>
        </nav>
    );
}

export default Header;