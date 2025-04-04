import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoInfo, GoPencil, GoTrash } from "react-icons/go";
import AjoutUser from "./AjoutUser";

const ListEnseignant = () => {
  const [modalAjoutUser, setModalAjoutUser] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {modalAjoutUser ? (
        <AjoutUser setModalAjoutUser={setModalAjoutUser} />
      ) : (
        ""
      )}
      <div className="accueil-admin">
        <div className="title-btn">
          <span>LES UTILISATEURS</span>
          <button onClick={() => setModalAjoutUser(true)}>+</button>
        </div>
        <div className="tableau-body-accueil-admin">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Postnom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                return (
                  <tr key={i}>
                    <td>{user.nomUser}</td>
                    <td>{user.postnomUser}</td>
                    <td>{user.prenomUser}</td>
                    <td>{user.email}</td>
                    <td>{user.telephone}</td>
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

export default ListEnseignant;
