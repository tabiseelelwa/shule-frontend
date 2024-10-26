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
            <h5>CAISSIER</h5>
          </div>
          <ul className="asideButtons">
            <Link className="button">
              <li to="">Paiements</li>
            </Link>
            <Link className="button">
              <li to="">Dépenses</li>
            </Link>

            <Link className="button" id="profil">
              <li to="profil">Profil</li>
            </Link>
            {/* <button className="button">Déconnexion</button> */}
          </ul>
        </div>

        <div className="contenu">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CaisseLayout;
