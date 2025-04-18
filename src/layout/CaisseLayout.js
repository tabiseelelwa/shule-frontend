import React from "react";
import { GoBook, GoChecklist, GoNumber, GoPerson } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";

const CaisseLayout = () => {
  return (
    <div className="layout">
      <div className="aside">
        <div className="asideButtons">
          <Link to="">
            <GoNumber /> Paiements
          </Link>
          <Link to="depenses">
            <GoBook />
            Dépenses
          </Link>
          <Link to="rapports">
            <GoChecklist />
            Rapports
          </Link>
          <Link id="profil" to="profil">
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

export default CaisseLayout;
