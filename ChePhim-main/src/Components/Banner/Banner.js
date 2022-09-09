import React from "react";
import "./Banner.css";
import BannerOption from "./BannerOption";
import CarouselOption from "./CarouselOption";
import { Row, Col, Container } from "reactstrap";

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__left">
        <CarouselOption />
      </div>

      <div className="banner__right">
        <BannerOption />
      </div>
    </div>
  );
}

export default Banner;
