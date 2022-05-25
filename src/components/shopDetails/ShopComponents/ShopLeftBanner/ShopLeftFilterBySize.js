import React from "react";

//Hard code data - To be switched with API

let shopDataSize = [
  {
    size: "XS",
    count: 18,
  },
  {
    size: "S",
    count: 23,
  },
  {
    size: "M",
    count: 32,
  },
  {
    size: "L",
    count: 12,
  },
  {
    size: "XL",
    count: 15,
  },
  {
    size: "XXL",
    count: 12,
  },
];

export const ShopFilterBySize = () => {
  return (
    <>
      <div className="shopBannerLeft-title">Filter by Size</div>
      <div className="shopBannerLeft-container">
        {shopDataSize.map((shopDataSize) => (
          <div className="shopBannerLeft-container-content-hoverAll">
            <div>{shopDataSize.size}</div>
            <div className="shopBannerLeft-numberBox">{shopDataSize.count}</div>
          </div>
        ))}
      </div>
    </>
  );
};
