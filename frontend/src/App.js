import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormulaireCV from "./pages/FormulaireCV";
import ContenuCV from "./pages/ContenuCV";
import RechercheCV from "./pages/RechercheCV";
import ModificationCV from "./pages/ModificationCV";
import InscriptionCV from "./pages/InscriptionCV";
import LoginCV from "./pages/LoginCV";
import Profil from "./pages/Profil";
import Accueil from "./pages/Accueil";

const App=()=>{
    return(
      <BrowserRouter>
      <Routes>
        <Route exact path="/FormulaireCV" element={<FormulaireCV/>}/>
        <Route exact path="/:nom-:id/" element={<ContenuCV/>}/>
        <Route exact path="/RechercheCV" element={<RechercheCV/>}/>
        <Route exact path="/ModificationCV" element={<ModificationCV/>}/>
        <Route exact path="/InscriptionCV" element={<InscriptionCV/>}/>
        <Route exact path="/LoginCV" element={<LoginCV/>}/>
        <Route exact path="/Profil" element={<Profil/>}/>
        <Route exact path="/" element={<Accueil/>}/>
      </Routes>
   </BrowserRouter>
    );
};
export default App;