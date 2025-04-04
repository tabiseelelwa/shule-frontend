import React, { useEffect, useState } from "react";
import {GoPencil, GoTrash } from "react-icons/go";
import AjoutSection from "./AjoutSection";
import axios from "axios";

const ListSection = () => {
  const [modalAjoutsection, setModalAjoutSection] = useState(false);
  const [sections, setSectons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sections")
      .then((res) => setSectons(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {modalAjoutsection ? (
        <AjoutSection setModalAjoutSection={setModalAjoutSection} />
      ) : (
        ""
      )}
      <div className="accueil-admin">
        <div className="title-btn">
          <span>LES SECTIONS</span>
          <button onClick={() => setModalAjoutSection(true)}>+</button>
        </div>
        <div className="tableau-body-accueil-admin">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "150px" }}>ID Section</th>
                <th>Désignation section</th>
                <th style={{ width: "100px" }}></th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, i) => {
                return (
                  <tr key={i}>
                    <td style={{ width: "150px" }}>{section.codeSection}</td>
                    <td>{section.designSection}</td>
                    <td style={{ width: "100px" }}>
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

export default ListSection;
