import React, { useState } from "react";

export const ColorBox = (props) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        className="shopBannerLeft-colorBox"
        style={{ backgroundColor: props.data.shopColor.color }}
        onClick={handleToggle}
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
