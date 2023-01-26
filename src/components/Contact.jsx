import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../css/contact.css"
import RedirectLocations from "./RedirectLocations";



export default function Contact(){

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")


    function handleNameChange(event){ setName(event.target.value)}
    function handleMailChange(event){ setMail(event.target.value)}
    function handlePhoneChange(event){ setPhone(event.target.value)}
    function handleMessageChange(event){ setMessage(event.target.value)}
    

    return(
        <main className="contact">
            <div className="contact-wrapper">
                <div className="contact-intro">
                    <h1 className="contact-intro-title">Contact Us</h1>
                    <p className="contact-intro-body">
                    Ready to take it to the next level? Let’s talk about 
                    your project or idea and find out how we can help your business grow.
                    If you are looking for unique digital experiences that’s relatable 
                    to your users, drop us a line.
                    </p>
                </div>
                
                <form className="contact-form">
                    <input type="text" className="contact-form-input" placeholder="Name" value={name} required onChange={handleNameChange} />
                    <input type="mail" className="contact-form-input" placeholder="Email Address" value={mail} required onChange={handleMailChange} />
                    <input type="text" maxLength="12" className="contact-form-input" placeholder="Phone" value={phone} required onChange={handlePhoneChange} />
                    <textarea className="contact-form-input" maxLength="140" value={message}  onChange={handleMessageChange} required placeholder="Message"/>
                    <button className="contact-form-btn">Submit</button>
                </form>
                
            </div>

            <RedirectLocations />
            
        </main>
        
    )
}