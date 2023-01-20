import React from "react";
import "../css/redirectcontact.css"
import Button from "./Button";

export default function redirectContact(){
    return (
        <div className="redirect-contact">
            <h2 className="redirect-contact-title">Let’s talk about your project</h2>
            <p className="redirect-contact-body">
                Ready to take it to the next level? Contact us today and 
                find out how our expertise can help your business grow.
            </p>
            <Button path="contact" caption="GET IN TOUCH"/>
        </div>
    )
}