import React from "react";
import HeaderNav from "../molecules/Header";
import DecorTitle from "../atoms/DecorTitle";
import Btn from "../atoms/Btn";

function LogOut() {
    return (
        <div className="log">
            <div>
                <div className="log__cnt">
                    <HeaderNav/>
                </div>
            </div>
            <div className="log__action-cnt">
                <div className="log__action-text">
                    <DecorTitle titleOne={"You logged out successfully!"}/>
                </div>
                <Btn
                    size={"btn__small"}
                    text={"Homepage"}
                    direction={"/"}
                />
            </div>
        </div>
    );
}

export default LogOut;