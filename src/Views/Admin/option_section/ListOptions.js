import React, { useEffect, useState } from "react";
import { GoPencil, GoTrash } from "react-icons/go";
import AjoutOption from "./AjoutOption";
import axios from "axios";

const ListOptions = () => {
  const [modalAjoutOption, setModalAjoutOption] = useState(false);
  const [option, setOptions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/options")
      .then((res) => setOptions(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {modalAjoutOption ? (
        <AjoutOption setModalAjoutOption={setModalAjoutOption} />
      ) : (
        ""
      )}
      <div className="accueil-admin">
        <div className="title-btn">
          <span>LES OPTIONS</span>
          <button onClick={() => setModalAjoutOption(true)}>+</button>
        </div>
        <div className="tableau-body-accueil-admin">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID option</th>
                <th>Désignation de l'option</th>
                <th>section</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {option.map((option, i) => {
                return (
                  <tr key={i}>
                    <td style={{ width: "150px" }}>{option.codeOption}</td>
                    <td>{option.designOption}</td>
                    <td>{option.section}</td>
                    <td>
                      <div className="btnAction">
                        <button>
                          <GoPencil style={{ color: "blue" }} />
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

export default ListOptions;
