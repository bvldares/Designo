import React from "react";
import { Link } from "react-router-dom";
import canada from "../assets/shared/desktop/illustration-canada.svg"
import australia from "../assets/shared/desktop/illustration-australia.svg"
import unitedkingdom from "../assets/shared/desktop/illustration-united-kingdom.svg"
import "../css/redirectLocation.css"
import { nanoid } from 'nanoid'
export default function redirectLocations(){

    const dataArr = [
        {img:canada, title:"Canada"},
        {img:australia, title:"Australia"},
        {img:unitedkingdom, title:"United Kingdom"}
    ]

    const locationElement = dataArr.map(country =>{
        return (
            <div className="location-office" key={nanoid()}>
                <img className="location-office-img" src={country.img} alt="country icon" />
                <h3 className="location-office-title">{country.title}</h3>
                <Link className="location-office-link" to="/location">See Location</Link>
            </div>
        )
    })

    return (
        <section className="redirect-locations">
            {locationElement}
        </section>
    )
}