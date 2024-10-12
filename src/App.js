import CreatePaiement from "./Pages/Caisse/CreatePaiement";
import CreateApprenant from "./Pages/Caisse/CreateApprenant";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/creat-paie",
    element: <CreatePaiement />,
  },
  {
    path: "/create-apprenant",
    element: <CreateApprenant />,
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
