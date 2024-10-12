import CreatePaiement from "./Pages/Caisse/CreatePaiement";
import CreateApprenant from "./Pages/Caisse/CreateApprenant";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/Login";
import CaisseLayout from "./layout/CaisseLayout";
import Profil from "./Pages/Caisse/profil";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/caisse",
    element: <CaisseLayout />,
    children: [
      {
        path: "",
        element: <CreateApprenant />,
      },
      {
        path: "paiement",
        element: <CreatePaiement />,
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
