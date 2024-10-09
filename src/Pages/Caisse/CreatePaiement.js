import React from "react";
import {FaUser} from "react-icons/fa"

const CreatePaiement = () => {
  return (
    <div className="createPaiement">
      <div className="createPaieHead">
        <div className="userData"> <FaUser/> </div>
        <div className="otherData"></div>
        <div className="btnAjout"></div>
      </div>
    </div>
  );
};

export default CreatePaiement;
