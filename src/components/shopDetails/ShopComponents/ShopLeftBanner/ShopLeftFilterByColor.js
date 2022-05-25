import React from "react";
import { ColorBox } from "./ShopFilterByColorColorBox";

//Hard code data - To be switched with API

let shopData = [
  {
    color: "#000000",
    text: "Black",
    count: 12,
  },
  {
    color: "#EEEEEE",
    text: "Gray",
    count: 20,
  },
  {
    color: "#FF2D2D",
    text: "Red",
    count: 18,
  },
  {
    color: "#64CB83",
    text: "Green",
    count: 25,
  },
  {
    color: "#FFAA00",
    text: "Orange",
    count: 9,
  },
  {
    color: "#542323",
    text: "Brown",
    count: 7,
  },
];

export const ShopLeftFilterByColor = () => {
  return (
    <>
      <div className="shopBannerLeft-title">Filter by Color</div>
      <div className="shopBannerLeft-container">
        {shopData.map((shopData) => (
          <div className="shopBannerLeft-container-content-color">
            <div className="flex">
              <ColorBox data={{ shopData }} />

              <div>{shopData.text}</div>
            </div>

            <div className="shopBannerLeft-numberBox">{shopData.count}</div>
          </div>
        ))}
      </div>
    </>
  );
};
