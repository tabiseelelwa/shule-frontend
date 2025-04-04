import React from "react";

const Validation = ({ setModalValidation }) => {
  return (
    <div>
      <div className="modal">
        <div className="modalWrapper">
          <div className="ctrl">
          </div>
          Enregistrement effectué...!
          <button onClick={() => setModalValidation(false)}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default Validation;
