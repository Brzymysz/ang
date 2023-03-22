import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import "./styles/Zbior.css"
function Zbior(props){
    const location = useLocation()
return(
    <>
    <Navbar/>

        <div className="second-container">
            <div>
                <h1>{location.state}</h1>
            </div>
            <div>
                <button className="menu-btn"><Link to="/Fiszki" state={location.state}>Fiszki</Link></button>
                <button className="menu-btn"><Link to="/Zadania" state={location.state}>Zadania</Link></button>
                <button className="menu-btn"><Link to="/Slownik" state={location.state}>Słownik</Link></button>
            </div>
                
        </div>
        </>
    )
}

export default Zbior;