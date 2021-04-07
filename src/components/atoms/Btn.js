import React from "react";
import {Link} from "react-router-dom";

function Btn(props) {
    return (
        <Link
            className={props.size}
            to={props.direction}
        >{props.text}</Link>
    );
}

export default Btn;