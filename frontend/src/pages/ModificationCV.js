import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import{creationCaracteristique, creationCaracteristiqueInterets, creationExperience, creationObjetCaracteristiques, creationCaracteristiqueModification} from "./functions/fonctionsFormulaire";
import Navigation from "../components/Navigation";
import { useCookies } from 'react-cookie';

const ModificationCV = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const[image, setImage] = useState();
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
    const[id, setId] = useState();

    const[reponse,setReponse] = useState();
    const[reponseAdresse,setReponseAdresse] = useState();
    const[reponseDonneesFichier,setReponseDonneesFichier] = useState();
    const[reponseMail,setReponseMail] = useState();
    const[reponseNaissance,setReponseNaissance] = useState();
    const[reponseNom,setReponseNom] = useState();
    const[reponsePrenom,setReponsePrenom] = useState();
    const[reponseProfil,setReponseProfil] = useState();
    const[reponseTelephone,setReponseTelephone] = useState();

    function recevoirDonnees(){
        axios.get("http://127.0.0.1:8000/api/profile", {
            headers: {
                'Authorization': "Bearer "+cookies.token
              }
        })
        .then((response)=>{
            setId(response.data);
            axios.get("http://127.0.0.1:8000/api/modificationcv/"+response.data, {
                headers: {
                    'Authorization': "Bearer "+cookies.token
                  }
            })
            .then((result)=>{
                setImage(result.data.image);
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
        })
        .catch((error)=>{})
    }

    useEffect(()=>{
        recevoirDonnees();
    },[]);

    function creationDonneesFichier(){
        let donneesFichier = document.querySelector(".image").files[0];
        let image = document.querySelector(".image").value;
        let prenom = document.querySelector(".prenom").value;
        let nom = document.querySelector(".nom").value;
        let mail = document.querySelector(".mail").value;
        let telephone = document.querySelector(".telephone").value;
        let adresse = document.querySelector(".adresse").value;
        let naissance = document.querySelector(".naissance").value;
        let langues = JSON.stringify(creationObjetCaracteristiques(".langues"));
        let qualites = JSON.stringify(creationObjetCaracteristiques(".qualites"));
        let interets = JSON.stringify(creationObjetCaracteristiques(".interets"));
        let profil = document.querySelector(".profil").value;
        let experiences = JSON.stringify(creationObjetCaracteristiques(".experiences"));
        let formations = JSON.stringify(creationObjetCaracteristiques(".formations"));
        let competences = JSON.stringify(creationObjetCaracteristiques(".competences"));

        const data = new FormData();
        data.append('donneesFichier', donneesFichier);
        data.append('image', image);
        data.append('prenom', prenom);
        data.append('nom', nom);
        data.append('mail', mail);
        data.append('telephone', telephone);
        data.append('adresse', adresse);
        data.append('naissance', naissance);
        data.append('langues', langues);
        data.append('qualites', qualites);
        data.append('interets', interets);
        data.append('profil', profil);
        data.append('experiences', experiences);
        data.append('formations', formations);
        data.append('competences', competences);

        return data;
    }

    function messageValidation(){
        setReponse(<p className="messageValidation">Modification CV reussi</p>)
        setReponseAdresse();
        setReponseDonneesFichier();
        setReponseMail();
        setReponseNaissance();
        setReponseNom();
        setReponsePrenom();
        setReponseProfil();
        setReponseTelephone();
    }
  
    function messageErreur(error){
        setReponse(<p className="messageErreur">Echec modification CV</p>)
        if(error.response.data.adresse){
            setReponseAdresse(<p className="messageErreurInput">{error.response.data.adresse}</p>)
        }else{
            setReponseAdresse()
        }if(error.response.data.donneesFichier){
          setReponseDonneesFichier(<p className="messageErreurInput">{error.response.data.donneesFichier}</p>)
        }else{
          setReponseDonneesFichier()
        }if(error.response.data.mail){
          setReponseMail(<p className="messageErreurInput">{error.response.data.mail}</p>)
        }else{
          setReponseMail()
        }if(error.response.data.naissance){
          setReponseNaissance(<p className="messageErreurInput">{error.response.data.naissance}</p>)
        }else{
          setReponseNaissance()
        }if(error.response.data.nom){
          setReponseNom(<p className="messageErreurInput">{error.response.data.nom}</p>)
        }else{
          setReponseNom()
        }if(error.response.data.prenom){
          setReponsePrenom(<p className="messageErreurInput">{error.response.data.prenom}</p>)
        }else{
          setReponsePrenom()
        }if(error.response.data.profil){
          setReponseProfil(<p className="messageErreurInput">{error.response.data.profil}</p>)
        }else{
          setReponseProfil()
        }if(error.response.data.telephone){
          setReponseTelephone(<p className="messageErreurInput">{error.response.data.telephone}</p>)
        }else{
          setReponseTelephone()
        }
    }

    function envoiDonneesModification(id){

        axios.post("http://127.0.0.1:8000/api/cv/"+id, creationDonneesFichier(), {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': "Bearer "+cookies.token
            }
        })
          .then(function (response) {
            messageValidation()
          })
          .catch(function (error) {
            messageErreur(error)
          });
    }

    function suppressionDonnees(id){

        axios.post("http://127.0.0.1:8000/api/suppression/"+id, creationDonneesFichier(), {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': "Bearer "+cookies.token
            }
        })
          .then(function (response) {
            setReponse(<p className="messageValidation">Modification CV reussi</p>);
          })
          .catch(function (error) {
            setReponse(<p className="messageErreur">Echec suppression CV</p>);
          });
    }
    
    return (
        <div className="divModification">
            <Navigation/>
            {reponse}
            <form>
            <label className="labelImage" for="image">Choisir une image</label>
            {reponseDonneesFichier}
            <input type="file" id="image" name="image" className="image"></input>
            <label for="prenom">Prenom</label>
            {reponsePrenom}
            <input name="prenom" className="prenom" defaultValue={prenom}></input>
            <label for="nom">Nom</label>
            {reponseNom}
            <input name="nom" className="nom" defaultValue={nom}></input>
            <label for="mail">Mail</label>
            {reponseMail}
            <input name="mail" className="mail" defaultValue={mail}></input>
            <label for="telephone">Numero de telephone</label>
            {reponseTelephone}
            <input name="telephone" className="telephone" defaultValue={telephone}></input>
            <label for="adresse">Adresse</label>
            {reponseAdresse}
            <input name="adresse" className="adresse" defaultValue={adresse}></input>
            <label for="naissance">Date de naissance</label>
            {reponseAdresse}
            <input name="naissance" className="naissance" defaultValue={naissance}></input>
            <label for="langues">Langues</label>
            <button onClick={event => {event.preventDefault(); creationCaracteristique(".langues")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="langues">
                    {langues.map((resultat)=>{
                        return(
                        <div className="listeCaracteristiques">
                            <i className="fas suppCaracteristique fa-solid fa-plus" onClick={(e)=>{
                                e.target.parentElement.remove()
                            }}></i>
                            <input className="nomCaracteristique" placeholder="langue" defaultValue={resultat.nom}></input>
                            <input className="contenuCaracteristique" type="range" step="1" defaultValue={resultat.contenu} style={{background:"linear-gradient(90deg, #03a9f4 "+resultat.contenu+"%, white 0%)"}} onChange={(e)=>{
                                e.target.style.background = "linear-gradient(90deg, rgb(3, 169, 244) "+e.target.value+"%, white 0%)";
                            }}></input>
                        </div>
                        )
                    })}
            </div>
            <label for="qualites">Qualites</label>
            <button onClick={event => {event.preventDefault(); creationCaracteristique(".qualites")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="qualites">
                    {qualites.map((resultat)=>{
                        return(
                        <div className="listeCaracteristiques">
                            <i className="fas suppCaracteristique fa-solid fa-plus" onClick={(e)=>{
                                e.target.parentElement.remove()
                            }}></i>
                            <input className="nomCaracteristique" placeholder="qualite" defaultValue={resultat.nom}></input>
                            <input className="contenuCaracteristique" type="range" step="1" defaultValue={resultat.contenu} style={{background:"linear-gradient(90deg, #03a9f4 "+resultat.contenu+"%, white 0%)"}} onChange={(e)=>{
                                e.target.style.background = "linear-gradient(90deg, rgb(3, 169, 244) "+e.target.value+"%, white 0%)";
                            }}></input>
                        </div>
                        )
                    })}
            </div>
            <label for="interets">Centres d'interets</label>
            <button onClick={event => {event.preventDefault(); creationCaracteristiqueInterets(".interets")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="interets">
                    {interets.map((resultat)=>{
                        return(
                        <div className="listeCaracteristiques">
                            <i className="fas suppCaracteristique fa-solid fa-plus" onClick={(e)=>{
                                e.target.parentElement.remove()
                            }}></i>
                            <input className="contenuCaracteristique" placeholder="interet" defaultValue={resultat.nom}></input>
                        </div>
                        )
                    })}
            </div>
            <label for="profil">Profil</label>
            {reponseProfil}
            <textarea name="profil" className="profil" defaultValue={profil}></textarea>
            <label for="experiences">Experiences</label>
            <button onClick={event => {event.preventDefault(); creationExperience(".experiences")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="experiences">
                    {experiences.map((resultat)=>{
                        return(
                        <div className="listeCaracteristiques">
                            <i className="fas suppCaracteristique fa-solid fa-plus" onClick={(e)=>{
                                e.target.parentElement.remove()
                            }}></i>
                            <input className="nomCaracteristique" placeholder="entreprise" defaultValue={resultat.nom}></input>
                            <input className="contenuCaracteristique" placeholder="poste" defaultValue={resultat.contenu}></input>
                            <input className="dateCaracteristique" placeholder="debut/fin" defaultValue={resultat.date}></input>
                        </div>
                        )
                    })}
            </div>
            <label for="formations">Formations</label>
            <button onClick={event => {event.preventDefault(); creationExperience(".formations")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="formations">
                    {formations.map((resultat)=>{
                        return(
                        <div className="listeCaracteristiques">
                            <i className="fas suppCaracteristique fa-solid fa-plus" onClick={(e)=>{
                                e.target.parentElement.remove()
                            }}></i>
                            <input className="nomCaracteristique" placeholder="organisme" defaultValue={resultat.nom}></input>
                            <input className="contenuCaracteristique" placeholder="type de formation" defaultValue={resultat.contenu}></input>
                            <input className="dateCaracteristique" placeholder="debut/fin" defaultValue={resultat.date}></input>
                        </div>
                        )
                    })}
            </div>
            <label for="competences">Competences</label>
            <button onClick={event => {event.preventDefault(); creationCaracteristique(".competences")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="competences">
                    {competences.map((resultat)=>{
                        return(
                        <div className="listeCaracteristiques">
                            <i className="fas suppCaracteristique fa-solid fa-plus" onClick={(e)=>{
                                e.target.parentElement.remove()
                            }}></i>
                            <input className="nomCaracteristique" placeholder="competence" defaultValue={resultat.nom}></input>
                            <input className="contenuCaracteristique" type="range" step="1" defaultValue={resultat.contenu} style={{background:"linear-gradient(90deg, #03a9f4 "+resultat.contenu+"%, white 0%)"}} onChange={(e)=>{
                                e.target.style.background = "linear-gradient(90deg, rgb(3, 169, 244) "+e.target.value+"%, white 0%)";
                            }}></input>
                        </div>
                        )
                    })}
            </div>
            <div className="modifierSupprimer">
                <button className="modifier" onClick={event =>{event.preventDefault(); envoiDonneesModification(id)}}>Modifier</button>
                <button className="supprimer" onClick={event =>{event.preventDefault(); suppressionDonnees(id)}}>Supprimer</button>
            </div>
        </form>
        </div>
    )
}

export default ModificationCV;