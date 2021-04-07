import React from "react";
import DecorTitle from "../atoms/DecorTitle";
import Btn from "../atoms/Btn";
import Shirt from "../../assets/Icon-1.svg";
import Bag from "../../assets/Icon-2.svg";
import Glass from "../../assets/Icon-3.svg";
import Arrows from "../../assets/Icon-4.svg";
import SingleStep from "../atoms/SingleStep";

function Steps() {
    return (
        <div className="steps">
            <DecorTitle titleOne={"It takes only 4 simple steps"}/>
            <div className="steps__opt">
                <SingleStep
                    source={Shirt}
                    alt={"pick stuff"}
                    width={"5rem"}
                    height={"5rem"}
                    title={"Pick stuff"}
                    description={"clothes, toys, electronic etc."}
                />
                <SingleStep
                    source={Bag}
                    alt={"pack"}
                    width={"5rem"}
                    height={"5rem"}
                    title={"Pack them"}
                    description={"use trash bags"}
                />
                <SingleStep
                    source={Glass}
                    alt={"looking"}
                    width={"5rem"}
                    height={"5rem"}
                    title={"Decide who do you want to help"}
                    description={"choose a trusted place"}
                />
                <SingleStep
                    source={Arrows}
                    alt={"process"}
                    width={"5rem"}
                    height={"5rem"}
                    title={"Order pick-up"}
                    description={"the courier will whenever you want"}
                />
            </div>
            <Btn
                text={"Give stuff away"}
                direction={"/log"}
                size={"btn"}
            />
        </div>
    );
}

export default Steps;