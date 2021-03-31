import {Link} from "react-router-dom";
import React from "react";
import NavScroll from "./NavScroll";

function Nav() {

    const menuStyle = {
        color: "#3C3C3C",
        cursor: "pointer",
        textDecoration: "none"
    }

    return (
        <ul className="menu">
            <li>
                <Link
                    to="/"
                    style={menuStyle}
                >Start</Link>
            </li>

            <NavScroll style={menuStyle} />

        </ul>
    );
}

export default Nav;