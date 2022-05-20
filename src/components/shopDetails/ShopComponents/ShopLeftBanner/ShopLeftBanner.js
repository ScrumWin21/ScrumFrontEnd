import React from "react";
import { ShopBannerLeftProductCategories } from "./ShopLeftBannerProductCategories";
import { ShopFilterByPrice } from "./ShopLeftFilterByPrice";


export const ShopBannerLeft = () => {
  return (
    <>
      <ShopBannerLeftProductCategories />
      <ShopFilterByPrice />
    </>
  );
};
