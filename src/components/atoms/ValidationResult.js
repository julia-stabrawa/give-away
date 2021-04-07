import React from "react";

function ValidationResult(props) {
    return (
        <p
            style={{
                display: `${props.display}`,
                color: `${props.color}`,
                fontWeight: "600",
                paddingTop: "1rem",
                textAlign: "center"
            }}>{props.text}</p>
    );
}

export default ValidationResult;