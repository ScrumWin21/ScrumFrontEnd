import React from "react";
// import "./navbarThree.scss";

export const NavbarThree = () => {
  return (
    <>
      <div className="bgNavThree">
        <div className="navbarThree ContainerRegular">
            <button id="btn-browseCategories">
              <i className="fa-solid fa-bars"></i>Browse Categories
              <i className="fa-solid fa-angle-down fa-angle-down-white"></i>
            </button>
            <span>
              Home<i className="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Shop<i className="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Products<i className="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Categories<i className="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Pages<i className="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Blog<i className="fa-solid fa-angle-down"></i>
            </span>
            <button id="btn-specialOffer">SPECIAL OFFER</button>
          </div>
      </div>
    </>
  );
};

export default NavbarThree;
