import React from "react";
import sqiggleLine from "../../images/homeImages/sqiggleLine.svg";
import { DisplayNew } from "../shared/smallFeatures/DisplayNew";
import { BackArrow } from "../shared/smallFeatures/BackArrow";
import { ForwardArrow } from "../shared/smallFeatures/ForwardArrow";
import { CarouselCircles } from "../shared/smallFeatures/CarouselCircles";

export const HomeShowcaseFour = () => {
  return (
    <>
      <div id="home-showcase-four">
        <div>
          <span id="new">NEW</span>
          <span id="arrivales">ARRIVALS</span>
          <div className="sqiggleLine-home">
            <img src={sqiggleLine}></img>
            <p>Check out our latest products from top fashion designers</p>
          </div>

          <div className="newArrivals-cards">
            <BackArrow />
            <div
              id="home-newArrivals-cards-container"
              className="ContainerRegular margin-lr-auto"
            >
              <div className="product-card-regular">
                <DisplayNew />
                <div id="showcaseFour-card-bottom">
                  <p>Blue silk flare sleeved top</p>
                </div>
              </div>
              <div className="product-card-regular"></div>
              <div className="product-card-regular">
                <DisplayNew />
              </div>
            </div>
            <ForwardArrow />
          </div>
        </div>
      </div>
      <div className="ContainerRegular flex carousel-counter margin-lr-auto">
        <CarouselCircles />
        <CarouselCircles />
        <CarouselCircles />
      </div>
    </>
  );
};
