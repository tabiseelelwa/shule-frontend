import axios from "axios";
import React, { useState } from "react";
import { GoXCircle } from "react-icons/go";

const AjoutFrais = ({ setModalAjoutFrais }) => {
  const [values, setValues] = useState({
    designFrais: "",
    montant: 0,
  });

  const nouvFrais = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/nouvfrais", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setModalAjoutFrais(false);
  };

  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <form onSubmit={nouvFrais}>
            <div className="ctrl">
              <h4>Nouveau frais</h4>
              <GoXCircle
                onClick={() => setModalAjoutFrais(false)}
                style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              />
            </div>

            <input
              placeholder="Désignation frais"
              onChange={(e) =>
                setValues({ ...values, designFrais: e.target.value })
              }
            />
            <input
              placeholder="Montant"
              onChange={(e) =>
                setValues({ ...values, montant: e.target.value })
              }
            />

            <button>Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutFrais;
