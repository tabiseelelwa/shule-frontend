import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const CreatePaiement = ({ setModalAjoutPaiement }) => {
  const [values, setValues] = useState({
    apprenant: "",
    motif: "",
    montant: 0,
  });

  const [eleves, setElves] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/eleves")
      .then((res) => {
        setElves(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const createPaiement = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/nouvpaiment", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setModalAjoutPaiement(false);
  };
  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={createPaiement}>
          <div className="ctrl">
            <h4>Nouveau paiement</h4>
            <GoXCircle
              onClick={() => setModalAjoutPaiement(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>

          <select
            onChange={(e) =>
              setValues({ ...values, apprenant: e.target.value })
            }
          >
            <option>Choisir le nom de l'élève</option>
            {eleves.map((eleve, i) => {
              return (
                <option
                  key={i}
                  value={
                    eleve.nomappr +
                    " " +
                    eleve.postnomappr +
                    " " +
                    eleve.prenomappr
                  }
                >
                  {eleve.nomappr +
                    " " +
                    eleve.postnomappr +
                    " " +
                    eleve.prenomappr}
                </option>
              );
            })}
          </select>

          <select
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
            onChange={(e) => setValues({ ...values, montant: e.target.value })}
          />

          <button>Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePaiement;
