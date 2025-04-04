import axios from "axios";
import React, { useState } from "react";
import { GoXCircle } from "react-icons/go";

const CreateDepense = ({ setModalAjoutDepense }) => {
  const [values, setValues] = useState({
    motif: "",
    montant: 0,
    benef: "",
  });

  const ajoutDepense = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/create-depense", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setModalAjoutDepense(false);
  };

  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={ajoutDepense}>
          <div className="ctrl">
            <h4>Nouvelle dépense</h4>
            <GoXCircle
              onClick={() => setModalAjoutDepense(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>

          <input
            type="text"
            placeholder="Motif de la dépense"
            onChange={(e) => setValues({ ...values, motif: e.target.value })}
          />

          <input
            type="number"
            placeholder="Montant...."
            onChange={(e) => setValues({ ...values, montant: e.target.value })}
          />

          <select
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

export default CreateDepense;
