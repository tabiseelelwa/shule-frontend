import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListApprenant = () => {
  return (
    <div className="listAppr">
      <div className="head">
        <div className="titre">LES APPRENANTS</div>
        <div className="filtre">
          <select name="" id="">
            <option value="">Tous les élèves</option>
            <option value="">Classe</option>
            <option value="">Section</option>
            <option value="">Elève</option>
            <option value="">Agent</option>
          </select>
        </div>
        <div className="btnAjout">
          <Link to="/caisse/nouv-paiement">Ajouter un apprenant</Link>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Postnom</th>
            <th>Prénom</th>
            <th>Date inscription</th>
            <th>Téléphone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>15/03/2023</td>
            <td>+243 822 077 545</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>25/03/2023</td>
            <td>+243 978 024 163</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>04/04/2023</td>
            <td>+243 853 664 055</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>12/09/2024</td>
            <td>+243 999 154 397</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>16/10/2024</td>
            <td>+243 999 913 512</td>
            <td>
              <FaEdit style={{ color: "blue" }} />
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btnCtrl">
        <button className="btnPrecedent">Précédent</button>
        <p className="pageActive">2</p>
        <button className="btnSuivant">Suivant</button>
      </div>
    </div>
  );
};

export default ListApprenant;
