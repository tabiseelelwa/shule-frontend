import axios from "axios";
import React, { useEffect, useState } from "react";
import AjoutAnnee from "./AjoutAnnee";
import { GoInfo, GoPencil, GoTrash } from "react-icons/go";

const ListAnnee = () => {
  const [modalAjoutFrais, setModalAjoutAnnee] = useState(false);
  const [annee, setAnnee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/list/ann-acad")
      .then((res) => setAnnee(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {modalAjoutFrais ? (
        <AjoutAnnee setModalAjoutAnnee={setModalAjoutAnnee} />
      ) : (
        ""
      )}
      <div className="accueil-admin">
        <div className="title-btn">
          <span>LES ANNEES SCOLAIRES</span>
          <button onClick={() => setModalAjoutAnnee(true)}>+</button>
        </div>
        <div className="tableau-body-accueil-admin">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "150px" }}>Code année</th>
                <th>Année académique</th>
                <th>Statut</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {annee.map((cours, i) => {
                return (
                  <tr key={i}>
                    <td style={{ width: "150px" }}>{cours.idAnnee}</td>
                    <td>{cours.designAnnee}</td>
                    <td>{cours.statut}</td>
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

export default ListAnnee;
