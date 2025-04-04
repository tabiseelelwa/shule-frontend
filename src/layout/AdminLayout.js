import React from "react";
import {
  GoBook,
  GoBriefcase,
  GoMortarBoard,
  GoNumber,
  GoPencil,
  GoPerson,
} from "react-icons/go";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="layout">
      <div className="aside">
        <div className="asideTitle">
          <h5>ADMINISTRATEUR</h5>
        </div>
        <div className="asideButtons">
          <Link to="">
            <GoBriefcase /> Administration
          </Link>
          <Link to="apprenants">
            <GoMortarBoard />
            Apprenants
          </Link>
          <Link to="inscriptions">
            <GoPencil />
            Inscriptions
          </Link>
          <Link to="paiements">
            <GoNumber /> Paiements
          </Link>
          <Link to="depenses">
            <GoBook /> Dépenses
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
          <div className="userName">TABISEELELWA</div>
        </div>

        <div className="contenu">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
