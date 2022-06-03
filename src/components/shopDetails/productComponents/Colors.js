import React, { Component } from "react";

import bigCircle from "../../../images/BigCircle.svg";
import blackCircle from "../../../images/BlackCircle.svg";
import blueCircle from "../../../images/BlueCircle.svg";
import greenCircle from "../../../images/GreenCircle.svg";
import redCircle from "../../../images/RedCircle.svg";

export class Colors extends Component {
    render() {
        const {colors} = this.props;
        return (
            <div className="colors">
                {
                    colors.map((color, index) =>(
                        <button style={{background: color}} key={index}></button>
                    ))
                }
            </div>
        )
    }
}

export default Colors