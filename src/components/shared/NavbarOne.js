import React from "react";

export const NavbarOne = () => {
    return (
      <>
        <div className="bg-blue">
            <div className="ContainerRegular flex g-split">
                <div className="group">
                    <span className="currency">ENG<i className="fa-solid fa-angle-down fa-angle-down-white"></i></span>
                    <span className="currency vertical-border">USD<i className="fa-solid fa-angle-down fa-angle-down-white"></i></span>
                </div>
                <div className="group">
                    <a href="#" className="space vertical-border">Newsletter</a>
                    <a href="#" className="space vertical-border">Contact us</a>
                    <a href="#" className="space vertical-border">FAQs</a>
                    <span className="space">[] [] [] [] []</span>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default NavbarOne;