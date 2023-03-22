import React from "react";
import { useState,useEffect } from "react";
import "./styles/Slowa.css"
import KategorieGen from "./KategorieGen";
function Kategorie(){
    const [categories,setCategories]=useState([])
    const [kongo,setKongo]=useState()
    
    const cat = "http://localhost:5173/api/categories"
    function fetchAPI(apiLink)
    {
        fetch(apiLink)
        .then(res => res.json())
        .then(data => setCategories(Object.values(data)).sort)
    }
    function CreateLink(e)
    {
        let categoryName = e.target.textContent
        setKongo(categoryName)
    }
    useEffect(() => {
        fetchAPI(cat)
      }, []);

    return(
        <>
        <KategorieGen Link={kongo} createLink={CreateLink} kategorie={categories}/>
        </>
    )
}
   

export default Kategorie