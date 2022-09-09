import React from "react";
import Banner from "../../Components/Banner/Banner";
import "./HomePage.css";
import FilmListsContainer from "../../Container/FilmListsContainer";
import FilmNewsContainer from "../../Container/FilmNewsContainer";

function HomePage(props) {
  return ( 
    <div className="homepage">
      <Banner />
      <FilmListsContainer />
      <FilmNewsContainer />
    </div>
  );
}

export default HomePage;
