import React, {useState} from "react";
import HeaderNav from "../molecules/HeaderNav";
import DecorTitle from "../atoms/DecorTitle";
import {Link} from "react-router-dom";

function LogOut() {

    const [hover, setHover] = useState(false);

    const btnStyle = {
        border: "1px solid #737373",
        padding: "1rem 2rem",
        width: "10rem",
        cursor: "pointer"
    }

    const txtStyle = {
        fontSize: "1rem",
        fontWeight: "400",
        textDecoration: "none",
        color: "#737373",
        textAlign: "center",
        display: "flex"
    }

    const btnHover = {
        border: "1px solid #FAD648",
        padding: "1rem 2rem",
        width: "10rem",
        cursor: "pointer"
    }

    const txtHover = {
        fontSize: "1rem",
        fontWeight: "400",
        textAlign: "center",
        textDecoration: "none",
        color: "#FAD648",
        display: "flex"
    }

    return (
        <div className="log">
            <div>
                <div className="log__cnt">
                    <HeaderNav/>

                </div>
            </div>
            <div className="log__action-cnt">
                <div
                    className="log__action-text"
                    style={{
                        marginBottom: "4rem"
                    }}
                >
                    <DecorTitle
                        titleOne={"You logged out successfully!"}
                    />
                </div>

                <div
                    style={!hover ? btnStyle : btnHover}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <Link
                        to="/"
                        className="form-btn"
                        style={!hover ? txtStyle : txtHover}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        Homepage
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default LogOut;