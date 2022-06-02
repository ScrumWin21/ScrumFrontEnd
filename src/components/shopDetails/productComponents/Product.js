import React from "react";

import nikeShoeOne from "../../../images/nikeshoe-one.webp";
import nikeShoeTwo from "../../../images/nikeshoe-two.webp";
import nikeShoeThree from "../../../images/nikeshoe-three.webp";
import nikeShoeFour from "../../../images/nikeshoe-four.webp";
import nikeShoeFive from "../../../images/nikeshoe-five.webp";

export class Product extends React.Component{
    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes",
                "src": [
                    nikeShoeOne,
                    nikeShoeTwo,
                    nikeShoeThree,
                    nikeShoeFour,
                    nikeShoeFive
                ],
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.",
                "price": "190.00",
                "colors": ["green","red","blue","black"],
                "count": 1
            }
        ]
    }

    render(){
        const {products} = this.state;
        return(
            <div className="product">
                {
                    products.map(item =>(
                        <div className="details">

                            <div className="big-img">
                                <img src={item.src[0]} alt="" />
                            </div>

                            <div className="box">

                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>

                                <div className="colors">
                                    {
                                        item.colors.map(color =>(
                                            <button style={{background: color}}></button>
                                        ))
                                    }
                                </div>

                                <p>{item.description}</p>

                                <div className="thumb">
                                    {
                                        item.src.map(img => (
                                            <img src={img} alt="" />
                                        ))
                                    }
                                </div>
                                
                                <button className="cart">Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}