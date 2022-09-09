import React from "react";

function FilmListsItems(props) {
  const film1 = {
    title: "Bullet Train",
    img: "../Assets/Uploads/bullet_train.jpg",
  };
  const film2 = {
    title: "Bullet Train",
    img: "../Assets/Uploads/bullet_train.jpg",
  };
  const film3 = {
    title: "Bullet Train",
    img: "../Assets/Uploads/bullet_train.jpg",
  };
  const film4 = {
    title: "Bullet Train",
    img: "../Assets/Uploads/bullet_train.jpg",
  };
  const film5 = {
    title: "Bullet Train",
    img: "../Assets/Uploads/bullet_train.jpg",
  };
  const film6 = {
    title: "Bullet Train",
    img: "../Assets/Uploads/bullet_train.jpg",
  };
  const listFilm = [];
  listFilm.push(film1, film2, film3, film4, film5, film6);

  let listFilmItems = [];
  console.log(listFilm);
  for (let index = 0; index < listFilm.length; index++) {
    listFilmItems.push(
      <div className="filmListsItems__group" key={index}>
        <img src={require("../Assets/Uploads/bullet_train.jpg")} alt={listFilm[index].img} />
        <span className="filmListsItems__title">{listFilm[index].title}</span>
      </div>
    );
  }

  return <>{listFilmItems}</>;
}

export default FilmListsItems;
