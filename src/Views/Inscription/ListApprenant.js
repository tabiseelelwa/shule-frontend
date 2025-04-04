import { useEffect, useState } from "react";
import CreateApprenant from "./CreateApprenant";
import ModifEleve from "./ModifEleve";
import axios from "axios";
import { GoInfo, GoPencil, GoTrash } from "react-icons/go";
import DetailsApprenant from "./DetailsApprenant";

const ListApprenant = () => {
  const [modalAjoutEleve, setModalAjoutEleve] = useState(false);
  const [modalModifEleve, setModalModifEleve] = useState(false);
  const [modalDetailsApprenant, setModalDetailsApprenant] = useState(false);
  const [matricule, setMatricule] = useState("");

  const [eleves, setEleves] = useState([]);
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/eleves")
      .then((res) => {
        setEleves(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const ajoutApp = () => {
    setModalModifEleve(true);
  };
  const affichDetails = () => {
    setModalDetailsApprenant(true);
  };

  const filtreEleves = eleves.filter((element) =>
    Object.values(element).some((value) =>
      value.toString().toLowerCase().includes(recherche.toLowerCase())
    )
  );

  return (
    <div className="listAppr">
      {modalAjoutEleve ? (
        <CreateApprenant setModalAjoutEleve={setModalAjoutEleve} />
      ) : null}

      {modalModifEleve ? (
        <ModifEleve
          setModalModifEleve={setModalModifEleve}
          matricule={matricule}
        />
      ) : null}

      {modalDetailsApprenant ? (
        <DetailsApprenant
          setModalDetailsApprenant={setModalDetailsApprenant}
          matricule={matricule}
        />
      ) : (
        ""
      )}

      <div className="head">
        <div className="titre">LES APPRENANTS</div>
        <div className="filtre">
          <input
            type="search"
            placeholder="Rechercher ..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
        <div className="btnAjout">
          <button onClick={() => setModalAjoutEleve(true)}>
            Ajouter un apprenant
          </button>
        </div>
      </div>
      <div className="tableau-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Postnom</th>
              <th>Prénom</th>
              <th>Sexe</th>
              <th>Téléphone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtreEleves.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  style={{
                    textAlign: "center",
                  }}
                >
                  Aucun élément ne correspond à votre recherche
                </td>
              </tr>
            ) : (
              filtreEleves.map((eleve, index) => {
                return (
                  <tr key={index}>
                    <td>{index < 10 ? `0${index + 1}` : index}</td>
                    <td>{eleve.nomappr}</td>
                    <td>{eleve.postnomappr}</td>
                    <td>{eleve.prenomappr}</td>
                    <td>{eleve.sexeappr}</td>
                    <td>{eleve.telephone}</td>
                    <td>
                      <div className="btnAction">
                        <button
                          onClick={() =>
                            ajoutApp(setMatricule(eleve.matricule))
                          }
                        >
                          <GoPencil style={{ color: "blue" }} />
                        </button>
                        <button
                          onClick={() =>
                            affichDetails(setMatricule(eleve.matricule))
                          }
                        >
                          <GoInfo style={{ color: "blue" }} />
                        </button>
                        <button>
                          <GoTrash style={{ color: "red" }} />
                        </button>
                      </div>
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

export default ListApprenant;
