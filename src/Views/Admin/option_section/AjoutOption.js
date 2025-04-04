import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";
import axios from "axios";

const AjoutOption = ({ setModalAjoutOption }) => {
  const [values, setValues] = useState({
    designOption: "",
    designSection: "",
  });

  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sections")
      .then((res) => {
        setSections(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const nouvOption = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/nouvoption", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setModalAjoutOption(false);
  };
  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <form onSubmit={nouvOption}>
            <div className="ctrl">
              <h4>Créer une option</h4>
              <GoXCircle
                onClick={() => setModalAjoutOption(false)}
                style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              />
            </div>

            <input
              placeholder="Désignation de l'option"
              onChange={(e) =>
                setValues({ ...values, designOption: e.target.value })
              }
            />

            <select
              onChange={(e) =>
                setValues({ ...values, designSection: e.target.value })
              }
            >
              <option>Choisir la section</option>
              {sections.map((sect, i) => {
                return (
                  <option value={sect.designSection} key={i}>
                    {sect.designSection}
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

export default AjoutOption;
