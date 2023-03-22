import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
function SlownikGen(props)
{
    let slowka = props.words.map(item => <div className="definition-container"><div className="words-container"><p className="word">{item.pl_word} - {item.en_word}</p> </div><button onClick={()=>{
        const utterrance = new SpeechSynthesisUtterance(item.en_word)
        utterrance.lang = "en"
        utterrance.rate = 0.8
        speechSynthesis.speak(utterrance)
    
    
    }}> <FontAwesomeIcon icon={faVolumeHigh} size="xl" color="#202b53"/> </button></div>)
    return(
        <>
        {slowka}
        </>
    )
}
export default SlownikGen