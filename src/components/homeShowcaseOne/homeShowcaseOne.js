import React from "react";
import picture from "../../images/homeImages/TwoPersons.svg";

export const HomeShowcaseOne = () => {
  return (
    <>
      <div id="home-showcase-one">
        <div className="ContainerRegular flex">
          <div id="home-showcaseOne-left">
            <div>
              <h3>Shopping is</h3>
              <h2>MORE FUN</h2>
              <p>
                Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam
                ultricies faucibus. Quisque quis erat sed
              </p>
              <button id="home-showcaseOne-button">SHOP NOW</button>
            </div>
          </div>
          <div id="home-showcaseTwo-right">
            <img src={picture}></img>
          </div>
        </div>
      </div>
    </>
  );
};
