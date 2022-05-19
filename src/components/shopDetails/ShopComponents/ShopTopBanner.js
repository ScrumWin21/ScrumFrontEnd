import React from "react";

// pictures
// import line from "../../images/homeImages/sqiggleLine.svg"
import frontShoe from "../../../images/shopImages/FrontSideShoe.svg";
import sideShoe from "../../../images/shopImages/SideShoe.svg";
import { DisplayNew } from "../../shared/smallFeatures/DisplayNew";

export const ShopTopBanner = () => {
  return (
    <>
      <div className="ContainerWide shopTopBannerContainer">
        <div className="ContainerRegular flex margin-lr-auto shopTopBanner">
          <div className="shopTopBannerLeft">
            <h4>New Customer</h4>
            <div className="shopTopBannerLeftText">
              <h2>Can Get</h2>
              <h3>30% Off</h3>
            </div>
            <button className="shopTopBannerButton">LEARN MORE</button>
          </div>
                  <div className="shopTopBannerRight">
                    <img src={sideShoe} className="topShopBannerRight-shoeOne"></img>
                      <img src={frontShoe} className="topShopBannerRight-shoeTwo"></img>
                      <div className="shopTopBannerRight-newDisplay">NEW</div>
                      <div className="shopTopBannerRight-Sale">-20%</div>
          </div>
        </div>
      </div>
    </>
  );
};
