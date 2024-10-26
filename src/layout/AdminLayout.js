import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
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
            <h5>ADMINISTRATEUR</h5>
          </div>
          <ul className="asideButtons">
            <Link to="">
              <li>Administration</li>
            </Link>
            <Link to="apprenants">
              <li>Apprenants</li>
            </Link>
            <Link to="inscriptions">
              <li >Inscriptions</li>
            </Link>
            <Link to="paiements">
              <li >Paiements</li>
            </Link>
            <Link to="profil" id="profil">
              <li>
                Profil
              </li>
            </Link>
            {/* <button>Déconnexion</button> */}
          </ul>
        </div>

        <div className="contenu">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
