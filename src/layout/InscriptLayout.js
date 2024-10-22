import { Link, Outlet } from "react-router-dom";
import React from "react";

const InscriptLayout = () => {
  return (
    <div className="layout">
      <div className="layoutHeadInscript">
        <div className="userData">
          <div className="img"></div>
        </div>
        <div className="otherData">TABISEELELWA</div>
      </div>
      <div className="layoutBody">
        <div className="aside">
          <div className="asideTitleInscript">
            <h5>INSCRIPTIONS</h5>
          </div>
          <div className="asideButtons">
            <div className="button">
              <Link to="">Inscriptions</Link>
            </div>
            <div className="button">
              <Link to="apprenants">Apprenants</Link>
            </div>

            <div className="button">
              <Link to="profil">Profil</Link>
            </div>
            <div className="button">Déconnexion</div>
          </div>
        </div>

        <div className="contenu">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InscriptLayout;
