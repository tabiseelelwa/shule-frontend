import { Link, Outlet } from "react-router-dom";
import React from "react";
import { GoMortarBoard, GoChecklist, GoPencil, GoPerson } from "react-icons/go";

const InscriptLayout = () => {
  return (
    <div className="layout">
      <div className="aside">
        <div className="asideButtons">
          <Link to="">
            <GoPencil /> Inscriptions
          </Link>
          <Link to="apprenants">
            <GoMortarBoard />
            Apprenants
          </Link>
          <Link to="rapports">
            <GoChecklist />
            Rapports
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

export default InscriptLayout;
