/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const DetailsDepense = ({ setModalDetailsDepenses, idDepense }) => {
  const [values, setValues] = useState({
    idDepense: "",
    dateDepense: "",
    motifDepense: "",
    montantDepense: 0,
    benefDepense: "",
    agent: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/depense/${idDepense}`)
      .then((res) =>
        setValues({
          ...values,
          idDepense: res.data[0].idDepense,
          dateDepense: res.data[0].dateDepense,
          motifDepense: res.data[0].motifDepense,
          montantDepense: res.data[0].montantDepense,
          benefDepense: res.data[0].benefDepense,
          agent: res.data[0].agent,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="modal">
      <div className="modalWrapper">
        <div className="modalBody">
          <div className="ctrl">
            <div></div>
            <GoXCircle
              onClick={() => setModalDetailsDepenses(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>
          <div className="headDescription">{values.agent}</div>
          <div className="modalDetails">
            <div>
              <p>Numéro dépense</p>
              <span>{values.idDepense}</span>
            </div>
            <div>
              <p>Motif</p>
              <span>{values.motifDepense}</span>
            </div>
            <div>
              <p>Montant</p>
              <span>{values.montantDepense + " FC"}</span>
            </div>
            <div>
              <p>Bénéficiaire</p>
              <span>{values.benefDepense}</span>
            </div>
            <div>
              <p>Date et heure</p>
              <span>{values.dateDepense}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDepense;
