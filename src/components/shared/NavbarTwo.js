import React from "react";
import logo from "../../images/homeImages/Logo.svg";
import userIcon from "../../images/homeImages/UserIcon.svg";
import heartIcon from "../../images/homeImages/HeartIcon.svg";
import arrows from "../../images/homeImages/TwoArrowsIcon.svg";
import bag from "../../images/homeImages/CartBagIcon.svg";

export const NavbarTwo = () => {
    return(
        <>
            <div class="">
                <div class="ContainerRegular flex justify-content-center box">
                    <div>
                        <img src={logo} alt=""></img>
                    </div>
                    <div class="search-group">
                        <div class="search">
                            <input type="text" class="search-input" placeholder="Search products..."></input>
                        </div>
                        <div class="dropdown">
                            <div class="default-option">Categories</div>
                            <div class="dropdown-list">
                                <ul>
                                    <li>Something</li>
                                    <li>Something</li>
                                    <li>Something</li>
                                </ul>
                            </div>
                        </div>
                        <button class="btn" type="submit"><i class="fa-solid fa-angle-down"></i></button>
                    </div>
                    <div>
                        <img src={userIcon}></img><span>My account</span>
                    </div>
                    <div>
                        <img src={heartIcon}></img>
                        <img src={arrows}></img>
                        <img src={bag}></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarTwo;