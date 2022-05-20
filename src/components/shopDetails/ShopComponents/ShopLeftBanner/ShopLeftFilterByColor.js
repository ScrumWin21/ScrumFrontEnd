import React from "react";


let shopColor = [{
    color: "black",
    text: "Black",
    count: 12
},
    {
        color: "gray",
    text: "Gray",
    count: 20
    },
    {
        color: "red",
    text: "Red",
    count: 18
    },
    {
        color: "green",
    text: "Green",
    count: 25
    },
    {
        color: "orange",
    text: "Orange",
    count: 9
    },
    {
        color: "brown",
    text: "Brown",
    count: 7
    },
]

export const ShopLeftFilterByColor = () => {
  return (
    <>
      <div className="shopBannerLeft-title">Filter by Color</div>
          <div className="shopBannerLeft-container">
              {shopColor.map((shopColor) => (
                <div className="shopBannerLeft-container-content-color">
                <div className="flex">
                            <div className="shopBannerLeft-colorBox">
                            <i class="fa-regular fa-check"></i>
                  </div>
                          <div>{shopColor.color }</div>
                </div>
      
                      <div className="shopBannerLeft-numberBox">{ shopColor.count}</div>
              </div>
              ))}
            </div>

                    
        {/* <div className="shopBannerLeft-container-content-color">
          <div className="flex">
                      <div className="shopBannerLeft-colorBox">
                      <i class="fa-regular fa-check"></i>
            </div>
            <div>Black</div>
          </div>

          <div className="shopBannerLeft-numberBox">12</div>
        </div>
      </div> */}
    </>
  );
};
