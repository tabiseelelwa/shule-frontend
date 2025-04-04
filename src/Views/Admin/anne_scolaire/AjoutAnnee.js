import axios from "axios";
import React, { useState } from "react";
import { GoXCircle } from "react-icons/go";


const AjoutAnnee = ({ setModalAjoutAnnee }) => {
  const [setModalValidation] = useState(false);
  const [values, setValues] = useState({
    designAnnee: "",
  });

  const nouvClasse = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/nouvAnneeAcad", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setModalAjoutAnnee(false);
    setModalValidation(true);
  };

  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <form onSubmit={nouvClasse}>
            <div className="ctrl">
              <h4>Créer l'année scolaire</h4>
              <GoXCircle
                onClick={() => setModalAjoutAnnee(false)}
                style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              />
            </div>

            <input
              placeholder="Intitulé de l'année"
              onChange={(e) =>
                setValues({ ...values, designAnnee: e.target.value })
              }
            />
            <button>Créer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutAnnee;
