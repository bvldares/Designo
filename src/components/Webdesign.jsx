import React from "react";
import "../css/webdesign.css"
import { nanoid } from 'nanoid'
import express from "../assets/web-design/desktop/image-express.jpg"
import transfer from "../assets/web-design/desktop/image-transfer.jpg"
import photon from "../assets/web-design/desktop/image-photon.jpg"
import builder from "../assets/web-design/desktop/image-builder.jpg"
import blogr from "../assets/web-design/desktop/image-blogr.jpg"
import camp from "../assets/web-design/desktop/image-camp.jpg"
import InnerpageHero from "./InnerpageHero"
import RedirectCard from "./RedirectCard"
import ServiceCard from "./ServiceCard";


const cardArr = [
    {img : express, title : "express", body : "A multi-carrier shipping website for ecommerce businesses"},
    {img : transfer, title: "transfer", body: "A state-of-the-art music player with high-resolution audio and DSP effects"},
    {img : photon, title: "photon", body: "A state-of-the-art music player with high-resolution audio and DSP effects"},
    {img: builder, title:"builder", body: "Connects users with local contractors based on their location"},
    {img: blogr, title: "blogr", body:"Blogr is a platform for creating an online blog or publication"},
    {img: camp, title: "camp", body:"Get expert training in coding, data, design, and digital marketing"}
]


const CardElements = cardArr.map(card => <ServiceCard img={card.img} title={card.title} body={card.body} key={nanoid()} />)

export default function Webdesign(){
    


    return (
        <main className="webdesign">
            <InnerpageHero title="Web Design" body="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />
            <div className="webdesign-services">
                {CardElements}
            </div>
            <section className="home-redirect webdesign-page">
                <RedirectCard classe="app-design" title="app design" path="/appdesign" />
                <RedirectCard classe="graphic-design" title="graphic design" path="/graphicdesign" /> 
            </section>
        </main>
    )
}