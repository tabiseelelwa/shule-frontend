import React, { useEffect, useState } from "react";
import { GoInfo, GoPencil, GoTrash } from "react-icons/go";
import CreateDepense from "./CreateDepense";
import axios from "axios";
import ModifDepense from "./ModifDepense";
import DetailsDepense from "./DetailsDepense";

const Depenses = () => {
  const [modalAjoutdepense, setModalAjoutDepense] = useState(false);
  const [modalModifdepense, setModalModifDepense] = useState(false);
  const [modalDetailsDepenses, setModalDetailsDepenses] = useState(false);

  const [idDepense, setIdDepense] = useState("");
  const [depenses, setDepense] = useState([]);
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/depenses")
      .then((res) => setDepense(res.data))
      .catch((err) => console.log(err));
  }, []);

  const modifDepense = () => {
    setModalModifDepense(true);
  };

  const affichDepense = () => {
    setModalDetailsDepenses(true);
  };

  const filtreDepenses = depenses.filter((element) =>
    Object.values(element).some((value) =>
      value.toString().toLowerCase().includes(recherche.toLowerCase())
    )
  );
  return (
    <div className="listPaiement">
      {modalAjoutdepense ? (
        <CreateDepense setModalAjoutDepense={setModalAjoutDepense} />
      ) : (
        ""
      )}

      {modalModifdepense ? (
        <ModifDepense
          setModalModifDepense={setModalModifDepense}
          idDepense={idDepense}
        />
      ) : (
        ""
      )}

      {modalDetailsDepenses ? (
        <DetailsDepense
          setModalDetailsDepenses={setModalDetailsDepenses}
          idDepense={idDepense}
        />
      ) : (
        ""
      )}
      <div className="head">
        <div className="titre">LES DEPENSES</div>
        <div className="filtre">
          <input
            type="search"
            placeholder="Rechercher"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
        <div className="btnAjout">
          <button onClick={() => setModalAjoutDepense(true)}>
            Nouvelle dépense
          </button>
        </div>
      </div>
      <div className="tableau-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Motif</th>
              <th>Montant</th>
              <th>Bénéficiaire</th>
              <th>Agent</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtreDepenses.map((depense, index) => {
              const date = depense.dateDepense;
              const motif = depense.motifDepense;

              return (
                <tr key={index}>
                  <td>{date.substring(0, 10)}</td>
                  <td>
                    {motif.length > 20
                      ? motif.substring(0, 30) + " ..."
                      : motif}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {depense.montantDepense}
                  </td>
                  <td>{depense.benefDepense}</td>
                  <td>{depense.agent}</td>
                  <td className="btnAction">
                    <button
                      onClick={() =>
                        modifDepense(setIdDepense(depense.idDepense))
                      }
                    >
                      <GoPencil style={{ color: "blue" }} />
                    </button>
                    <button
                      onClick={() =>
                        affichDepense(setIdDepense(depense.idDepense))
                      }
                    >
                      <GoInfo style={{ color: "blue" }} />
                    </button>
                    <button>
                      <GoTrash style={{ color: "red" }} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Depenses;
