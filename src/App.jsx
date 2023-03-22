import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./MainPage";
import Kategorie from "./Kategorie";
import Slownik from "./Slownik"
import Fiszki from "./Fiszki"
import Zbior from "./Zbior"
import Zadania from "./Zadania";
function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Main/>}> </Route>
            <Route path="/Kategorie" element={<Kategorie/>}></Route>
            <Route path="/Slownik" element={<Slownik/>}></Route>
            <Route path="/Fiszki" element={<Fiszki/>}></Route>
            <Route path="/Zbior" element={<Zbior/>}> </Route>
            <Route path="/Zadania" element={<Zadania/>}></Route>

        </Routes>
        </>
    )
}
export default App