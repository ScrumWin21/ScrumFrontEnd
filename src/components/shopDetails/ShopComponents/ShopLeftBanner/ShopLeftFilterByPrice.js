import React from "react";
import ShopFilterByPriceSlider from "../../../../images/shopImages/shopSliderBar.svg"

export const ShopFilterByPrice = () => {
    return (
        <>
            <div className="shopBannerLeft-title">Filter by Price</div>
            <div className="shopBannerLeft-container">
                <img src={ShopFilterByPriceSlider}></img>
                <div className="shopBannerLeft-container-content">
                    <div>Price: $0 - $10,000</div>
                    <button className="shopFilterButton">Filter</button>
                </div>
            </div>
        </>
    )
}