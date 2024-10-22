import React from "react";
import { Link, Outlet } from "react-router-dom";

const CaisseLayout = () => {
  return (
    <div className="layout">
      <div className="layoutHead">
        <div className="userData">
          <div className="img"></div>
        </div>
        <div className="otherData">TABISEELELWA</div>
      </div>
      <div className="layoutBody">
        <div className="aside">
          <div className="asideTitle">
            <h5>CAISSE</h5>
          </div>
          <div className="asideButtons">
            <div className="button">
              <Link to="">Paiements</Link>
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

export default CaisseLayout;
