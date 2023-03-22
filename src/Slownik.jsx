import React from "react"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import SlownikGen from "./SlownikGen"
import Navbar from "./Navbar"
import "./styles/slownik.css"
function Slownik(){
    const location = useLocation()
    const [words,setWords]=useState([])
    function fetchAPISlowa(apiLink){
        fetch(apiLink)
        .then(res => res.json())
        .then(data =>setWords(Object.values(data)))
    
    }
    
    useEffect(() => {
        fetchAPISlowa("http://localhost:5173/api/words/" + location.state)
      }, []);
    
    return(
        <>
        <Navbar/>
        <div id="main-container">
       <SlownikGen words={words}/>
       </div>
       </>
    )
}
export default Slownik