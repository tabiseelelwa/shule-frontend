import axios from "axios";
import React, { useState } from "react";
import { GoXCircle } from "react-icons/go";

const AjoutSection = ({ setModalAjoutSection }) => {
  const [values, setValues] = useState({
    designation: "",
  });

  const nouvSection = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/nouvsection", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setModalAjoutSection(false);
  };
  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <form onSubmit={nouvSection}>
            <div className="ctrl">
              <h4>Créer une section</h4>
              <GoXCircle
                onClick={() => setModalAjoutSection(false)}
                style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              />
            </div>

            <input
              placeholder="Désignation de la section"
              onChange={(e) =>
                setValues({ ...values, designation: e.target.value })
              }
            />

            <button>Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutSection;
