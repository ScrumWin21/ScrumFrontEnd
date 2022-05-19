import React from "react";
import { ShopFilter } from "../components/shopDetails/ShopComponents/ShopFilter";
import { ShopTopBanner } from "../components/shopDetails/ShopComponents/ShopTopBanner";

export const ShopPage = () => {
  return (
    <>
          <ShopTopBanner />
          <ShopFilter />
    </>
  );
};
