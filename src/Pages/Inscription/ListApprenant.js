import { FaEdit, FaInfoCircle, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListApprenant = () => {
  return (
    <div className="listAppr">
      <div className="head">
        <div className="titre">LES APPRENANTS</div>
        <div className="filtreInscript">
          <input type="search" placeholder="Rechercher un élève par son nom" />
        </div>
        <div className="btnAjoutInscript">
          <Link to="/nouv-appr">Ajouter un apprenant</Link>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Postnom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>+243 822 077 545</td>
            <td>26, av. Nguma, q. Joli parc, c. Ngaliema</td>
            <td className="btnAction">
              <Link to="/modif-apprenant/idApprenant">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>+243 978 024 163</td>
            <td>135, av. Nkoyi moke, q. Maman yemo, c. Ngaliema</td>
            <td className="btnAction">
              <Link to="/modif-apprenant/idApprenant">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>+243 853 664 055</td>
            <td>12, av. Mbenseke, q. Basoko, c. Kintambo</td>
            <td className="btnAction">
              <Link to="/modif-apprenant/idApprenant">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>+243 999 154 397</td>
            <td>2573, Blvd 30 jn, Ngaliema</td>
            <td className="btnAction">
              <Link to="/modif-apprenant/idApprenant">
                <FaEdit style={{ color: "blue" }} />
              </Link>
              <Link to="/modif-apprenant/idApprenant">
                <FaInfoCircle style={{ color: "blue" }} />
              </Link>
              <FaTrash style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>TABISEELELWA</td>
            <td>ESUBE</td>
            <td>Léon</td>
            <td>+243 999 913 512</td>
            <td>163, av. Colonel Mondjiba, q. Basoko, c. Kintambo</td>
            <td className="btnAction">
              <Link to="/modif-apprenant/idApprenant">
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
      <div className="btnCtrlInscript">
        <p className="btnPrecedent">Précédent</p>
        <p className="pageActive">2</p>
        <p className="btnSuivant">Suivant</p>
      </div>
    </div>
  );
};

export default ListApprenant;
