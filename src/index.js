import React from "react";
import ReactDOM from "react-dom/client";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <form>
        <div className="input">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Ex: esubetabiseelelwa@gmail.com" />
        </div>
        <div className="input">
          <label htmlFor="">Mot de passe</label>
          <input type="password" placeholder="Entrez le mot de passe"/>
        </div>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
