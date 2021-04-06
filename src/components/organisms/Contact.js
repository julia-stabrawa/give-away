import React, {useState} from "react";
import DecorTitle from "../atoms/DecorTitle";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";

function Contact(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorName, setErrorName] = useState("none");
    const [errorEmail, setErrorEmail] = useState("none");
    const [errorMsg, setErrorMsg] = useState("none");
    const [success, setSuccess] = useState("none");


    const nameCheck = (el) => {

        if (el.includes(" ")) {
            setErrorName("block");
        } else {
            setName(el);
            setErrorName("none");
        }
    }

    const mailCheck = (el) => {

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(el)) {
            setEmail(el);
            setErrorEmail("none");
        } else {
            setErrorEmail("block");
        }
    }

    const msgCheck = (el) => {

        if (el.length < 120) {
            setErrorMsg("block");
        } else {
            setMessage(el);
            setErrorMsg("none");
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,

            })

        }

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', requestOptions)
            .then(
                (response) => (response.json())
            ).then((response)=> {
            if (name.length > 0 && email.length > 0 && message.length > 0 && response.status === 'success') {
                setSuccess("block");
            } else if(response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }


    return (
        <div className="contact" id={props.id}>

            <div className="contact__cover">

                <div className="contact__info">

                    <div className="contact__cnt">
                        <div className="contact__title">
                            <DecorTitle
                                titleOne={"Contact us"}
                            />
                        </div>
                        <p
                            style={{
                                display: `${success}`,
                                color: "green",
                                fontWeight: "600",
                                paddingTop: "1rem",
                                textAlign: "center"
                            }}>
                            Message has been sent successfully! <br/>
                        Well get in touch with you soon.
                        </p>
                        <div className="contact__form">
                            <form className="form">
                                <div className="form__info">
                                    <div className="form-row">
                                        <label
                                            htmlFor="name"
                                            className="label__txt"
                                        >
                                            Enter your name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="form-input"
                                            onChange={(e) => nameCheck(e.target.value)}
                                        />
                                        <p
                                            style={{
                                                display: `${errorName}`,
                                                color: "red",
                                                fontWeight: "600",
                                                fontSize: "0.9rem",
                                                paddingTop: "0.5rem"
                                            }}>Name is incorrect!</p>
                                    </div>
                                    <div className="form-row">
                                        <label
                                            htmlFor="email"
                                            className="label__txt"
                                        >
                                            Enter your e-mail
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="form-input"
                                            onChange={(e) => mailCheck(e.target.value)}
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
                                </div>
                                <div className="form-row">
                                    <label
                                        htmlFor="message"
                                        className="label__txt"
                                    >
                                        Write a message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        minLength="120"
                                        className="form-input"
                                        style={{
                                            height: "5rem"
                                        }}
                                        onChange={(e) => msgCheck(e.target.value)}
                                    />
                                    <p
                                        style={{
                                            display: `${errorMsg}`,
                                            color: "red",
                                            fontWeight: "600",
                                            fontSize: "0.9rem",
                                            paddingTop: "0.5rem"
                                        }}>Message has to have at least 120 signs!</p>
                                </div>
                                <div className="form-row-btn">
                                    <button
                                        type="submit"
                                        className="form-btn"
                                        onClick={handleSubmit}
                                    >Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div> </div>
                    <p>Copyright CodersLab</p>
                    <div className="socials">
                        <img
                            src={Instagram}
                            alt="decoration"
                            style={{
                                width: "1.5rem",
                                height: "100%",
                                margin: "0 1rem 0 1rem"
                            }}
                        />
                        <img
                            src={Facebook}
                            alt="decoration"
                            style={{
                                width: "1.5rem",
                                height: "100%",
                                margin: "0 1rem 0 1rem"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;