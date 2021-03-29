import React from "react";
import {Link} from "react-router-dom";
import Button from "../atoms/Button";
import DecorTitle from "../atoms/DecorTitle";
import Nav from "../molecules/Nav";

function Header() {

    const registerStyle = {
        textDecoration: "none",
        fontSize: "0.8rem",
        color: "#737373"
    }

    return (
        <div className="hero">

            <div className="hero__cnt">


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



                <div className="hero__action-cnt">
                    <div className="hero__action-text">
                        <DecorTitle
                            titleOne={"Start helping!"}
                            titleTwo={"Give away your stuff in the trusted hands"}/>
                    </div>
                    <div className="hero__action-btn">
                        <Button path="/log" text={"Give stuff away"}/>
                        <Button path="/log" text={"Organise collection"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;