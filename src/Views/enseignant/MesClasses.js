/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MesClasses = () => {
  const [classes, setClasses] = useState([]);

  const { niveau } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/classes/${niveau}`)
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="head">
        <div className="titre">LES CLASSES </div>
      </div>
      <div className="listcours">
        {classes.map((classe, i) => {
          return (
            <Link to={`${classe.designClasse}/${classe.optio}`} key={i}>
              <div className="cours">
                <h6 className="titre_cours">{classe.designClasse}</h6>
                <p className="niveau">{classe.optio}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MesClasses;
