import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const CreateCours = ({ setModalAjoutCours }) => {
  const [values, setValues] = useState({
    designCours: "",
    titulaire: "",
    niveau: "",
    option: "",
  });

  const [options, setOptions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/options")
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/enseignants")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const nouvClasse = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/create_cours", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setModalAjoutCours(false);
  };
  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <form onSubmit={nouvClasse}>
            <div className="ctrl">
              <h4>Créer un cours</h4>
              <GoXCircle
                onClick={() => setModalAjoutCours(false)}
                style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              />
            </div>

            <input
              placeholder="Désignation du cours"
              onChange={(e) =>
                setValues({ ...values, designCours: e.target.value })
              }
            />

            <select
              onChange={(e) =>
                setValues({ ...values, titulaire: e.target.value })
              }
            >
              <option>Choisir le titulaire</option>
              {users.map((user, i) => {
                const nom = user.nomUser;
                const postnom = user.postnomUser;
                const prenom = user.prenomUser;
                return (
                  <option value={nom + " " + postnom + " " + prenom} key={i}>
                    {nom + " " + postnom + " " + prenom}
                  </option>
                );
              })}
            </select>

            <select
              onChange={(e) => setValues({ ...values, niveau: e.target.value })}
            >
              <option>Choisir le niveau</option>
              <option value="7eme">7eme</option>
              <option value="8eme">8eme</option>
              <option value="1ere">1ere</option>
              <option value="2eme">2eme</option>
              <option value="3eme">3eme</option>
              <option value="4eme">4eme</option>
            </select>

            <select
              onChange={(e) => setValues({ ...values, option: e.target.value })}
            >
              <option>Choisir l'option</option>
              {options.map((sect, i) => {
                return (
                  <option value={sect.designOption} key={i}>
                    {sect.designOption}
                  </option>
                );
              })}
            </select>

            <button>Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCours;
