import React from "react";

import nikeShoeOne from "../../../images/nikeshoe-one.webp";
import nikeShoeThree from "../../../images/nikeshoe-three.webp";
import nikeShoeFour from "../../../images/nikeshoe-four.webp";
import nikeShoeFive from "../../../images/nikeshoe-five.webp";
import inStock from "../../../images/InStock.svg";
import cartIcon from "../../../images/CartIcon.svg";

import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";

export class Product extends React.Component{
    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Go FlyEase",
                "src": [
                    nikeShoeOne,
                    nikeShoeThree,
                    nikeShoeFour,
                    nikeShoeFive
                ],
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.",
                "price": "190.00",
                "colors": ["green","red","blue","black"]
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({index: index})
        const images = this.myRef.current.children;
        for(let i=0; i < images.length; i++){
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
    }

    render(){
        const {products, index} = this.state;
        return(
            <div className="product">
                {
                    products.map(item =>(
                        <div className="details" key={item._id}>

                            <div className="big-img">
                                <img src={item.src[index]} alt="" />
                                
                            </div>

                            <div className="box">

                                <div className="box-content">
                                    <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                                </div>

                                <div className="box-content">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>

                                    <div className="row">
                                        <span className="price">${item.price}</span>
                                        <div className="stock">
                                            <img src={inStock} alt="" />
                                            <span>In stock</span>
                                        </div>
                                    </div>
                                        
                                    <div className="cart-details">
                                        <button className="cart">
                                            <img src={cartIcon} alt="" />
                                            Add to cart
                                        </button>
                                        <Colors colors={item.colors} />
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}