import React, { useState } from "react";

export const ColorBox = (props) => {
  const [isActive, setActive] = useState("false");

  //Display and remove checkbox on click
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        className="shopBannerLeft-colorBox"
        style={{ backgroundColor: props.data.shopData.color }}
        onClick={handleToggle}
        data-testid="DisplayColor"
      >
        <i
          className={
            !isActive ? "fa-regular fa-check" : "fa-regular fa-checked"
          }
        ></i>
      </div>
    </>
  );
};
