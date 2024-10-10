import React from "react";
import { Link } from "react-router-dom";

const CreatePaiement = () => {
  return (
    <div className="createPaiement">
      <div className="createPaieHead">
        <div className="userData">
          <div className="img"></div>
        </div>
        <div className="otherData"></div>
        <div className="btnAjout">
          <Link></Link>
        </div>
      </div>

      <div className="createPaieBody">
        <div className="aside">
          <div className="asideTitle">Nouveau paiement</div>
          <div className="asideButtons">
            <div className="button">Tous les Paiements</div>
            <div className="button">Modifier un paiement</div>
            <div className="button">Liste de paiements du mois</div>
            <div className="button">Déconnexion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePaiement;
