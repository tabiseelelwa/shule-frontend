import React from "react";

const CreateApprenant = () => {
  return (
    <div className="formulaire">
      <div className="formHead">
        <p>CREATION ELEVE</p>
      </div>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <select name="">
          <option>Choisir le sexe</option>
          <option value="Masculin">Masculin</option>
          <option value="Féminin">Féminin</option>
        </select>
        <input type="text" />
        <select name="" id="">
          <option>Choisir la section</option>
          <option value="">Scientifique</option>
          <option value="">Commerciale et gestion</option>
          <option value="">Pédagogie générale</option>
        </select>
        <select name="" id="">
          <option>Choisir la classe</option>
          <option value="">1ère A</option>
          <option value="">1ère B</option>
          <option value="">2ème A</option>
          <option value="">2ème B</option>
          <option value="">2ème C</option>
        </select>
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
};

export default CreateApprenant;
