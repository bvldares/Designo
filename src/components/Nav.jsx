import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../css/nav.css"
import logoDark from "../assets/shared/desktop/logo-dark.png"
import hamburger from "../assets/shared/mobile/icon-hamburger.svg"
import close from "../assets/shared/mobile/icon-close.svg"

export default function Nav(){
    const[open, setOpen] = useState(false)
    const style = {transform : open? "translateY(0)" : ""}

    return (
        <nav>
            <Link to="/"><img className="nav-logo" src={logoDark} alt="logo" /></Link>
            <ul className="nav-list" style={style}>
                <li className="nav-list-item"><Link className="nav-links" to="/about">OUR COMPANY</Link></li>
                <li className="nav-list-item"><Link className="nav-links" to="/location">LOCATIONS</Link></li>
                <li className="nav-list-item"><Link className="nav-links" to="/contact">CONTACT</Link></li>
            </ul>
            
            <img src={open ? close : hamburger} 
                onClick={()=>setOpen(p => !p)} 
                alt="toggle menu icons" 
                className="toggle-icon"
            />
        </nav>
    )
}