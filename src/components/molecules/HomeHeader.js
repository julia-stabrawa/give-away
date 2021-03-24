import React from "react";
import {Link} from "react-router-dom";
import Button from "../atoms/Button";

function Header() {

    const registerStyle = {
        textDecoration: "none",
        fontSize: "0.8rem",
        color: "#737373"
    }

    const menuStyle = {
        textDecoration: "none",
        fontSize: "1rem",
        color: "#3C3C3C"
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
                    <ul className="menu">
                        <li>
                            <Link
                                to="/"
                                style={menuStyle}
                            >Start</Link>
                        </li>
                        <li>
                            <Link
                                to="/what"
                                style={menuStyle}
                            >What's that?</Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                style={menuStyle}
                            >About us</Link>
                        </li>
                        <li>
                            <Link
                                to="/fund"
                                style={menuStyle}
                            >Foundation and organisations</Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                style={menuStyle}
                            >Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="hero__action-cnt">
                    <div className="hero__action-text">
                        <p>Start helping!</p>
                        <p>Give away your stuff in the trusted hands</p>
                        <img
                            src="../../assets/Decoration.svg"
                            alt=""
                            style={{
                                width: "15rem",
                                height: "100%"
                            }}
                        />
                    </div>
                    <div className="hero__action-btn">
                        <Button text={"Give away"}/>
                        <Button text={"Organise donation"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;