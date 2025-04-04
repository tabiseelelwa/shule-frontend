/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const ModifDepense = ({ setModalModifDepense, idDepense }) => {
  const [values, setValues] = useState({
    motif: "",
    montant: 0,
    benef: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/depense/${idDepense}`)
      .then((res) =>
        setValues({
          ...values,
          motif: res.data[0].motifDepense,
          montant: res.data[0].montantDepense,
          benef: res.data[0].benefDepense,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  const modifDepense = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/modif-depense/${idDepense}`, values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setModalModifDepense(false);
  };
  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={modifDepense}>
          <div className="ctrl">
            <h4>Modification dépense</h4>
            <GoXCircle
              onClick={() => setModalModifDepense(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>

          <input
            type="text"
            placeholder="Motif de la dépense"
            autoFocus={true}
            value={values.motif}
            onChange={(e) => setValues({ ...values, motif: e.target.value })}
          />

          <input
            type="number"
            placeholder="Montant...."
            value={values.montant}
            onChange={(e) => setValues({ ...values, montant: e.target.value })}
          />

          <select
            value={values.benef}
            onChange={(e) => setValues({ ...values, benef: e.target.value })}
          >
            <option>Choisir le Bénéficiaire</option>
            <option value="Rudolph BYAOMBE">Rudolph BYAOMBE</option>
            <option value="Exaucé ILANGYI">Exaucé ILANGYI</option>
            <option value="David LUBEMBELA">David LUBEMBELA</option>
          </select>
          <button>Effectuer</button>
        </form>
      </div>
    </div>
  );
};

export default ModifDepense;
