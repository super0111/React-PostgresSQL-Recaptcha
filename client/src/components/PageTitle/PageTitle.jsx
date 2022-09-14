import React from "react";
import "./style.css";

const PageTitle = (props) => {

    return (
        <>
            <div className="page-title-wrapper">
                <div className="page-title-left">
                    <h2>{props.title}</h2>
                    <p className="subtitle">{props.subtitle}</p>
                </div>
                <div className="page-title-right">
                    <p>{props.date}</p>
                </div>
            </div>
        </>
    )

}

export default PageTitle;