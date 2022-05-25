import React, {useState, useEffect} from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

const RechercheCV = () => {
    const[data, setData] = useState([]);

    function recevoirDonnees(){
        axios.get("http://127.0.0.1:8000/api/cv")
        .then((result)=>{
            setData(result.data);
        })
        .catch((error)=>{})
    };

    function remplacementEspacesTirets(espaces){
        let espacesSplit=espaces.split(" ");
        let nouveauEspaces=[];
        for(let i=0; i<=espacesSplit.length-1; i++){
            if(espacesSplit[i]!==""){
                nouveauEspaces.push(espacesSplit[i]);
            }
        };
        return nouveauEspaces.join("-");
    };

    function rechercheDonnees(recherche){
        axios.get("http://127.0.0.1:8000/api/search/"+recherche)
        .then((result)=>{
            setData(result.data);
        })
        .catch((error)=>{})
    };

    useEffect(()=>{recevoirDonnees()},[]);

    return (
        <div className="divRecherche">
            <Navigation/>
            <form>
                <input className="inputRecherche" type="text"></input>
                <button onClick={(e)=>{
                    e.preventDefault();
                    rechercheDonnees(remplacementEspacesTirets(document.querySelector(".inputRecherche").value));
                }}>Rechercher</button>
            </form>
            <div className="divMap">
                {data.map((resultat)=>{
                    return(
                        <a href={remplacementEspacesTirets(resultat.prenom+" "+resultat.nom)+"-"+resultat.id}>
                            <p>{resultat.prenom} {resultat.nom}</p>
                            <img src={"http://127.0.0.1:8000/api/image/"+resultat.id} width="100px"></img>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default RechercheCV;