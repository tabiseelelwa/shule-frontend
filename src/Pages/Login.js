export default function Login() {
  return (
    <div className="Login">
      <form>
        <div className="input">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Ex: esubetabiseelelwa@gmail.com" />
        </div>
        <div className="input">
          <label htmlFor="">Mot de passe</label>
          <input type="password" placeholder="Entrez le mot de passe" />
        </div>
        <button>Connexion</button>
      </form>
    </div>
  );
}
