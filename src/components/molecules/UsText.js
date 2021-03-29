import React from "react";
import DecorTitle from "../atoms/DecorTitle";
import Signature from "../../assets/Signature.svg";

function UsText() {
    return (
        <div className="us">
            <div className="us__text">
                <DecorTitle titleOne={"About us"}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda consequatur eligendi et
                    ex excepturi expedita facilis illum mollitia nobis, omnis possimus repellendus sapiente ut vitae.
                    Adipisci asperiores magni temporibus!</p>
            </div>
            <div className="signature">
                <img
                    src={Signature}
                    alt="team"
                    style={{
                        width: "15rem",
                        height: "100%",
                        marginTop: "2rem"
                    }}
                />
            </div>
        </div>
    );
}

export default UsText;