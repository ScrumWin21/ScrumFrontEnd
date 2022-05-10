import React from "react";
import sqiggleLine from "../../images/homeImages/sqiggleLine.svg";

export const HomeShowcaseThree = () => {
  return (
    <>
      <div id="home-showcase-three">
        <div>
          <span id="shop-by">SHOP BY</span>
          <span id="category">CATEGORY</span>
          <div id="sqiggleLine-home">
            <img src={sqiggleLine}></img>
          </div>
          <p>
            We always try to give you the best product within a fast and
            reliable way
          </p>
        </div>
        <div id="homeShowcaseThree-grid"></div>
      </div>
    </>
  );
};
