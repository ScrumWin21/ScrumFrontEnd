import React from "react";
import { ShopBannerLeftProductCategories } from "./ShopLeftBannerProductCategories";
import { ShopFilterByBrand } from "./ShopLeftFilterByBrand";
import { ShopLeftFilterByColor } from "./ShopLeftFilterByColor";
import { ShopFilterByPrice } from "./ShopLeftFilterByPrice";
import { ShopFilterBySize } from "./ShopLeftFilterBySize";
import { ShopLeftProductStatus } from "./ShopLeftProductStatus";



export const ShopBannerLeft = () => {
  return (
    <>
      <ShopBannerLeftProductCategories />
      <ShopFilterByPrice />
      <ShopLeftFilterByColor />
      <ShopFilterBySize />
      <ShopFilterByBrand />
      <ShopLeftProductStatus />
    </>
  );
};
