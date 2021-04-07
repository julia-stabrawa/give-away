import React from "react";
import SingleColumn from "../atoms/SingleColumn";

function Columns() {
    return (
        <div className="columns">
            <div className="columns__cnt">
                <SingleColumn
                    number={"10"}
                    title={"Full bags handed out"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore molestias quis saepe unde! Numquam?"}
                />
                <SingleColumn
                    number={"5"}
                    title={"Supported organisations"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore molestias quis saepe unde! Numquam?"}
                />
                <SingleColumn
                    number={"7"}
                    title={"Organised collections"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore molestias quis saepe unde! Numquam?"}
                />
            </div>
        </div>
    );
}

export default Columns;