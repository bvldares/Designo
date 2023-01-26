import React from "react";
import "../css/about.css"
import aboutHero from "../assets/about/desktop/image-about-hero.jpg"
import worldclasstalent from "../assets/about/mobile/image-world-class-talent.jpg"
import realDeal from "../assets/about/mobile/image-real-deal.jpg"
import RedirectLocations from "./RedirectLocations";

export default function About(){
    return (
        <main className="about">
            <section className="about-hero">
            <img className="about-hero-intro-img" src={aboutHero} alt="table full of laptops" />
                <div className="about-hero-intro">
                    <h1 className="about-hero-intro-title">About Us</h1>
                    <p className="about-hero-intro-body">
                    Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                    We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact.
                    We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                    </p>
                </div>
            </section>

            <section className="about-skills">
                <img className="about-skills-img talent" src={worldclasstalent} alt="girl in white room" />
                <div className="about-skills-intro first-intro">
                    <h2 className="about-skills-title">World-class talent</h2>
                    <p className="about-skills-body">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                    <p className="about-skills-body">Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </div>
            </section>

            <RedirectLocations/>

            <section className="about-skills about-skills-realdeal">
                <img className="about-skills-img realdeal " src={realDeal} alt="girl in white room" />
                <div className="about-skills-intro second-intro">
                    <h2 className="about-skills-title">The real deal</h2>
                    <p className="about-skills-body">As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                    <p className="about-skills-body">We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </div>
            </section>
        </main>
    )
}