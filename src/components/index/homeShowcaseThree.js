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
        <div className="ContainerRegular margin-lr-auto">
          <div id="homeShowcaseThree-grid">
            {/* box One */}
            <div className="home-grid-box-gray">
              <div className="home-grid-box-blue">
                <h3>Men</h3>
              </div>
            </div>
            {/* box Two */}
            <div
              className="home-grid-box-gray"
              id="home-showcaseThree-grid-boxTwo"
            >
              <div className="home-grid-box-blue">
                <h3>Women</h3>
              </div>
            </div>
            {/* box Three */}
            <div
              className="home-grid-box-gray"
              id="home-showcaseThree-grid-boxThree"
            >
              <div className="home-grid-box-blue">
                <h3>Kids</h3>
              </div>
            </div>
            {/* box four */}
            <div
              className="home-grid-box-gray"
              id="home-showcaseThree-grid-boxFour"
            >
              <div className="home-grid-box-blue">
                <h3>Shoes</h3>
              </div>
            </div>
            {/* box five */}
            <div
              className="home-grid-box-gray"
              id="home-showcaseThree-grid-boxFive"
            >
              <div className="home-grid-box-blue">
                <h3>Hats</h3>
              </div>
            </div>
            {/* box six */}
            <div
              className="home-grid-box-gray"
              id="home-showcaseThree-grid-boxSix"
            >
              <div className="home-grid-box-blueTwo">
                <div id="box-blueTwo-large">
                  <h3>Sunglasses</h3>
                  <h4>18 Products</h4>
                </div>
              </div>
            </div>
            {/* box seven */}
            <div className="home-grid-box-gray">
              <div className="home-grid-box-blue">
                <h3>Watches</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
