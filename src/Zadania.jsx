import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./styles/Zadania.css"
import Dopasowanie from "./Dopasowanie";
function Zadania()
{
    const location = useLocation()
    const [words,setWords]=useState([])
    const [toggle,setToggle]=useState(false)
    const [start,setStart]=useState(true)
    let bomba =[]
    function fetchAPISlowa(apiLink){
        fetch(apiLink)
        .then(res => res.json())
        .then(data =>{setWords(Object.values(data))})
    }
    function check(){
    
    }

    useEffect(() => {
        
        fetchAPISlowa("http://localhost:5173/api/words/" + location.state)
        
      }, []);
    
      console.log(bomba)
    return(
        <>
        <Navbar/>
        <div id="game">
            {start && <button onClick={()=>{
                setToggle(!toggle)
                setStart(!start)
            }}>Start</button>}
            {toggle && <Dopasowanie words={words} check={check}/>  }
        </div>
        
        </>
   )
}
export default Zadania