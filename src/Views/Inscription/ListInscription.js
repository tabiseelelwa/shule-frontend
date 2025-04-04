import { useEffect, useState } from "react";
import AjoutInscription from "./AjoutInscription";
import ModifInscription from "./ModifInscription";
import axios from "axios";
import { GoInfo, GoPencil, GoTrash } from "react-icons/go";
import DetailsInscription from "./DetailsInscription";

const ListInscription = () => {
  const [modalInscription, setModalInscription] = useState(false);
  const [modalModif, setModalModif] = useState(false);
  const [modalDetailsInscription, setModalDetailsInscription] = useState(false);

  const [incription, setInscription] = useState([]);
  const [idInscription, setIdInscription] = useState("");

  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/list/inscriptions")
      .then((res) => {
        setInscription(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const affichInscription = () => {
    setModalDetailsInscription(true);
  };

  const modifInscr = () => {
    setModalModif(true);
  };

  const filtreInscriptions = incription?.filter((element) =>
    Object.values(element).some((value) =>
      value.toString().toLowerCase().includes(recherche.toLowerCase())
    )
  );

  return (
    <div className="listAppr">
      {modalInscription ? (
        <AjoutInscription setModalInscription={setModalInscription} />
      ) : null}

      {modalModif ? (
        <ModifInscription
          setModalModif={setModalModif}
          idInscription={idInscription}
        />
      ) : null}

      {modalDetailsInscription ? (
        <DetailsInscription
          setModalDetailsInscription={setModalDetailsInscription}
          idInscription={idInscription}
        />
      ) : (
        ""
      )}

      <div className="head">
        <div className="titre">LES INSCRIPTIONS</div>
        <div className="filtre">
          <input
            type="search"
            placeholder="Rechercher ..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
        <div className="btnAjout">
          <button onClick={() => setModalInscription(true)}>
            Nouvelle inscription
          </button>
        </div>
      </div>

      <div className="tableau-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Noms élèves</th>
              <th>Classe</th>
              <th>Option</th>
              <th>Date inscription</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtreInscriptions.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    textAlign: "center",
                  }}
                >
                  Aucun élément ne correspond à votre recherche
                </td>
              </tr>
            ) : (
              filtreInscriptions.map((inscr, i) => {
                return (
                  <tr key={i}>
                    <td>{i < 10 ? `0${i + 1}` : i}</td>

                    <td>{inscr.eleve}</td>

                    <td>
                      {inscr.classe.length > 15
                        ? inscr.classe.substring(0, 15) + "..."
                        : inscr.classe}
                    </td>

                    <td>
                      {inscr.optio.length > 35
                        ? inscr.optio.substring(0, 35) + "..."
                        : inscr.optio}
                    </td>

                    <td>{inscr.dateInscription}</td>

                    <td className="btnAction">
                      <div className="btnAction">
                        <button>
                          <GoPencil
                            style={{ color: "blue" }}
                            onClick={() =>
                              modifInscr(setIdInscription(inscr.idInscription))
                            }
                          />
                        </button>
                        <button>
                          <GoInfo
                            style={{ color: "blue" }}
                            onClick={() =>
                              affichInscription(
                                setIdInscription(inscr.idInscription)
                              )
                            }
                          />
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

export default ListInscription;
