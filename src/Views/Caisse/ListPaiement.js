import { useEffect, useState } from "react";
import { GoInfo, GoPencil, GoTrash } from "react-icons/go";
import CreatePaiement from "./CreatePaiement";
import axios from "axios";
import ModifPaiement from "./ModifPaiement";
import DetailsPaiement from "./DetailsPaiement";
const ListPamient = () => {
  const [modalAjoutPaiement, setModalAjoutPaiement] = useState(false);
  const [modalModifPaiement, setModalModifPaiement] = useState(false);
  const [modalDetailsPaiement, setModalDetailsPaiement] = useState(false);
  const [numPaiement, setNumPaiement] = useState("");
  const [paiments, setPaiements] = useState([]);
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/paiements")
      .then((res) => setPaiements(res.data))
      .catch((err) => console.log(err));
  }, []);

  const modifPaiement = () => {
    setModalModifPaiement(true);
  };

  const affichDetails = () => {
    setModalDetailsPaiement(true);
  };

  const filtrePaiements = paiments.filter((element) =>
    Object.values(element).some((value) =>
      value.toString().toLowerCase().includes(recherche.toLowerCase())
    )
  );
  return (
    <div className="listPaiement">
      {modalAjoutPaiement ? (
        <CreatePaiement setModalAjoutPaiement={setModalAjoutPaiement} />
      ) : (
        ""
      )}

      {modalModifPaiement ? (
        <ModifPaiement
          setModalModifPaiement={setModalModifPaiement}
          numPaiement={numPaiement}
        />
      ) : (
        ""
      )}

      {modalDetailsPaiement ? (
        <DetailsPaiement
          setModalDetailsPaiement={setModalDetailsPaiement}
          numPaiement={numPaiement}
        />
      ) : (
        ""
      )}
      <div className="head">
        <div className="titre">LES PAIEMENTS</div>
        <div className="filtre">
          <input type="search" placeholder="Rechercher" value={recherche}
            onChange={(e) => setRecherche(e.target.value)}/>
        </div>
        <div className="btnAjout">
          <button onClick={() => setModalAjoutPaiement(true)}>
            Nouveau paiement
          </button>
        </div>
      </div>
      <div className="tableau-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Apprenant</th>
              <th>Motif</th>
              <th>Montant</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtrePaiements.map((paiment, i) => {
              return (
                <tr key={i}>
                  <td>{paiment.datePaiement}</td>
                  <td>{paiment.apprenant}</td>
                  <td>{paiment.motifPaiement}</td>
                  <td>{paiment.montantPaiement}</td>
                  <td className="btnAction">
                    <button
                      onClick={() =>
                        modifPaiement(setNumPaiement(paiment.numPaiement))
                      }
                    >
                      <GoPencil style={{ color: "blue" }} />
                    </button>
                    <button
                      onClick={() =>
                        affichDetails(setNumPaiement(paiment.numPaiement))
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

export default ListPamient;
