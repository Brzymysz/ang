import React from "react"
function Dopasowanie(props){
    function shuffle(array) {
        var m = array.length, t, i;
      
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
    let z = Math.floor(Math.random()*props.words.length)
    let lista = [<button onClick={props.check}>{props.words[Math.floor(Math.random()*props.words.length)].pl_word}</button>,
    <button>{props.words[Math.floor(Math.random()*props.words.length)].pl_word}</button>,
    <button>{props.words[z].pl_word}</button>]
    shuffle(lista)
    return(
        <>
        <div id="dop">
            <div id="dop">{props.words[z].en_word}</div>
            <div>
        {lista}

            </div>
        </div>
        </>
    )
}
export default Dopasowanie