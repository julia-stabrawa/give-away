import React from "react";
import Decoration from "../../assets/Decoration.svg"

function DecorTitle(props) {

    const textStyle = {
        fontSize: "2rem",
        fontWeight: "400",
    }

    return (
        <>
            <h2 style={textStyle}>{props.titleOne}</h2>
            <h2 style={textStyle}>{props.titleTwo}</h2>
            <img
                src={Decoration}
                alt="decoration"
                style={{
                    width: "15rem",
                    height: "100%",
                    marginTop: "2rem"
                }}
            />
        </>
    );
}

export default DecorTitle;