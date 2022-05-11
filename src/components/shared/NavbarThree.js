import React from "react";
// import "./navbarThree.scss";

export const NavbarThree = () => {
  return (
    <>
      <div className="bg">
        <div className="navbarThree ContainerRegular">
            <button id="btn-browseCategories">
              <i class="fa-solid fa-bars"></i>Browse Categories
              <i class="fa-solid fa-angle-down fa-angle-down-white"></i>
            </button>
            <span>
              Home<i class="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Shop<i class="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Products<i class="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Categories<i class="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Pages<i class="fa-solid fa-angle-down"></i>
            </span>
            <span>
              Blog<i class="fa-solid fa-angle-down"></i>
            </span>
            <button id="btn-specialOffer">SPECIAL OFFER</button>
          </div>
      </div>
    </>
  );
};

export default NavbarThree;
