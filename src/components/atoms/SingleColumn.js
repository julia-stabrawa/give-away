import React from "react";

function SingleColumn(props) {
    return (
        <div className="single__column">
            <h2>{props.number}</h2>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default SingleColumn;