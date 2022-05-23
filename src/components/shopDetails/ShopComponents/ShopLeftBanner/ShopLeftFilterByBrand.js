import React from "react";

import Bexim from "../../../../images/shopImages/Bexim.svg";
import Lighton from "../../../../images/shopImages/Lighton.svg";
import Dismis from "../../../../images/shopImages/Dismis.svg";
import Rosimo from "../../../../images/shopImages/Rosimo.svg";
import Dallas from "../../../../images/shopImages/Dallas.svg";
import Concord from "../../../../images/shopImages/Concord.svg";



let logos = [
  {
    logo: Bexim,
  },
  {
    logo: Lighton,
    },
    {
      logo: Dismis,
    },
    {
        logo: Rosimo,
    },
    {
        logo: Dallas
    },
    {
        logo: Concord
    }
];

export const ShopFilterByBrand = () => {
  return (
    <>
          <div className="shopBannerLeft-title">Filter by Brand</div>
          
          

          
      <div className="shopBannerLeft-container">
        <div className="shopBannerLeft-filterByColorGrid">
          {logos.map((logos) => (
            <div
              className="shopBannerLeft-filterByColorGridItem"
            >
              <img src={logos.logo} ></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
