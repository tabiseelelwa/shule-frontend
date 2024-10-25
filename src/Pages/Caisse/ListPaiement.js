import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const ListPamient = () => {
  return (
    <div className="listPaiement">
      <div className="head">
        <div className="titre">LES PAIEMENTS</div>
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
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td>150</td>
            <td>Minerval 1ère Tr.</td>
            <td>
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td>150</td>
            <td>Minerval 2ème Tr.</td>
            <td>
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td>150</td>
            <td>Minerval 2ème Tr.</td>
            <td>
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>12/10/2024</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td>150</td>
            <td>Minerval 2ème Tr.</td>
            <td>
              <Link to="/caisse/modif-paie/idPaie">
                <FaEdit style={{ color: "blue" }} />
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

export default ListPamient;
