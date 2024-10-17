import React from "react";

const ModifPaiement = () => {
  return (
    <div className="formulaire">
      <div className="formHead">
        <p>MODIFICATION PAIEMENT</p>
      </div>
      <div className="formBody">
        <form>
          <select name="">
            <option>Choisir l'élève</option>
            <option value="Masculin">TABISEELELWA ESUBE Léon</option>
            <option value="Féminin">ASENDE UNDJI Happy</option>
          </select>
          <select name="">
            <option>Type de frais</option>
            <option value="Masculin">Inscription</option>
            <option value="Féminin">Minerval 1ère T.</option>
            <option value="Féminin">Minerval 2ème T.</option>
            <option value="Féminin">Minerval 3ème T.</option>
            <option value="Féminin">Frais admin</option>
            <option value="Féminin">Frais techniques</option>
          </select>
          <input type="number" placeholder="Montant payé" value={300} />
          <button>Effectuer</button>
        </form>
      </div>
    </div>
  );
};

export default ModifPaiement;
