import React from "react";
import LinkedIn from "/assets/linkedin.png";
import Twitter from "/assets/twitter.png";
import Facebook from "/assets/facebook.png";
import GitHub from "/assets/github.png";



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--items">
            <a href="https://www.linkedin.com/in/christopher-conover-53440074/" target="_blank">
            <img src={LinkedIn} alt="Linked in" width="25px" height="25px" className="logo"/>
            </a>
            <a href="https://twitter.com/lullabynoir" target="_blank">
            <img src={Twitter} alt="Twitter" width="25px" height="25px" className="logo"/>
            </a>
            <a href="https://www.facebook.com/lullabynoir" target="_blank">
            <img src={Facebook} alt="Face book" width="25px" height="25px" className="logo"/>
            </a>
            <a href="https://github.com/chrisconover83" target="_blank">
            <img src={GitHub} alt="Git Hub" width="25px" height="25px" className="logo"/>
            </a>
            </div>
        </div>
    );
}

export default Footer