import React from "react";
import Navigation from "../components/Navigation";

const Accueil = () => {
    
    return(
        <div className="divAccueil">
        <Navigation/>
        <h1>Bienvenue sur Cuvi.com</h1>
        <h2>Inscription</h2>
        <p>
            Pour vous inscrire il faut cliquer sur "Inscription" 
            dans la barre de navigation en haut de la page. Ensuite 
            vous aurez acces a un formulaire d'inscription. Vous 
            devez remplir le champ "Pseudo" avec un pseudonyme, le 
            champ "Email" avec votre adresse mail et le champ "Mot de passe" 
            avec un mot de passe (votre mot de passe doit contenir un minimum 
            de 8 caracteres, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractere 
            speciale). Une fois que vous avez rempli tous les champs 
            vous devez cliquer sur le bouton "S'inscrire".
        </p>
        <h2>Connexion</h2>
        <p>
            Pour vous connecter il faut cliquer sur "Connexion" 
            dans la barre de navigation en haut de la page. Ensuite 
            vous aurez acces a un formulaire de connexion. Vous 
            devez remplir le champ "Email" avec votre adresse mail et le champ 
            "Mot de passe" avec votre mot de passe. Une fois que vous avez rempli 
            tous les champs vous devez cliquer sur le bouton "Se connecter".
        </p>
        <h2>Creer son CV</h2>
        <p>
            Pour creer son CV il faut cliquer sur "Creer son CV" 
            dans la barre de navigation en haut de la page. Ensuite vous 
            aurez acces un un formulaire de mise en ligne de votre CV. 
            Cliquer sur le lien "Choisir une image" pour choisir un fichier 
            image (seul les extensions jpeg, bmp et png). Remplissez le champ 
            "Prenom" avec votre prenom, le champ "Nom" avec votre nom, 
            le champ "Mail" avec votre adresse mail, le champ "Numero de Telephone" 
            avec votre numero de telephone, le champ "Adresse" avec votre 
            adresse(le nom de votre ville suffit), le champ "Date de naissance" 
            avec votre date de naissance. Appuyer sur le "plus" en dessous 
            de Langues, Qualites et Competences et remplisser le champ avec 
            la langue, qualite et competence puis indiquer avec la jauge bleu 
            votre niveau de maitrise. Pour Experiences il faudra indiquer 
            l'entreprise, le poste occupe et la date dans ce format(annee 
            debut/annee fin). Pour Formations il faudra indiquer l'organisme 
            de formation, le type de formation(informatique, batiment, ...) 
            et la date de debut/fin. Pour les interets il faudra remplir le champ 
            avec vos interets(football, danse, ...). Pour finir il faut 
            cliquer sur le bouton "Mettre en ligne".
        </p>
        <h2>Modifier son CV</h2>
        <p>
            Pour modifier son CV il faut cliquer sur "Mon CV" 
            dans la barre de navigation en haut de la page. Pour modifier 
            son CV il suffit de modifier le ou les champ(s) correspondant(s) 
            et appuyer sur le bouton "Modifier".
        </p>
        <h2>Supprimer son CV</h2>
        <p>
            Pour supprimer son CV il faut cliquer sur "Mon CV" 
            dans la barre de navigation en haut de la page. Pour 
            supprimer le CV appuyer sur le bouton "Supprimer" en bas de la page.
        </p>
        <h2>Modifier son Profil</h2>
        <p>
            Pour modifier son Profil il faut cliquer sur "Profil" 
            dans la barre de navigation en haut de la page. Pour modifier 
            son Profil il suffit de remplir le champ correspondant
            et appuyer sur le bouton "Modifier" du champ en question.
        </p>
        <h2>Desinscription</h2>
        <p>
            Pour se desinscrire il faut cliquer sur "Profil" 
            dans la barre de navigation en haut de la page. Pour 
            vous desinscrire appuyer sur le bouton "Se desinscrire" en bas de la page.
        </p>
        <h2>Rechercher un CV</h2>
        <p>
            Pour rechercher un CV il faut cliquer sur "Rechercher" 
            dans la barre de navigation en haut de la page. Remplissez 
            le champ de recherche avec votre requete puis cliquez sur "Rechercher".
        </p>
        <h2>Acceder a un CV</h2>
        <p>
            Pour acceder a un CV il faut cliquer sur un CV sous la barre de recherche.
        </p>
        </div>
    )
}

export default Accueil;