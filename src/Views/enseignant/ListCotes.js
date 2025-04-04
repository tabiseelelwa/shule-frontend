/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import AjoutCote from "./AjoutCote";
import axios from "axios";
import { useParams } from "react-router-dom";

const ListCotes = () => {
  const [cotes, setCotes] = useState([]);
  const [modalAjoutCote, setModalAjoutCote] = useState(false);
  const [recherche, setRecherche] = useState("");

  const { cours, niveau, designClasse, option, nomType } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/cote/${cours}/${niveau}/${designClasse}/${option}/${nomType}`
      )
      .then((res) => {
        setCotes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filtreCotes = cotes.filter((element) =>
    Object.values(element).some((value) =>
      value.toString().toLowerCase().includes(recherche.toLowerCase())
    )
  );
  return (
    <div>
      {modalAjoutCote ? (
        <AjoutCote setModalAjoutCote={setModalAjoutCote} />
      ) : (
        ""
      )}
      <div className="head">
        <div className="titre">COTATION PREMIERE PERIODE</div>
        <div className="filtreInscript">
          <input
            type="search"
            placeholder="Rechercher ..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
        <div className="btnAjoutInscript">
          <button onClick={() => setModalAjoutCote(true)}>Nouvelle côte</button>
        </div>
      </div>
      <div className="tableau-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Noms de l'élève</th>
              <th>Côte</th>
              <th>Max</th>
              <th>Pourcentages</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtreCotes.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    textAlign: "center",
                  }}
                >
                  Aucun élève côté
                </td>
              </tr>
            ) : (
              cotes.map((cote, i) => {
                return (
                  <tr key={i}>
                    <td></td>
                    <td>{cote.eleve}</td>
                    <td>{cote.cote}</td>
                    <td>{cote.max}</td>
                    <td>{(cote.cote * 100) / cote.max + "%"}</td>
                    <td>
                      <GoPencil style={{ color: "blue", cursor: "pointer" }} />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCotes;
