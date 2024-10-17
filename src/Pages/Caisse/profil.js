import React from "react";
import { Link } from "react-router-dom";
import image from "./images/image.jpg";
import { FaEdit } from "react-icons/fa";
const Profil = () => {
  return (
    <div className="profil">
      <div className="img">
        <img src={image} alt="" />
      </div>

      <div className="details">
        <div className="detailsAgent">
          <div className="nomAgent">
            <h4>TABISEELELWA ESUBE Léon</h4>
          </div>
          <div className="email">esubetabiseelelwa@gmail.com</div>
          <div className="tel">+243 822 077 545</div>
          <div className="bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minus
            voluptate inventore. Maiores molestias voluptatum vero dolorum nulla
            perspiciatis tempore enim incidunt officiis minus, labore amet ex,
            nostrum ut voluptatibus?
          </div>
        </div>

        <Link to="">
          <FaEdit /> <span>Modifier le profil</span>
        </Link>
      </div>
    </div>
  );
};

export default Profil;
