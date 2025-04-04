/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const ModifPaiement = ({ setModalModifPaiement, numPaiement }) => {
  const [eleves, setElves] = useState([]);
  const [values, setValues] = useState({
    apprenant: "",
    motif: "",
    montant: 0,
    agent: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/paiements/idPaie/${numPaiement}`)
      .then((res) =>
        setValues({
          ...values,
          apprenant: res.data[0].apprenant,
          motif: res.data[0].motifPaiement,
          montant: res.data[0].montantPaiement,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/paiements/idPaie/${numPaiement}`)
      .then((res) =>
        setValues({
          ...values,
          apprenant: res.data[0].apprenant,
          motif: res.data[0].motifPaiement,
          montant: res.data[0].montantPaiement,
        })
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/eleves")
      .then((res) => {
        setElves(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const modifPaiement = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/modifpaiement/${numPaiement}`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setModalModifPaiement(false);
  };

  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={modifPaiement}>
          <div className="ctrl">
            <h4>Modifier paiement</h4>
            <GoXCircle
              onClick={() => setModalModifPaiement(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>

          <select
            value={values.apprenant}
            onChange={(e) =>
              setValues({ ...values, apprenant: e.target.value })
            }
          >
            <option>Choisir le nom de l'élève</option>
            {eleves.map((eleve, i) => {
              const nom = eleve.nomappr;
              const postnom = eleve.postnomappr;
              const prenom = eleve.prenomappr;
              return (
                <option key={i} value={nom + " " + postnom + " " + prenom}>
                  {nom + " " + postnom + " " + prenom}
                </option>
              );
            })}
          </select>

          <select
            value={values.motif}
            onChange={(e) => setValues({ ...values, motif: e.target.value })}
          >
            <option>Choisir le type de frais</option>
            <option value="Minerval">Minerval</option>
            <option value="Frais administratifs">Frais administratifs</option>
            <option value="Frais techniques">Frais techniques</option>
          </select>

          <input
            type="number"
            placeholder="Montant...."
            value={values.montant}
            onChange={(e) => setValues({ ...values, montant: e.target.value })}
          />

          <button>Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default ModifPaiement;
