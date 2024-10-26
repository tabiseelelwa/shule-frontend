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
          <ul className="asideButtons">
            <Link >
              <li to="">Inscriptions</li>
            </Link>
            <Link >
              <li to="apprenants">Apprenants</li>
            </Link>

            <Link >
              <li to="profil">Profil</li>
            </Link>
          </ul>
        </div>

        <div className="contenu">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InscriptLayout;
