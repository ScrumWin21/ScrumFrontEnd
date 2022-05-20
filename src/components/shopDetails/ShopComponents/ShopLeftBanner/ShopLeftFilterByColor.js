import React from "react";

let shopColor = [
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
        {shopColor.map((shopColor) => (
          <div className="shopBannerLeft-container-content-color">
            <div className="flex">
              <div
                className="shopBannerLeft-colorBox"
                style={{ backgroundColor: shopColor.color }}
              >
                <i class="fa-regular fa-check"></i>
              </div>
              <div>{shopColor.text}</div>
            </div>

            <div className="shopBannerLeft-numberBox">{shopColor.count}</div>
          </div>
        ))}
      </div>
    </>
  );
};
