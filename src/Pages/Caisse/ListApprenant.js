import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListApprenant = () => {
  return (
    <div className="listAppr">
      <div className="head">
        <div className="titre">LES APPRENANTS</div>
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
            <th>Nom</th>
            <th>Postnom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>+243 822 077 545</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td>150</td>
            <td>Minerval 1ère Tr.</td>
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

export default ListApprenant;
