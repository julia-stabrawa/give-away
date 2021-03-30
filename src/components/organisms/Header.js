import React from "react";
import Button from "../atoms/Button";
import DecorTitle from "../atoms/DecorTitle";
import HeaderNav from "../molecules/HeaderNav";

function Header() {

    return (
        <div className="hero">

            <div className="hero__cnt">

                <HeaderNav />

                <div className="hero__action-cnt">
                    <div className="hero__action-text">
                        <DecorTitle
                            titleOne={"Start helping!"}
                            titleTwo={"Give away your stuff in the trusted hands"}/>
                    </div>
                    <div className="hero__action-btn">
                        <Button path="/log" text={"Give stuff away"}/>
                        <Button path="/log" text={"Organise collection"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;