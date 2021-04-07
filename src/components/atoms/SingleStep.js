import React from "react";
import Icon from "./Icon";

function SingleStep(props) {
    return (
        <div className="single__opt">
            <Icon
                source={props.source}
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
            <h2>{props.title}</h2>
            <div> </div>
            <p>{props.description}</p>
        </div>
    );
}

export default SingleStep;