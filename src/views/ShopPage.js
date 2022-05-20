import React from "react";
import { ShopFilter } from "../components/shopDetails/ShopComponents/ShopFilter";
import { ShopBannerLeft } from "../components/shopDetails/ShopComponents/ShopLeftBanner/ShopLeftBanner";
import { ShopTopBanner } from "../components/shopDetails/ShopComponents/ShopTopBanner";

export const ShopPage = () => {
  return (
    <>
          <ShopTopBanner />
          <ShopFilter />
          <div className="ContainerRegular margin-lr-auto shopPage-sectionThree-container">
          <ShopBannerLeft />

          </div>
    </>
  );
};
