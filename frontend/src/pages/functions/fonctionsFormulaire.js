export function creationCaracteristique(elementParent){
    let nouveauInput = document.createElement("div");
    nouveauInput.className="listeCaracteristiques";
    document.querySelector(elementParent).appendChild(nouveauInput);
    let suppCaracteristique=document.createElement("i");
    suppCaracteristique.className="fas suppCaracteristique fa-solid fa-plus";
    nouveauInput.appendChild(suppCaracteristique);
    let nomCaracteristique=document.createElement("input");
    nomCaracteristique.className="nomCaracteristique";
    creationPlaceholderNom(elementParent, nomCaracteristique);
    nouveauInput.appendChild(nomCaracteristique);
    let contenuCaracteristique=document.createElement("input");
    contenuCaracteristique.type="range";
    contenuCaracteristique.className="contenuCaracteristique";
    creationPlaceholderContenu(elementParent, contenuCaracteristique);
    inputRange(contenuCaracteristique);
    nouveauInput.appendChild(contenuCaracteristique);
    suppCaracteristique.addEventListener("click",()=>{
        nouveauInput.remove();
    });
};

export function creationCaracteristiqueInterets(elementParent){
    let nouveauInput = document.createElement("div");
    nouveauInput.className="listeCaracteristiques";
    document.querySelector(elementParent).appendChild(nouveauInput);
    let suppCaracteristique=document.createElement("i");
    suppCaracteristique.className="fas suppCaracteristique fa-solid fa-plus";
    nouveauInput.appendChild(suppCaracteristique);
    let contenuCaracteristique=document.createElement("input");
    contenuCaracteristique.className="contenuCaracteristique";
    creationPlaceholderContenu(elementParent, contenuCaracteristique);
    nouveauInput.appendChild(contenuCaracteristique);
    suppCaracteristique.addEventListener("click",()=>{
        nouveauInput.remove();
    });
};

export function creationExperience(elementParent){
    let nouveauInput = document.createElement("div");
    nouveauInput.className="listeCaracteristiques";
    document.querySelector(elementParent).appendChild(nouveauInput);
    let suppCaracteristique=document.createElement("i");
    suppCaracteristique.className="fas suppCaracteristique fa-solid fa-plus";
    nouveauInput.appendChild(suppCaracteristique);
    let nomCaracteristique=document.createElement("input");
    nomCaracteristique.className="nomCaracteristique";
    creationPlaceholderNom(elementParent, nomCaracteristique);
    nouveauInput.appendChild(nomCaracteristique);
    let contenuCaracteristique=document.createElement("input");
    contenuCaracteristique.className="contenuCaracteristique";
    creationPlaceholderContenu(elementParent, contenuCaracteristique);
    nouveauInput.appendChild(contenuCaracteristique);
    let dateCaracteristique=document.createElement("input");
    dateCaracteristique.className="dateCaracteristique";
    creationPlaceholderDate(elementParent, dateCaracteristique);
    nouveauInput.appendChild(dateCaracteristique);
    suppCaracteristique.addEventListener("click",()=>{
        nouveauInput.remove();
    });
};

export function creationObjetCaracteristiques(elementParent){
    let divCaracteristique = document.querySelector(elementParent);
    let objetCaracteristiques = [];
    for(let i=0; i<=divCaracteristique.children.length-1; i++){
        let objetCaracteristiqueSup = new Object();
        objetCaracteristiqueSup["nom"] = divCaracteristique.children[i].children[1].value;
        if(elementParent !== ".interets"){
            objetCaracteristiqueSup["contenu"] = divCaracteristique.children[i].children[2].value;
            if(elementParent === ".experiences" || elementParent === ".formations"){
                objetCaracteristiqueSup["date"] = divCaracteristique.children[i].children[3].value;
            };
        }
        objetCaracteristiques.push(objetCaracteristiqueSup);
    };
    return objetCaracteristiques;
};

export function gradientInputRange(inputRange){
    let valeurGradient=(inputRange.value/inputRange.max)*100;
    inputRange.style.background="linear-gradient(90deg, #03a9f4 "+valeurGradient+"%, white 0%)";
}

function inputRange(inputRange){
    inputRange.step=1;
    inputRange.min=0;
    inputRange.max=100;
    gradientInputRange(inputRange);
    inputRange.addEventListener("input", ()=>{
        gradientInputRange(inputRange);
    });
}

function creationPlaceholderNom(elementParent, nomCaracteristique){
    if(elementParent === ".langues"){
        nomCaracteristique.placeholder="langue"
    }else if(elementParent === ".qualites"){
        nomCaracteristique.placeholder="qualite"
    }else if(elementParent === ".competences"){
        nomCaracteristique.placeholder="competence"
    }else if(elementParent === ".experiences"){
        nomCaracteristique.placeholder="entreprise"
    }else if(elementParent === ".formations"){
        nomCaracteristique.placeholder="organisme"
    }
}

function creationPlaceholderContenu(elementParent, contenuCaracteristique){
    if(elementParent === ".interets"){
        contenuCaracteristique.placeholder="interet"
    }else if(elementParent === ".experiences"){
        contenuCaracteristique.placeholder="poste"
    }else if(elementParent === ".formations"){
        contenuCaracteristique.placeholder="type de formation"
    }
}

function creationPlaceholderDate(elementParent, dateCaracteristique){
    if(elementParent === ".experiences"){
        dateCaracteristique.placeholder="debut/fin"
    }else if(elementParent === ".formations"){
        dateCaracteristique.placeholder="debut/fin"
    }
}