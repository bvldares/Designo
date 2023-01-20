import React from "react";
import { Link } from "react-router-dom";
import "../css/redirectcard.css"
import arrow from "../assets/shared/desktop/icon-right-arrow.svg"


export default function RedirectCard(props){
    return (
        <div className={`redirect-card ${props.classe}`}>
            <h2 className="redirect-title">{props.title}</h2>
            <p className="redirect-link">
                <Link className="router-link" to="">View Project</Link>
                <img src={arrow} alt="right arrow icon" />   
            </p>
        </div>
    )
}