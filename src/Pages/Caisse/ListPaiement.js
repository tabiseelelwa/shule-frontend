import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const ListPamient = () => {
  return (
    <div className="listPaiement">
      <div className="head">
        <div className="titre">LES PAIEMENTS</div>
        <div className="filtre">
          <select name="" id="">
            <option value="">Tous</option>
            <option value="">Classe</option>
            <option value="">Section</option>
            <option value="">Elève</option>
            <option value="">Agent</option>
          </select>
        </div>
        <div className="btnAjout">
          <Link to="/caisse/nouv-paiement">Nouveau paiement</Link>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Apprenant</th>
            <th>Montant</th>
            <th>Motif</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td>350</td>
            <td>Inscription</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td >150</td>
            <td>Minerval 1ère Tr.</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td >150</td>
            <td>Minerval 2ème Tr.</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td>150</td>
            <td>Minerval 2ème Tr.</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
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

export default ListPamient;
