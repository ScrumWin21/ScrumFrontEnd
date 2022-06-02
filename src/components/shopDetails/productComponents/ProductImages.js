import React from "react";

import nikeShoeOne from "../../../images/nikeshoe-one.webp";
import nikeShoeTwo from "../../../images/nikeshoe-two.webp";
import nikeShoeThree from "../../../images/nikeshoe-three.webp";
import nikeShoeFour from "../../../images/nikeshoe-four.webp";
import nikeShoeFive from "../../../images/nikeshoe-five.webp";

export const ProductImages = () => {
    const {products} = this.state;
    return (
        <>
            <div>
                {
                    products.map(item =>(
                        <div className="details">
                            <div className="big-img">
                                <img src={item.src[0]} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};