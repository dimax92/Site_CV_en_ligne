import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import{creationCaracteristique, creationCaracteristiqueInterets, creationExperience, creationObjetCaracteristiques} from "./functions/fonctionsFormulaire";
import { useCookies } from 'react-cookie';
import Navigation from "../components/Navigation";

const FormulaireCV = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const[reponse,setReponse] = useState();
    const[reponseAdresse,setReponseAdresse] = useState();
    const[reponseDonneesFichier,setReponseDonneesFichier] = useState();
    const[reponseMail,setReponseMail] = useState();
    const[reponseNaissance,setReponseNaissance] = useState();
    const[reponseNom,setReponseNom] = useState();
    const[reponsePrenom,setReponsePrenom] = useState();
    const[reponseProfil,setReponseProfil] = useState();
    const[reponseTelephone,setReponseTelephone] = useState();

    function creationDonneesFichier(id){
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
        data.append('user_id', id);
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
      setReponse(<p className="messageValidation">Creation CV reussi</p>)
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
      setReponse(<p className="messageErreur">Echec creation CV</p>)
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

    function envoiDonnees(){
        axios.get("http://127.0.0.1:8000/api/profile", {
            headers: {
                'Authorization': "Bearer "+cookies.token
              }
        })
          .then(function (response) {
            axios.post("http://127.0.0.1:8000/api/formulairecv/"+response.data, creationDonneesFichier(response.data), {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': "Bearer "+cookies.token
                }
            })
              .then(function (response) {
                messageValidation();
              })
              .catch(function (error) {
                messageErreur(error);
              });
          })
          .catch(function (error) {
          });
    }

    return (
        <div className="divFormulaire">
        <Navigation/>
        {reponse}
        <form>
            <label className="labelImage" for="image">Choisir une image</label>
            {reponseDonneesFichier}
            <input type="file" id="image" name="image" className="image"></input>
            <label for="prenom">Prenom</label>
            {reponsePrenom}
            <input name="prenom" className="prenom"></input>
            <label for="nom">Nom</label>
            {reponseNom}
            <input name="nom" className="nom"></input>
            <label for="mail">Mail</label>
            {reponseMail}
            <input name="mail" className="mail"></input>
            <label for="telephone">Numero de telephone</label>
            {reponseTelephone}
            <input name="telephone" className="telephone"></input>
            <label for="adresse">Adresse</label>
            {reponseAdresse}
            <input name="adresse" className="adresse"></input>
            <label for="naissance">Date de naissance</label>
            {reponseNaissance}
            <input name="naissance" className="naissance"></input>
            <label for="langues">Langues</label>
            <button onClick={event => {event.preventDefault(); creationCaracteristique(".langues")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="langues"></div>
            <label for="qualites">Qualites</label>
            <button onClick={event => {event.preventDefault(); creationCaracteristique(".qualites")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="qualites"></div>
            <label for="interets">Centres d'interets</label>
            <button onClick={event => {event.preventDefault(); creationCaracteristiqueInterets(".interets")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="interets"></div>
            <label for="profil">Profil</label>
            {reponseProfil}
            <textarea name="profil" className="profil"></textarea>
            <label for="experiences">Experiences</label>
            <button onClick={event => {event.preventDefault(); creationExperience(".experiences")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="experiences"></div>
            <label for="formations">Formations</label>
            <button onClick={event => {event.preventDefault(); creationExperience(".formations")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="formations"></div>
            <label for="competences">Competences</label>
            <button onClick={event => {event.preventDefault(); creationCaracteristique(".competences")}}>
              <i className="fas fa-solid fa-plus"></i>
            </button>
            <div className="competences"></div>
            <button class="envoyer" onClick={event =>{event.preventDefault(); envoiDonnees()}}>Mettre en ligne</button>
        </form>
        </div>
    )
}

export default FormulaireCV;