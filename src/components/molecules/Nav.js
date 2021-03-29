import {Link} from "react-scroll";
import React from "react";

function Nav() {

    const menuStyle = {
        color: "#3C3C3C",
        cursor: "pointer"
    }

    return (
        <ul className="menu">
            <li>
                <Link
                    to="/"
                    style={menuStyle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Start</Link>
            </li>
            <li>
                <Link
                    to="what"
                    style={menuStyle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >What's that?</Link>
            </li>
            <li>
                <Link
                    to="about"
                    style={menuStyle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >About us</Link>
            </li>
            <li>
                <Link
                    to="fund"
                    style={menuStyle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Foundation and organisations</Link>
            </li>
            <li>
                <Link
                    to="contact"
                    style={menuStyle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Contact</Link>
            </li>
        </ul>
    );
}

export default Nav;