import React from "react";
import logoLight from "../assets/shared/desktop/logo-dark.png"
export default function Footer(){
    return (
        <footer>
            <div className="footer-navigation">
                <img className="logo-dark" src={logoLight} alt="logo" />
                <ul className="footer-list">
                <li className="footer-list-item"><Link className="footer-links" to="/company">OUR COMPANY</Link></li>
                <li className="footer-list-item"><Link className="footer-links" to="/location">LOCATIONS</Link></li>
                <li className="footer-list-item"><Link className="footer-links" to="/contact">CONTACT</Link></li>
            </ul>
            </div>
        </footer>
    )
}