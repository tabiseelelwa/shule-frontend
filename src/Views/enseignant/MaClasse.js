import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";

const MaClasse = () => {
  const [eleves, setEleves] = useState([]);
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/maclasse")
      .then((res) => {
        setEleves(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filtreInscriptions = eleves.filter((element) =>
    Object.values(element).some((value) =>
      value.toString().toLowerCase().includes(recherche.toLowerCase())
    )
  );

  return (
    <div>
      <div className="head">
        <div className="filtreInscript">
          <input
            type="search"
            placeholder="Rechercher ..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Noms</th>
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
                Aucun élève
              </td>
            </tr>
          ) : (
            eleves.map((eleves, i) => {
              return (
                <tr key={i}>
                  <td style={{ width: "100px" }}>{eleves.idInscription}</td>
                  <td>{eleves.eleve}</td>
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
  );
};

export default MaClasse;
