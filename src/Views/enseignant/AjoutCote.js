/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";
import { useParams } from "react-router-dom";

const AjoutCote = ({ setModalAjoutCote }) => {
  const [eleves, setEleves] = useState([]);
  const [setCotes] = useState([]);

  const { cours, niveau, option, designClasse, nomType } = useParams();

  const [values, setValues] = useState({
    eleve: "",
    cote: 0,
    max: 0,
  });

  // Chargement des élèves selon l'option et la classe à l'inscription
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/list/${option}/${designClasse}`)
      .then((res) => {
        setEleves(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Chargement des noms des élèves déjà côtés en vue d'éviter les doublons
  // Ces noms sont comparés à ceux de la liste venant de la classe
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/cote/${cours}/${niveau}/${designClasse}/${option}/${nomType}`
      )
      .then((res) => {
        setCotes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Création d'une côte
  const nouvCote = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/api/create_cote/${cours}/${niveau}/${designClasse}/${option}/${nomType}`,
        values
      )
      .then(() => {})
      .catch((err) => console.log(err));

    setModalAjoutCote(false);
  };

  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <form onSubmit={nouvCote}>
            <div className="ctrl">
              <h5>Côter un élève</h5>
              <GoXCircle
                onClick={() => setModalAjoutCote(false)}
                style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              />
            </div>

            <select
              onChange={(e) => setValues({ ...values, eleve: e.target.value })}
            >
              <option>Nom de l'élève</option>
              {eleves.map((n, i) => {
                return (
                  <option key={i} value={n.eleve}>
                    {n.eleve}
                  </option>
                );
              })}
            </select>

            <input
              type="number"
              placeholder="Saisir la côte de l'élève ici..."
              onChange={(e) => setValues({ ...values, cote: e.target.value })}
            />
            <input
              type="number"
              value={values.max}
              onChange={(e) => setValues({ ...values, max: e.target.value })}
            />
            <button>Ajouter la côter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutCote;
