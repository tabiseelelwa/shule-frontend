import { createBrowserRouter, RouterProvider } from "react-router-dom";

// LAYOUTS
import CaisseLayout from "./layout/CaisseLayout";
import InscriptLayout from "./layout/InscriptLayout";
import AdminLayout from "./layout/AdminLayout";
import EnseignantLayout from "./layout/EnseignantLayout";

// CAISSE
import Profil from "./Views/Caisse/profil";
import ListPamient from "./Views/Caisse/ListPaiement";
import Depenses from "./Views/Caisse/Depenses";

// PROFIL
import DetailsProfil from "./Views/Caisse/DetailsProfil";
import ModifProfil from "./Views/Caisse/ModifProfil";

// INSCRIPTION
import ListApprenant from "./Views/Inscription/ListApprenant";
import ListInscription from "./Views/Inscription/ListInscription";

// ENSEIGNANT
import ListCotes from "./Views/enseignant/ListCotes";
import MaClasse from "./Views/enseignant/MaClasse";
import MesCours from "./Views/enseignant/MesCours";
import PreparationMatiere from "./Views/enseignant/PreparationMatiere";
import TypeCotation from "./Views/enseignant/TypeCotation";
import MesClasses from "./Views/enseignant/MesClasses";

// ADMINISTRATION
import Administration from "./Views/Admin/Administration";

import Login from "./Views/Login";
import Introuvable from "./introuvable";

import RapportEnseignant from "./Views/enseignant/RapportEnseignant";
import RapportCaisse from "./Views/Caisse/RapportCaisse";
import RapportInscription from "./Views/Inscription/RapportInscription";

import ListClasses from "./Views/Admin/classe/ListClasses";
import ListCours from "./Views/Admin/cours/ListCours";
import ListUser from "./Views/Admin/utilisateurs/ListUser";
import ListOptions from "./Views/Admin/option_section/ListOptions";
import ListSection from "./Views/Admin/section/ListSection";
import ListFrais from "./Views/Admin/frais/ListFrais";
import ListAnnee from "./Views/Admin/anne_scolaire/ListAnnee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InscriptLayout />,
    children: [
      {
        path: "",
        element: <ListInscription />,
      },
      {
        path: "apprenants",
        element: <ListApprenant />,
      },
      {
        path: "rapports",
        element: <RapportInscription />,
      },
      {
        path: "profil",
        element: <Profil />,
        children: [
          { path: "", element: <DetailsProfil /> },
          { path: "modif-profil", element: <ModifProfil /> },
        ],
      },
    ],
  },

  {
    path: "/caisse/",
    element: <CaisseLayout />,
    children: [
      {
        path: "",
        element: <ListPamient />,
      },
      {
        path: "depenses",
        element: <Depenses />,
      },
      {
        path: "rapports",
        element: <RapportCaisse />,
      },

      {
        path: "profil",
        element: <Profil />,
        children: [
          { path: "", element: <DetailsProfil /> },
          { path: "modif-profil", element: <ModifProfil /> },
        ],
      },
    ],
  },
  {
    path: "/enseignant",
    element: <EnseignantLayout />,
    children: [
      {
        path: "",
        element: <MesCours />,
      },
      {
        path: "ma-classe",
        element: <MaClasse />,
      },
      {
        path: "prepa-matieres",
        element: <PreparationMatiere />,
      },
      {
        path: "/enseignant/:cours/:niveau",
        element: <MesClasses />,
      },
      {
        path: "/enseignant/:cours/:niveau/:designClasse/:option",
        element: <TypeCotation />,
      },
      {
        path: "/enseignant/:cours/:niveau/:designClasse/:option/:nomType",
        element: <ListCotes />,
      },
      {
        path: "rapports",
        element: <RapportEnseignant />,
      },
      {
        path: "profil",
        element: <Profil />,
        children: [
          { path: "", element: <DetailsProfil /> },
          { path: "modif-profil", element: <ModifProfil /> },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Administration />,
        children: [
          {
            path: "classes",
            element: <ListClasses />,
          },
          {
            path: "enseignants",
            element: <ListUser />,
          },
          {
            path: "options",
            element: <ListOptions />,
          },
          {
            path: "sections",
            element: <ListSection />,
          },
          {
            path: "frais",
            element: <ListFrais />,
          },
          {
            path: "annee-scolaire",
            element: <ListAnnee />,
          },
          {
            path: "",
            element: <ListCours />,
          },
        ],
      },
      {
        path: "apprenants",
        element: <ListApprenant />,
      },
      {
        path: "inscriptions",
        element: <ListInscription />,
      },
      {
        path: "paiements",
        element: <ListPamient />,
      },
      {
        path: "depenses",
        element: <Depenses />,
      },
      {
        path: "profil",
        element: <Profil />,
        children: [
          { path: "", element: <DetailsProfil /> },
          { path: "modif-profil", element: <ModifProfil /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Introuvable />,
  },
  {
    path: "/connexion",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
