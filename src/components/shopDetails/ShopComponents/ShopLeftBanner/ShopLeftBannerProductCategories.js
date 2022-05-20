import React from "react";


let productCategories = [
  {
    category: "Men's",
    count: "18",
  },
  {
    category: "Women's",
    count: "23",
  },
  {
    category: "Kids",
    count: "32",
  },
  {
    category: "Hats",
    count: "12",
  },
  {
    category: "Sunglasses",
    count: "15",
  },
  {
    category: "Shoes",
    count: "12",
  },
  {
    category: "Watches",
    count: "20",
  },
];

export const ShopBannerLeftProductCategories = () => {
  return (
    <>
      <div className="shopBannerLeft-title">Product Categories</div>
      <div className="shopBannerLeft-container">
        {productCategories.map((productCategories) => (
          <div className="shopBannerLeft-container-content">
            <div>{productCategories.category}</div>
            <div className="shoperBannerLeft-numberBox">
              {productCategories.count}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
