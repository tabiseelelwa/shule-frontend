import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const CreatePaiement = () => {
  return (
    <div className="paiement">
      <div className="head">
        <div className="titre">PAIEMENT</div>
        <div className="filtre">
          <div>
            <label htmlFor="">Tous</label>
            <select name="" id=""></select>
          </div>
          <div>
            <label htmlFor="">Paiements classe</label>
            <select name="" id=""></select>
          </div>
          <div>
            <label htmlFor="">Paiements section</label>
            <select name="" id=""></select>
          </div>
          <div>
            <label htmlFor="">Paiements élève</label>
            <select name="" id=""></select>
          </div>
          <div>
            <label htmlFor="">Paiements agent</label>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="btnAjout">
          <Link>Nouveau paiement</Link>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Montant</th>
            <th>Motif</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA</td>
            <td>Léon</td>
            <td>350</td>
            <td>Inscription</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA</td>
            <td>Léon</td>
            <td>150</td>
            <td>Minerval 1ère Tr.</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA</td>
            <td>Léon</td>
            <td>150</td>
            <td>Minerval 2ème Tr.</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA</td>
            <td>Léon</td>
            <td>150</td>
            <td>Minerval 2ème Tr.</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA</td>
            <td>Léon</td>
            <td>150</td>
            <td>Minerval 2ème Tr.</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreatePaiement;
