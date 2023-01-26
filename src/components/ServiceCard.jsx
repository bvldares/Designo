import React,{useState} from "react";
import "../css/serviceCard.css"

export default function ServiceCard(props){

    const[hovering, setHovering] = useState(false)
    





    return (
        <div className="service-card" onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
            <img className="service-card-img" src={props.img} alt="project img"/>
            <div className="service-card-intro" style={{backgroundColor: hovering ? "#E57E69" : ""}}>
                <h3 className="service-card-title" style={{color: hovering ? "#fff" :""}}>{props.title}</h3>
                <p className="service-card-body" style={{color: hovering ? "#fff" :""}}>{props.body}</p>
            </div>
        </div>
    )
}