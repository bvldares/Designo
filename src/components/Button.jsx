import React from "react";
import "../css/button.css"
import { Link } from "react-router-dom";

export default function Button(props){
    return (
        <Link className="button-link" to={props.path}>{props.caption}</Link>
    )
}