import React from "react";
import FilmListsItems from "./FilmListsItems";
import "./FilmLists.css";

function FilmLists({ title, listFilms }) {
  let filmLists = [];

  for (let index = 0; index < 4; index++) {
    filmLists.push(
      <div key={index} className="filmLists__group">
        <div className="filmListsTitle__group">
          <span className="filmLists__title">Đề xuất</span>
          <i className="fa-sharp fa-solid fa-chevron-right"></i>
        </div>

        <div className="filmLists">
          <FilmListsItems listFilms={listFilms} />
        </div>
      </div>
    );
  }
  return <div className="filmListPage">{filmLists}</div>;
}

export default FilmLists;
