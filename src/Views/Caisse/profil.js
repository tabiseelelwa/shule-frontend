import React from "react";

import image from "./images/image.jpg";
import { Outlet } from "react-router-dom";

const Profil = () => {
  return (
    <div className="profil">
      <div className="img">
        <img src={image} alt="" />
      </div>

      <div className="details">
        <Outlet/>
      </div>
    </div>
  );
};

export default Profil;
