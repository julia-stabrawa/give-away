import React from "react";
import {Link} from "react-router-dom";
import Nav from "../atoms/Nav";

function HeaderNav() {

    const registerStyle = {
        textDecoration: "none",
        fontSize: "0.8rem",
        color: "#737373"
    }

    return (
                <nav>
                    <ul className="registration">
                        <li>
                            <Link
                                to="/log"
                                style={registerStyle}
                            >Log in</Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                style={registerStyle}
                            >Register</Link>
                        </li>
                    </ul>

                    <Nav />


                </nav>
    );
}

export default HeaderNav;