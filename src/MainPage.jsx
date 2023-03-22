import React from 'react'
import './styles/Main.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Main() {

   

  return (

    <div className="App">
    <Navbar/>

<div className="main-container">
    <div className="present">
            <div className="text">
                <h1>Opanuj wszystkie słówka z matematyki po angielsku!</h1>
                <h2>Dzięki zadaniom łatwo przyswoisz nowe słówka</h2>
                <button><Link to='/Kategorie'>Zacznij teraz</Link></button>
             </div>
    </div>
    <div className="panel-container">
        <div className='panel'>
            <img className='demo' src="../images/ripples.png" alt="" />
            <div className='logo'><img src="./images/LOGO.svg" alt="" /></div>
            <div>
                <p>Zobacz, dlaczego uczniowie i nauczyciele kochają naukę z nami.</p>
                <button><Link to='/Kategorie'>Zacznij teraz</Link></button>
            </div>
    
        </div>

    </div>
</div>
    </div>
  )
}

export default Main
