import React from "react";

const ModifEleve = () => {
  return (
    <div className="formulaire">
      <div className="formHead">
        <p>MODIFICATION ELEVE</p>
      </div>
      <div className="formBody">
        <form>
          <input type="text" placeholder="Nom de l'élève" />
          <input type="text" placeholder="Postnom de l'élève" />
          <input type="text" placeholder="Prénom de l'élève" />
          <select name="">
            <option>Choisir le sexe</option>
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
          </select>
          <input type="text" placeholder="Adresse de résidence" />
          <input type="text" placeholder="Téléphone" />
          <button>Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default ModifEleve;
