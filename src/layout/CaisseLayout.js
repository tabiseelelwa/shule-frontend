import React from "react";
import { Link, Outlet } from "react-router-dom";

const CaisseLayout = () => {
  return (
    <div className="caisse">
      <div className="caisseHead">
        <div className="userData">
          <div className="img"></div>
        </div>
        <div className="otherData">TABISEELELWA</div>
      </div>
      <div className="caisseBody">
        <div className="aside">
          <div className="asideTitle">
            <h5>CAISSE</h5>
          </div>
          <div className="asideButtons">
            <div className="button">
              <Link to="">Apprenants</Link>
            </div>
            <div className="button">
              <Link to="paiements">Paiements</Link>
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
