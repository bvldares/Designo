import React from "react";
import InnerpageHero from "./InnerpageHero";
import ServiceCard from "./ServiceCard";
import RedirectCard from "./RedirectCard";
import change from "../assets/graphic-design/desktop/image-change.jpg"
import water from "../assets/graphic-design/desktop/image-boxed-water.jpg"
import science from "../assets/graphic-design/desktop/image-science.jpg"
import "../css/graphic.css"

const cardArr = [
    {img:change, title: "Tim Brown", body:"A book cover designed for Tim Brown’s new release, 'Change’"},
    {img:water, title: "Boxes Water", body:"A simple packaging concept made for Boxed Water"},
    {img:science, title:"Science!", body:"A poster made in collaboration with the Federal Art Project"}
]

const CardElements = cardArr.map(card => <ServiceCard img={card.img} title={card.title} body={card.body}  />)


export default function Graphic(){
    return (
        <main className="graphic">
        <InnerpageHero title="Graphic Design" body="We deliver eye-catching branding materials that are "/>
        <div className="graphic-services">
            {CardElements}
        </div>
        <div className="graphic-redirect">
            <RedirectCard classe="web-design" title="web design" path="/webdesign" /> 
            <RedirectCard classe="app-design" title="app design" path="/appdesign" />
        </div>
    </main>
    )
}