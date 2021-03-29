import React from "react";
import DecorTitle from "../atoms/DecorTitle";
import Button from "../atoms/Button";
import Shirt from "../../assets/Icon-1.svg";
import Bag from "../../assets/Icon-2.svg";
import Glass from "../../assets/Icon-3.svg";
import Arrows from "../../assets/Icon-4.svg";

function Steps() {
    return (
        <div className="steps">
            <DecorTitle titleOne={"It takes only 4 simple steps"}/>
            <div className="steps__opt">
                <div className="single__opt">
                    <img
                        src={Shirt}
                        alt="pick stuff"
                        style={{
                            width: "5rem",
                            height: "5rem",
                            marginTop: "2rem"
                        }}/>
                    <h2>Pick stuff</h2>
                    <div> </div>
                    <p>clothes, toys, electronic etc.</p>
                </div>
                <div className="single__opt">
                    <img
                        src={Bag}
                        alt="pack"
                        style={{
                            width: "5rem",
                            height: "5rem",
                            marginTop: "2rem"
                        }}/>
                    <h2>Pack them</h2>
                    <div> </div>
                    <p>use trash bags</p>
                </div>
                <div className="single__opt">
                    <img
                        src={Glass}
                        alt="looking"
                        style={{
                            width: "5rem",
                            height: "5rem",
                            marginTop: "2rem"
                        }}/>
                    <h2>Decide who do you want to help</h2>
                    <div> </div>
                    <p>choose a trusted place</p>
                </div>
                <div className="single__opt">
                    <img
                        src={Arrows}
                        alt="process"
                        style={{
                            width: "5rem",
                            height: "5rem",
                            marginTop: "2rem"
                        }}/>
                    <h2>Order pick-up</h2>
                    <div> </div>
                    <p>the courier will whenever you want</p>
                </div>
            </div>
            <Button text={"Give stuff away"}/>
        </div>
    );
}

export default Steps;