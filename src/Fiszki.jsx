import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import './styles/Fiszki.css'
function Fiszki(){
    const [words,setWords]=useState([])
    const [wordId,setWordId]=useState(0)
    let location = useLocation()
    useEffect(() => {
        function fetchAPISlowa(apiLink){
            fetch(apiLink)
            .then(res => res.json())
            .then(data =>setWords(Object.values(data)))
        
        }
        fetchAPISlowa("http://localhost:5173/api/words/" + location.state)
      }, []);
      useEffect(()=>{
        
            if(wordId==0)
            {
                document.getElementById('prev').setAttribute('disabled','')
            }
            else{
                document.getElementById('prev').removeAttribute('disabled','')
            }

            if(wordId==words.length-1)
            {
                document.getElementById('next').setAttribute('disabled','')
            }
            else{
                document.getElementById('next').removeAttribute('disabled','')
            }
      })
    function nextWord()
    {
        if(wordId<words.length-1)
        {
        setWordId(wordId+1)
        console.log(wordId)
        }
        else
        {

        }
    }
    function previousWord()
    {
        if(wordId>=1)
        {
            setWordId(wordId-1)
            console.log(wordId)
        }
        else
        {
            
        }
        }
    
        let ang = true
    return(
        <>
        <Navbar/>
        <div id="render-container">
            <div id="title-container">
            <h1 id="title">{location.state}</h1>
            </div>
            <div id="fiszka-container"
           >
                <div id="change"  onClick={()=>{
                setTimeout(()=>{                if(ang==true)
                    {
                        document.getElementById('slowko').innerHTML = words[wordId]?.pl_word
                        ang = false
                    }
                    else
                    {
                        document.getElementById('slowko').innerHTML = words[wordId]?.en_word
                        ang = true 
                    }},200)


                document.getElementById('fiszka-container').classList.add('flip')
                setTimeout(()=>document.getElementById('fiszka-container').classList.remove('flip'),500)
                
                
            }} >
                <p id="slowko">{words[wordId]?.en_word}</p>
                </div>
                <div id="btn-container" >
                <button  id="prev" onClick={previousWord}>Poprzednie</button>
                <button id="next" onClick={nextWord}>Następne</button>
                </div>
                <div id="counter">{wordId+1}/{words.length}</div>

            </div>
        </div>
        </>
    )
    
}
export default Fiszki;