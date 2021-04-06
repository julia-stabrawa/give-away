import React, {useState} from "react";
import {Link} from "react-router-dom";

function Btn(props) {

    const[hover, setHover] = useState(false);

    const btnStyle = {
        border: "1px solid #737373",
        padding: "1rem 3rem",
        width: "16rem",
        cursor: "pointer"
    }

    const txtStyle = {
        textTransform: "uppercase",
        fontSize: "1.8rem",
        fontWeight: "200",
        textDecoration: "none",
        color: "#737373",
        textAlign: "center",
        display: "flex"
    }

    const btnHover = {
        border: "1px solid #FAD648",
        padding: "1rem 3rem",
        width: "16rem",
        cursor: "pointer"
    }

    const txtHover = {
        textTransform: "uppercase",
        fontSize: "1.8rem",
        fontWeight: "200",
        textAlign: "center",
        textDecoration: "none",
        color: "#FAD648",
        display: "flex"
    }

    return (
        <div
            style={!hover ? btnStyle : btnHover}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Link
                to={props.direction}
                style={!hover ? txtStyle : txtHover}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >{props.text}</Link>
        </div>
    );
}

export default Btn;