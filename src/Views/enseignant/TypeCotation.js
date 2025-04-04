import React from "react";
import { Link } from "react-router-dom";

const TypeCotation = () => {
  return (
    <div>
      <div className="head">
        <div className="titre">CHOISIR LE TYPE DE COTATION</div>
      </div>
      <div className="listcours">
        <Link to="premiere-periode">
          <div className="cours">
            <h6 className="titre_cours">Première période</h6>
          </div>
        </Link>
        <Link to="deuxieme-periode">
          <div className="cours">
            <h6 className="titre_cours">Deuxième période</h6>
          </div>
        </Link>
        <Link to="examen_1">
          <div className="cours">
            <h6 className="titre_cours">Examen_1</h6>
          </div>
        </Link>
        <Link to="troisieme-periode">
          <div className="cours">
            <h6 className="titre_cours">Troisième période</h6>
          </div>
        </Link>
        <Link to="quatrieme-periode">
          <div className="cours">
            <h6 className="titre_cours">Quatrième période</h6>
          </div>
        </Link>
        <Link to="examen_2">
          <div className="cours">
            <h6 className="titre_cours">Examen_2</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TypeCotation;
