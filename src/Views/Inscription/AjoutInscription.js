import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const AjoutInscription = ({ setModalInscription }) => {
  const [sections, setSections] = useState([]);
  const [options, setOptions] = useState([]);
  const [classes, setClasses] = useState([]);
  const [nomEleves, setNomsEleves] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sections")
      .then((res) => setSections(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/options")
      .then((res) => setOptions(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/classes")
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/eleves")
      .then((res) => setNomsEleves(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    eleve: "",
    section: "",
    classe: "",
    annee: "",
  });

  const nouvInscription = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/nouvinscription", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setModalInscription(false);
  };

  return (
    <div className="modal">
      <div className="modalWrapper">
        <form onSubmit={nouvInscription}>
          <div className="ctrl">
            <h4>Nouvelle inscription</h4>
            <GoXCircle
              onClick={() => setModalInscription(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>

          <select
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
          </select>

          <select
            onChange={(e) => setValues({ ...values, section: e.target.value })}
          >
            <option>Choisir la section</option>
            {sections.map((section, i) => {
              return (
                <option value={section.designSection} key={i}>
                  {section.designSection}
                </option>
              );
            })}
          </select>

          <select
            onChange={(e) => setValues({ ...values, section: e.target.value })}
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

          <select
            onChange={(e) => setValues({ ...values, annee: e.target.value })}
          >
            <option>Année académique</option>
            <option value="2025/2026">2025/2026</option>
          </select>
          <button>Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default AjoutInscription;
