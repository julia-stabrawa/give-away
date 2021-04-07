import {Link} from "react-scroll";
import React from "react";

function NavScroll() {
    return (
        <>
            <li>
                <Link
                    to="what"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >What's that?</Link>
            </li>
            <li>
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >About us</Link>
            </li>
            <li>
                <Link
                    to="fund"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Foundation and organisations</Link>
            </li>
            <li>
                <Link
                    to="contact"
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