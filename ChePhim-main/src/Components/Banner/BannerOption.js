import React from "react";

function BannerOption({ thumbnail, title }) {
  let bannerOptionList = [];

  for (let index = 0; index < 3; index++) {
    bannerOptionList.push(
      <div className="bannerOption">
        <img src={require("../Assets/Uploads/272299265_4586305844824569_2914452249293236918_n.jpg")} alt="" />

        <div className="bannerOption__description">
          <p className="bannerOption__title">House of the dragon House of the dragon House of the dragon</p>

          <div className="bannerOption__trailer">
            <i className="trailerIcon fa-regular fa-circle-play"></i>
            <span>Xem trailer</span>
          </div>
        </div>
      </div>
    );
  }
  return <>{bannerOptionList}</>;
}

export default BannerOption;
