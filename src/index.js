import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import CreatePaiement from "./Pages/Caisse/CreatePaiement";
import CreateApprenant from "./Pages/Caisse/CreateApprenant";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import "./style/paiement.scss";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
