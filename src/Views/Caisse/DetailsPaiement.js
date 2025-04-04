/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const DetailsPaiement = ({ setModalDetailsPaiement, numPaiement }) => {
  const [values, setValues] = useState({
    numPaiement: "",
    datePaiement: "",
    apprenant: "",
    motifPaiement: "",
    montantPaiement: "",
    agent: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/paiements/idPaie/${numPaiement}`)
      .then((res) =>
        setValues(
          {
            ...values,
            numPaiement: res.data[0].numPaiement,
            datePaiement: res.data[0].datePaiement,
            apprenant: res.data[0].apprenant,
            motifPaiement: res.data[0].motifPaiement,
            montantPaiement: res.data[0].montantPaiement,
            agent: res.data[0].agent,
          },
          console.log(res.data)
        )
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
              onClick={() => setModalDetailsPaiement(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>
          <div className="headDescription">{values.apprenant}</div>
          <div className="modalDetails">
            <div>
              <p>Numéro Paiement</p>
              <span>{values.numPaiement}</span>
            </div>
            <div>
              <p>Motif du paiement</p>
              <span>{values.motifPaiement}</span>
            </div>
            <div>
              <p>Montant payé</p>
              <span>{values.montantPaiement + " FC"}</span>
            </div>
            <div>
              <p>Agent</p>
              <span>{values.agent}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPaiement;
