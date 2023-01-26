import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollComponent(){
    const {pathname} = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])
}