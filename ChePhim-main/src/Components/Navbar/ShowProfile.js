import React from "react";

function ShowProfile(props) {
  const user = false;
  return (
    <div>
      {!user ? (
        <div className="showProfile__unsignedin">
          <i className=" fa-solid fa-user"></i>
          <span>Đăng nhập</span>
          <span>Đăng ký</span>
        </div>
      ) : (
        <div className="showProfile__signedin">
          <img src={require("../Assets/Uploads/272299265_4586305844824569_2914452249293236918_n.jpg")} alt="profilePicture" />
          <span className="profile__username">Quyen Luu Van</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      )}
    </div>
  );
}

export default ShowProfile;
