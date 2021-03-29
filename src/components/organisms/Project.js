import React from "react";
import HomeThreeColumns from "../molecules/Columns";
import Steps from "../molecules/Steps";

function Project(props) {
    return (
        <div className="about__project" id={props.id}>
            <HomeThreeColumns />
            <Steps />
        </div>
    );
}

export default Project;