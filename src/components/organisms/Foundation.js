import React, {useState} from "react";
import DecorTitle from "../atoms/DecorTitle";
import FundList from "../atoms/FundList";

function Foundation(props) {

    const founds = {
        one: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum esse excepturi praesentium quia quo reiciendis ullam unde voluptate. Amet consequatur corporis minima. Aperiam cumque dolorum, error harum incidunt itaque?",
            "Foundation 1 'Lorem ipsum'",
            "Foundation 2 'Dolor sit'",
            "Foundation 3 'Amet'",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, odit.",
            "Lorem ipsum dolor sit amet.",
            "uno, dos, tres",
            "one, two, three",
            "un, deux, trois"
        ],

        two: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum esse excepturi praesentium quia quo reiciendis ullam unde voluptate. Amet consequatur corporis minima. Aperiam cumque dolorum, error harum incidunt itaque?",
            "Foundation 4 'Lorem ipsum'",
            "Foundation 5 'Dolor sit'",
            "Foundation 6 'Amet'",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, odit.",
            "Lorem ipsum dolor sit amet.",
            "uno, dos, tres",
            "one, two, three",
            "un, deux, trois"
        ],

        three: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum esse excepturi praesentium quia quo reiciendis ullam unde voluptate. Amet consequatur corporis minima. Aperiam cumque dolorum, error harum incidunt itaque?",
            "Foundation 7 'Lorem ipsum'",
            "Foundation 8 'Dolor sit'",
            "Foundation 9 'Amet'",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, odit.",
            "Lorem ipsum dolor sit amet.",
            "uno, dos, tres",
            "one, two, three",
            "un, deux, trois"
        ]
    }


    const organisations = {
        one: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum esse excepturi praesentium quia quo reiciendis ullam unde voluptate. Amet consequatur corporis minima. Aperiam cumque dolorum, error harum incidunt itaque?",
            "Organisation 1 'Lorem ipsum'",
            "Organisation 2 'Dolor sit'",
            "Organisation 3 'Amet'",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, odit.",
            "Lorem ipsum dolor sit amet.",
            "uno, dos, tres",
            "one, two, three",
            "un, deux, trois"
        ],
        two: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum esse excepturi praesentium quia quo reiciendis ullam unde voluptate. Amet consequatur corporis minima. Aperiam cumque dolorum, error harum incidunt itaque?",
            "Organisation 4 'Lorem ipsum'",
            "Organisation 5 'Dolor sit'",
            "Organisation 6 'Amet'",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, odit.",
            "Lorem ipsum dolor sit amet.",
            "uno, dos, tres",
            "one, two, three",
            "un, deux, trois"
        ]
    }

    const donations = {
        one: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum esse excepturi praesentium quia quo reiciendis ullam unde voluptate. Amet consequatur corporis minima. Aperiam cumque dolorum, error harum incidunt itaque?",
            "Donation 1 'Lorem ipsum'",
            "Donation 2 'Dolor sit'",
            "Donation 3 'Amet'",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, odit.",
            "Lorem ipsum dolor sit amet.",
            "uno, dos, tres",
            "one, two, three",
            "un, deux, trois"
        ]
    }

    const [list, setList] = useState(founds)
    const [number, setNumber] = useState("one")

    const menuStyle = {
        color: "#3C3C3C",
        cursor: "pointer",
        textDecoration: "none",
        fontSize: "1.2rem"
    }

    return (
        <div className="fund" id={props.id}>
            <div className="fund__cnt">
                <DecorTitle titleOne={"Who do we help?"}/>
                <div>
                    <nav>
                        <ul className="fund__menu">
                            <li
                                style={menuStyle}
                                onClick={() => setList(founds)}
                            >
                                Foundations
                            </li>
                            <li
                                style={menuStyle}
                                onClick={() => setList(organisations)}
                            >
                                Non-governmental organizations
                            </li>
                            <li
                                style={menuStyle}
                                onClick={() => setList(donations)}
                            >
                                Local donations
                            </li>
                        </ul>
                    </nav>
                    <div className="founds">
                        <FundList
                            description={list[number][0]}
                            title0ne={list[number][1]}
                            titleTwo={list[number][2]}
                            titleThree={list[number][3]}
                            descr0ne={list[number][4]}
                            descrTwo={list[number][5]}
                            descrThree={list[number][6]}
                            detail0ne={list[number][7]}
                            detailTwo={list[number][8]}
                            detailThree={list[number][9]}
                        />
                    </div>
                    {list.three ?
                        <ul className="fund__menu">
                            <li
                                style={menuStyle}
                                onClick={() => setNumber("one")}
                            >
                                1
                            </li>
                            <li
                                style={menuStyle}
                                onClick={() => setNumber("two")}
                            >
                                2
                            </li>
                            <li
                                style={menuStyle}
                                onClick={() => setNumber("three")}
                            >
                                3
                            </li>
                        </ul> : <ul> </ul>

                        ||

                        list.two ?

                            <ul className="fund__menu">
                                <li
                                    style={menuStyle}
                                    onClick={() => setNumber("one")}
                                >
                                    1
                                </li>
                                <li
                                    style={menuStyle}
                                    onClick={() => setNumber("two")}
                                >
                                    2
                                </li>
                            </ul> : <ul> </ul>
                    }
                </div>
            </div>
        </div>
    );

}

export default Foundation;