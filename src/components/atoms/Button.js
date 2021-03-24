import React from "react";

function Button(props) {
    return (
        <div style={{
            border: "1px solid #737373",
            padding: "1rem 4rem",
            width: "18rem",
        }}>
            <p
                style={{
                    textTransform: "uppercase",
                    fontSize: "2rem",
                    fontWeight: "200",
                    textAlign: "center"
                }}>{props.text}</p>
        </div>
    );
}

export default Button;