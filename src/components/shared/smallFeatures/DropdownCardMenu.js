import React, { useState } from "react";

export const DropDownCardMenu = () => {

    // const [isHovering, setIsHovering] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(false);
    console.log("hovering");
  }

  function handleMouseLeave() {
    setIsHovering(true);
    console.log("not hover");
  }
    return <>
        <div className={`menuContainer ${
                    isHovering ? "" : "menuContainerHover"
                  }`}
        onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="menuContainerInside">
                <div className="cardMenuCircle"></div>
                <i class="fa-regular fa-heart"></i>
                </div>
        </div></>;
};
