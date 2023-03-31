import React from "react"
function Dopasowanie(props){
    function shuffle(array) {
        let m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }
    
    let lista = [<button onClick={props.check}>{props.words[Math.floor(Math.random()*props.words.length)].pl_word}</button>,
    <button onClick={props.check}>{props.words[Math.floor(Math.random()*props.words.length)].pl_word}</button>,
    <button onClick={props.check}>{props.words[props.slowo].pl_word}</button>]
    shuffle(lista)
    return(
        <>
        <div>
            <div id="dop"><p id="odp_dobra" hidden>{props.words[props.slowo].pl_word}</p> {props.words[props.slowo].en_word}</div>
            <div id="lista">
        {lista}
            </div>
            <div>
                <button id="leave" onClick={props.wyjdz}>Wyjdz</button>
            </div>
                <img className="fire-przed" id="fire" src="./images/fire.png" alt="" />
        </div>
        </>
    )
}
export default Dopasowanie