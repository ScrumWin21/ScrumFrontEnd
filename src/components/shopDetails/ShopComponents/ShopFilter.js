import React from "react";

// images
import filterIconOne from "../../../images/shopImages/filterIconOne.svg";
import filterIconTwo from "../../../images/shopImages/filterIconTwo.svg";
import filterIconThree from "../../../images/shopImages/filterIconThree.svg";

export const ShopFilter = () => {
  return (
    <>
      <div className="shopPageFilterBackground">
        <div className="ContainerRegular margin-lr-auto flex justify-content-spaceBetween">
          <div className="shopPageFilter-left">
            <h2 className="shopPageFilter-left-shop">Shop</h2>
            <div>
              <span>Home / </span>
              <span className="shopPageFiler-left-shop-little">Shop</span>
            </div>
          </div>
          <div className="shopPageFilter-right">
            <div className="shopPageFilter-filterboxOne">
              <p>Show: 9 /</p>
              <h8>12</h8>
              <p>/ 18 / 24</p>
            </div>
            <div className="shopPageFilter-filterboxTwo">
              <div className="shopPageFilter-filterboxTwo-inside">
                <img src={filterIconOne}></img>
                <img src={filterIconTwo}></img>
                <img src={filterIconThree}></img>
              </div>
            </div>
            <div className="shopPageFilter-filterboxThree">
              <div className="shopPageFilter-filterboxThree-inside">
                <p>Default Sorting</p>
                <i class="fa-regular fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
