import React, {useState} from "react";
import {Link} from "react-router-dom";
import HeaderNav from "../molecules/Header";
import DecorTitle from "../atoms/DecorTitle";
import Btn from "../atoms/Btn";
import BtnAction from "../atoms/BtnAction";
import ValidationResult from "../atoms/ValidationResult";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [errorPassword, setErrorPassword] = useState("none");
    const [errorPasswordTwo, setErrorPasswordTwo] = useState("none");
    const [errorEmail, setErrorEmail] = useState("none");
    const [success, setSuccess] = useState("none");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "" && password === passwordTwo) {
            setSuccess("block");
            setErrorPasswordTwo("none");
            setErrorPassword("none");
            setErrorEmail("none");
        }else if (email === "") {
            setErrorEmail("block");
        }else if (password === "") {
            setErrorPassword("block");
        }else if (password !== passwordTwo)
            setErrorPasswordTwo("block");
    }
    const passwordCheck = (el) => {
        if (el.length > 6) {
            setPassword(el);
        }
    }
    const passwordTwoCheck = (el) => {
        if (el.length > 6 && el === password) {
            setPasswordTwo(el);
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
                    <DecorTitle titleOne={"Register"}/>
                </div>
                <ValidationResult
                    display={success}
                    color={"green"}
                    text={"Successfully registered!"}
                />
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
                                <ValidationResult
                                    display={errorEmail}
                                    color={"red"}
                                    text={"Email is incorrect!"}
                                />
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
                                <ValidationResult
                                    display={errorPassword}
                                    color={"red"}
                                    text={"Password is too short!"}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="password" className="label__txt">Repeat password</label>
                                <input
                                    id="passwordTwo"
                                    name="passwordTwo"
                                    type="password"
                                    className="form-input"
                                    onChange={(e) => passwordTwoCheck(e.target.value)}
                                />
                                <ValidationResult
                                    display={errorPasswordTwo}
                                    color={"red"}
                                    text={"Passwords are not the same!"}
                                />
                            </div>
                        </div>
                        <div className="form-row-btn">
                            <Btn
                                direction={"/log"}
                                size={"form__btn"}
                                text={"Log in"}
                            />
                            <BtnAction
                                clickAction={handleSubmit}
                                text={"Register"}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;