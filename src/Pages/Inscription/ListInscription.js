import { FaEdit, FaInfoCircle, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListInscription = () => {
  return (
    <div className="listAppr">
      <div className="head">
        <div className="titre">LES INSCRIPTIONS</div>
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
            <th>Noms élèves</th>
            <th>Classe</th>
            <th>Option</th>
            <th>Section</th>
            <th>Date inscription</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>TABISEELELWA ESUBE Léon</td>
            <td>6ème CG</td>
            <td>Cciale</td>
            <td>Technique</td>
            <td>12/08/2023</td>
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
            <td>AMISI LUMONA Gilbert</td>
            <td>3ème MATH</td>
            <td>Scientifique</td>
            <td>Sciences</td>
            <td>12/08/2023</td>
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
            <td>MWIBE NGONGO</td>
            <td>3ème LP</td>
            <td>Latin philo</td>
            <td>Lettres</td>
            <td>13/08/2023</td>
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
            <td>ZAWADI KASHINDI Nestor</td>
            <td>4ème HP</td>
            <td>Pédagogie générale</td>
            <td>Pédagogie générale</td>
            <td>17/08/2023</td>
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
            <td>PATRICE MISIMA</td>
            <td>5ème CG</td>
            <td>Cciale</td>
            <td>Technique</td>
            <td>19/08/2023</td>
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

export default ListInscription;
