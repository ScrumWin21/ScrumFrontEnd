import React from "react";

import Bexim from "../../../../images/shopImages/Bexim.svg"

let testGrid = ["One", "Two", "Three", "four", "five"];

export const ShopFilterByBrand = () => {
  return (
    <>
      <div className="shopBannerLeft-title">Filter by Brand</div>
      <div className="shopBannerLeft-container">
        <div className="shopBannerLeft-filterByColorGrid">
          {testGrid.map((testGrid) => (
            <div className="shopBannerLeft-filterByColorGridItem">
              {testGrid}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
