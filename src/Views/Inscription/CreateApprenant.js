import axios from "axios";
import React, { useState } from "react";
import { GoXCircle } from "react-icons/go";

const CreateApprenant = ({ setModalAjoutEleve }) => {
  const [values, setValues] = useState({
    nom: "",
    postnom: "",
    prenom: "",
    sexe: "",
    telephone: "",
    adressse: "",
  });

  const enregAppr = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/nouveleve", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setModalAjoutEleve(false);
  };
  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={enregAppr}>
          <div className="ctrl">
            <h4>Nouvel élève</h4>
            <GoXCircle
              onClick={() => setModalAjoutEleve(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>
          <input
            type="text"
            placeholder="Nom de l'élève"
            onChange={(e) => setValues({ ...values, nom: e.target.value })}
            autoFocus={true}
          />
          <input
            type="text"
            placeholder="Postnom de l'élève"
            onChange={(e) => setValues({ ...values, postnom: e.target.value })}
          />
          <input
            type="text"
            placeholder="Prénom de l'élève"
            onChange={(e) => setValues({ ...values, prenom: e.target.value })}
          />
          <select
            name=""
            onChange={(e) => setValues({ ...values, sexe: e.target.value })}
          >
            <option>Choisir le sexe</option>
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
          </select>
          <input
            type="text"
            placeholder="Adresse de résidence"
            onChange={(e) => setValues({ ...values, adresse: e.target.value })}
          />
          <input
            type="text"
            placeholder="Téléphone"
            onChange={(e) =>
              setValues({ ...values, telephone: e.target.value })
            }
          />
          <div id="bouton">
            <button>Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateApprenant;
