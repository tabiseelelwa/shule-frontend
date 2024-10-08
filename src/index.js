import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <form>
        <h3>Login</h3>
        <div className="input">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="esubetabiseelelwa@gmail.com" />
        </div>
        <div className="input">
          <label htmlFor="">Mot de passe</label>
          <input type="password" />
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
