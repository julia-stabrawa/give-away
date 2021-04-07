import React from "react";
import Decoration from "../../assets/Decoration.svg"
import Icon from "./Icon";

function DecorTitle(props) {
    return (
        <>
            <h2 className="decor__text">{props.titleOne}</h2>
            <h2 className="decor__text">{props.titleTwo}</h2>
            <Icon
                source={Decoration}
                alt={"decoration"}
                width={"15rem"}
                height={"100%"}
                margin={"1rem"}
            />
        </>
    );
}

export default DecorTitle;