import React from "react";
import "../css/innerpageHero.css"

export default function InnerpageHero(props){
    return (
        <section className="service-hero">
            <div className="service-hero-title">{props.title}</div>
            <p className="service-hero-body">{props.body}</p>
        </section>
    )
}