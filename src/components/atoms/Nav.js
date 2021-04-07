import {Link} from "react-router-dom";
import React from "react";
import NavScroll from "./NavScroll";

function Nav() {
    return (
        <ul className="menu">
            <li>
                <Link
                    to="/"
                >Start</Link>
            </li>
            <NavScroll />
        </ul>
    );
}

export default Nav;