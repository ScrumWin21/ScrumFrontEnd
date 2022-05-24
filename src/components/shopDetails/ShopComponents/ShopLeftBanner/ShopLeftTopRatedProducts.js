import React from "react";

import FiveStars from "../../../../images/shopImages/FiveStars.svg";
import ProductShopTShirt from "../../../../images/shopImages/ProductShopTShirt.svg";
import ProductShopShoes from "../../../../images/shopImages/ProductShopShoes.svg";
import ProductShopSweater from "../../../../images/shopImages/ProductShopSweater.svg";

export const ShopLeftTopRatedProducts = () => {
  return (
    <>
      <div className="shopBannerLeft-title">Top Rated Products</div>
      <div className="shopBannerLeft-container">
        <div className="shopLeft-topRatedProducts-grid">
          <div className="shopLeft-topRatedProducts-gridItem">
            <div className="flex">
              <div className="shopLeft-topRatedProducts-grid-productPicture">
                <img src={ProductShopTShirt}></img>
              </div>
              <div>
                <div className="topRatedProducts-header">
                  Circle pattern girls...
                </div>
                <div className="topRatedProducts-stars">
                  <img src={FiveStars}></img>
                </div>
                <div className="topRatedProducts-price">$190</div>
              </div>
            </div>
                  </div>
                  <div className="shopLeft-topRatedProducts-gridItem">
            <div className="flex">
              <div className="shopLeft-topRatedProducts-grid-productPicture">
                <img src={ProductShopShoes}></img>
              </div>
              <div>
                <div className="topRatedProducts-header">
                  Circle pattern girls...
                </div>
                <div className="topRatedProducts-stars">
                  <img src={FiveStars}></img>
                </div>
                <div className="topRatedProducts-price">$190</div>
              </div>
            </div>
                  </div>
                  <div className="shopLeft-topRatedProducts-gridItem">
            <div className="flex">
              <div className="shopLeft-topRatedProducts-grid-productPicture">
                <img src={ProductShopSweater}></img>
              </div>
              <div>
                <div className="topRatedProducts-header">
                  Circle pattern girls...
                </div>
                <div className="topRatedProducts-stars">
                  <img src={FiveStars}></img>
                </div>
                <div className="topRatedProducts-price">$190</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
