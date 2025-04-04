/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const ModifEleve = ({ setModalModifEleve, matricule }) => {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/eleve/${matricule}`)
      .then((res) => {
        setValues({
          ...values,
          nom: res.data[0].nomappr,
          postnom: res.data[0].postnomappr,
          prenom: res.data[0].prenomappr,
          sexe: res.data[0].sexeappr,
          adresse: res.data[0].adresseappr,
          telephone: res.data[0].telephone,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    nom: "",
    postnom: "",
    prenom: "",
    sexe: "",
    adresse: "",
    telephone: "",
  });

  const modifAppr = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/eleve/${matricule}`, values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setModalModifEleve(false);
  };

  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={modifAppr}>
          <div className="ctrl">
            <h5>Modifier {values.nom + " " + values.prenom}</h5>
            <GoXCircle
              onClick={() => setModalModifEleve(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>
          <input
            type="text"
            placeholder="Nom de l'élève"
            value={values.nom}
            onChange={(e) => setValues({ ...values, nom: e.target.value })}
            autoFocus={true}
          />
          <input
            type="text"
            placeholder="Postnom de l'élève"
            value={values.postnom}
            onChange={(e) => setValues({ ...values, postnom: e.target.value })}
          />
          <input
            type="text"
            placeholder="Prénom de l'élève"
            value={values.prenom}
            onChange={(e) => setValues({ ...values, prenom: e.target.value })}
          />
          <select
            name=""
            value={values.sexe}
            onChange={(e) => setValues({ ...values, sexe: e.target.value })}
          >
            <option>Choisir le sexe</option>
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
          </select>
          <input
            type="text"
            placeholder="Adresse de résidence"
            value={values.adresse}
            onChange={(e) => setValues({ ...values, adresse: e.target.value })}
          />
          <input
            type="text"
            placeholder="Téléphone"
            value={values.telephone}
            onChange={(e) =>
              setValues({ ...values, telephone: e.target.value })
            }
          />
          <div id="bouton">
            <button>Modifier</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifEleve;
