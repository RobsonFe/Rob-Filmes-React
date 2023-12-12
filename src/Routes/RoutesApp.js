/* eslint-disable no-unused-vars */


import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import Filme from "../pages/Filme";
import Header from "../components/Header";
import Erro from "../pages/Erro";
import Favorito from "../pages/Favoritos";

function RoutesApp() {
  return (
   
    <BrowserRouter>
     <Header/> 
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/filme/:id" element={ <Filme/> } />
        <Route path="/favoritos" element={ <Favorito /> } />

        <Route path="*" element={ <Erro/> } />
    </Routes>
    </BrowserRouter>
    
  )

}

export default RoutesApp;