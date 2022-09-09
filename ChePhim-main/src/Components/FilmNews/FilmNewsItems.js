import React from "react";

function FilmNewsItems({ listNews }) {
  let filmNewsItemsList = [];

  for (let index = 0; index < 2; index++) {
    filmNewsItemsList.push(
      <div className="filmNewsItems__group">
        <img src={require("../Assets/Uploads/bullet_train.jpg")} alt="" />

        <div className="filmNewsItems__info">
          <p className="filmNewsItems__title">Màn chào sân của chúa tể cõi mộng</p>
          <p className="filmNewsItems__date">21/08/2022</p>
          <p className="filmNewsItems__content">
            Mùa một "The Sandman" tạo ấn tượng tốt nhờ sự trung thành nguyên tác và diễn xuất của dàn diễn viên thực lực. Song series vẫn còn nhiều điểm trừ
            không đáng có.
          </p>
        </div>
      </div>
    );
  }
  return <>{filmNewsItemsList}</>;
}

export default FilmNewsItems;
