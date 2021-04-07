import React from "react";
import Btn from "../atoms/Btn";
import DecorTitle from "../atoms/DecorTitle";
import Header from "../molecules/Header";

function Hero() {
    return (
        <div className="hero">
            <div className="hero__cnt">
                <Header/>
                <div className="hero__action-cnt">
                    <div className="hero__action-text">
                        <DecorTitle
                            titleOne={"Start helping!"}
                            titleTwo={"Give away your stuff in the trusted hands"}/>
                    </div>
                    <div className="hero__action-btn">
                        <Btn
                            direction={"/log"}
                            text={"Give stuff away"}
                            size={"btn"}
                        />
                        <Btn
                            direction={"/log"}
                            text={"Organise collection"}
                            size={"btn"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;