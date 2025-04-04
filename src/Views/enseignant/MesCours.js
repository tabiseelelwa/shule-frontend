/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MesCours = () => {
  const [cours, setCours] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/mescours`)
      .then((res) => {
        setCours(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="head">
        <div className="titre">COTATION</div>
      </div>
      <div className="listcours">
        {cours.map((cour, i) => {
          return (
            <Link to={`/enseignant/${cour.designCours}/${cour.niveau}`} key={i}>
              <div className="cours">
                <h6 className="titre_cours">{cour.designCours}</h6>
                <p className="niveau">{cour.niveau}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MesCours;
