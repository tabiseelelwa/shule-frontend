import React, { useEffect, useState } from "react";
import { GoInfo, GoPencil, GoTrash } from "react-icons/go";
import CreateCours from "./CreateCours";
import axios from "axios";

const ListCours = () => {
  const [modalAjoutCours, setModalAjoutCours] = useState(false);
  const [cours, setCours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/lescours")
      .then((res) => setCours(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {modalAjoutCours ? (
        <CreateCours setModalAjoutCours={setModalAjoutCours} />
      ) : (
        ""
      )}
      <div className="accueil-admin">
        <div className="title-btn">
          <span>LES COURS</span>
          <button onClick={() => setModalAjoutCours(true)}>+</button>
        </div>
        <div className="tableau-body-accueil-admin">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Désignation cours</th>
                <th>Titulaire</th>
                <th>Niveau</th>
                <th>Option</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cours.map((cours, i) => {
                return (
                  <tr key={i}>
                    <td>{cours.designCours}</td>
                    <td>{cours.titulaire}</td>
                    <td>{cours.niveau}</td>
                    <td>{cours.Optio}</td>
                    <td>
                      <div className="btnAction">
                        <button>
                          <GoPencil style={{ color: "blue" }} />
                        </button>
                        <button>
                          <GoInfo style={{ color: "blue" }} />
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

export default ListCours;
