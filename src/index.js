import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import "./style/listes.scss";
import "./style/caisse.scss";
import "./style/formulaire.scss";
import "./style/profil.scss";
import "./style/modifProfil.scss";
import "./style/introuvable.scss";
import "./style/modal.scss";
import "./style/cours.scss";
import "./style/rapports.scss";
import "./style/accueil-admin.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
