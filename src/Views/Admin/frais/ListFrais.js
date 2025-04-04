import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoInfo, GoPencil, GoTrash } from "react-icons/go";
import AjoutFrais from "./AjoutFrais";

const ListFrais = () => {
  const [modalAjoutFrais, setModalAjoutFrais] = useState(false);
  const [frais, setFraiss] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/list/frais")
      .then((res) => setFraiss(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {modalAjoutFrais ? (
        <AjoutFrais setModalAjoutFrais={setModalAjoutFrais} />
      ) : (
        ""
      )}
      <div className="accueil-admin">
        <div className="title-btn">
          <span>LES FRAIS</span>
          <button onClick={() => setModalAjoutFrais(true)}>+</button>
        </div>
        <div className="tableau-body-accueil-admin">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "150px" }}>Code frais</th>
                <th>Désignation frais</th>
                <th>Montant</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {frais.map((cours, i) => {
                return (
                  <tr key={i}>
                    <td style={{ width: "150px" }}>{cours.idFrais}</td>
                    <td>{cours.designFrais}</td>
                    <td>{cours.montFrais}</td>
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

export default ListFrais;
