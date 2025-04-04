import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoXCircle } from "react-icons/go";

const DetailsApprenant = ({ setModalDetailsApprenant, matricule }) => {
  const [values, setValues] = useState({
    matricule: "",
    nom: "",
    postnom: "",
    prenom: "",
    sexe: "",
    adresse: "",
    telephone: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/eleve/${matricule}`)
      .then((res) => {
        setValues({
          ...values,
          matricule: res.data[0].matricule,
          nom: res.data[0].nomappr,
          postnom: res.data[0].postnomappr,
          prenom: res.data[0].prenomappr,
          sexe: res.data[0].sexeappr,
          adresse: res.data[0].adresseappr,
          telephone: res.data[0].telephone,
        });
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="modal">
      <div className="modalWrapper">
        <div className="modalBody">
          <div className="ctrl">
            <h6>Informations de l'apprenant</h6>
            <GoXCircle
              onClick={() => setModalDetailsApprenant(false)}
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
            />
          </div>
          <div className="headDescription">
            {values.nom + " " + values.postnom + " " + values.prenom}
          </div>
          <div className="modalDetails">
            <div>
              <p>Matricule</p>
              <span>{values.matricule}</span>
            </div>
            <div>
              <p>Sexe</p>
              <span>{values.sexe}</span>
            </div>
            <div>
              <p>Adresse</p>
              <span>{values.adresse}</span>
            </div>
            <div>
              <p>Téléphone</p>
              <span>{values.telephone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsApprenant;
