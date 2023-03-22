import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"
function Navbar()
{
    return(
        <>
        <nav>
            <Link id="bomba" to="/"><img src="./images/LOGO.svg" alt="" /></Link>
            <ul>
                <li><Link to='/'>Strona Główna</Link></li>
                <li><Link to='/Kategorie'>Kategorie</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;