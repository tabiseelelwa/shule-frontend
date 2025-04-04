import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Administration = () => {
  return (
    <div>
      <div className="listMenuAdim">
        <Link to="">
          <div className="MenuAdmin">
            <h6 className="titre_MenuAdmin">115</h6>
            <p className="niveau">COURS</p>
          </div>
        </Link>
        <Link to="classes">
          <div className="MenuAdmin">
            <h6 className="titre_MenuAdmin">25</h6>
            <p className="niveau">CLASSES</p>
          </div>
        </Link>
        <Link to="options">
          <div className="MenuAdmin">
            <h6 className="titre_MenuAdmin">18</h6>
            <p className="niveau">OPTIONS</p>
          </div>
        </Link>
        <Link to="sections">
          <div className="MenuAdmin">
            <h6 className="titre_MenuAdmin">5</h6>
            <p className="niveau">SECTIONS</p>
          </div>
        </Link>
        <Link to="enseignants">
          <div className="MenuAdmin">
            <h6 className="titre_MenuAdmin">35</h6>
            <p className="niveau">USERS</p>
          </div>
        </Link>
        <Link to="frais">
          <div className="MenuAdmin">
            <h6 className="titre_MenuAdmin">7</h6>
            <p className="niveau">FRAIS</p>
          </div>
        </Link>
        <Link to="annee-scolaire">
          <div className="MenuAdmin">
            <h6 className="titre_MenuAdmin">7</h6>
            <p className="niveau">ANNEE SCOL.</p>
          </div>
        </Link>
      </div>

      <div className="dahsBody">
        <Outlet />
      </div>
    </div>
  );
};

export default Administration;
