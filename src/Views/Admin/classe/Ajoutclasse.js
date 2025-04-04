import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const Ajoutclasse = ({ setModalAjoutClasse }) => {
  const [values, setValues] = useState({
    designClasse: "",
    niveau: "",
    designOption: "",
    titulaire: "",
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
      .get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const nouvClasse = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/create_classe", values)
      .then(() => {})
      .catch((err) => console.log(err));
    setModalAjoutClasse(false);
  };
  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <form onSubmit={nouvClasse}>
            <div className="ctrl">
              <h4>Créer une classe</h4>
              <GoXCircle
                onClick={() => setModalAjoutClasse(false)}
                style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              />
            </div>

            <input
              placeholder="Désignation de la classe"
              onChange={(e) =>
                setValues({ ...values, designClasse: e.target.value })
              }
            />

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
              onChange={(e) =>
                setValues({ ...values, designOption: e.target.value })
              }
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
            <select
              onChange={(e) =>
                setValues({ ...values, designOption: e.target.value })
              }
            >
              <option>Choisir le titulaire</option>
              {users.map((user, i) => {
                return (
                  <option value={user.nomUser + " " + user.postnomUser} key={i}>
                    {user.nomUser + " " + user.postnomUser}
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

export default Ajoutclasse;
