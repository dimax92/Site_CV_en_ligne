import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";

const ContenuCV = () => {
    const[nomImage, setNomImage] = useState();
    const[adresse, setAdresse] = useState();
    const[competences, setCompetences] = useState([]);
    const[experiences, setExperiences] = useState([]);
    const[formations, setFormations] = useState([]);
    const[interets, setInterets] = useState([]);
    const[langues, setLangues] = useState([]);
    const[mail, setMail] = useState();
    const[naissance, setNaissance] = useState();
    const[nom, setNom] = useState();
    const[prenom, setPrenom] = useState();
    const[profil, setProfil] = useState();
    const[qualites, setQualites] = useState([]);
    const[telephone, setTelephone] = useState();

    let { id } = useParams();

    function recevoirDonnees(id){
        axios.get("http://127.0.0.1:8000/api/cv/"+id)
        .then((result)=>{
            setNomImage(result.data.nomimage);
            setAdresse(result.data.adresse);
            setCompetences(JSON.parse(result.data.competences));
            setExperiences(JSON.parse(result.data.experiences));
            setFormations(JSON.parse(result.data.formations));
            setInterets(JSON.parse(result.data.interets));
            setLangues(JSON.parse(result.data.langues));
            setMail(result.data.mail);
            setNaissance(result.data.naissance);
            setNom(result.data.nom);
            setPrenom(result.data.prenom);
            setProfil(result.data.profil);
            setQualites(JSON.parse(result.data.qualites));
            setTelephone(result.data.telephone);
        })
        .catch((error)=>{})
    }

    useEffect(()=>{
        recevoirDonnees(id);
    },[]);
    
    return (
        <div className="divContenu">
            <Navigation/>
            <h1>{prenom} {nom}</h1>
            <img src={"http://127.0.0.1:8000/api/image/"+id}></img>
            <h2>Mail</h2>
            <p>{mail}</p>
            <h2>Numero de telephone</h2>
            <p>{telephone}</p>
            <h2>Adresse</h2>
            <p>{adresse}</p>
            <h2>Date de naissance</h2>
            <p>{naissance}</p>
            <div className="langues">
                <h2>Langues</h2>
                        {langues.map((resultat)=>{
                            return(
                                <div className="divCaracteristique">
                                    <p className="nomCaracteristique">{resultat.nom}</p>
                                    <div className="divJauge" style={{background:"linear-gradient(90deg, #03a9f4 "+resultat.contenu+"%, white 0%)"}}></div>
                                </div>
                            )
                        })}
            </div>
            <div className="qualites">
                <h2>Qualites</h2>
                        {qualites.map((resultat)=>{
                            return(
                                <div className="divCaracteristique">
                                    <p className="nomCaracteristique">{resultat.nom}</p>
                                    <div className="divJauge" style={{background:"linear-gradient(90deg, #03a9f4 "+resultat.contenu+"%, white 0%)"}}></div>
                                </div>
                            )
                        })}
            </div>
            <div className="interets">
                <table>
                    <thead>
                        <tr>
                            <th colspan="1">
                                <h2>Interets</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {interets.map((resultat)=>{
                            return(
                                <tr>
                                    <td>{resultat.nom}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <h2>Profil</h2>
            <p>{profil}</p>
            <div className="experiences">
                <h2>Exeriences</h2>
                        {experiences.map((resultat)=>{
                            return(
                                <div className="divCaracteristique">
                                    <p className="nomCaracteristique">{resultat.nom}</p>
                                    <p>{resultat.contenu}</p>
                                    <p>{resultat.date}</p>
                                </div>
                            )
                        })}
            </div>
            <div className="formations">
                <h2>Formations</h2>
                        {formations.map((resultat)=>{
                            return(
                                <div className="divCaracteristique">
                                    <p className="nomCaracteristique">{resultat.nom}</p>
                                    <p>{resultat.contenu}</p>
                                    <p>{resultat.date}</p>
                                </div>
                            )
                        })}
            </div>
            <div className="competences">
                <h2>Competences</h2>
                        {competences.map((resultat)=>{
                            return(
                                <div className="divCaracteristique">
                                    <p className="nomCaracteristique">{resultat.nom}</p>
                                    <div className="divJauge" style={{background:"linear-gradient(90deg, #03a9f4 "+resultat.contenu+"%, white 0%)"}}></div>
                                </div>
                            )
                        })}
            </div>
        </div>
    )
}

export default ContenuCV;