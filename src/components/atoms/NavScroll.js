import {Link} from "react-scroll";
import React from "react";

function NavScroll(props) {

    return (
        <>
            <li>
                <Link
                    to="what"
                    style={props.style}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >What's that?</Link>
            </li>
            <li>
                <Link
                    to="about"
                    style={props.style}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >About us</Link>
            </li>
            <li>
                <Link
                    to="fund"
                    style={props.style}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Foundation and organisations</Link>
            </li>
            <li>
                <Link
                    to="contact"
                    style={props.style}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Contact</Link>
            </li>
        </>
    );
}

export default NavScroll;