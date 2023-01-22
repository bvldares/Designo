import React from "react";
import "../css/serviceCard.css"

export default function ServiceCard(props){
    return (
        <div className="service-card">
            <img className="service-card-img" src={props.img} alt="project img"/>
            <div className="service-card-intro">
                <h3 className="service-card-title">{props.title}</h3>
                <p className="service-card-body">{props.body}</p>
            </div>
        </div>
    )
}