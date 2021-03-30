import React from "react";
import {Link} from "react-router-dom";
import HeaderNav from "../molecules/HeaderNav";
import DecorTitle from "../atoms/DecorTitle";

function Register() {
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
                        titleOne={"Register"}
                    />
                </div>
                <div className="contact__form">
                    <form className="form">
                        <div className="form__info">
                            <div className="form-row">
                                <label htmlFor="email" className="label__txt">E-mail</label>
                                <input id="email" name="email" type="text" className="form-input"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="password" className="label__txt">Password</label>
                                <input id="password" name="password" type="password" className="form-input"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="password" className="label__txt">Repeat password</label>
                                <input id="password" name="password" type="password" className="form-input"/>
                            </div>
                        </div>
                        <div className="form-row-btn">

                            <Link
                                to="/log"
                                className="form-btn"
                                style={{
                                    textDecoration: "none",
                                    color: "#3C3C3C"
                                }}
                            >
                                Log in
                            </Link>

                            <button type="submit" className="form-btn">
                                Register
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Register;