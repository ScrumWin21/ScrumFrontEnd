import React from "react";

export const NavbarOne = () => {
    return (
      <>
        <div class="bg-blue">
            <div class="ContainerRegular flex g-split">
                <div class="group">
                    <span class="currency">ENG<i class="fa-solid fa-angle-down fa-angle-down-white"></i></span>
                    <span class="currency vertical-border">USD<i class="fa-solid fa-angle-down fa-angle-down-white"></i></span>
                </div>
                <div class="group">
                    <a href="#" class="space vertical-border">Newsletter</a>
                    <a href="#" class="space vertical-border">Contact us</a>
                    <a href="#" class="space vertical-border">FAQs</a>
                    <span class="space">[] [] [] [] []</span>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default NavbarOne;