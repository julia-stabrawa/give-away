import React from "react";
import UsText from "../molecules/UsText";

function About(props) {
    return (
        <div className="about__us" id={props.id}>
            <UsText/>
            <div className="photo"> </div>
        </div>
    );
}

export default About;