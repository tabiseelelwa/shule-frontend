import React from "react";
import { FaEdit, FaInfoCircle, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Depenses = () => {
  return (
    <div className="listPaiement">
      <div className="head">
        <div className="titre">LES DEPENSES</div>
        <div className="filtre">
          <input type="search" placeholder="Rechercher" />
        </div>
        <div className="btnAjout">
          <Link to="/caisse/nouv-paiement">Nouveau paiement</Link>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Motif</th>
            <th>Montant</th>
            <th>Agent</th>
            <th>Bénéficiaire</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/10/2024</td>
            <td>Achat fournitures bureaux</td>
            <td>200 $</td>
            <td>TABISEELELWA Léon</td>
            <td>MSOSHI Placide</td>
            <td className="btnAction">
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>Achat carburant</td>
            <td>10</td>
            <td>TABISEELELWA Léon</td>
            <td>ILANGYI Exaucé</td>
            <td className="btnAction">
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>Prise en charge lauréats 2023-2024</td>
            <td>100</td>
            <td>FATUMA Clémance</td>
            <td>SUNGULA Cosmos</td>
            <td className="btnAction">
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>Achat briques constr. mur</td>
            <td>150</td>
            <td>FATUMA Clémance</td>
            <td>BYAOMBE William</td>
            <td className="btnAction">
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>Achat ampoules pour salles de classe</td>
            <td>12</td>
            <td>TABISEELELWA Léon</td>
            <td>ILANGYI Exaucé</td>
            <td className="btnAction">
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btnCtrl">
        <p className="btnPrecedent">Précédent</p>
        <p className="pageActive">2</p>
        <p className="btnSuivant">Suivant</p>
      </div>
    </div>
  );
};

export default Depenses;
