import React from "react";


function FundList(props) {
    return (
        <div className="fund__list">
            <div className="list__description">
                <p>{props.description}</p>
            </div>
            <div className="list">
                <ul>
                    <li>
                        <div className="list__title">
                            <h2>{props.title0ne}</h2>
                            <p>{props.descr0ne}</p>
                        </div>
                        <div className="list__details">{props.detail0ne}</div>
                    </li>
                    <li>
                        <div className="list__title">
                            <h2>{props.titleTwo}</h2>
                            <p>{props.descrTwo}</p>
                        </div>
                        <div className="list__details">{props.detailTwo}</div>
                    </li>
                    <li>
                        <div className="list__title">
                            <h2>{props.titleThree}</h2>
                            <p>{props.descrThree}</p>
                        </div>
                        <div className="list__details">{props.detailThree}</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FundList;