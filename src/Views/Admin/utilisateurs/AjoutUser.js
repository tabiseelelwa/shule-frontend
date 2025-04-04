import axios from "axios";
import React, { useState } from "react";
import { GoXCircle } from "react-icons/go";

const AjoutUser = ({ setModalAjoutUser }) => {
  const [values, setValues] = useState({
    nom: "",
    postnom: "",
    prenom: "",
    email: "",
    telephone: "",
    service: "",
  });

  const nouvUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/nouveluser", values)
      .then((res) => {})
      .catch((err) => console.log(err));
    setModalAjoutUser(false);
  };
  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <form onSubmit={nouvUser}>
            <div className="ctrl">
              <h4>Créer un utilisateur</h4>
              <GoXCircle
                onClick={() => setModalAjoutUser(false)}
                style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              />
            </div>

            <input
              placeholder="Nom"
              onChange={(e) => setValues({ ...values, nom: e.target.value })}
            />
            <input
              placeholder="Postnom"
              onChange={(e) =>
                setValues({ ...values, postnom: e.target.value })
              }
            />
            <input
              placeholder="Prénom"
              onChange={(e) => setValues({ ...values, prenom: e.target.value })}
            />
            <input
              placeholder="Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <input
              placeholder="Téléphone : 978024163"
              onChange={(e) =>
                setValues({ ...values, telephone: e.target.value })
              }
            />
            <select
              onChange={(e) =>
                setValues({ ...values, service: e.target.value })
              }
            >
              <option>Choisir le service</option>
              <option value="Caisse">Caisse</option>
              <option value="Inscription">Inscription</option>
              <option value="Enseignant">Enseignant</option>
              <option value="Administration">Administration</option>
            </select>

            <button>Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutUser;
