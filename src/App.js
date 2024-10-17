import CreatePaiement from "./Pages/Caisse/CreatePaiement";
import CreateApprenant from "./Pages/Caisse/CreateApprenant";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/Login";
import CaisseLayout from "./layout/CaisseLayout";
import Profil from "./Pages/Caisse/profil";
import Introuvable from "./introuvable";
import ListPamient from "./Pages/Caisse/ListPaiement";
import ListApprenant from "./Pages/Caisse/ListApprenant";
import ModifEleve from "./Pages/Caisse/ModifEleve";
import ModifPaiement from "./Pages/Caisse/ModifPaiement";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <Introuvable />,
  },
  {
    path: "/connexion",
    element: <Login />,
  },
  {
    path: "/caisse",
    element: <CaisseLayout />,
    children: [
      {
        path: "",
        element: <ListApprenant />,
      },
      {
        path: "nouv-appr",
        element: <CreateApprenant />,
      },
      {
        path: "nouv-paiement",
        element: <CreatePaiement />,
      },
      {
        path: "paiements",
        element: <ListPamient />,
      },
      {
        path: "modif-paie",
        element: <ModifPaiement />,
      },
      {
        path: "modif-apprenant",
        element: <ModifEleve />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
    ],
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
