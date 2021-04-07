import React from "react";

function Icon(props) {
    return (
            <img
                src={props.source}
                alt={props.alt}
                style={{
                    width: `${props.width}`,
                    height: `${props.height}`,
                    marginTop: `${props.margin}`
                }}/>
    );
}

export default Icon;