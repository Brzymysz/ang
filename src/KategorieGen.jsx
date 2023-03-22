import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./styles/kategorie.css"
import Navbar from "./Navbar";
function KategorieGen(props){
    let kategorie = props.kategorie.map(item => <div className="kategoria"  onMouseOver={props.createLink}><Link   to='/Zbior' state={props.Link}><p>{item}</p></Link></div>)
    
    return(
    <>
    <Navbar/>
   <div id="main">
        {kategorie}
    </div>
    
    </>
    )}
    export default KategorieGen;