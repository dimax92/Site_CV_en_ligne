import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useCookies } from 'react-cookie';
const Navigation=()=>{
    const [cookies, setCookie, removeCookie] = useCookies();
    const[reponse, setReponse] = useState();

    function deconnexion(){
        axios.post("http://127.0.0.1:8000/api/logout",{
            data: {
                nom: "popo"
            }}, {
            headers: {
                "Authorization": "Bearer "+cookies.token
              }
        })
          .then(function (response) {
              setReponse(<p className="messageValidation">Deconnexion reussi</p>);
              document.location.href='http://localhost:3000/';
          })
          .catch(function (error) {
            setReponse(<p className="messageErreur">Echec deconnexion</p>)
          });
    }

    const[navigation, setNavigation]= useState(
        <div className="nav">
            <NavLink className="navigation" activeClassName="nav-active" exact to="/LoginCV">
                Connexion
            </NavLink>
            <NavLink className="navigation" activeClassName="nav-active" exact to="/InscriptionCV">
                Inscription
            </NavLink>
            <NavLink className="navigation" activeClassName="nav-active" exact to="/RechercheCV">
                Recherche
            </NavLink>
        </div>
    );

    function testConnexion(){
        axios.get("http://127.0.0.1:8000/api/profile", {
            headers: {
                'Authorization': "Bearer "+cookies.token
              }
        })
          .then(function (response) {
            setNavigation(
                <div className="nav">
                    <NavLink className="navigation" activeClassName="nav-active" exact to="/FormulaireCV">
                        Creer son CV
                    </NavLink>
                    <NavLink className="navigation" activeClassName="nav-active" exact to="/ModificationCV">
                        Mon CV
                    </NavLink>
                    <NavLink className="navigation" activeClassName="nav-active" exact to="/Profil">
                        Profil
                    </NavLink>
                    <NavLink className="navigation" activeClassName="nav-active" exact to="/RechercheCV">
                        Recherche
                    </NavLink>
                    <button 
                    onClick={(e)=>{
                        deconnexion();
                    }}
                    >Deconnexion</button>
                </div>
                  )
          })
          .catch(function (error) {
          });
    }

    useEffect(()=>{
        testConnexion();
       },[]);
    
    return (
        <div className="navigationSup">
            {navigation}
            {reponse}
        </div>
    );
};
export default Navigation;