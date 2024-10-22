import CreatePaiement from "./Pages/Caisse/CreatePaiement";
import CreateApprenant from "./Pages/Inscription/CreateApprenant";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/Login";
import CaisseLayout from "./layout/CaisseLayout";
import InscriptLayout from "./layout/InscriptLayout";
import Profil from "./Pages/Caisse/profil";
import Introuvable from "./introuvable";
import ListPamient from "./Pages/Caisse/ListPaiement";
import ListApprenant from "./Pages/Inscription/ListApprenant";
import ModifEleve from "./Pages/Inscription/ModifEleve";
import ModifPaiement from "./Pages/Caisse/ModifPaiement";
import DetailsProfil from "./Pages/Caisse/DetailsProfil";
import ModifProfil from "./Pages/Caisse/ModifProfil";
import ListInscription from "./Pages/Inscription/ListInscription";

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
        path: "nouv-appr",
        element: <CreateApprenant />,
      },
      {
        path: "modif-apprenant/:idApprennant",
        element: <ModifEleve />,
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
        path: "nouv-paiement",
        element: <CreatePaiement />,
      },
      {
        path: "modif-paie/:idPaie",
        element: <ModifPaiement />,
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
