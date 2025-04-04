import React from "react";
import { GoMoveToBottom } from "react-icons/go";
import { Link } from "react-router-dom";

const RapportInscription = () => {
  return (
    <div>
      <div className="head">
        <div className="titre">RAPPORTS APPRENANTS ET INSCRIPTIONS</div>
        <div className="filtreInscript"></div>
      </div>
      <div className="rapportContainer">
        <Link className="rapportItem">
          <div>Liste de tous les élèves</div>
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          <div>Liste de tous les élèves inscrits</div>
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          <div>Liste de tous les élèves par classe </div>
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          Liste de tous les élèves par section
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          <div>Liste de tous les élèves par option </div>
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          <div>Liste des inscriptions du jour </div>
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          <div>Liste des inscriptions de la semaine </div>
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          <div>Liste des inscriptions du mois </div>
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          <div>Liste des inscriptions de l'année </div>
          <GoMoveToBottom />
        </Link>
        <Link className="rapportItem">
          <div>Liste des inscriptions par date </div>
          <GoMoveToBottom />
        </Link>
      </div>
    </div>
  );
};

export default RapportInscription;
