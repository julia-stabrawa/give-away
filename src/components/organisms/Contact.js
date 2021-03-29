import React from "react";
import DecorTitle from "../atoms/DecorTitle";

function Contact(props) {
    return (
        <div className="contact" id={props.id}>

            <div className="contact__cnt">
                <div className="contact__title">
                    <DecorTitle
                        titleOne={"Contact us"}
                    />
                </div>
                <div className="contact__form">
                    <form className="form">
                        <div className="form__info">
                            <div className="form-row">
                                <label htmlFor="name" className="label__txt">Enter your name</label>
                                <input id="name" name="name" type="text" className="form-input"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email" className="label__txt">Enter your e-mail</label>
                                <input id="email" name="email" type="text" className="form-input"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="message" className="label__txt">Write a message</label>
                            <input id="message" name="message" type="text" className="form-input"/>
                        </div>
                        <div className="form-row-btn">
                            <button type="submit" className="form-btn">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;