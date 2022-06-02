import React from "react";

import nikeShoeOne from "../../../images/nikeshoe-one.webp";
import nikeShoeTwo from "../../../images/nikeshoe-two.webp";
import nikeShoeThree from "../../../images/nikeshoe-three.webp";
import nikeShoeFour from "../../../images/nikeshoe-four.webp";
import nikeShoeFive from "../../../images/nikeshoe-five.webp";

import Colors from "./Colors";

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

                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>

                                <Colors colors={item.colors} />

                                <p>{item.description}</p>

                                <div className="thumb" ref={this.myRef}>
                                    {
                                        item.src.map((img, index ) => (
                                            <img src={img} alt="" key={index} onClick={() => this.handleTab(index)} />
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