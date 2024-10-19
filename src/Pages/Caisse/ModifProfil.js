import React from "react";

const ModifProfil = () => {
  return (
    <div>
      <div className="modifProfil">
        <form action="">
          <input
            type="text"
            className="nom"
            value={"TABISEELELWA ESUBE Léon"}
          />
          <input type="text" value={"esubetabiseelelwa@gmail.com"} />
          <input type="text" value={"+243 822 077 545"} />
          <textarea
            name=""
            id=""
            rows={4}
            value={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minus voluptate inventore. Maiores molestias voluptatum vero dolorum nulla perspiciatis tempore enim incidunt officiis minus, labore amet ex, nostrum ut voluptatibus?"
            }
          ></textarea>
          <button>Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default ModifProfil;
