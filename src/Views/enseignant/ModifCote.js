import React, { useState } from "react";
import { GoXCircle } from "react-icons/go";

const ModifCote = ({ setModalModifCote }) => {
  const [nomEleves] = useState([]);
  const [values, setValues] = useState({});

  const nouvCote = (e) => {};

  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={nouvCote}>
          <div className="ctrl">
            <h5>Côter un élève</h5>
            <GoXCircle
              onClick={() => setModalModifCote(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>

          <select
            onChange={(e) => setValues({ ...values, eleve: e.target.value })}
          >
            <option>Nom de l'élève</option>
            {nomEleves.map((n, i) => {
              return (
                <option
                  key={i}
                  value={n.nomappr + " " + n.postnomappr + " " + n.prenomappr}
                >
                  {n.nomappr + " " + n.postnomappr + " " + n.prenomappr}
                </option>
              );
            })}
          </select>

          <select
            onChange={(e) => setValues({ ...values, section: e.target.value })}
          >
            <option>Choisir le cours</option>
            <option value="Comptabilité">Comptabilité</option>
            <option value="Fraçais">Français</option>
            <option value="Mathématiques">Mathématiques</option>
          </select>

          <select
            onChange={(e) => setValues({ ...values, classe: e.target.value })}
          >
            <option>Choisir la classe</option>
            <option value="1ère A Sciences">1ère A Sciences</option>
            <option value="3ème Latin Philo">3ème Latin Philo</option>
            <option value="8ème Sec. Général">8ème Sec. Général</option>
            <option value="2ème Cciale et Gest.">2ème Cciale et Gest. </option>
          </select>

          <select
            onChange={(e) => setValues({ ...values, annee: e.target.value })}
          >
            <option>Type de côte</option>
            <option value="Periode_1">Première période</option>
            <option value="Periode_2">Deuxième période</option>
            <option value="Examen_1">Examen du premier semestre</option>
            <option value="Periode_3">Troisième période</option>
            <option value="Periode_4">Quatrième période</option>
            <option value="Examen_2">Examen du second semestre</option>
            <option value="Repechage">Répêchage</option>
          </select>

          <input type="number" placeholder="Saisir la côte de l'élève ici..." />
          <button>Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default ModifCote;
