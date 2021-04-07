import React from "react";

function BtnAction(props) {
    return (
        <button
            type="submit"
            className="form__btn"
            onClick={props.clickAction}
        >{props.text}</button>
    );
}

export default BtnAction;