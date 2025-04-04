/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const ModifInscription = ({ setModalModif, idInscription }) => {
  // const [nomEleves, setNomsEleves] = useState([]);
  const [classes, setClasses] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/options")
      .then((res) => setOptions(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/eleves")
  //     .then((res) => setNomsEleves(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/classes")
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    eleve: "",
    option: "",
    classe: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/list/inscription/${idInscription}`)
      .then((res) => {
        setValues({
          ...values,
          eleve: res.data[0].eleve,
          option: res.data[0].optio,
          classe: res.data[0].classe,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const modifInscription = (e) => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:5000/api/modif/inscription/${idInscription}`,
        values
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setModalModif(false);
  };
  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={modifInscription}>
          <div className="ctrl">
            <h4>Modifier inscription</h4>
            <GoXCircle
              onClick={() => setModalModif(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>
          {/* <select
            value={values.eleve}
            onChange={(e) => setValues({ ...values, eleve: e.target.value })}
          >
            <option>Choisir l'élève</option>
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
          </select> */}

          <select
            value={values.option}
            onChange={(e) => setValues({ ...values, option: e.target.value })}
          >
            <option>Choisir l'option</option>
            {options.map((option, i) => {
              return (
                <option value={option.designOption} key={i}>
                  {option.designOption}
                </option>
              );
            })}
          </select>

          <select
            value={values.classe}
            onChange={(e) => setValues({ ...values, classe: e.target.value })}
          >
            <option>Choisir la classe</option>
            {classes.map((classe, i) => {
              return (
                <option value={classe.designClasse} key={i}>
                  {classe.designClasse}
                </option>
              );
            })}
          </select>

          <button>Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default ModifInscription;
