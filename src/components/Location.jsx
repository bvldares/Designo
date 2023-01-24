import React from "react";
import "../css/location.css"
import canada from "../assets/locations/tablet/image-map-canada.png"
import australia from "../assets/locations/tablet/image-map-australia.png"
import uk from "../assets/locations/tablet/image-map-uk.png"



export default function Location(){

    const locationData = [
        {img:canada, country:"Canada", officeName:"Designo Central Office", officeAddress:"3886 Wellington Street", city: "Toronto, Ontario M9C 3J5", phoneNumber:"+1 253-863-8967", email:"contact@designo.co"},
        {img:australia, country:"Australia", officeName:"Designo AU Office", officeAddress:"19 Balonne Street", city: "New South Wales 2443", phoneNumber:"(02) 6720 9092", email:"contact@designo.au"},
        {img:uk, country:"UnitedKingdom", officeName:"Designo UK Office", officeAddress:"13  Colorado Way", city: "Rhyd-y-fro SA8 9GA", phoneNumber:"078 3115 1400", email:"contact@designo.uk"}
    ]
    
    const locationElement = locationData.map(location =>{
        return (
            <div className="office" >
                <img src={location.img} id={location.country} alt="map of the office" />
                <div className="office-info">
                    <h1 className="office-info-title">{location.country}</h1>
                    <div className="office-intro-meta">
                        <p className="office-info-address">
                            <span>{location.officeName}</span> <br />
                            {location.officeAddress} <br />
                            {location.city}
                        </p>
                        <p className="office-info-address">
                            <span>Contact</span> <br />
                            P: {location.phoneNumber} <br />
                            M: {location.email} 
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <main className="location">
            {locationElement}
        </main>
    )
}