import React, {useState} from "react";
import Header from "../molecules/Header";
import DecorTitle from "../atoms/DecorTitle";
import ValidationResult from "../atoms/ValidationResult";
import Btn from "../atoms/Btn";
import BtnAction from "../atoms/BtnAction";

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
                    <Header/>
                </div>
            </div>
            <div className="log__action-cnt">
                <div className="log__action-text">
                    <DecorTitle
                        titleOne={"Log in"}
                    />
                </div>
                <ValidationResult
                    display={success}
                    color={"green"}
                    text={"Successfully logged in!"}
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
                        </div>
                        <div className="form-row-btn">
                            <Btn
                                direction={"/register"}
                                size={"form__btn"}
                                text={"Register"}
                            />
                            <BtnAction
                                clickAction={handleSubmit}
                                text={"Log in"}
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Log;