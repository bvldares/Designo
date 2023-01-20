import React from "react";
import "../css/home.css"
import RedirectCard from "./RedirectCard";
import Button from "./Button";
import heroImg from "../assets/home/desktop/image-hero-phone.png"
import passionateIllustration from "../assets/home/desktop/illustration-passionate.svg"
import resourcefulIllustration from "../assets/home/desktop/illustration-resourceful.svg"
import friendlyIllustration from "../assets/home/desktop/illustration-friendly.svg"


export default function Home(){
    return (
        <main className="home">
            <section className="hero">
                <div className="hero-intro">
                <h1 className="hero-title">Award-winning custom designs and digital branding solutions</h1>
                <p className="hero-body">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Button path="about" caption="LEARN MORE" />
                </div>
                <img className="hero-img" src={heroImg} alt="phone img" />
            </section>

            <section className="home-redirect">
                <RedirectCard classe="web-design" title="web design" />
                <RedirectCard classe="app-design" title="app design" />
                <RedirectCard classe="graphic-design" title="graphic design" /> 
            </section>

            <section className="services">
                <div className="service">
                    <img src={passionateIllustration} alt="guy drawing on tablet" className="service-img" />
                    <h3 className="service-title">PASSIONATE</h3>
                    <p className="service-body">
                        Each project starts with an in-depth brand research to ensure 
                        we only create products that serve a purpose.
                        We merge art, design, and technology into exciting new solutions.
                    </p>
                </div>
                <div className="service">
                    <img src={resourcefulIllustration} alt="girl drawing on a tablet" className="service-img" />
                    <h3 className="service-title">RESOURCEFUL</h3>
                    <p className="service-body">
                    Everything that we do has a strategic purpose. 
                    We use an agile approach in all of our projects and value customer collaboration. 
                    It guarantees superior results that fulfill our clients’ needs.
                    </p>
                </div>
                <div className="service">
                    <img src={friendlyIllustration} alt="two guys holding a share button" className="service-img" />
                    <h3 className="service-title">FRIENDLY</h3>
                    <p className="service-body">
                    We are a group of enthusiastic folks who know how to put people first. 
                    Our success depends on our customers, and we strive to give them the 
                    best experience a company can provide.
                    </p>
                </div>
            </section>
        </main>
    )
}