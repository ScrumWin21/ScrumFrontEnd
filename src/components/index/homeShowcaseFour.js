import React from "react";
import sqiggleLine from "../../images/homeImages/sqiggleLine.svg";
import { DisplayNew } from "../shared/smallFeatures/DisplayNew";

export const HomeShowcaseFour = () => {
  return (
    <>
      <div id="home-showcase-four" className="ContainerRegular margin-lr-auto">
        <div>
          <span id="new">NEW</span>
          <span id="arrivales">ARRIVALS</span>
          <div className="sqiggleLine-home">
            <img src={sqiggleLine}></img>
            <p>Check out our latest products from top fashion designers</p>
          </div>

          <div id="home-newArrivals-cards-container">
            <div className="product-card-regular">
              <DisplayNew />
            </div>
            <div className="product-card-regular"></div>
            <div className="product-card-regular"></div>
          </div>
        </div>
      </div>
    </>
  );
};
