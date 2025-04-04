/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const DetailsInscription = ({ setModalDetailsInscription, idInscription }) => {
  const [values, setValues] = useState({
    numero: "",
    eleve: "",
    option: "",
    classe: "",
    annnee: "",
    date: "",
    agent: "",
  });

  // Chargement des données d'un élève inscrit
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/list/inscription/${idInscription}`)
      .then((res) => {
        setValues({
          ...values,
          numero: res.data[0].idInscription,
          eleve: res.data[0].eleve,
          option: res.data[0].optio,
          classe: res.data[0].classe,
          annnee: res.data[0].anneeAcad,
          date: res.data[0].dateInscription,
          agent: res.data[0].agent,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="modal">
      <div className="modalWrapper">
        <div className="modalBody">
          <div className="ctrl">
            <h6>Informations sur l'inscription</h6>
            <GoXCircle
              onClick={() => setModalDetailsInscription(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>
          <div className="headDescription">{values.eleve}</div>
          <div className="modalDetails">
            <div>
              <p>Année académique</p>
              <span>{values.annnee}</span>
            </div>
            <div>
              <p>Numéro inscription</p>
              <span>{values.numero}</span>
            </div>
            <div>
              <p>Option</p>
              <span>{values.option}</span>
            </div>
            <div>
              <p>Classe</p>
              <span>{values.classe}</span>
            </div>

            <div>
              <p>Date inscription</p>
              <span>{values.date}</span>
            </div>
            <div>
              <p>Inscrit par</p>
              <span>{values.agent}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsInscription;
