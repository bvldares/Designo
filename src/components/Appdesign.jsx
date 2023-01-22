import React from "react";
import "../css/appdesign.css"
import InnerpageHero from "./InnerpageHero"
import RedirectCard from "./RedirectCard"
import ServiceCard from "./ServiceCard"
import airfilter from "../assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg"
import faceit from "../assets/app-design/desktop/image-faceit.jpg"
import todo from "../assets/app-design/desktop/image-todo.jpg"
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg"


export default function Appdesign(){

    const cardArr = [
        {img:airfilter, title: "airfilter ", body:"Solving the problem of poor indoor air quality by filtering the air"},
        {img:eyecam, title: "Eyecam", body:"Product that lets you edit your favorite photos and videos at any time"},
        {img:faceit, title:"Faceit", body:"Get to meet your favorite internet superstar with the faceit app"},
        {img:todo, title:"Todo", body:"A todo app that features cloud sync with light and dark mode"},
        {img:loopstudios, title:"Loopstudios", body:"Fantastic VR experience application made for Loopstudios"}
    ]
    
    const CardElements = cardArr.map(card => <ServiceCard img={card.img} title={card.title} body={card.body}  />)
    
    return (
        <main className="appdesign">
            <InnerpageHero title="App Design" body="Our mobile designs bring intuitive digital solution to your customers right at their fingertips." />
            <div className="appdesign-wrapper">    
                <div className="appdesign-services">
                        {CardElements}
                    </div>
                    <div className="appdesign-redirect">
                    <RedirectCard classe="web-design" title="web design" path="/webdesign"/>
                    <RedirectCard classe="graphic-design" title="graphic design" path="/graphicdesign" /> 
                </div>
            </div>
        </main>
    )
}