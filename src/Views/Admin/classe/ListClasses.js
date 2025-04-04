import React, { useEffect, useState } from "react";
import { GoPencil, GoTrash } from "react-icons/go";
import Ajoutclasse from "./Ajoutclasse";
import axios from "axios";

const ListClasses = () => {
  const [modalAjoutClasse, setModalAjoutClasse] = useState(false);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/classes")
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {modalAjoutClasse ? (
        <Ajoutclasse setModalAjoutClasse={setModalAjoutClasse} />
      ) : (
        ""
      )}
      <div className="accueil-admin">
        <div className="title-btn">
          <span>LES CLASSES</span>
          <button onClick={() => setModalAjoutClasse(true)}>+</button>
        </div>
        <div className="tableau-body-accueil-admin">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID Classe</th>
                <th>Désignation</th>
                <th>niveau</th>
                <th>Option</th>
                <th>Titulaire</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classe, i) => {
                return (
                  <tr key={i}>
                    <td>{classe.codeClasse}</td>
                    <td>{classe.designClasse}</td>
                    <td>{classe.niveau}</td>
                    <td>{classe.optio}</td>
                    <td>{classe.titulaire}</td>
                    <td>
                      <div className="btnAction">
                        <button>
                          <GoPencil style={{ color: "blue" }} />
                        </button>
                        <button>
                          <GoTrash style={{ color: "red" }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListClasses;
