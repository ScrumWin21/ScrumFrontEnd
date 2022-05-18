import React from "react";

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
          <div className="shopTopBannerRight">Right</div>
        </div>
      </div>
    </>
  );
};
