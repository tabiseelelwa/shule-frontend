import React from "react";
import {
  GoChecklist,
  GoFileDirectory,
  GoPerson,
  GoServer,
  GoTasklist,
} from "react-icons/go";
import { Link, Outlet } from "react-router-dom";

const EnseignantLayout = () => {
  return (
    <div className="layout">
      <div className="aside">
        <div className="asideButtons">
          <Link to="nom/tabiseelelwa">
            <GoTasklist /> Côtation
          </Link>
          <Link to="ma-classe">
            <GoServer /> Ma classe
          </Link>
          <Link to="prepa-matieres">
            <GoFileDirectory /> Préparation
          </Link>
          <Link to="rapports">
            <GoChecklist /> Rapports
          </Link>
          <Link to="profil" id="profil">
            <GoPerson />
            Profil
          </Link>
        </div>
      </div>
      <div className="layoutBody">
        <div className="layoutHead">
          <div className="userData">
            <div className="img"></div>
          </div>
          <div className="otherData">TABISEELELWA</div>
        </div>

        <div className="contenu">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EnseignantLayout;
