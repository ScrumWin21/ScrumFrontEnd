import React, { useState } from "react";
import sqiggleLine from "../../images/homeImages/sqiggleLine.svg";
import { DisplayNew } from "../shared/smallFeatures/DisplayNew";
import { BackArrow } from "../shared/smallFeatures/BackArrow";
import { ForwardArrow } from "../shared/smallFeatures/ForwardArrow";
import { CarouselCircles } from "../shared/smallFeatures/CarouselCircles";
import { DropDownCardMenu } from "../shared/smallFeatures/DropdownCardMenu";

export const HomeShowcaseFour = () => {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(false);
    console.log("hovering");
  }

  function handleMouseLeave() {
    setIsHovering(true);
    console.log("not hover");
  }

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
              <div
                className="product-card-regular"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <DisplayNew />
                <div
                  className={`displayNone ${isHovering ? "" : "displayBlock"}`}
                >
                  <DropDownCardMenu />
                </div>

                <div
                  className={`showcaseFour-card-bottom ${
                    isHovering ? "" : "display-information"
                  }`}
                >
                  <h4 className="showcaseFour-card-header">
                    Blue silk flare sleeved top
                  </h4>
                  <div className="showcaseFour-card-hover-information-container">
                    <h4 className="showcaseFour-card-description">New look!</h4>
                    <div className="showcaseFour-card-small-box">
                      <div className="showcaseFour-category">Fashion</div>
                    </div>
                    <div className="showcaseFour-card-orginal-price">
                      $299.00
                    </div>
                    <div className="showcaseFour-card-sale-price">$190.00</div>
                  </div>
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
