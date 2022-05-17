import React from "react";

export const DropDownCardMenu = () => {
  // const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="menuCardContainer">
        <div className="menuContainerInside">
          <div className="cardMenuCircle"></div>
          <i class="fa-light fa-heart"></i>
          <i class="fa-light fa-shuffle"></i>
          <i class="fa-light fa-magnifying-glass"></i>
          <i class="fa-light fa-cart-shopping"></i>
        </div>
      </div>
    </>
  );
};
