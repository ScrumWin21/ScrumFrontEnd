import React from "react";

import clock from "../../images/homeImages/TwentyFourClockIcon.svg";
import boxIcon from "../../images/homeImages/BoxIcon.svg";
import timerIcon from "../../images/homeImages/TimerIcon.svg";
import paymentIcon from "../../images/homeImages/PaymentIcon.svg";

export const HomeShowcaseTwo = () => {
  return (
    <>
      <div className="ContainerWide flex home-showcaseTwo-container">
        <div className="home-showcaseTwo-card">
          <div className="showcaseTwo-card-icon">
            <img src={boxIcon}></img>
          </div>
          <div className="showcaseTwo-card-text">
            <h4>Free Shipping</h4>
            <p>For a local customer, we provide free shipping facility</p>
          </div>
        </div>
        <div className="home-showcaseTwo-card">
          <div className="showcaseTwo-card-icon">
            <img src={clock}></img>
          </div>
          <div className="showcaseTwo-card-text">
            <h4>24/7 support</h4>
            <p>For any inquiry, we are available 24 hours every day</p>
          </div>
        </div>
        <div className="home-showcaseTwo-card">
          <div className="showcaseTwo-card-icon">
            <img src={paymentIcon}></img>
          </div>
          <div className="showcaseTwo-card-text">
            <h4>Online payment</h4>
            <p>You can pay quickly and easily with our online payment system</p>
          </div>
        </div>
        <div className="home-showcaseTwo-card">
          <div className="showcaseTwo-card-icon">
            <img src={timerIcon}></img>
          </div>
          <div className="showcaseTwo-card-text">
            <h4>Fast delivery</h4>
            <p>We understand your urgency and we deliver in a fast way</p>
          </div>
        </div>
      </div>
    </>
  );
};
