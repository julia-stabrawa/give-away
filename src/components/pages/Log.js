import React, {useState} from "react";
import {Link} from "react-router-dom";
import HeaderNav from "../molecules/HeaderNav";
import DecorTitle from "../atoms/DecorTitle";

function Log() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("none");
    const [errorEmail, setErrorEmail] = useState("none");
    const [success, setSuccess] = useState("none");



    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            setSuccess("block");
            setErrorPassword("none");
            setErrorEmail("none");
        } else if (email === "") {
            setErrorEmail("block");
        } else if (password === "") {
            setErrorPassword("block");
        }
    }
    const passwordCheck = (el) => {

        if (el.length > 6) {
            setPassword(el);
        }
    }

    const emailCheck = (el) => {

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(el)) {
            setEmail(el);
        }
    }


    return (
        <div className="log">
            <div>
                <div className="log__cnt">
                    <HeaderNav/>

                </div>
            </div>
            <div className="log__action-cnt">
                <div className="log__action-text">
                    <DecorTitle
                        titleOne={"Log in"}
                    />
                </div>
                <p
                    style={{
                        display: `${success}`,
                        color: "green",
                        fontWeight: "600",
                        fontSize: "1rem",
                        padding: "1rem"
                    }}>Successfully logged in!</p>
                <div className="contact__form">
                    <form className="form">
                        <div className="form__info">
                            <div className="form-row">
                                <label htmlFor="email" className="label__txt">E-mail</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="form-input"
                                    onChange={(e) => emailCheck(e.target.value)}
                                />
                                <p
                                    style={{
                                        display: `${errorEmail}`,
                                        color: "red",
                                        fontWeight: "600",
                                        fontSize: "0.9rem",
                                        paddingTop: "0.5rem"
                                    }}>Email is incorrect!</p>
                            </div>
                            <div className="form-row">
                                <label htmlFor="password" className="label__txt">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="form-input"
                                    onChange={(e) => passwordCheck(e.target.value)}
                                />
                                <p
                                    style={{
                                        display: `${errorPassword}`,
                                        color: "red",
                                        fontWeight: "600",
                                        fontSize: "0.9rem",
                                        paddingTop: "0.5rem"
                                    }}>Password is too short!</p>
                            </div>
                        </div>
                        <div className="form-row-btn">

                            <Link
                                to="/register"
                                className="form-btn"
                                style={{
                                    textDecoration: "none",
                                    color: "#3C3C3C"
                                }}
                            >
                                Register
                            </Link>

                            <button
                                type="submit"
                                className="form-btn"
                                onClick={handleSubmit}
                            >
                                Log in
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Log;