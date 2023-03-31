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
    const [slowo,setSlowo]=useState(Math.floor(Math.random()*words.length))
    let bomba =[]
    function fetchAPISlowa(apiLink){
        fetch(apiLink)
        .then(res => res.json())
        .then(data =>{setWords(Object.values(data))})
    }
    function wyjdz(){
        setToggle(!toggle)
        setStart(!start)
    }
    function check(e){
        if(e.target.innerHTML == document.getElementById('odp_dobra').innerHTML)
        {
            console.log('dobrze')
            document.getElementById('fire').classList.add('fire_anim')
                setTimeout(()=>document.getElementById('fire').classList.remove('fire_anim'),490)
        }
        else{
            console.log('źle')

        }
        setSlowo(Math.floor(Math.random()*words.length))
    }

    useEffect(() => {
        
        fetchAPISlowa("http://localhost:5173/api/words/" + location.state)
        
      }, []);
    
    return(
        <>
        <Navbar/>
        <div id="game">
            {start && <button onClick={()=>{
                setToggle(!toggle)
                setStart(!start)
            }}>Start</button>}
            {toggle && <Dopasowanie wyjdz={wyjdz} words={words} check={check} slowo={slowo}/>  }
        </div>
        
        </>
   )
}
export default Zadania